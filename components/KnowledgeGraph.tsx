"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Brain, Activity, ArrowRight, Lock, Zap } from "lucide-react";

const nodes = [
    {
        id: "security",
        label: "Security / Hacking",
        icon: Shield,
        color: "text-red-400",
        description: "Understanding offensive vectors is the only way to build defensive walls."
    },
    {
        id: "anomaly",
        label: "Anomaly Detection",
        icon: Activity,
        color: "text-yellow-400",
        description: "Monitoring patterns in real-time to catch what rules miss."
    },
    {
        id: "aiml",
        label: "AI / ML",
        icon: Brain,
        color: "text-emerald-400",
        description: "Static rules fail. Models adapt. ML is the new firewall."
    },
];

export default function KnowledgeGraph() {
    const [activeNode, setActiveNode] = useState<string | null>(null);
    const [typedText, setTypedText] = useState("");

    // Typing effect
    useEffect(() => {
        if (!activeNode) {
            setTypedText("");
            return;
        }

        const node = nodes.find(n => n.id === activeNode);
        if (!node) return;

        let index = 0;
        const text = node.description;
        setTypedText("");

        const interval = setInterval(() => {
            if (index < text.length) {
                setTypedText(prev => prev + text[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
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

                {/* Knowledge Graph Visual */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4 relative">

                    {nodes.map((node, index) => (
                        <div key={node.id} className="flex flex-col md:flex-row items-center group relative z-10">

                            {/* Node */}
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
                                <span className={`font-mono text-xs text-center px-2 transition-colors duration-300 ${activeNode === node.id ? 'text-slate-100' : 'text-slate-500'}`}>
                                    {node.label}
                                </span>

                                {/* Pulse Effect */}
                                {activeNode === node.id && (
                                    <span className="absolute inset-0 rounded-full border border-emerald-500/50 animate-ping opacity-20" />
                                )}
                            </motion.div>

                            {/* Animated Connector */}
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

                            {/* Mobile Connector */}
                            {index < nodes.length - 1 && (
                                <div className="md:hidden w-1 h-16 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-slate-800 opacity-30" />
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500 to-transparent h-1/2 w-full"
                                        animate={{ y: ['-100%', '200%'] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Typing Interaction Area */}
                <div className="h-24 mt-12 flex justify-center">
                    <AnimatePresence mode="wait">
                        {activeNode ? (
                            <motion.div
                                key="message"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="mt-6 max-w-xl text-center px-4"
                            >
                                <div className="inline-block p-4 rounded-lg bg-slate-900/50 border border-emerald-500/20 backdrop-blur-sm">
                                    <p className="font-mono text-emerald-400 text-sm md:text-base min-h-[1.5em]">
                                        {">"} {typedText}
                                        <span className="animate-pulse inline-block w-2 H-4 bg-emerald-500 ml-1 align-middle">_</span>
                                    </p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="prompt"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="mt-6 flex items-center justify-center gap-2 text-slate-600 font-mono text-sm"
                            >
                                <Zap size={14} className="animate-pulse" />
                                HOVER_NODES_TO_DECRYPT
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
