/** Site-wide type scale — aligned with homepage hero + navbar */

const sectionFont = "font-section";

/** Page / hero H1 */
export const pageH1 = `${sectionFont} text-[1.75rem] font-bold leading-[1.12] tracking-tight text-balance sm:text-[2rem] lg:text-[1.75rem] xl:text-[2rem] min-[1440px]:text-[2.35rem] min-[1440px]:leading-[1.1] 2xl:text-[2.5rem]`;

/** Hero / banner lead copy */
export const pageHeroLead =
  "text-sm font-normal leading-relaxed text-pretty sm:text-[0.9rem] xl:text-base min-[1440px]:text-[0.9375rem] min-[1440px]:leading-[1.7]";

/** Section H2 */
export const sectionH2 = `${sectionFont} text-[1.5rem] font-semibold leading-[1.12] tracking-tight text-balance sm:text-[1.65rem] lg:text-[1.75rem] xl:text-[1.85rem] min-[1440px]:text-[2rem]`;

/** Section subtitle / intro */
export const sectionLead =
  "text-sm leading-relaxed text-pretty sm:text-[0.9rem] xl:text-[0.9375rem] min-[1440px]:leading-[1.7]";

/** Card / block H3 */
export const sectionH3 = `${sectionFont} text-base font-semibold leading-tight tracking-tight sm:text-[1.05rem]`;

/** Subsection H3 (e.g. leadership block) */
export const sectionH3Block = `${sectionFont} text-lg font-semibold leading-[1.1] tracking-tight text-balance sm:text-[1.35rem]`;

/** Body copy */
export const bodyText =
  "text-sm leading-[1.65] text-pretty sm:text-[0.9375rem]";

/** Muted / secondary body */
export const bodyMuted = `${bodyText} text-gray-600`;

/** Pull quote / testimonial */
export const pullQuote = `${sectionFont} text-base font-medium leading-[1.55] tracking-tight text-pretty sm:text-lg lg:text-xl xl:text-[1.35rem] 2xl:text-[1.45rem]`;

/** Stat / display number */
export const statNumber =
  "text-[1.5rem] font-semibold leading-none tracking-tight tabular-nums sm:text-[1.75rem]";
