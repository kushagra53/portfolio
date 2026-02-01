import Navbar from "@/components/Navbar";
import Workstation from "@/components/Workstation";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import LabGrid from "@/components/LabGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import CommandPalette from "@/components/CommandPalette";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 relative selection:bg-emerald-500/30 selection:text-emerald-500">
      <BackgroundEffects />
      <Navbar />
      <div className="relative z-10">
        <Workstation />
        <LabGrid />
        <KnowledgeGraph />
        <Contact />
        <Footer />
      </div>
      <CommandPalette />
    </main>
  );
}
