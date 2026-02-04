"use client";

import { motion } from "framer-motion";
import { Download, CheckCircle, Loader2 } from "lucide-react";

const downloads = [
    { id: 1, name: "Advanced RAG Patterns", progress: 85, status: "Compiling..." },
    { id: 2, name: "Rust for Security Tools", progress: 30, status: "Downloading..." },
    { id: 3, name: "Kubernetes Security", progress: 60, status: "Scanning..." },
];

export default function DownloadQueue() {
    return (
        <section className="py-12 border-t border-slate-900 bg-black/20">
            <div className="max-w-xl mx-auto px-6">
                <div className="flex items-center gap-2 mb-6 text-slate-500">
                    <Download size={14} className="animate-bounce" />
                    <span className="font-mono text-xs uppercase tracking-widest">Active Learning Queue</span>
                </div>

                <div className="space-y-4">
                    {downloads.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-900/50 border border-slate-800 rounded-lg p-3"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-mono text-sm text-slate-300">{item.name}</span>
                                <span className="font-mono text-xs text-emerald-500">{item.progress}%</span>
                            </div>

                            {/* Progress Bar Container */}
                            <div className="relative h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                {/* Animated Bar */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.progress}%` }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute top-0 left-0 h-full bg-emerald-500 rounded-full"
                                />

                                {/* Pulse Effect */}
                                <motion.div
                                    className="absolute top-0 left-0 h-full w-full bg-white/20"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                />
                            </div>

                            <div className="mt-2 flex items-center justify-between">
                                <span className="font-mono text-[10px] text-slate-600 flex items-center gap-1">
                                    <Loader2 size={8} className="animate-spin" />
                                    {item.status}
                                </span>
                                <span className="font-mono text-[10px] text-slate-700">
                                    [ETA: VARIES]
                                </span>
                            </div>
                        </motion.div>
                    ))}

                    <div className="pt-2 text-center">
                        <span className="font-mono text-[10px] text-slate-700">
                            {">"} TOTAL_BANDWIDTH: UNLIMITED
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
