"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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

/* Role badge colors — mirror the navbar active-link palette */
const roleColors = [
  "bg-primary/[0.08] text-primary",
  "bg-teal/[0.08] text-teal",
  "bg-aqua/20 text-[#1FAAB0]",
  "bg-green-100/60 text-primary-dark",
];

const dotColors = [
  "bg-primary",
  "bg-teal",
  "bg-[#1FAAB0]",
  "bg-primary-dark",
];

/* Gradient fallback backgrounds when no photo */
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
  const dotColor  = dotColors[index % dotColors.length];
  const gradient  = fallbackGradients[index % fallbackGradients.length];
  const showPhoto   = !imgError && !!person.photo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 3) * 0.08 }}
      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-default"
    >
      {/* Photo / gradient-initials fallback */}
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        {showPhoto ? (
          <>
            <img
              src={person.photo}
              alt={person.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* subtle bottom fade so name reads cleanly */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent" />
          </>
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient}`}
          >
            <span className="text-4xl sm:text-5xl font-extrabold text-white/80 tracking-tight select-none">
              {getInitials(person.name)}
            </span>
          </div>
        )}
      </div>

      {/* Name + role */}
      <div className="px-4 py-4 sm:px-5 sm:py-4 flex flex-col items-center text-center gap-2">
        <h3 className="font-semibold text-dark-text text-sm sm:text-base leading-snug">
          {person.name}
        </h3>
        <span className={`relative px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium ${roleColor}`}>
          {person.role}
          <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${dotColor}`} />
        </span>
      </div>
    </motion.div>
  );
}

export default function Leadership() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary bg-green-50 rounded-full mb-3">
            Our Team
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-text mb-3">
            Meet the Team
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            SCHC is made up of dedicated executives and volunteers who actively
            contribute to our mission of improving child health.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {leaders.map((person, i) => (
            <LeaderCard key={person.name} person={person} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
