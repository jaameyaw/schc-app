/** Central source of truth for contact + social details used across the site. */

export const siteConfig = {
  email: "childhealthcorner@gmail.com",
  phone: {
    /** Human-readable, spaced format. */
    display: "+233 54 712 4909",
    /** `tel:` href format (no spaces). */
    tel: "+233547124909",
    /** Hyphenated international format (used in JSON-LD). */
    intl: "+233-54-712-4909",
  },
  location: {
    city: "Kumasi",
    country: "Ghana",
    /** Short label, e.g. footer / contact card. */
    full: "Kumasi, Ghana",
    /** Detailed label, e.g. donation drop-off. */
    detail: "KNUST, Kumasi, Ghana",
  },
  social: {
    instagram:
      "https://www.instagram.com/chc_kidshealth?igsh=MW1hZDVpeDZmbmJheg==",
    youtube: "https://youtube.com/@childhealthcorner?si=VgWVhuEE0T4ojxzK",
    tiktok: "https://www.tiktok.com/@chc_kidshealth?_r=1&_t=ZS-96Dp9xARa1R",
    linkedin: "https://www.linkedin.com/company/child-health-corner/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
