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
        description: "The foundation. Enforcing Zero Trust architectures via Terraform and simulating adversary tactics (CTFs) to preemptively harden infrastructure."
    },
    {
        id: "anomaly",
        label: "Anomaly Detection",
        icon: Activity,
        color: "text-yellow-400",
        description: "The intersection. Replacing brittle, static signatures with probabilistic models to identify zero-day threats that bypass firewalls."
    },
    {
        id: "aiml",
        label: "Applied AI / RAG",
        icon: Brain,
        color: "text-emerald-400",
        description: "The evolution. Architecting context-aware retrieval systems (RAG) and researching defenses against prompt injection in LLM pipelines."
    },
];

export default function KnowledgeGraph() {
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const [typedText, setTypedText] = useState("");
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // 1. Immediate Cleanup
        if (intervalRef.current) clearInterval(intervalRef.current);
        setTypedText("");

        if (!activeNode) return;

        const node = nodes.find(n => n.id === activeNode);
        if (!node) return;

        const text = node.description;
        let index = 0;

        // 2. Small delay (100ms) before typing starts makes it feel less "jarring"
        const timeout = setTimeout(() => {
            intervalRef.current = setInterval(() => {
                if (index < text.length) {
                    // Use the functional update to ensure we always have the latest state
                    setTypedText(text.substring(0, index + 1));
                    index++;
                } else {
                    if (intervalRef.current) clearInterval(intervalRef.current);
                }
            }, 35); // 35ms is the "Sweet Spot" for a professional terminal feel
        }, 100);

        return () => {
            clearTimeout(timeout);
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [activeNode]);

    return (
        <section id="skills" className="py-32 relative">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <span className="font-mono text-xs text-emerald-500 tracking-[0.2em] uppercase mb-2 block">
                        The Intersection
                    </span>
                    <h2 className="font-mono text-4xl md:text-5xl font-bold text-slate-100">
                        WHY_THIS_PATH
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4 relative">
                    {nodes.map((node, index) => (
                        <div key={node.id} className="flex flex-col md:flex-row items-center group relative z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                onMouseEnter={() => setActiveNode(node.id)}
                                onMouseLeave={() => setActiveNode(null)}
                                className={`relative w-32 h-32 md:w-40 md:h-40 rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300 bg-slate-900/80 border ${activeNode === node.id ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)]' : 'border-slate-800 hover:border-slate-600'}`}
                            >
                                <div className={`mb-2 transition-transform duration-300 ${activeNode === node.id ? 'scale-110' : ''}`}>
                                    <node.icon size={32} className={activeNode === node.id ? node.color : 'text-slate-500'} />
                                </div>
                                <span className={`font-mono text-[10px] md:text-xs text-center px-2 transition-colors duration-300 ${activeNode === node.id ? 'text-slate-100' : 'text-slate-500'}`}>
                                    {node.label}
                                </span>
                            </motion.div>

                            {index < nodes.length - 1 && (
                                <div className="hidden md:flex items-center justify-center w-24 relative overflow-hidden h-1">
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

                <div className="h-40 mt-12 flex justify-center items-start">
                    <AnimatePresence mode="wait">
                        {activeNode ? (
                            <motion.div
                                key={activeNode} // Key change triggers fresh animation
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
        </section>
    );
}