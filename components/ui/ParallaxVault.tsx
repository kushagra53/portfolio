"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

interface Project {
    id: string;
    title: string;
    type: string;
    description: string;
    details?: string[];
    techStack: string[];
    link?: string;
    status?: "DEPLOYED" | "PROTOTYPE";
}

interface ParallaxVaultProps {
    projects: Project[];
}

const ParallaxVault = ({ projects }: ParallaxVaultProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    // Scroll progress tracking
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth scroll with spring physics
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform scroll to horizontal movement (negative direction)
    const x = useTransform(smoothProgress, [0, 1], [0, -300 * (projects.length - 1)]);

    return (
        <>
            {/* Desktop: Parallax Scroll */}
            <div className="hidden md:block">
                <div ref={containerRef} className="relative h-[400vh]">
                    {/* Sticky container */}
                    <div className="h-screen sticky top-0 flex items-center overflow-hidden">
                        {/* Horizontal scrolling container */}
                        <motion.div
                            style={{ x }}
                            className="flex flex-row w-[400vw] h-full items-center"
                        >
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="w-[80vw] h-[60vh] flex-shrink-0 mx-8"
                                >
                                    <CinematicCard project={project} index={index} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mobile: Vertical Stack Fallback */}
            <div className="block md:hidden space-y-8 px-6">
                {projects.map((project, index) => (
                    <div key={project.id} className="w-full min-h-[400px]">
                        <CinematicCard project={project} index={index} />
                    </div>
                ))}
            </div>
        </>
    );
};

// Cinematic Card Component
const CinematicCard = ({ project, index }: { project: Project; index: number }) => {
    return (
        <div className="relative w-full h-full bg-gradient-to-br from-[#0a192f] via-[#0d1f3a] to-[#0a192f] rounded-xl border-2 border-cyan-500/30 overflow-hidden shadow-[0_0_50px_rgba(100,255,218,0.2)]">
            {/* Grid Overlay */}
            <div
                className="absolute inset-0 opacity-5 z-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(100, 255, 218, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(100, 255, 218, 0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "30px 30px"
                }}
            />

            {/* Vertical Watermark - Fixed Size and Position */}
            <div
                className="absolute -left-12 top-0 bottom-0 flex items-center z-0"
                style={{
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)'
                }}
            >
                <h2 className="text-6xl font-black text-cyan-500/10 tracking-tighter leading-none whitespace-nowrap">
                    PROJECT_0{index + 1}
                </h2>
            </div>

            {/* Content with Backdrop */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 bg-[#0a192f]/90 backdrop-blur-sm rounded-xl">
                {/* Header */}
                <div>
                    <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                            <p className="text-cyan-400/60 font-mono text-xs mb-2 tracking-widest uppercase">
                                [ {project.type} ]
                            </p>
                            <h3 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-4">
                                {project.title}
                            </h3>
                        </div>
                        {/* Status Badge */}
                        {project.status && (
                            <div className="flex items-center gap-2 px-4 py-2 bg-black/40 rounded-lg border border-cyan-500/30">
                                <div
                                    className={`w-3 h-3 rounded-full ${project.status === "DEPLOYED"
                                            ? "bg-green-400 animate-pulse"
                                            : "bg-amber-400 animate-pulse"
                                        }`}
                                />
                                <span className="text-xs font-mono text-cyan-400 tracking-wider">
                                    {project.status}
                                </span>
                            </div>
                        )}
                    </div>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                        {project.description}
                    </p>

                    {/* Details */}
                    {project.details && project.details.length > 0 && (
                        <ul className="space-y-2 mb-6">
                            {project.details.slice(0, 2).map((detail, i) => (
                                <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                                    <span className="text-cyan-400 mt-1">▹</span>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                {/* Tech Stack Circuit */}
                <div>
                    <p className="text-cyan-400/60 text-xs font-mono mb-3 tracking-widest uppercase">
                        System Modules:
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, i) => (
                            <div
                                key={i}
                                className="relative px-3 py-1.5 bg-cyan-950/40 border border-cyan-500/40 text-cyan-400 text-xs font-mono rounded"
                            >
                                {/* Circuit connector line */}
                                {i < project.techStack.length - 1 && (
                                    <div className="absolute top-1/2 -right-2 w-4 h-[1px] bg-cyan-500/30" />
                                )}
                                {tech}
                            </div>
                        ))}
                    </div>

                    {/* Access Button */}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 font-mono text-sm font-bold uppercase tracking-wider rounded hover:bg-cyan-500 hover:text-black transition-all duration-300"
                        >
                            [ INITIATE_ACCESS ]
                        </a>
                    )}
                </div>
            </div>

            {/* Holographic Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/[0.03] via-transparent to-purple-500/[0.02] pointer-events-none z-0" />
        </div>
    );
};

export default ParallaxVault;
