"use client";

import Typewriter from "@/components/ui/Typewriter";
import ProjectCard from "@/components/ui/ProjectCard";
import { motion } from "framer-motion";
import { Database, Shield, Cpu, Code2, Lock, ArrowDown, Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Home() {
  const projects = [
    {
      title: "NSL-KDD Intrusion Detection",
      type: "Machine Learning / Network Security",
      description: "Built a robust intrusion detection system using the NSL-KDD dataset to classify network traffic as normal or anomalous. Focused on optimizing detection rates for various cyber attack categories through rigorous data preprocessing.",
      details: [
        "Implemented a Random Forest classifier with hyperparameter tuning via GridSearchCV for optimal results.",
        "Conducted extensive feature engineering to effectively handle a mix of categorical and continuous network features.",
        "Achieved approximately 99.8% accuracy on the test split, significantly improving baseline performance."
      ],
      techStack: ["Python", "Scikit-learn", "Pandas", "NSL-KDD Dataset"],
      link: "#"
    },
    {
      title: "AgriAdvisor System",
      type: "Full-Stack / Applied ML",
      description: "An intelligent crop recommendation system designed to assist farmers by suggesting the most suitable crops based on real-time environmental conditions. Aims to improve agricultural yields through data-driven insights.",
      details: [
        "Developed a web interface that integrates live weather data using the OpenWeatherMap API for accurate local analysis.",
        "Built a recommendation engine considering soil parameters and historical weather patterns to suggest optimal planting strategies.",
        "Focused on providing a clean, accessible user interface to ensure practical utility for end-users in the field."
      ],
      techStack: ["React", "Next.js", "REST APIs", "OpenWeatherMap"],
      link: "#"
    },
    {
      title: "Landmark Recognition CNN",
      type: "Computer Vision",
      description: "A deep learning project focused on identifying and classifying heritage landmarks from digital images. Leverages advanced computer vision techniques to preserve and recognize historical sites automatically.",
      details: [
        "Designed and trained a custom Convolutional Neural Network (CNN) architecture optimized for high-detail image classification.",
        "Orchestrated a full pipeline including dataset preparation, rigorous image augmentation, and training-validation splitting.",
        "Achieved high accuracy on the validation set, demonstrating the model's effectiveness in recognizing diverse architectural styles."
      ],
      techStack: ["Python", "TensorFlow", "Keras", "OpenCV"],
      link: "#"
    },
    {
      title: "AWS Cloud Infrastructure",
      type: "Cloud / Infrastructure as Code",
      description: "Engineered a scalable and secure cloud environment on AWS using infrastructure-as-code principles. Focused on automating resource provisioning and ensuring high availability for ML services.",
      details: [
        "Leveraged Terraform to provision and manage AWS resources including EC2 instances, S3 buckets, and custom VPC networking.",
        "Implemented strict security protocols using least-privilege IAM roles and isolated security groups for robust network defense.",
        "Automated the deployment pipeline to streamline the transition from development to a production-ready ML service environment."
      ],
      techStack: ["AWS", "Terraform", "IAM", "S3", "EC2"],
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
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 text-center overflow-hidden">
        <div className="z-10 max-w-4xl">
          <p className="text-[#64ffda] font-mono text-sm mb-4 tracking-widest animate-pulse">
            &gt; INITIALIZING SECURE CONNECTION...
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[#e6f1ff]">
            Hello World. I am <span className="text-[#64ffda]">Kushagra Pandey</span>.
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
          suppressHydrationWarning
        >
          <ArrowDown size={32} suppressHydrationWarning />
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard {...p} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT SECTION (SYSTEM LOGS) */}
      {/* ABOUT SECTION (SYSTEM LOGS) */}
      <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full mb-24">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Terminal Bio (60%) */}
          <div className="w-full md:w-[60%]">

            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#64ffda] font-mono text-2xl font-bold">02.</span>
              <h2 className="text-4xl font-bold text-[#e6f1ff]">System Logs</h2>
              <div className="h-[1px] bg-[#233554] flex-grow ml-4"></div>
            </div>

            {/* Kali Linux Window */}
            <div className="bg-[#1d1f21] rounded-t-lg border-x border-t border-[#333] shadow-2xl overflow-hidden">
              <div className="bg-[#2d2f31] px-4 py-2 flex items-center justify-between border-b border-[#333]">
                <span className="text-gray-400 text-xs font-mono">root@kali: /home/kushagra</span>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
              </div>
            </div>
            <div className="bg-[#0a0f14] border-x border-b border-[#333] p-6 font-mono text-base leading-relaxed text-[#c5c8c6] rounded-b-lg h-full min-h-[450px] overflow-y-auto custom-scrollbar">
              <div className="mb-6">
                <p className="text-[#8892b0] italic mb-2">// 3rd-Year CSE Student @ JUIT</p>
                <p className="text-[#e6f1ff]">
                  My stack is a hybrid of <span className="text-[#64ffda]">Offensive Security</span> and <span className="text-[#64ffda]">Deep Learning</span>. Currently exploring Cloud Architecture to build systems that are secure by design, not just by patch.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="flex items-center gap-2">
                    <span className="text-[#27c93f]">root@kali</span>:<span className="text-[#4e97d6]">~</span># ./current_status.sh
                  </p>
                  <p className="pl-4 text-[#64ffda]">🟢 OPEN TO WORK: Internship / Freelance Projects.</p>
                  <p className="pl-4 text-[#a8b2d1]">Focus: ML Security & Cloud Infrastructure.</p>
                </div>

                <div>
                  <p className="flex items-center gap-2">
                    <span className="text-[#27c93f]">root@kali</span>:<span className="text-[#4e97d6]">~</span># cat print_hobbies.txt
                  </p>
                  <p className="pl-4 text-[#c5c8c6]">♟️ Chess | 🛡️ CTF Player</p>
                </div>

                <div>
                  <p className="flex items-center gap-2">
                    <span className="text-[#27c93f]">root@kali</span>:<span className="text-[#4e97d6]">~</span># list_certs --all
                  </p>
                  <ul className="pl-4 space-y-1">
                    <li className="text-[#ffbd2e] font-bold">★ Oracle Cloud Infrastructure AI Foundations Associate (2025)</li>
                    <li className="text-[#a8b2d1]">★ Ethical Hacking Certification</li>
                  </ul>
                </div>

                <div>
                  <p className="flex items-center gap-2">
                    <span className="text-[#27c93f]">root@kali</span>:<span className="text-[#4e97d6]">~</span># cat location_config.json
                  </p>
                  <p className="pl-4 text-[#a8b2d1]">
                    &#123; "location": "📍 India", "preference": "Remote", "relocation": "Required (Sponsorship/Assistance)" &#125;
                  </p>
                </div>
              </div>

              <p className="mt-6">
                <span className="text-[#27c93f]">root@kali</span>:<span className="text-[#4e97d6]">~</span># <span className="animate-pulse">_</span>
              </p>
            </div>
          </div>

          {/* Skill Modules (40%) */}
          <div className="w-full md:w-[40%] flex flex-col gap-6">
            <h3 className="text-2xl font-mono text-cyan-400 mb-6 border-b border-cyan-900/50 pb-2 tracking-tighter">
              &gt;&gt; MODULE_CONFIGURATION
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Module A */}
              <div className="bg-[#112240] p-5 rounded-lg border border-[#233554] hover:border-[#64ffda]/50 transition-colors group">
                <h3 className="text-[#64ffda] font-mono text-sm mb-3 font-bold group-hover:translate-x-1 transition-transform tracking-tight">01. Offensive Security</h3>
                <p className="text-[#e6f1ff] text-sm font-bold mb-2">Kali Linux Arsenal</p>
                <p className="text-[#8892b0] text-xs mb-3 leading-relaxed">Familiar with full Kali toolset for vulnerability assessment.</p>
                <p className="text-[#64ffda] text-[15px] font-mono">Burp Suite · Metasploit · Nmap · Wireshark</p>
              </div>

              {/* Module B */}
              <div className="bg-[#112240] p-5 rounded-lg border border-[#233554] hover:border-[#64ffda]/50 transition-colors group">
                <h3 className="text-[#64ffda] font-mono text-sm mb-3 font-bold group-hover:translate-x-1 transition-transform tracking-tight">02. Cloud & Infra</h3>
                <p className="text-[#e6f1ff] text-sm font-bold mb-2">Cloud Architecture</p>
                <p className="text-[#8892b0] text-xs mb-3 leading-relaxed">Building secure, scalable infrastructure as code.</p>
                <p className="text-[#64ffda] text-[15px] font-mono">Oracle OCI · AWS (Learning) · Terraform</p>
              </div>

              {/* Module C */}
              <div className="bg-[#112240] p-5 rounded-lg border border-[#233554] hover:border-[#64ffda]/50 transition-colors group">
                <h3 className="text-[#64ffda] font-mono text-sm mb-3 font-bold group-hover:translate-x-1 transition-transform tracking-tight">03. Deep Learning</h3>
                <p className="text-[#e6f1ff] text-sm font-bold mb-2">Neural Networks</p>
                <p className="text-[#8892b0] text-xs mb-3 leading-relaxed">Experience with image processing and deep learning architectures.</p>
                <p className="text-[#64ffda] text-[15px] font-mono">CNNs · TensorFlow/Keras · OpenCV</p>
              </div>

              {/* Module D */}
              <div className="bg-[#112240] p-5 rounded-lg border border-[#233554] hover:border-[#64ffda]/50 transition-colors group">
                <h3 className="text-[#64ffda] font-mono text-sm mb-3 font-bold group-hover:translate-x-1 transition-transform tracking-tight">04. Core Dev</h3>
                <p className="text-[#e6f1ff] text-sm font-bold mb-2">The Stack</p>
                <p className="text-[#8892b0] text-xs mb-3 leading-relaxed"> foundation in backend logic and modern frontend frameworks.</p>
                <p className="text-[#64ffda] text-[15px] font-mono">Python Scripter · Bash</p>
              </div>
            </div>

            <div className="bg-[#64ffda]/5 border border-[#64ffda]/20 p-4 rounded-lg">
              <p className="text-[#64ffda] font-mono text-xs leading-relaxed">
                <span className="font-bold">SYSTEM_NOTE:</span> Regularly practice CTFs and ethical hacking labs to sharpen practical security skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (ENCRYPTED COMMS) */}
      <section id="contact" className="w-full bg-[#0d1f3a] py-32 border-t border-[#112240]">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
          <div>
            <p className="text-[#64ffda] font-mono mb-4 text-sm tracking-widest uppercase">03. Mission Control</p>
            <h2 className="text-5xl md:text-7xl font-bold text-[#e6f1ff] mb-6 tracking-tighter">Encrypted Comms</h2>
            <p className="text-[#8892b0] text-lg max-w-2xl mx-auto leading-relaxed">
              Secure channels are open. Whether you have a mission for a security engineer or just want to exchange public keys, I&apos;m ready to connect through secure protocols.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full">
            <a
              href="mailto:contact@kushagra.dev"
              className="px-10 py-5 border-[2px] border-[#64ffda] text-[#64ffda] font-bold font-mono text-lg rounded hover:bg-[#64ffda]/10 transition-all hover:shadow-[0_0_25px_rgba(100,255,218,0.2)] text-center w-full md:w-auto"
            >
              INITIALIZE_EMAIL_HANDSHAKE
            </a>
            <button className="px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-[#0a192f] font-bold font-mono text-lg rounded shadow-[0_0_20px_rgba(100,255,218,0.3)] transition-all text-center w-full md:w-auto">
              DOWNLOAD_CV_V1.0
            </button>
          </div>

          <div className="flex items-center justify-center space-x-12 mt-4">
            <a href="#" className="text-[#a8b2d1] hover:text-[#64ffda] transition-all transform hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(100,255,218,0.5)]">
              <Github className="w-10 h-10" suppressHydrationWarning />
            </a>
            <a href="#" className="text-[#a8b2d1] hover:text-[#64ffda] transition-all transform hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(100,255,218,0.5)]">
              <Linkedin className="w-10 h-10" suppressHydrationWarning />
            </a>
            <a href="#" className="text-[#a8b2d1] hover:text-[#64ffda] transition-all transform hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(100,255,218,0.5)]">
              <Twitter className="w-10 h-10" suppressHydrationWarning />
            </a>
            <a href="#" className="text-[#a8b2d1] hover:text-[#64ffda] transition-all transform hover:-translate-y-2 hover:drop-shadow-[0_0_10px_rgba(100,255,218,0.5)]">
              <Mail className="w-10 h-10" suppressHydrationWarning />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
