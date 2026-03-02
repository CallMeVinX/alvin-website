import Navbar from "@/components/layout/Navbar";
import ContactSection from "@/components/profesional/sections/ContactSection";
import HomeSection from "@/components/profesional/sections/HomeSection";
import ProfileSection from "@/components/profesional/sections/ProfileSection";
import ProjectsSection from "@/components/profesional/sections/ProjectsSection";
import SkillsSection from "@/components/profesional/sections/SkillsSection";

export default function ProfesionalPage() {
    return (
        <main className="bg-zinc-950 text-zinc-100">
            <Navbar />
            <HomeSection />
            <ProfileSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    );
}
