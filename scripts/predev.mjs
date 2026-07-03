// Runs before `next dev`. Prevents the two recurring dev-server foot-guns:
//   1. A stale/broken `next dev` already holding port 3000 (e.g. a terminal
//      session VS Code restored on restart). We free the port so the new
//      server always owns :3000 instead of silently falling back to :3001.
//   2. RESEND_API_KEY not loaded -> the contact/newsletter routes return 501
//      and the forms show the "email us instead" fallback. We load the same
//      .env files Next uses and warn loudly in the terminal if the key is gone.
import { execSync } from "node:child_process";
import { loadEnvConfig } from "@next/env";

const PORT = 3000;

function freePort(port) {
  try {
    if (process.platform === "win32") {
      const out = execSync(`netstat -ano -p tcp`, { encoding: "utf8" });
      const pids = new Set();
      for (const line of out.split("\n")) {
        if (line.includes(`:${port}`) && line.includes("LISTENING")) {
          const pid = line.trim().split(/\s+/).pop();
          if (pid && pid !== "0") pids.add(pid);
        }
      }
      for (const pid of pids) {
        try {
          execSync(`taskkill /PID ${pid} /T /F`, { stdio: "ignore" });
          console.log(`[predev] freed port ${port} (killed pid ${pid})`);
        } catch {}
      }
    } else {
      const pids = execSync(`lsof -ti tcp:${port} || true`, { encoding: "utf8" })
        .split("\n")
        .filter(Boolean);
      for (const pid of pids) {
        try {
          execSync(`kill -9 ${pid}`);
          console.log(`[predev] freed port ${port} (killed pid ${pid})`);
        } catch {}
      }
    }
  } catch {
    // Best effort — if we can't inspect ports, just let `next dev` proceed.
  }
}

function checkEnv() {
  // Load .env / .env.local exactly like Next does, then confirm the key exists.
  loadEnvConfig(process.cwd(), true);
  if (!process.env.RESEND_API_KEY) {
    console.warn(
      "\n[predev] ⚠  RESEND_API_KEY is NOT set. Contact + newsletter forms will\n" +
        "         return 501 and show the 'email us instead' fallback.\n" +
        "         Add it to schc-app/.env, then this warning will clear.\n",
    );
  } else {
    console.log("[predev] ✓ RESEND_API_KEY loaded — contact/newsletter live.");
  }
}

freePort(PORT);
checkEnv();
