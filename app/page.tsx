import Navbar from "@/components/Navbar";
import Workstation from "@/components/Workstation";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import LabGrid from "@/components/LabGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import CommandPalette from "@/components/CommandPalette";
import DownloadQueue from "@/components/DownloadQueue";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-emerald-500/30 selection:text-emerald-500">
      <BackgroundEffects />
      <Navbar />
      <div className="relative z-10">
        <Workstation />
        <LabGrid />
        <KnowledgeGraph />
        <DownloadQueue />
        <Contact />
        <Footer />
      </div>
      <CommandPalette />
    </main>
  );
}
