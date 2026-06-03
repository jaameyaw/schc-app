"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import { blurPlaceholders } from "@/data/blur-placeholders";

const galleryImages = [
  { src: "/images/IMG_1726.jpeg", alt: "Outreach event", category: "Feed the Street" },
  { src: "/images/IMG_1453.jpg", alt: "School outreach - Uniform distribution", category: "Stitch-A-Uniform" },
  { src: "/images/volunteer1.jpg", alt: "Volunteer team", category: "Feed the Street" },
  { src: "/images/IMG_1464.jpg", alt: "Uniform campaign activity", category: "Stitch-A-Uniform" },
  { src: "/images/IMG_1727.jpeg", alt: "Community gathering", category: "Feed the Street" },
  { src: "/images/IMG_1482.jpg", alt: "Community outreach", category: "Outreach" },
  { src: "/images/IMG_1502.jpg", alt: "School donation event", category: "Outreach" },
  { src: "/images/IMG_1728.jpeg", alt: "Volunteer activity", category: "Feed the Street" },
  { src: "/images/IMG_1509.jpg", alt: "Education support activity", category: "Education" },
  { src: "/images/IMG_1734.jpeg", alt: "Education program", category: "Feed the Street" },
  { src: "/images/IMG_1511.jpg", alt: "Community engagement", category: "Outreach" },
  { src: "/images/IMG_1512.jpg", alt: "Outreach program", category: "Outreach" },
  { src: "/images/IMG_7521.jpg", alt: "Feed and Treat the Street", category: "Feed the Street" },
  { src: "/images/IMG_1729.jpeg", alt: "Team outreach", category: "Feed the Street" },
  { src: "/images/IMG_7537.jpg", alt: "Street children outreach", category: "Feed the Street" },
  { src: "/images/volunteer2.jpg", alt: "Volunteer activity", category: "Feed the Street" },
  { src: "/images/IMG_7540.jpg", alt: "Nutrition program", category: "Feed the Street" },
  { src: "/images/IMG_1735.jpeg", alt: "Children activities", category: "Feed the Street" },
  { src: "/images/IMG_7556.jpg", alt: "Medical care outreach", category: "Feed the Street" },
  { src: "/images/IMG_7561.jpg", alt: "Community health", category: "Health" },
  { src: "/images/IMG_1737.jpeg", alt: "Community support", category: "Feed the Street" },
  { src: "/images/IMG_7562.jpg", alt: "Health education", category: "Health" },
  { src: "/images/IMG_7568.jpg", alt: "Outreach event", category: "Outreach" },
  { src: "/images/IMG_1739.jpeg", alt: "Medical care outreach", category: "Feed the Street" },
  { src: "/images/IMG_7590.jpg", alt: "Community program", category: "Outreach" },
  { src: "/images/IMG_7597.jpg", alt: "Children program", category: "Education" },
  { src: "/images/IMG_1741.jpeg", alt: "Nutrition program", category: "Feed the Street" },
  { src: "/images/IMG_8438.jpg", alt: "Monthly Miracle Fund", category: "Monthly Miracle" },
  { src: "/images/IMG_8529.jpg", alt: "Team outreach", category: "Outreach" },
  { src: "/images/IMG_8547.jpg", alt: "School visit", category: "Education" },
  { src: "/images/IMG_8551.jpg", alt: "Community engagement", category: "Outreach" },
  { src: "/images/IMG_8557.jpg", alt: "Healthy Bridge Initiative", category: "Healthy Bridge" },
  { src: "/images/IMG_8558.jpg", alt: "Women empowerment session", category: "Healthy Bridge" },
  { src: "/images/IMG_8561.jpg", alt: "Health workshop", category: "Health" },
  { src: "/images/IMG_8592.jpg", alt: "Children activities", category: "Education" },
  { src: "/images/IMG_8638.jpg", alt: "Community gathering", category: "Outreach" },
  { src: "/images/IMG_8656.jpg", alt: "Volunteer activity", category: "Volunteers" },
  { src: "/images/IMG_8706.jpg", alt: "Program activity", category: "Outreach" },
  { src: "/images/IMG_8748.jpg", alt: "Outreach team", category: "Volunteers" },
  { src: "/images/IMG_8788.jpg", alt: "Community support", category: "Outreach" },
  { src: "/images/IMG_8989.jpg", alt: "Volunteer team", category: "Volunteers" },
  { src: "/images/IMG_8991.jpg", alt: "Community program", category: "Outreach" },
  { src: "/images/IMG_9002.jpg", alt: "Health awareness", category: "Health" },
  { src: "/images/IMG_9036.jpg", alt: "Partnership event", category: "Outreach" },
  { src: "/images/IMG_9041.jpg", alt: "Children engagement", category: "Education" },
  { src: "/images/IMG_9156.jpg", alt: "Impact event", category: "Outreach" },
];

const categories = ["All", "Outreach", "Education", "Health", "Feed the Street", "Stitch-A-Uniform", "Monthly Miracle", "Healthy Bridge", "Volunteers"];


export default function GalleryPage() {
  return (
    <>
      <PageHero
        tag="Our Work in Action"
        title="Gallery"
        subtitle="A glimpse into our outreach programs, school visits, community events, and the lives we touch every day."
        imageSrc="/images/IMG_8706.jpg"
      />

      {/* Gallery Grid */}
      <section className="py-20 bg-light-bg">
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}

function GalleryGrid({ images }: { images: typeof galleryImages }) {
  const [visibleCount, setVisibleCount] = useState(12);

  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  return (
    <div>
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
        {visibleImages.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            className="break-inside-avoid group relative overflow-hidden rounded-xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              {...(blurPlaceholders[img.src]
                ? { placeholder: "blur" as const, blurDataURL: blurPlaceholders[img.src] }
                : {})}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
              <div>
                <span className="inline-block px-2 py-0.5 bg-primary text-white text-xs font-semibold rounded-full mb-1">
                  {img.category}
                </span>
                <p className="text-white text-xs leading-snug">{img.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl shadow-md hover:bg-primary-dark transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer"
          >
            Load More Images
          </button>
        </div>
      )}
    </div>
  );
}
