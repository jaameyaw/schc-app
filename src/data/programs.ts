/** Single source of truth for program data shared by the Programs page and the
 *  home-page ProgramsPreview. Each program carries full detail fields plus a
 *  `preview` block holding the (different) image/description/styling the home
 *  preview renders, so both views keep their current output exactly. */

export type ProgramColor = "primary" | "teal";

export interface ProgramPreview {
  /** Home preview uses a different photo than the detail page. */
  image: string;
  /** Home preview uses a shorter description. */
  description: string;
  /** Category badge classes on the home preview card. */
  categoryColor: string;
  /** Animated accent-bar class on the home preview card. */
  accentClass: string;
}

export interface Program {
  id: string;
  title: string;
  slogan: string;
  description: string;
  image: string;
  color: ProgramColor;
  features: string[];
  category: string;
  preview: ProgramPreview;
}

export const programs: Program[] = [
  {
    id: "stitch-a-uniform",
    title: "Stitch-A-Uniform Campaign",
    slogan: "One Stitch. One Uniform. One Child in School.",
    description:
      "The Stitch-A-Uniform Campaign supports children's education by ensuring no child misses school due to lack of a uniform. Through sponsorship, fabric donations, volunteer tailoring, and strategic partnerships, we clothe children so they can learn with dignity.",
    image: "/images/about-pg-imgs/stitch-a-uniform.jpeg",
    color: "primary",
    features: [
      "Sponsorship programs for school uniforms",
      "Fabric donation drives",
      "Volunteer tailoring workshops",
      "School partnerships and distribution",
    ],
    category: "Education",
    preview: {
      image: "/images/IMG_1453.jpg",
      description:
        "Providing school uniforms through sponsorship, fabric donations, and volunteer tailoring so every child attends school with dignity.",
      categoryColor: "bg-primary/85 text-white",
      accentClass: "bg-primary",
    },
  },
  {
    id: "feed-and-treat",
    title: "Feed and Treat the Street",
    slogan: "Nourishment & Care for Every Child",
    description:
      "This program provides nutrition and medical care to street-connected children, breaking the cycle of neglect and disease. We organize feeding programs and basic healthcare support targeting communities where children face the greatest risk.",
    image: "/images/about-pg-imgs/feed-the-street.jpeg",
    color: "teal",
    features: [
      "Organized feeding programs",
      "Basic healthcare support",
      "Breaking the cycle of neglected tropical diseases (NTDs)",
      "Community health education",
    ],
    category: "Health & Nutrition",
    preview: {
      image: "/images/IMG_7521.jpg",
      description:
        "Delivering nutrition and medical care to street-connected children, breaking the cycle of neglected tropical diseases.",
      categoryColor: "bg-teal/85 text-white",
      accentClass: "bg-teal",
    },
  },
  {
    id: "monthly-miracle",
    title: "Monthly Miracle Fund",
    slogan: "Hope and Support When It Matters Most",
    description:
      "The Monthly Miracle Fund provides financial and medical support for children in need — offering relief to families facing medical challenges and supporting pediatric patients who require urgent care but lack the resources to access it.",
    image: "/images/about-pg-imgs/monthly-miracle.jpeg",
    color: "primary",
    features: [
      "Financial support for pediatric patients",
      "Medical care assistance",
      "Family relief programs",
      "Monthly outreach to beneficiaries",
    ],
    category: "Medical Support",
    preview: {
      image: "/images/IMG_8438.jpg",
      description:
        "Providing financial and medical support for children in need — offering relief to families facing urgent medical challenges.",
      categoryColor: "bg-primary/85 text-white",
      accentClass: "bg-primary",
    },
  },
  {
    id: "healthy-bridge",
    title: "Healthy Bridge Initiative",
    slogan: "Connecting Knowledge. Empowering Women. Protecting Children.",
    description:
      "The Healthy Bridge Initiative operates on three powerful pillars: connecting communities to health knowledge, empowering women as primary caregivers, and protecting children through education and advocacy.",
    image: "/images/about-pg-imgs/health-bridge.jpeg",
    color: "teal",
    features: [
      "Connecting communities to health knowledge",
      "Empowering women as caregivers",
      "Protecting children through advocacy",
      "Educational workshops and seminars",
    ],
    category: "Community",
    preview: {
      image: "/images/IMG_8557.jpg",
      description:
        "Connecting knowledge, empowering women, and protecting children through education pillars and inclusive advocacy.",
      categoryColor: "bg-teal/85 text-white",
      accentClass: "bg-teal",
    },
  },
];
