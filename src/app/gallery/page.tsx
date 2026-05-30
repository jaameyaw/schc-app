import { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Sylfi's Child Health Corner",
  description: "A glimpse into SCHC's outreach programs, school visits, community events, and the lives we touch every day.",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
