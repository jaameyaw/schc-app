import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { blurPlaceholders } from "@/data/blur-placeholders";
import {
  volunteerEyebrow,
  volunteerH2,
  volunteerH3,
  volunteerSectionLead,
} from "../volunteerTypography";
import VolunteerBackdrop from "./VolunteerBackdrop";
import type { LucideIcon } from "lucide-react";

export type EngagementItem = {
  label: string;
  icon: LucideIcon;
};

interface EngagementSectionProps {
  id?: string;
  backdrop?: "primary" | "teal";
  sectionClassName: string;
  badge: string;
  title: string;
  description: string;
  listTitle: string;
  items: EngagementItem[];
  cardClassName: string;
  iconClassName: string;
  button: {
    href: string;
    label: string;
    variant: "primary" | "teal";
    className?: string;
    external?: boolean;
  };
  image: {
    src: string;
    alt: string;
    shadowClassName?: string;
  };
  reverse?: boolean;
}

export default function EngagementSection({
  id,
  backdrop,
  sectionClassName,
  badge,
  title,
  description,
  listTitle,
  items,
  cardClassName,
  iconClassName,
  button,
  image,
  reverse = false,
}: EngagementSectionProps) {
  const contentOrder = reverse ? "xl:order-2" : "xl:order-1";
  const imageOrder = reverse ? "xl:order-1" : "xl:order-2";
  const imageShadowClassName = image.shadowClassName ?? "shadow-lg";

  return (
    <section id={id} className={`isolate ${sectionClassName}`}>
      {backdrop ? <VolunteerBackdrop variant={backdrop} /> : null}
      <div className="relative z-10 max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={contentOrder}
          >
            <span className={volunteerEyebrow}>{badge}</span>
            <h2 className={`${volunteerH2} mb-5`}>{title}</h2>
            <p className={`${volunteerSectionLead} mb-5`}>{description}</p>

            <h3 className={`${volunteerH3} mb-3`}>{listTitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {items.map((item) => (
                <div key={item.label} className={cardClassName}>
                  <item.icon className={iconClassName} />
                  {item.label}
                </div>
              ))}
            </div>

            <Button
              href={button.href}
              variant={button.variant}
              size="lg"
              external={button.external}
              className={button.className}
            >
              {button.label}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={imageOrder}
          >
            <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] ${imageShadowClassName}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                {...(blurPlaceholders[image.src]
                  ? { placeholder: "blur" as const, blurDataURL: blurPlaceholders[image.src] }
                  : {})}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
