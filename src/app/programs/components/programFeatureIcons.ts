import {
  BowlFoodIcon,
  BuildingsIcon,
  CalendarCheckIcon,
  ChalkboardTeacherIcon,
  FirstAidKitIcon,
  GraduationCapIcon,
  HandCoinsIcon,
  HouseLineIcon,
  LightbulbIcon,
  PackageIcon,
  PresentationIcon,
  ScissorsIcon,
  ShieldCheckIcon,
  StethoscopeIcon,
  TShirtIcon,
  UsersThreeIcon,
  VirusIcon,
  WalletIcon,
  type Icon,
} from "@phosphor-icons/react";

/** Semantic icons per program feature — order matches `features` in page data */
export const PROGRAM_FEATURE_ICONS: Record<string, Icon[]> = {
  "stitch-a-uniform": [HandCoinsIcon, TShirtIcon, ScissorsIcon, GraduationCapIcon],
  "feed-and-treat": [BowlFoodIcon, FirstAidKitIcon, VirusIcon, ChalkboardTeacherIcon],
  "monthly-miracle": [WalletIcon, StethoscopeIcon, HouseLineIcon, CalendarCheckIcon],
  "healthy-bridge": [LightbulbIcon, UsersThreeIcon, ShieldCheckIcon, PresentationIcon],
};

const FALLBACK_ICONS: Icon[] = [
  HandCoinsIcon,
  PackageIcon,
  UsersThreeIcon,
  BuildingsIcon,
];

export function getProgramFeatureIcon(
  programId: string,
  index: number
): Icon {
  const icons = PROGRAM_FEATURE_ICONS[programId];
  if (icons?.[index]) return icons[index];
  return FALLBACK_ICONS[index % FALLBACK_ICONS.length];
}
