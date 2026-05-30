import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Sylfi's Child Health Corner",
  description: "Get in touch with SCHC to learn more about our programs, volunteering, or partnerships.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
