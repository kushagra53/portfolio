"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef, useState } from "react";

interface ProjectCardProps {
    id: string;
    title: string;
    type: string;
    description: string;
    details?: string[];
    techStack: string[];
    link?: string;
    status?: "DEPLOYED" | "PROTOTYPE";
}

const ProjectCard = ({ id, title, type, description, details, techStack, link, status = "DEPLOYED" }: ProjectCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isScanning, setIsScanning] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

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
        setIsScanning(false);
    };

    const handleMouseEnter = () => {
        setIsScanning(true);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            whileHover={{ scale: 1.02 }}
            className="group relative w-full h-full min-h-[400px] rounded-lg bg-[#0a192f]/40 backdrop-blur-md border border-cyan-500/30 p-8 flex flex-col cursor-pointer overflow-hidden transition-all hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(100,255,218,0.15)]"
        >
            {/* Grid Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: "20px 20px"
                }}
            />

            {/* Scanning Line Animation */}
            {isScanning && (
                <motion.div
                    initial={{ top: "-2px" }}
                    animate={{ top: "100%" }}
                    transition={{ duration: 2, ease: "linear" }}
                    className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_10px_rgba(100,255,218,0.8)] z-20"
                />
            )}

            <div className="relative z-10 flex flex-col h-full">
                {/* PROJECT_ID Header */}
                <div style={{ transform: "translateZ(30px)" }} className="mb-4">
                    <p className="text-cyan-400/50 font-mono text-xs mb-2 tracking-wider">[ PROJECT_ID: {id} ]</p>
                    <div className="flex items-start justify-between gap-4">
                        <h3 className="text-white text-2xl font-bold tracking-tight leading-tight flex-1">{title}</h3>
                        {/* Status Badge */}
                        <div className="flex items-center gap-2 px-3 py-1 bg-black/30 rounded-md border border-cyan-500/20">
                            <div className={`w-2 h-2 rounded-full ${status === "DEPLOYED" ? "bg-green-400 animate-pulse" : "bg-amber-400 animate-pulse"}`} />
                            <span className="text-[10px] font-mono text-cyan-400 tracking-wider">{status}</span>
                        </div>
                    </div>
                    <p className="text-cyan-500/70 font-mono text-[11px] mt-1 uppercase tracking-widest">{type}</p>
                </div>

                {/* Description */}
                <div style={{ transform: "translateZ(20px)" }} className="mb-6">
                    <p className="text-slate-300 text-base leading-relaxed mb-4">
                        {description}
                    </p>
                    {details && details.length > 0 && (
                        <ul className="space-y-2">
                            {details.map((detail, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                                    <span className="text-cyan-400 mt-1">▹</span>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* System Modules (Tech Stack) */}
                <div style={{ transform: "translateZ(18px)" }} className="mt-auto">
                    <p className="text-cyan-400/60 text-[10px] font-mono mb-3 tracking-widest uppercase">System Modules:</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {techStack.map((tech, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 text-xs font-mono rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* INITIATE_ACCESS Button */}
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-cyan-500/50 text-cyan-400 font-mono text-sm font-bold uppercase tracking-wider rounded hover:bg-cyan-400 hover:text-black transition-all duration-300 group/btn"
                        >
                            <span>[ INITIATE_ACCESS ]</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" suppressHydrationWarning />
                        </a>
                    )}
                </div>
            </div>

            {/* Holographic Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </motion.div>
    );
};

export default ProjectCard;
