/** About page type + surface tokens */

import { sectionH2, sectionLead } from "@/lib/typography";

export {
  sectionEyebrow as aboutEyebrow,
  sectionEyebrowHero as aboutEyebrowHero,
} from "@/lib/sectionEyebrow";

export {
  pageH1 as aboutH1,
  pageHeroLead as aboutHeroLead,
  sectionH2 as aboutH2,
  bodyText as aboutBody,
  sectionH3 as aboutH3,
  sectionH3Block as aboutH3Section,
  pullQuote as aboutQuote,
} from "@/lib/typography";

export const aboutH2Centered = `${sectionH2} mx-auto max-w-[28ch]`;

export const aboutSectionLead = `${sectionLead} mx-auto mt-4 max-w-[65ch] text-gray-600`;

export const aboutSectionLeadLeft = "mt-4 max-w-[65ch] text-sm leading-relaxed text-pretty text-gray-600 sm:text-[0.9375rem]";

export const aboutBodyStack = "space-y-4 text-sm leading-[1.65] text-pretty text-gray-600 sm:text-[0.9375rem] max-w-[65ch]";

export const aboutCardBody =
  "text-sm leading-relaxed text-pretty text-gray-600 sm:text-[0.9375rem]";

export const aboutQuoteMark =
  "font-section text-3xl leading-none text-primary/25 select-none sm:text-4xl";

export const aboutFeatureLabel =
  "text-sm font-medium leading-snug text-dark-text sm:text-[0.9375rem]";

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
