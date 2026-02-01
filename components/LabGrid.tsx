"use client";

import { motion, Variants } from "framer-motion";
import { labFolders } from "@/lib/data";
import { Folder, FolderOpen, ChevronRight, Lock, Code2 } from "lucide-react";
import { useState } from "react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50, damping: 20 }
    },
};

export default function LabGrid() {
    const [hoveredFolder, setHoveredFolder] = useState<string | null>(null);

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
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {labFolders.map((folder, index) => (
                        <motion.div
                            key={folder.id}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            onMouseEnter={() => setHoveredFolder(folder.id)}
                            onMouseLeave={() => setHoveredFolder(null)}
                            className={`group relative rounded-xl border transition-all duration-300 bg-slate-900/40 backdrop-blur-sm overflow-hidden h-full flex flex-col ${hoveredFolder === folder.id
                                    ? 'border-emerald-500/50 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.15)]'
                                    : 'border-slate-800'
                                }`}
                        >
                            {/* Folder Tab */}
                            <div
                                className={`flex items-center justify-between px-5 py-3 border-b transition-colors duration-300 ${hoveredFolder === folder.id
                                        ? "bg-emerald-500/10 border-emerald-500/20"
                                        : "bg-slate-900/80 border-slate-800"
                                    }`}
                            >
                                <div className="flex items-center gap-2">
                                    {hoveredFolder === folder.id ? (
                                        <FolderOpen size={16} className="text-emerald-400" />
                                    ) : (
                                        <Folder size={16} className={folder.color === "emerald" ? "text-slate-400" : "text-slate-500"} />
                                    )}
                                    <span
                                        className={`font-mono text-xs tracking-wide transition-colors ${hoveredFolder === folder.id ? "text-emerald-400" : "text-slate-400"
                                            }`}
                                    >
                                        /{folder.name}
                                    </span>
                                </div>
                                {hoveredFolder === folder.id && (
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
                            <div className="p-5 space-y-4 flex-1">
                                {folder.projects.map((project, pIndex) => (
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
                            <div className="px-5 py-3 border-t border-slate-800/50 bg-slate-900/60 flex items-center justify-between text-[10px] font-mono text-slate-600">
                                <span>PERMISSION: DR-XR-XR-X</span>
                                <span>{folder.projects.length} FILES</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
