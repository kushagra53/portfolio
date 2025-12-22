"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";

interface ProjectCardProps {
    title: string;
    type: string;
    description: string;
    details?: string[];
    techStack: string[];
    link?: string;
}

const ProjectCard = ({ title, type, description, details, techStack, link }: ProjectCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.01 }}
            className="group relative w-full h-full min-h-[350px] rounded-xl bg-[#112240] border border-cyan-900/40 p-8 flex flex-col cursor-pointer overflow-hidden transition-all hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(100,255,218,0.05)]"
        >
            <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div style={{ transform: "translateZ(20px)" }} className="mb-4">
                    <p className="text-[#64ffda] font-mono text-xs mb-1 uppercase tracking-widest">{type}</p>
                    <h3 className="text-[#e6f1ff] text-2xl font-bold group-hover:text-[#64ffda] transition-colors tracking-tight leading-tight">{title}</h3>
                </div>

                {/* Description */}
                <div style={{ transform: "translateZ(15px)" }} className="mb-6">
                    <p className="text-[#a8b2d1] text-[15px] leading-relaxed font-light mb-4">
                        {description}
                    </p>
                    {details && details.length > 0 && (
                        <ul className="space-y-2 mb-6">
                            {details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2 text-[#8892b0] text-sm">
                                    <span className="text-[#64ffda] mt-1 line-height-1">▹</span>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Tech Stack Footer */}
                <div style={{ transform: "translateZ(10px)" }} className="mt-auto">
                    <div className="text-[#64ffda] text-[13px] font-mono mb-6 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                        <span className="text-[#8892b0] mr-2">Tech Stack:</span>
                        {techStack.join(" · ")}
                    </div>

                    <div className="flex items-center gap-6 border-t border-white/5 pt-6">
                        {link && (
                            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#a8b2d1] hover:text-[#64ffda] transition-colors text-sm font-mono font-bold group/link">
                                <Github className="w-4 h-4" suppressHydrationWarning />
                                <span>SOURCE_CODE</span>
                            </a>
                        )}
                        <a href="#" className="flex items-center gap-2 text-[#a8b2d1] hover:text-[#64ffda] transition-colors text-sm font-mono font-bold ml-auto group/link">
                            <span>DETAILS</span>
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" suppressHydrationWarning />
                        </a>
                    </div>
                </div>
            </div>

            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
};

export default ProjectCard;
