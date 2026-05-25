/** Volunteer page type tokens */

const sectionFont = "font-section";

export {
  sectionEyebrow as volunteerEyebrow,
  sectionEyebrowHero as volunteerEyebrowHero,
} from "@/lib/sectionEyebrow";

export const volunteerH1 = `${sectionFont} text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-white sm:text-5xl lg:text-[3.25rem]`;

export const volunteerHeroLead =
  "mx-auto max-w-[65ch] text-lg leading-relaxed text-pretty text-white/85 sm:text-[1.12rem]";

export const volunteerH2 = `${sectionFont} text-[1.85rem] font-semibold leading-[1.08] tracking-tight text-balance text-dark-text sm:text-4xl lg:text-[2.35rem]`;

export const volunteerSectionLead =
  "max-w-[65ch] text-base leading-[1.65] text-pretty text-gray-600 sm:text-[1.02rem]";

export const volunteerH3 = `${sectionFont} text-[1.05rem] font-semibold leading-tight tracking-tight text-dark-text sm:text-lg`;

export const volunteerCardLabel =
  "font-medium leading-snug text-pretty text-dark-text text-sm sm:text-[0.95rem]";
