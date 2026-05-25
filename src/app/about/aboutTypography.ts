/** About page type + surface tokens */

const sectionFont = "font-section";

export {
  sectionEyebrow as aboutEyebrow,
  sectionEyebrowHero as aboutEyebrowHero,
} from "@/lib/sectionEyebrow";

export const aboutH1 = `${sectionFont} text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-white sm:text-5xl lg:text-[3.25rem]`;

export const aboutHeroLead =
  "mx-auto mt-5 max-w-[65ch] text-lg leading-relaxed text-pretty text-white/85 sm:text-[1.12rem]";

export const aboutH2 = `${sectionFont} text-[1.85rem] font-semibold leading-[1.08] tracking-tight text-balance text-dark-text sm:text-4xl lg:text-[2.35rem]`;

export const aboutH2Centered = `${aboutH2} mx-auto max-w-[28ch]`;

export const aboutSectionLead =
  "mx-auto mt-4 max-w-[65ch] text-base leading-relaxed text-pretty text-gray-600 sm:text-[1.02rem]";

export const aboutSectionLeadLeft =
  "mt-4 max-w-[65ch] text-base leading-relaxed text-pretty text-gray-600 sm:text-[1.02rem]";

export const aboutH3 = `${sectionFont} text-[1.15rem] font-semibold leading-tight tracking-tight text-dark-text sm:text-xl`;

export const aboutH3Section = `${sectionFont} text-2xl font-semibold leading-[1.1] tracking-tight text-balance text-dark-text sm:text-[1.65rem]`;

export const aboutBody =
  "text-base leading-[1.65] text-pretty text-gray-600 sm:text-[1.02rem]";

export const aboutBodyStack = `space-y-4 ${aboutBody} max-w-[65ch]`;

export const aboutCardBody =
  "text-[0.95rem] leading-relaxed text-pretty text-gray-600 sm:text-base";

export const aboutQuote = `${sectionFont} text-xl font-medium leading-[1.45] tracking-tight text-pretty text-dark-text sm:text-2xl sm:leading-[1.4]`;

export const aboutQuoteMark =
  "font-section text-5xl leading-none text-primary/25 select-none sm:text-6xl";

export const aboutFeatureLabel =
  "text-sm font-medium leading-snug text-dark-text sm:text-[0.95rem]";

/** Diffusion shadow + hairline border (Bento-style surfaces) */
export const aboutSurfaceCard =
  "rounded-[1.35rem] border border-gray-200/60 bg-white shadow-[0_20px_40px_-15px_rgba(31,45,47,0.06)]";

export const aboutSurfaceElevated =
  "rounded-[1.35rem] border border-gray-200/50 bg-white shadow-[0_1px_2px_rgba(31,45,47,0.04),0_16px_48px_-20px_rgba(31,168,74,0.14)]";

export const aboutFeaturePill =
  "flex items-center gap-2.5 rounded-xl border border-gray-200/70 bg-white px-3.5 py-3 shadow-[0_8px_24px_-16px_rgba(31,45,47,0.12)] transition-all duration-300 hover:border-primary/25 hover:shadow-[0_12px_28px_-14px_rgba(31,168,74,0.18)]";

export const aboutIconWrap =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/[0.08] ring-1 ring-primary/10";

export const aboutImageFrame =
  "relative overflow-hidden rounded-2xl ring-1 ring-black/[0.06] shadow-[0_12px_40px_-18px_rgba(31,45,47,0.22)]";

export const aboutSectionPad = "py-20 sm:py-24 lg:py-28";
