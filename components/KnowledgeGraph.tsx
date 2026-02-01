"use client";

import { motion } from "framer-motion";
import { Shield, Brain, Activity, ArrowLeftRight } from "lucide-react";

const nodes = [
    { id: "security", label: "Security / Hacking", icon: Shield },
    { id: "anomaly", label: "Anomaly Detection", icon: Activity },
    { id: "aiml", label: "AI / ML", icon: Brain },
];

export default function KnowledgeGraph() {
    return (
        <section id="skills" className="py-24">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase">
                        The Intersection
                    </span>
                    <h2 className="font-mono text-3xl md:text-4xl font-bold text-slate-100 mt-3">
                        WHY_THIS_PATH
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto mt-4">
                        The edge comes from combining these domains.
                    </p>
                </motion.div>

                {/* Knowledge Graph Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0"
                >
                    {nodes.map((node, index) => (
                        <div key={node.id} className="flex items-center">
                            {/* Node */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.15, duration: 0.4 }}
                                className="group relative"
                            >
                                <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-emerald-500/50 transition-all">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="p-3 rounded-lg bg-slate-800/50 text-slate-400 group-hover:text-emerald-500 transition-colors">
                                            <node.icon size={28} />
                                        </div>
                                        <span className="font-mono text-sm text-slate-300 text-center">
                                            {node.label}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Connector (between nodes) */}
                            {index < nodes.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    whileInView={{ opacity: 1, scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                                    className="hidden md:flex items-center px-4"
                                >
                                    <div className="w-8 h-px bg-gradient-to-r from-slate-700 to-emerald-500/50" />
                                    <ArrowLeftRight size={16} className="text-emerald-500/50 mx-1" />
                                    <div className="w-8 h-px bg-gradient-to-r from-emerald-500/50 to-slate-700" />
                                </motion.div>
                            )}

                            {/* Mobile connector */}
                            {index < nodes.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.3 }}
                                    className="md:hidden h-8 w-px bg-gradient-to-b from-slate-700 via-emerald-500/50 to-slate-700 my-2"
                                />
                            )}
                        </div>
                    ))}
                </motion.div>

                {/* Insight Box */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="mt-12 max-w-2xl mx-auto p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-center"
                >
                    <p className="font-mono text-sm text-emerald-500/80">
                        {">"} The realization: AI/ML is the edge needed in Cybersecurity
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
