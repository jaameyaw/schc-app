/** Shared primary/teal accent tokens to dedupe per-card color maps. */

export type AccentColor = "primary" | "teal";

/** Text color utility per accent. */
export const accentText: Record<AccentColor, string> = {
  primary: "text-primary",
  teal: "text-teal",
};

/** Solid background utility per accent. */
export const accentBg: Record<AccentColor, string> = {
  primary: "bg-primary",
  teal: "bg-teal",
};
