"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  aboutEyebrow,
  aboutH2Centered,
  aboutH3,
  aboutSectionLead,
  aboutSectionPad,
  aboutSurfaceCard,
} from "../aboutTypography";

const leaders = [
  {
    name: "Adjei-Sakyi Sylvester Manu",
    role: "Founder",
    photo: "/images/leadership/sylvester-manu.jpg",
  },
  {
    name: "Randy Fiifi Forson",
    role: "Co-Founder",
    photo: "/images/leadership/randy-forson.jpg",
  },
  {
    name: "Alex Adu-Gyamfi",
    role: "Finance & Fundraising Officer",
    photo: "/images/leadership/alex-adu.jpg",
  },
  {
    name: "Sandra Frimpomaa Owusu",
    role: "Comms, Operations & Admin",
    photo: "/images/leadership/sandra-owusu.jpg",
  },
  {
    name: "Maud Makafui",
    role: "Evaluation & Research Officer",
    photo: "/images/leadership/maud-makafui.jpg",
  },
  {
    name: "Adjei Ama",
    role: "Programs & Initiatives Manager",
    photo: "/images/leadership/adjei-ama.jpg",
  },
  {
    name: "Benedict Oduro & Shadrack Adomako",
    role: "Volunteer Coordinators",
    photo: "/images/leadership/shadrack-adomako.jpg",
  },
  {
    name: "Yaw Addo",
    role: "Media & Publicity Officer",
    photo: "/images/leadership/yaw-addo.jpg",
  },
  {
    name: "Colette Nana Ama Nyarko",
    role: "General Secretary",
    photo: "/images/leadership/colette-nyarko.jpg",
  },
];

const roleColors = [
  "bg-primary/[0.08] text-primary ring-primary/15",
  "bg-teal/[0.08] text-teal ring-teal/15",
  "bg-aqua/20 text-[#1FAAB0] ring-[#1FAAB0]/20",
  "bg-green-100/60 text-primary-dark ring-primary/10",
];

const fallbackGradients = [
  "from-primary/30 to-teal/30",
  "from-teal/30 to-aqua/30",
  "from-green-200/60 to-primary/20",
  "from-aqua/30 to-primary/20",
];

function getInitials(name: string) {
  return name
    .split(" ")
    .filter((n) => n.length > 1)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function LeaderCard({
  person,
  index,
}: {
  person: (typeof leaders)[number];
  index: number;
}) {
  const [imgError, setImgError] = useState(false);
  const roleColor = roleColors[index % roleColors.length];
  const gradient = fallbackGradients[index % fallbackGradients.length];
  const showPhoto = !imgError && !!person.photo;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={`group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-18px_rgba(31,45,47,0.18)] ${aboutSurfaceCard}`}
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {showPhoto ? (
          <>
            <img
              src={person.photo}
              alt={person.name}
              onError={() => setImgError(true)}
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-dark-text/50 to-transparent" />
          </>
        ) : (
          <div
            className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}
          >
            <span className="font-section text-4xl font-semibold tracking-tight text-white/85 select-none sm:text-5xl">
              {getInitials(person.name)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col items-center gap-2.5 px-4 py-5 text-center sm:px-5 sm:py-5">
        <h3 className={`${aboutH3} text-base sm:text-[1.05rem]`}>{person.name}</h3>
        <span
          className={`rounded-full px-3.5 py-1.5 text-[0.78rem] font-medium leading-snug ring-1 sm:text-sm ${roleColor}`}
        >
          {person.role}
        </span>
      </div>
    </motion.article>
  );
}

export default function Leadership() {
  return (
    <section className={`bg-white ${aboutSectionPad}`}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-12 xl:max-w-[1600px] xl:px-20">
        <div className="mb-12 text-center sm:mb-16">
          <span className={`${aboutEyebrow} mb-3`}>Our Team</span>
          <h2 className={`${aboutH2Centered} mb-3`}>Meet the Team</h2>
          <p className={aboutSectionLead}>
            SCHC is made up of dedicated executives and volunteers who actively
            contribute to our mission of improving child health.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {leaders.map((person, i) => (
            <LeaderCard key={person.name} person={person} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
