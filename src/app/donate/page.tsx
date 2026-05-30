import { Metadata } from "next";
import DonateClient from "./DonateClient";

export const metadata: Metadata = {
  title: "Donate | Sylfi's Child Health Corner",
  description: "Support SCHC's mission. Your donation changes lives and improves child health, education, and welfare across Ghana.",
  alternates: {
    canonical: "/donate",
  },
};

export default function DonatePage() {
  return <DonateClient />;
}
