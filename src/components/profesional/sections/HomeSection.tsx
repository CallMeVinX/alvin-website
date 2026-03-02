import Image from "next/image";
import { Briefcase, Cpu, Download, GitBranch, ShieldCheck } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function HomeSection() {
    return (
        <section id="home" className="relative isolate overflow-hidden scroll-mt-28 min-h-screen px-6 sm:px-10 lg:px-20 pt-32 pb-20 flex items-center">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[40px_40px] opacity-15" />
                <div className="absolute inset-0 bg-linear-to-b from-cyan-500/3 via-transparent to-transparent" />
                <div className="absolute -top-28 left-[12%] h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl" />
                <div className="absolute top-[20%] right-[10%] h-80 w-80 rounded-full bg-cyan-600/10 blur-3xl" />
                <div className="absolute -bottom-32 left-1/2 h-96 w-136 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute inset-x-0 bottom-0 h-44 bg-linear-to-t from-black via-black/65 to-transparent" />
            </div>

            <div className="w-full max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.25fr_0.75fr] items-center">
                <div className="max-w-3xl order-2 lg:order-1 rounded-3xl border border-white/8 bg-zinc-950/35 p-6 sm:p-8 shadow-[0_0_40px_rgba(6,182,212,0.08)] backdrop-blur-[1px]">
                    <p className="inline-flex items-center gap-2 text-cyan-300 font-semibold mb-4 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10">
                        <span className="relative inline-flex h-3 w-3">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400/70 animate-ping" />
                            <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.9)]" />
                        </span>
                        Professional Mode
                    </p>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-300 to-cyan-500">Alvin Dinata</span>
                    </h1>

                    <p className="text-zinc-300 text-lg leading-relaxed">
                        I&apos;m passionate about building reliable web experiences and mobile-ready solutions. My desired career is Software Engineer, and I enjoy competitive programming to keep sharpening my problem-solving skills.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-cyan-400/20 bg-black/35 p-4">
                            <p className="text-[11px] uppercase tracking-[0.14em] text-cyan-300/85">Live Engineering Signal</p>
                            <div className="mt-2 rounded-lg border border-white/10 bg-zinc-950/70 px-3 py-2 font-mono text-xs text-zinc-300">
                                <span className="text-cyan-300">$</span> pnpm build --type-safe
                                <span className="ml-1 inline-block h-3 w-1 translate-y-0.5 animate-pulse bg-cyan-300" />
                            </div>
                            <p className="mt-2 text-xs text-zinc-400">Shipping clean architecture with performance-first delivery.</p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-zinc-950/55 p-4">
                            <p className="text-[11px] uppercase tracking-[0.14em] text-cyan-300/85">Engineer DNA</p>
                            <div className="mt-2 space-y-2 text-xs text-zinc-300">
                                <div className="flex items-center gap-2"><Cpu size={13} className="text-cyan-300" />System Design Mindset</div>
                                <div className="flex items-center gap-2"><ShieldCheck size={13} className="text-cyan-300" />Type-safe by Default</div>
                                <div className="flex items-center gap-2"><GitBranch size={13} className="text-cyan-300" />Scalable Git Workflow</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="/profesional#projects"
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-medium hover:bg-cyan-500/30 transition-colors"
                        >
                            <Briefcase size={16} className="mr-2" />
                            View Projects
                        </a>
                        <a
                            href="/alvin-cv.pdf"
                            download
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border border-white/15 text-zinc-200 font-medium hover:border-white/25 hover:bg-white/5 transition-colors"
                        >
                            <Download size={16} className="mr-2" />
                            Download CV
                        </a>
                    </div>

                    <div className="mt-10 pt-5 border-t border-white/10 flex items-center gap-3">
                        <span className="text-xs sm:text-sm uppercase tracking-[0.14em] text-zinc-500">Connect</span>
                        <a
                            href="https://github.com/Alvin-Dinata"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/15 text-zinc-200 hover:border-white/25 hover:bg-white/5 transition-colors"
                        >
                            <FaGithub size={18} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/alvin-dinata/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/15 text-zinc-200 hover:border-white/25 hover:bg-white/5 transition-colors"
                        >
                            <FaLinkedin size={18} />
                        </a>
                    </div>
                </div>

                <div className="order-1 lg:order-2 justify-self-center lg:justify-self-end mx-2">
                    <div className="relative">
                        <div className="pointer-events-none absolute -inset-6 rounded-[2.2rem] border border-cyan-300/20 bg-cyan-500/5" />
                        <div className="pointer-events-none absolute -inset-10 rounded-[2.8rem] border border-cyan-300/10" />
                        <div className="pointer-events-none absolute -inset-14 rounded-[3.3rem] bg-cyan-500/10 blur-3xl" />
                        <div className="pointer-events-none absolute -inset-18 rounded-[3.8rem] bg-blue-500/8 blur-3xl" />

                        

                        <div className="pointer-events-none absolute -right-40 -top-4 hidden h-52 w-52 lg:block">
                            <svg viewBox="0 0 220 220" className="h-full w-full">
                                <path d="M18 28 L88 52 L156 24 L200 56" stroke="rgba(56,189,248,0.42)" strokeWidth="1" fill="none" />
                                <path d="M28 84 L92 56 L150 98 L208 78" stroke="rgba(56,189,248,0.3)" strokeWidth="1" fill="none" />
                                <path d="M30 150 L88 112 L144 138 L196 120" stroke="rgba(14,165,233,0.36)" strokeWidth="1" fill="none" />
                                <path d="M52 188 L108 158 L172 182" stroke="rgba(59,130,246,0.32)" strokeWidth="1" fill="none" />
                                <circle cx="18" cy="28" r="2.8" fill="rgba(34,211,238,0.72)" />
                                <circle cx="88" cy="52" r="2.6" fill="rgba(56,189,248,0.6)" />
                                <circle cx="150" cy="98" r="2.4" fill="rgba(56,189,248,0.52)" />
                                <circle cx="144" cy="138" r="2.4" fill="rgba(59,130,246,0.5)" />
                                <circle cx="172" cy="182" r="2.8" fill="rgba(34,211,238,0.65)" />
                            </svg>
                        </div>

                        

                        <div className="relative h-80 w-80 overflow-hidden rounded-3xl border border-cyan-400/35 shadow-[0_0_70px_rgba(6,182,212,0.35)] sm:h-104 sm:w-104">
                            <div className="pointer-events-none absolute inset-0 z-10 rounded-3xl ring-1 ring-inset ring-white/10" />
                            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_84%_72%,rgba(37,99,235,0.2),transparent_40%)]" />
                            <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle,rgba(56,189,248,0.18)_1px,transparent_1.35px)] bg-size-[20px_20px] opacity-35" />
                            <div className="pointer-events-none absolute left-3 top-3 z-20 h-11 w-16 border-l border-t border-cyan-300/30" />
                            <div className="pointer-events-none absolute right-3 top-3 z-20 h-11 w-16 border-r border-t border-cyan-300/25" />
                            <div className="pointer-events-none absolute left-10 top-12 z-20 h-8 w-12 border-l border-t border-cyan-300/18" />
                            <div className="pointer-events-none absolute right-10 top-14 z-20 h-8 w-12 border-r border-t border-cyan-300/15" />
                            <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
                            <div className="pointer-events-none absolute -bottom-16 -left-14 h-36 w-36 rounded-full bg-cyan-600/20 blur-3xl" />
                            <Image
                                src="/image/alvin.jpeg"
                                alt="Portrait of Alvin"
                                fill
                                priority
                                className="object-cover object-center scale-110"
                            />
                            <div className="pointer-events-none absolute inset-0 z-20 bg-linear-to-t from-black/40 via-transparent to-cyan-300/8" />
                            <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_50%_75%,rgba(34,211,238,0.16),transparent_48%)]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
