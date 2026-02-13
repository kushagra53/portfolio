"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Brain, Activity, Zap } from "lucide-react";

const nodes = [
    {
        id: "security",
        label: "Security Engineering",
        icon: Shield,
        color: "text-red-400",
        bgColor: "bg-red-500/10",
        borderColor: "border-red-500/20",
        description: "The foundation. Enforcing Zero Trust architectures via Terraform and simulating adversary tactics (CTFs) to preemptively harden infrastructure."
    },
    {
        id: "anomaly",
        label: "Anomaly Detection",
        icon: Activity,
        color: "text-yellow-400",
        bgColor: "bg-yellow-500/10",
        borderColor: "border-yellow-500/20",
        description: "The intersection. Replacing brittle, static signatures with probabilistic models to identify zero-day threats that bypass firewalls."
    },
    {
        id: "aiml",
        label: "Applied AI / RAG",
        icon: Brain,
        color: "text-emerald-400",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20",
        description: "The evolution. Architecting context-aware retrieval systems (RAG) and researching defenses against prompt injection in LLM pipelines."
    },
];

export default function KnowledgeGraph() {
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const [typedText, setTypedText] = useState("");
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTypedText("");

        if (!activeNode) return;

        const node = nodes.find(n => n.id === activeNode);
        if (!node) return;

        const text = node.description;
        let index = 0;

        const timeout = setTimeout(() => {
            intervalRef.current = setInterval(() => {
                if (index < text.length) {
                    setTypedText(text.substring(0, index + 1));
                    index++;
                } else {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            }, 35);
        }, 100);

        return () => {
            clearTimeout(timeout);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [activeNode]);

    return (
        <section id="skills" className="py-16 md:py-32 relative">
            <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 md:mb-20 text-center"
                >
                    <span className="font-mono text-xs text-emerald-500 tracking-[0.2em] uppercase mb-2 block">
                        The Intersection
                    </span>
                    <h2 className="font-mono text-2xl md:text-5xl font-bold text-slate-100">
                        WHY_THIS_PATH
                    </h2>
                </motion.div>

                {/* ═══════════════════════════════════════════ */}
                {/* DESKTOP: Interactive hover graph            */}
                {/* ═══════════════════════════════════════════ */}
                <div className="hidden md:block">
                    <div className="flex flex-row items-center justify-center gap-4 relative">
                        {nodes.map((node, index) => (
                            <div key={node.id} className="flex flex-row items-center group relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    onMouseEnter={() => setActiveNode(node.id)}
                                    onMouseLeave={() => setActiveNode(null)}
                                    className={`relative w-40 h-40 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 bg-slate-900/80 border ${activeNode === node.id ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)]' : 'border-slate-800 hover:border-slate-600'}`}
                                >
                                    <div className={`mb-2 transition-transform duration-300 ${activeNode === node.id ? 'scale-110' : ''}`}>
                                        <node.icon size={32} className={activeNode === node.id ? node.color : 'text-slate-500'} />
                                    </div>
                                    <span className={`font-mono text-xs text-center px-2 transition-colors duration-300 ${activeNode === node.id ? 'text-slate-100' : 'text-slate-500'}`}>
                                        {node.label}
                                    </span>
                                </motion.div>

                                {index < nodes.length - 1 && (
                                    <div className="flex items-center justify-center w-24 relative overflow-hidden h-1">
                                        <div className="absolute inset-0 bg-slate-800 opacity-30" />
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent w-1/2 h-full"
                                            animate={{ x: ['-100%', '200%'] }}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Typing Interaction Area */}
                    <div className="h-40 mt-12 flex justify-center items-start">
                        <AnimatePresence mode="wait">
                            {activeNode ? (
                                <motion.div
                                    key={activeNode}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="max-w-2xl text-center px-4 w-full"
                                >
                                    <div className="inline-block p-6 rounded-lg bg-slate-900/50 border border-emerald-500/20 backdrop-blur-sm w-full min-h-[120px]">
                                        <p className="font-mono text-emerald-400 text-sm md:text-base leading-relaxed tracking-wide text-left">
                                            <span className="text-emerald-600 mr-2">{">"}</span>
                                            {typedText}
                                            <span className="animate-pulse inline-block w-2 h-4 bg-emerald-500 ml-1 align-middle">_</span>
                                        </p>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="prompt"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center justify-center gap-2 text-slate-600 font-mono text-sm mt-8"
                                >
                                    <Zap size={14} className="animate-pulse" />
                                    HOVER_NODES_TO_DECRYPT_INTEL
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* ═══════════════════════════════════════════ */}
                {/* MOBILE: Static card layout                  */}
                {/* ═══════════════════════════════════════════ */}
                <div className="md:hidden space-y-4">
                    {nodes.map((node, index) => (
                        <motion.div
                            key={node.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className={`p-4 rounded-lg bg-slate-900/60 border border-slate-800 backdrop-blur-sm`}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className={`p-2 rounded-lg ${node.bgColor} ${node.borderColor} border`}>
                                    <node.icon size={20} className={node.color} />
                                </div>
                                <h3 className="font-mono text-sm font-semibold text-slate-200">
                                    {node.label}
                                </h3>
                            </div>
                            <p className="font-mono text-xs text-slate-400 leading-relaxed pl-1">
                                <span className="text-emerald-600 mr-1">{">"}</span>
                                {node.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}