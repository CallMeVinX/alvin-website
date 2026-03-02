"use client";

import { motion, useInView } from "framer-motion";
import { GraduationCap, Sparkles, Trophy } from "lucide-react";
import { RefObject, useRef } from "react";

const timelineData = [
  {
    year: "Present",
    title: "Universitas Mikroskil",
    type: "Education",
    description:
      "Undergraduate in Informatics. Deepening knowledge in Software Engineering, Data Structures, and Scalable Backend Architecture.",
  },
  {
    year: "2023",
    title: "2nd Place - Computer Olympiad (City Level)",
    type: "Achievement",
    description:
      "Secured the 2nd podium position, demonstrating advanced algorithmic thinking and consistency in competitive programming.",
  },
  {
    year: "2022",
    title: "National Finalist - ILPC",
    type: "Achievement",
    description:
      "Qualified as a National Finalist in the Information Logic Programming Competition, outperforming teams across Indonesia in logic & code efficiency.",
  },
  {
    year: "2021",
    title: "2nd Place - OSN Komputer (City Level)",
    type: "Achievement",
    description:
      "Ranked 2nd in the National Science Olympiad selection. Established a rigorous foundation in C++ and computational problem solving.",
  },
  {
    year: "2020 - 2023",
    title: "SMA Kristen Kalam Kudus",
    type: "Education",
    description:
      "",
  },
];

type TimelineItemProps = {
  item: (typeof timelineData)[number];
  index: number;
  rootRef: RefObject<HTMLDivElement | null>;
};

function TimelineItem({ item, index, rootRef }: TimelineItemProps) {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(rowRef, {
    root: rootRef,
    margin: "0px 0px -12% 0px",
    once: true,
  });

  const isEducation = item.type === "Education";

  return (
    <div ref={rowRef} className="group relative pl-10">
      <span
        className={`absolute left-1.5 top-4 z-10 h-3.5 w-3.5 rounded-full border-2 transition duration-200 group-hover:border-cyan-200 group-hover:bg-cyan-300/70 group-hover:shadow-lg group-hover:shadow-cyan-400/40 ${
          isEducation ? "border-cyan-300 bg-cyan-400/35" : "border-cyan-500 bg-cyan-500/20"
        }`}
      />

      <span className="absolute left-5 top-5 h-px w-4 bg-zinc-600/70 transition duration-200 group-hover:bg-cyan-400/60" />

      <motion.article
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
        transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
        whileHover={{ scale: 1.02 }}
        className="rounded-xl border border-white/10 bg-zinc-950/75 p-3 transition duration-200 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/15"
      >
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-md border border-cyan-400/35 bg-cyan-500/10 px-2 py-1 text-[11px] font-medium tracking-wide text-cyan-300">
            {item.year}
          </span>
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] uppercase tracking-[0.08em] text-zinc-400">
            {item.type}
          </span>
        </div>

        <h3 className="text-base font-semibold text-zinc-100">{item.title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-zinc-400">{item.description}</p>
      </motion.article>
    </div>
  );
}

export default function ProfileSection() {
  const timelineRootRef = useRef<HTMLDivElement | null>(null);
  const achievementCount = timelineData.filter((item) => item.type === "Achievement").length;

  return (
    <section id="profile" className="scroll-mt-28 min-h-screen border-t border-white/5 px-6 py-20 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/25 bg-linear-to-br from-cyan-500/10 via-zinc-900/80 to-zinc-900 p-8 sm:p-10">
          <div className="absolute -top-14 -right-10 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-14 -left-10 h-36 w-36 rounded-full bg-cyan-700/20 blur-3xl" />

          <p className="inline-flex items-center gap-2 text-cyan-300 text-xs tracking-[0.18em] uppercase mb-5">
            <Sparkles size={14} />
            Profile Snapshot
          </p>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/35 bg-cyan-500/10 text-cyan-300">
                <GraduationCap size={22} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-400">Current Status</p>
                <h3 className="text-xl font-semibold text-zinc-100">University Student</h3>
                <p className="mt-1 text-sm text-zinc-400">Universitas Mikroskil • Undergraduate</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-zinc-950/60 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">Total Achievements</p>
                <p className="mt-1 text-3xl font-semibold text-cyan-300">{achievementCount}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-zinc-950/60 p-4">
                <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">Current GPA</p>
                <p className="mt-1 text-3xl font-semibold text-cyan-300">4.00 / 4.00</p>
              </div>
            </div>

            <div className="mt-4 min-h-32 rounded-xl border border-white/10 bg-zinc-950/55 p-4">
              <p className="text-sm leading-relaxed text-zinc-300">
                An active student focused on modern software engineering, strong algorithm fundamentals, and
                competitive problem-solving practice. Maintaining solid academic performance while building a practical
                portfolio through projects and programming competitions from city to national level.
              </p>
            </div>
          </div>
        </div>

        <article className="rounded-3xl border border-white/10 bg-zinc-900/70 p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300">
              <Trophy size={18} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">Education & Achievements</p>
              <p className="text-sm text-zinc-400">Chronological journey</p>
            </div>
          </div>

          <div ref={timelineRootRef} className="edu-scroll h-112.5 overflow-y-auto pr-2">
            <div className="relative space-y-3 pb-1">
              <div className="absolute bottom-2 left-3.5 top-2 w-px bg-zinc-700/80" />

              {timelineData.map((item, index) => (
                <TimelineItem key={`${item.year}-${item.title}`} item={item} index={index} rootRef={timelineRootRef} />
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
