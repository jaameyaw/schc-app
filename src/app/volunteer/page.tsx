import { Metadata } from "next";
import VolunteerClient from "./VolunteerClient";

export const metadata: Metadata = {
  title: "Volunteer & Partner | Sylfi's Child Health Corner",
  description: "Join our growing family of changemakers. Volunteer your time or partner with SCHC to create brighter futures for children.",
  alternates: {
    canonical: "/volunteer",
  },
};

export default function VolunteerPage() {
  return <VolunteerClient />;
}
