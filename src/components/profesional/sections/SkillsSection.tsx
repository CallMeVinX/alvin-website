import { Braces, Layers, Server, Wrench } from "lucide-react";
import { IconType } from "react-icons";
import {
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJest,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type SkillItem = {
  label: string;
  icon: IconType;
  iconClassName?: string;
};

type SkillGroup = {
  title: string;
  icon: typeof Braces;
  subtitle: string;
  tags: SkillItem[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: Braces,
    subtitle: "Core coding foundation",
    tags: [
      { label: "C++", icon: SiCplusplus, iconClassName: "text-sky-400" },
      { label: "Java", icon: FaJava, iconClassName: "text-orange-400" },
      { label: "Python", icon: SiPython, iconClassName: "text-yellow-300" },
      { label: "JavaScript", icon: SiJavascript, iconClassName: "text-amber-300" },
      { label: "TypeScript", icon: SiTypescript, iconClassName: "text-blue-400" },
    ],
  },
  {
    title: "Frontend Ecosystem",
    icon: Layers,
    subtitle: "Frameworks and UI stack",
    tags: [
      { label: "React", icon: SiReact, iconClassName: "text-cyan-300" },
      { label: "Next.js", icon: SiNextdotjs, iconClassName: "text-zinc-100" },
      { label: "Vue.js", icon: SiVuedotjs, iconClassName: "text-emerald-300" },
      { label: "Tailwind CSS", icon: SiTailwindcss, iconClassName: "text-cyan-300" },
      { label: "Redux", icon: SiRedux, iconClassName: "text-violet-300" },
    ],
  },
  {
    title: "Backend & Data",
    icon: Server,
    subtitle: "Server and data stack",
    tags: [
      { label: "FastAPI", icon: SiFastapi, iconClassName: "text-emerald-300" },
      { label: "Node.js", icon: SiNodedotjs, iconClassName: "text-green-300" },
      { label: "MySQL", icon: SiMysql, iconClassName: "text-sky-300" },
      { label: "MongoDB", icon: SiMongodb, iconClassName: "text-green-300" },
      { label: "Firebase", icon: SiFirebase, iconClassName: "text-amber-300" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    subtitle: "Shipping and quality workflow",
    tags: [
      { label: "Git", icon: SiGit, iconClassName: "text-orange-400" },
      { label: "GitHub", icon: SiGithub, iconClassName: "text-zinc-100" },
      { label: "Docker", icon: SiDocker, iconClassName: "text-sky-300" },
      { label: "Postman", icon: SiPostman, iconClassName: "text-orange-300" },
      { label: "Jest", icon: SiJest, iconClassName: "text-rose-300" },
      { label: "Linux", icon: SiLinux, iconClassName: "text-yellow-300" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-28 min-h-screen px-6 sm:px-10 lg:px-20 py-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl space-y-5">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-500/25 bg-gradient-to-br from-cyan-500/10 via-zinc-900/90 to-zinc-900 p-5 sm:p-7">
          <div className="pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full bg-cyan-500/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-12 h-28 w-28 rounded-full bg-cyan-700/20 blur-2xl" />

          <p className="text-xs uppercase tracking-[0.16em] text-cyan-300 mb-2">Core Stack</p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Professional tools I use to build products</h2>
          <p className="max-w-3xl text-zinc-300 leading-relaxed">
            Fullstack skill map with language fundamentals, frontend ecosystem, backend stack, and deployment/testing tools.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-2 xl:auto-rows-fr">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/35 hover:bg-zinc-900/85"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start gap-3 min-h-[3.75rem]">
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 transition-colors duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/20">
                    <Icon size={17} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-zinc-100 leading-tight">{group.title}</h3>
                      <p className="text-xs uppercase tracking-[0.14em] text-zinc-400 mt-1">{group.subtitle}</p>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {group.tags.map((tag) => {
                      const TechIcon = tag.icon;

                      return (
                        <div
                          key={tag.label}
                          className="group/skill relative flex min-h-20 flex-col items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black/50 px-2 py-2 text-center shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/45 hover:shadow-[0_12px_30px_rgba(6,182,212,0.18)]"
                        >
                          <TechIcon size={20} className={`shrink-0 ${tag.iconClassName ?? "text-zinc-100"} transition-transform duration-200 group-hover/skill:scale-110`} />
                          <span className="mt-2 text-[10px] font-medium uppercase tracking-[0.08em] text-zinc-300">{tag.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
