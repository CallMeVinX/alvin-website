"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Clock3, ExternalLink, Github, Play } from "lucide-react";

type ProjectStatus = "Completed" | "In Progress";

type ProjectItem = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  status: ProjectStatus;
  demoUrl: string;
  sourceUrl: string;
};

const projectsData: ProjectItem[] = [
  {
    title: "Floovia",
    description:
      "A comprehensive solution for logistics operations. Built to optimize workflows with real-time capabilities.",
    tags: ["#ReactJS", "#Tailwind", "#NodeJS"],
    image: "/image/floovia.png",
    status: "Completed",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "Designed for performance and aesthetics. Features a custom timeline, bento-grid layout, and fully typed architecture.",
    tags: ["#NextJS", "#FramerMotion", "#TypeScript"],
    image: "/image/floovia.png",
    status: "In Progress",
    demoUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Project Atlas",
    description:
      "Modular dashboard experience focused on speed, maintainability, and modern UI interactions for production use.",
    tags: ["#ReactJS", "#NodeJS", "#PostgreSQL"],
    image: "/image/floovia.png",
    status: "Completed",
    demoUrl: "#",
    sourceUrl: "#",
  },
];

function statusBadgeClass(status: ProjectStatus) {
  return status === "Completed"
    ? "text-emerald-200 border-emerald-300/45 bg-black/70 shadow-sm shadow-emerald-500/30"
    : "text-amber-200 border-amber-300/45 bg-black/70 shadow-sm shadow-amber-500/30";
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 min-h-screen px-6 sm:px-10 lg:px-20 py-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl space-y-7 sm:space-y-8">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-cyan-300">Featured Work</p>
          <h2 className="text-3xl font-bold text-zinc-100 sm:text-4xl">Projects that turn ideas into polished products</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projectsData.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-video overflow-hidden border-b border-white/10">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />

                <span
                  className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] backdrop-blur-md ${statusBadgeClass(project.status)}`}
                >
                  {project.status === "Completed" ? <CheckCircle2 size={12} /> : <Clock3 size={12} />}
                  {project.status}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                <a
                  href={project.demoUrl}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                >
                  Read more
                  <ExternalLink size={14} />
                </a>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <a
                    href={project.demoUrl}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-400/35 bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300/60 hover:bg-cyan-500/20"
                  >
                    <Play size={14} />
                    Demo
                  </a>
                  <a
                    href={project.sourceUrl}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-cyan-400/40 hover:text-cyan-200"
                  >
                    <Github size={14} />
                    Source
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
