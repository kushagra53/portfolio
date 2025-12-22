"use client";

import Typewriter from "@/components/ui/Typewriter";
import ProjectCard from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";
import { Database, Shield, Cpu, Code2, Lock, ArrowDown } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "NSL-KDD Anomaly Detection",
      description: "Implemented Random Forest classifier for Network Intrusion Detection, achieving 99.8% accuracy on the NSL-KDD dataset. Optimized using GridSearchCV for hyperparameter tuning.",
      tags: ["Python", "Scikit-Learn", "ML Security", "rf-classifier"],
      link: "#"
    },
    {
      title: "AgriAdvisor System",
      description: "AI-driven crop recommendation engine analyzing soil metrics and weather patterns via OpenWeatherMap API to suggest optimal crops for farmers.",
      tags: ["React", "Node.js", "Express", "Weather API"],
      link: "#"
    },
    {
      title: "Landmark Recognition CNN",
      description: "Custom Convolutional Neural Network architecture trained on landmark images. Implemented data augmentation and transfer learning techniques.",
      tags: ["TensorFlow", "Keras", "Deep Learning", "CNN"],
      link: "#"
    },
    {
      title: "Ethical Hacking Lab",
      description: "Comprehensive repository of CTF writeups and custom penetration testing scripts written in Python and Bash for automated vulnerability scanning.",
      tags: ["Bash", "Python", "Kali Linux", "Burp Suite"],
      link: "#"
    }
  ];

  const skills = [
    { name: "Python", icon: Code2 },
    { name: "TensorFlow", icon: Database },
    { name: "Network Sec", icon: Shield },
    { name: "Cryptography", icon: Lock },
    { name: "React / Next.js", icon: Cpu },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center">
        <div className="z-10 max-w-4xl">
          <p className="text-[#64ffda] font-mono text-sm mb-4 tracking-widest animate-pulse">
            &gt; INITIALIZING SECURE CONNECTION...
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[#e6f1ff]">
            Hello World. I am <span className="text-[#64ffda]">Jaypee</span>.
          </h1>
          <div className="text-2xl md:text-4xl text-[#8892b0] font-mono mb-12 h-20">
            I Engineer <Typewriter text={["Secure AI Systems.", "resilient Neural Networks.", "Zero-Trust Architectures."]} speed={0.1} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#64ffda]/10 border border-[#64ffda] text-[#64ffda] font-bold font-mono rounded hover:bg-[#64ffda]/20 transition-all w-full sm:w-auto"
            >
              EXECUTE_MISSION
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-[#8892b0] text-[#e6f1ff] font-mono rounded hover:border-[#64ffda] hover:text-[#64ffda] transition-all w-full sm:w-auto"
            >
              INIT_COMMS
            </motion.a>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 text-[#64ffda]"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* PROJECTS SECTION (THE VAULT) */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#64ffda] font-mono text-xl">01.</span>
          <h2 className="text-3xl font-bold text-[#e6f1ff]">The Vault</h2>
          <div className="h-[1px] bg-[#233554] flex-grow ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION (SYSTEM LOGS) */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Terminal Bio */}
          <div>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#64ffda] font-mono text-2xl font-bold">02.</span>
              <h2 className="text-4xl font-bold text-[#e6f1ff]">System Logs</h2>
              <div className="h-[1px] bg-[#233554] flex-grow ml-4"></div>
            </div>

            {/* Kali Linux Window */}
            <div className="bg-[#1d1f21] rounded-t-lg border-x border-t border-[#333] shadow-2xl overflow-hidden">
              <div className="bg-[#2d2f31] px-4 py-2 flex items-center justify-between border-b border-[#333]">
                <span className="text-gray-400 text-xs font-mono">root@kali: /home/jaypee</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
              </div>
            </div>
            <div className="bg-[#0a0f14] border-x border-b border-[#333] p-6 font-mono text-base leading-relaxed text-[#c5c8c6] rounded-b-lg h-full min-h-[300px]">
              <p className="mb-4">
                <span className="text-[#27c93f]">root@kali</span>:<span className="text-[#4e97d6]">~</span># ./display_bio.sh
              </p>
              <div className="pl-2 border-l-2 border-[#233554] mb-4">
                <p className="mb-2"><span className="text-[#ffbd2e]">User:</span> Jaypee Student</p>
                <p className="mb-2"><span className="text-[#ffbd2e]">Role:</span> ML & Cybersecurity Engineer</p>
                <p className="mb-2"><span className="text-[#ffbd2e]">University:</span> Jaypee University (3rd Year)</p>
                <p className="mb-2"><span className="text-[#ffbd2e]">Mission:</span> Defending AI against adversarial threats.</p>
              </div>
              <p className="mb-4 text-[#8892b0]">
                &gt; I specialize in bridging the gap between high-performance ML models and robust security protocols.
              </p>
              <p>
                <span className="text-[#27c93f]">root@kali</span>:<span className="text-[#4e97d6]">~</span># <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          {/* Skill Cloud */}
          <div className="grid grid-cols-2 gap-4 pt-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-4 p-4 bg-[#112240] border border-[#233554] rounded hover:border-[#64ffda] transition-colors group cursor-crosshair shadow-lg"
              >
                <skill.icon className="text-[#64ffda] w-6 h-6" />
                <span className="text-[#a8b2d1] group-hover:text-[#e6f1ff] font-mono text-base font-bold">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (ENCRYPTED COMMS) */}
      <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
        <p className="text-[#64ffda] font-mono mb-4">03. What&apos;s Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-[#e6f1ff] mb-6">Encrypted Comms</h2>
        <p className="text-[#8892b0] text-lg mb-12">
          My inbox is always open. Whether you have a question about securing ML pipelines or just want to say hi, I&apos;ll try my best to get back to you.
        </p>
        <a href="mailto:contact@jaypeedev.com" className="px-8 py-4 border border-[#64ffda] text-[#64ffda] font-mono rounded hover:bg-[#64ffda]/10 transition-all inline-block">
          INITIALIZE_HANDSHAKE
        </a>
      </section>
    </div>
  );
}
