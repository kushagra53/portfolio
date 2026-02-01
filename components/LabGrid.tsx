"use client";

import { motion } from "framer-motion";
import { labFolders } from "@/lib/data";
import { Folder, FolderOpen } from "lucide-react";

export default function LabGrid() {
    return (
        <section id="lab" className="py-24">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase">
                        Project Directory
                    </span>
                    <h2 className="font-mono text-3xl md:text-4xl font-bold text-slate-100 mt-3">
                        THE_LABORATORY
                    </h2>
                    <p className="text-slate-400 max-w-xl mt-4">
                        Organized by focus area. Some deployed, some in research.
                    </p>
                </motion.div>

                {/* Lab Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {labFolders.map((folder, index) => (
                        <motion.div
                            key={folder.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group relative rounded-xl border border-slate-800 bg-slate-900/30 overflow-hidden hover:border-slate-700 transition-all"
                        >
                            {/* Folder Tab */}
                            <div
                                className={`flex items-center gap-2 px-4 py-2 border-b ${folder.color === "emerald"
                                        ? "bg-emerald-500/10 border-emerald-500/20"
                                        : "bg-slate-800/50 border-slate-700"
                                    }`}
                            >
                                <FolderOpen
                                    size={14}
                                    className={
                                        folder.color === "emerald" ? "text-emerald-500" : "text-slate-400"
                                    }
                                />
                                <span
                                    className={`font-mono text-xs ${folder.color === "emerald" ? "text-emerald-500" : "text-slate-400"
                                        }`}
                                >
                                    /{folder.name}
                                </span>
                            </div>

                            {/* Folder Content */}
                            <div className="p-4 space-y-3">
                                {folder.projects.map((project, pIndex) => (
                                    <div
                                        key={pIndex}
                                        className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:border-slate-600 transition-all"
                                    >
                                        <div className="flex items-start gap-2">
                                            <Folder size={14} className="text-slate-500 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-mono text-sm text-slate-200">
                                                    {project.title}
                                                </h4>
                                                <p className="text-xs text-slate-500 mt-1">
                                                    {project.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Folder Status */}
                            <div className="px-4 py-2 border-t border-slate-800 bg-slate-900/50">
                                <span className="font-mono text-[10px] text-slate-600">
                                    {folder.projects.length} items
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
