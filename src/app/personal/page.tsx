import Navbar from "@/components/layout/Navbar";
import ContactSection from "@/components/profesional/sections/ContactSection";
import HomeSection from "@/components/profesional/sections/HomeSection";
import ProfileSection from "@/components/profesional/sections/ProfileSection";
import ProjectsSection from "@/components/profesional/sections/ProjectsSection";
import SkillsSection from "@/components/profesional/sections/SkillsSection";

export default function PersonalPage() {
    return (
        <main className="bg-zinc-950 text-zinc-100">
            <Navbar />

            <section className="px-6 sm:px-10 lg:px-20 pt-28">
                <div className="max-w-6xl mx-auto rounded-2xl border border-amber-400/30 bg-amber-500/10 px-5 py-4 text-amber-200">
                    Personal mode is currently in development. You are viewing the professional layout temporarily.
                </div>
            </section>

            <HomeSection />
            <ProfileSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    );
}
