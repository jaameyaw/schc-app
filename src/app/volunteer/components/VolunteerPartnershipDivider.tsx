/**
 * Organic mountain-style wave between Volunteer (white) and Partnership sections.
 * Wave fill uses the same token as the Partnership section (`bg-light-bg`).
 */
export default function VolunteerPartnershipDivider() {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 -mt-px w-full bg-white leading-none"
    >
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="block h-11 w-full sm:h-14 md:h-16 lg:h-[4.5rem]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="var(--color-light-bg)"
          d="M0 64V44C58 22 118 56 192 34C266 14 334 52 412 30C490 10 558 48 638 28C718 10 786 50 868 32C950 14 1018 54 1102 36C1186 18 1254 46 1336 32C1388 24 1416 30 1440 26V64H0Z"
        />
      </svg>
    </div>
  );
}
