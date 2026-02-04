"use client";

import { motion } from "framer-motion";
import { labFolders } from "@/lib/data";
import { Folder, FolderOpen, ChevronRight, Code2 } from "lucide-react";
import { useState } from "react";

// Simplified Project Card without 3D tilt
function ProjectCard({ folder, index }: { folder: any; index: number }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, type: "spring", stiffness: 50, damping: 20 }}
            className="h-full"
        >
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`group relative rounded-xl border transition-all duration-300 bg-slate-900/40 backdrop-blur-sm h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)] ${hovered ? 'border-emerald-500' : 'border-slate-800'
                    }`}
            >
                {/* Simple TopHighlight */}
                {hovered && (
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50" />
                )}

                {/* Folder Tab */}
                <div
                    className={`relative z-10 flex items-center justify-between px-5 py-3 border-b transition-colors duration-300 ${hovered
                            ? "bg-emerald-500/10 border-emerald-500/20"
                            : "bg-slate-900/80 border-slate-800"
                        }`}
                >
                    <div className="flex items-center gap-2">
                        {hovered ? (
                            <FolderOpen size={16} className="text-emerald-400" />
                        ) : (
                            <Folder size={16} className={folder.color === "emerald" ? "text-slate-400" : "text-slate-500"} />
                        )}
                        <span
                            className={`font-mono text-xs tracking-wide transition-colors ${hovered ? "text-emerald-400" : "text-slate-400"
                                }`}
                        >
                            /{folder.name}
                        </span>
                    </div>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-emerald-500"
                        >
                            <ChevronRight size={14} />
                        </motion.div>
                    )}
                </div>

                {/* Folder Content */}
                <div className="relative z-10 p-5 space-y-4 flex-1">
                    {folder.projects.map((project: any, pIndex: number) => (
                        <div
                            key={pIndex}
                            className="group/item p-3 rounded-lg bg-slate-800/20 border border-slate-700/30 hover:bg-slate-800/60 hover:border-emerald-500/30 transition-all cursor-crosshair"
                        >
                            <div className="flex items-start gap-3">
                                <div className="mt-1 p-1 rounded bg-slate-800 text-slate-400 group-hover/item:text-emerald-400 group-hover/item:bg-emerald-500/10 transition-colors">
                                    <Code2 size={12} />
                                </div>
                                <div>
                                    <h4 className="font-mono text-sm text-slate-200 group-hover/item:text-emerald-400 transition-colors">
                                        {project.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                                        {project.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Folder Footer */}
                <div
                    className="relative z-10 px-5 py-3 border-t border-slate-800/50 bg-slate-900/60 flex items-center justify-between text-[10px] font-mono text-slate-600"
                >
                    <span>PERMISSION: DR-XR-XR-X</span>
                    <span>{folder.projects.length} FILES</span>
                </div>
            </div>
        </motion.div>
    );
}

export default function LabGrid() {
    return (
        <section id="lab" className="py-24">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex items-end justify-between border-b border-slate-800 pb-4"
                >
                    <div>
                        <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase mb-1 block">
                            Directory Listing
                        </span>
                        <h2 className="font-mono text-3xl md:text-4xl font-bold text-slate-100">
                            PROJECT_LAB
                        </h2>
                    </div>
                    <div className="hidden md:block font-mono text-xs text-slate-500">
                        Total Projects: {labFolders.reduce((acc, folder) => acc + folder.projects.length, 0)}
                    </div>
                </motion.div>

                {/* Lab Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {labFolders.map((folder, index) => (
                        <ProjectCard key={folder.id} folder={folder} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
