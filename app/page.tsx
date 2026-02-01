import Navbar from "@/components/Navbar";
import Workstation from "@/components/Workstation";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import LabGrid from "@/components/LabGrid";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Workstation />
      <LabGrid />
      <KnowledgeGraph />
      <Contact />
      <Footer />
    </main>
  );
}
