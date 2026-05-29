import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import { existsSync } from "fs";

const BASE_URL = "http://localhost:3001";

const pages = [
  { name: "01-home", path: "/", fullPage: true },
  { name: "02-about", path: "/about", fullPage: true },
  { name: "03-programs", path: "/programs", fullPage: true },
  { name: "04-volunteer", path: "/volunteer", fullPage: true },
  { name: "05-donate", path: "/donate", fullPage: true },
  { name: "06-gallery", path: "/gallery", fullPage: true },
  { name: "07-contact", path: "/contact", fullPage: true },
  // Viewport (above-fold) shots
  { name: "01-home-viewport", path: "/", fullPage: false },
  { name: "02-about-viewport", path: "/about", fullPage: false },
];

const VIEWPORT = { width: 1440, height: 900 };
const OUT_DIR = "./screenshots";

/** Scroll slowly so IntersectionObserver fires for every section, then wait
 *  long enough for the 2 s count-up + all Framer Motion entrance delays.
 *  Finally, force any element still at opacity:0 to visible so nothing is
 *  invisible in the screenshot. */
async function revealAll(page) {
  // 1. Slow scroll — 120 px every 100 ms triggers IntersectionObserver reliably
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      const total = document.body.scrollHeight;
      let pos = 0;
      const id = setInterval(() => {
        pos += 120;
        window.scrollTo(0, pos);
        if (pos >= total) {
          clearInterval(id);
          resolve();
        }
      }, 100);
    });
  });

  // 2. Wait for the longest animation (2 s count-up + 0.5 s delay + buffer)
  await new Promise((r) => setTimeout(r, 3500));

  // 3. Force any element still hidden by a pending Framer animation to visible
  await page.evaluate(() => {
    document.querySelectorAll("*").forEach((el) => {
      const s = window.getComputedStyle(el);
      if (s.opacity === "0" || s.visibility === "hidden") {
        el.style.setProperty("opacity", "1", "important");
        el.style.setProperty("transform", "none", "important");
        el.style.setProperty("visibility", "visible", "important");
      }
    });
  });

  // 4. Short settle after forced reveal
  await new Promise((r) => setTimeout(r, 400));

  // 5. Instant-jump to top (bypass smooth-scroll CSS) for the viewport shot
  await page.evaluate(() =>
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  );
  await new Promise((r) => setTimeout(r, 400));
}

async function run() {
  if (!existsSync(OUT_DIR)) await mkdir(OUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport(VIEWPORT);

  for (const { name, path, fullPage } of pages) {
    const url = `${BASE_URL}${path}`;
    console.log(`📸 Capturing ${name} → ${url}`);

    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
    await revealAll(page);

    const file = `${OUT_DIR}/${name}.png`;
    await page.screenshot({ path: file, fullPage });
    console.log(`   ✅ Saved: ${file}`);
  }

  // Mobile screenshot for home
  console.log("\n📱 Mobile viewport (375px)…");
  await page.setViewport({ width: 375, height: 812 });
  await page.goto(`${BASE_URL}/`, { waitUntil: "networkidle0" });
  await revealAll(page);
  await page.screenshot({ path: `${OUT_DIR}/mobile-home.png`, fullPage: true });
  console.log("   ✅ Saved: screenshots/mobile-home.png");

  await browser.close();
  console.log("\n🎉 All screenshots saved to ./screenshots/");
}

run().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
