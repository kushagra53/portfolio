"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, FolderGit2, ArrowUpRight } from "lucide-react";
import React, { useRef } from "react";
import HexGrid from "./HexGrid";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
}

const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    // Reduced tilt range for cleaner look
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

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
            className="relative w-full h-full min-h-[350px] rounded-xl bg-[#112240] border border-[#233554] p-8 group cursor-pointer overflow-hidden"
        >
            {/* Background Geeky Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
                <HexGrid className="w-full h-full" />
            </div>

            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 bg-[#112240]/90 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
            />

            <div style={{ transform: "translateZ(30px)" }} className="relative z-10 flex justify-between items-start mb-6">
                <FolderGit2 className="text-[#64ffda] w-12 h-12" />
                <div className="flex gap-4">
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                    )}
                    <ArrowUpRight className="text-[#a8b2d1] hover:text-[#64ffda] transition-colors w-6 h-6" />
                </div>
            </div>

            <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
                <h3 className="text-[#e6f1ff] text-2xl font-bold mb-3 group-hover:text-[#64ffda] transition-colors tracking-tight">{title}</h3>
                <div className="bg-[#64ffda] h-[2px] w-0 group-hover:w-16 transition-all duration-300 mb-5 ease-out"></div>
                <p className="text-[#a8b2d1] text-base leading-relaxed mb-8 font-light">
                    {description}
                </p>
            </div>

            <div style={{ transform: "translateZ(10px)" }} className="relative z-10 mt-auto">
                <div className="flex flex-wrap gap-3 text-sm font-mono text-[#64ffda]/80">
                    {tags.map(tag => (
                        <span key={tag} className="mr-2 px-2 py-1 bg-[#64ffda]/5 rounded text-[12px]">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
