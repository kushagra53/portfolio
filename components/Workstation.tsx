"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { bio, setup, terminalLines } from "@/lib/data";
import { Monitor, Terminal, Cpu, ShieldCheck, Activity } from "lucide-react";

export default function Workstation() {
    const [displayText, setDisplayText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Cursor blink
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    // Infinite Typing loop
    useEffect(() => {
        const currentLine = terminalLines[lineIndex];

        if (charIndex < currentLine.length) {
            intervalRef.current = setTimeout(() => {
                setDisplayText((prev) => {
                    // Keep only last 5 lines if buffer gets too big
                    const lines = prev.split('\n');
                    if (lines.length > 5) return lines.slice(-5).join('\n') + currentLine[charIndex];
                    return prev + currentLine[charIndex];
                });
                setCharIndex((prev) => prev + 1);
            }, 50);
        } else {
            // Line complete
            intervalRef.current = setTimeout(() => {
                setDisplayText((prev) => prev + "\n");
                setLineIndex((prev) => (prev + 1) % terminalLines.length);
                setCharIndex(0);
            }, 1000);
        }

        return () => {
            if (intervalRef.current) clearTimeout(intervalRef.current);
        };
    }, [charIndex, lineIndex]);

    return (
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">


            <div className="max-w-6xl mx-auto px-4 md:px-6 w-full relative z-10">
                {/* Status Beacon */}
                <div className="mb-6 flex justify-center md:justify-start">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="font-mono text-[10px] text-emerald-400 font-medium tracking-wide">
                            SYSTEM STATUS: OPEN FOR INTERNSHIPS & FREELANCE
                        </span>
                    </div>
                </div>

                {/* Workstation Header Bar */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 p-1 rounded-lg bg-gradient-to-r from-emerald-500/20 to-slate-800/20 backdrop-blur-sm border border-slate-700/50"
                >
                    <div className="flex items-center justify-between px-4 py-2 bg-slate-950/80 rounded border border-slate-800/50">
                        <div className="flex items-center gap-3">
                            <Monitor size={16} className="text-emerald-500 animate-pulse" />
                            <div className="flex flex-col">
                                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Operator</span>
                                <span className="font-mono text-sm text-emerald-500 font-bold tracking-wider">
                                    {bio.name.toUpperCase()}
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="hidden md:flex items-center gap-2">
                                <ShieldCheck size={14} className="text-emerald-500" />
                                <span className="font-mono text-xs text-slate-400">SECURE_CONN_ESTABLISHED</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="font-mono text-xs text-emerald-500 font-bold">
                                    LIVE
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Split View */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Identity */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="space-y-2">
                            <motion.h1
                                className="font-mono text-3xl sm:text-5xl md:text-7xl font-bold text-slate-100 tracking-tighter glitch-reveal"
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                KUSHAGRA<br />
                                <span className="text-emerald-500">PANDEY_</span>
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="w-full h-px bg-gradient-to-r from-emerald-500 to-transparent"
                            />

                            <div className="flex items-center gap-3 pt-2">
                                <div className="px-3 py-1 bg-slate-800/50 border border-slate-700 rounded text-xs font-mono text-emerald-400 uppercase tracking-widest">
                                    The Technical Lab
                                </div>
                                <div className="px-3 py-1 bg-slate-800/30 border border-slate-700/50 rounded text-xs font-mono text-slate-400 uppercase tracking-widest">
                                    v2.0.4
                                </div>
                            </div>
                        </div>

                        <p className="text-slate-400 text-sm md:text-lg leading-relaxed max-w-xl border-l-2 border-emerald-500/30 pl-4 md:pl-6">
                            {bio.about}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {['DevSecOps', 'Machine Learning', 'Cloud Infra', 'Anomaly Detection'].map((item, i) => (
                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.8 + i * 0.1 }}
                                    className="flex items-center gap-2 px-3 md:px-4 py-2 bg-slate-900/50 border border-slate-800 rounded hover:border-emerald-500/30 transition-colors group cursor-default min-h-[44px]"
                                >
                                    <Activity size={14} className="text-emerald-500/50 group-hover:text-emerald-500 transition-colors" />
                                    <span className="font-mono text-xs md:text-sm text-slate-300 group-hover:text-emerald-400 transition-colors">
                                        {item}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Live Terminal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative group"
                    >
                        {/* Green Pulse Glow */}
                        <div className="absolute -inset-0.5 bg-emerald-500/20 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-pulse" />

                        <div className="relative rounded-xl border border-slate-700 bg-black/90 backdrop-blur-xl overflow-hidden shadow-2xl">
                            {/* Terminal Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="flex items-center gap-2">
                                    <Terminal size={12} className="text-slate-500" />
                                    <span className="font-mono text-xs text-slate-500">root@kushagra-lab:~</span>
                                </div>
                            </div>

                            {/* Terminal Body */}
                            <div className="p-6 h-[320px] font-mono text-sm overflow-hidden flex flex-col justify-end">
                                <div className="text-emerald-500/50 mb-4 whitespace-pre-wrap">
                                    {`# Initializing secure environment...
# Loading modules: [Failed] -> Retry... [OK]
# Connecting to neural net... [OK]`}
                                </div>
                                <div className="text-emerald-400 whitespace-pre-wrap leading-relaxed">
                                    <span className="text-emerald-600 mr-2">$</span>
                                    {displayText}
                                    <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-emerald-500 inline-block w-2.5 h-4 bg-emerald-500 ml-1 align-middle`} />
                                </div>
                            </div>

                            {/* Status Footer */}
                            <div className="px-4 py-2 border-t border-slate-800 bg-slate-900/50 flex justify-between items-center">
                                <span className="font-mono text-[10px] text-slate-500">CPU: 12% | MEM: 4.2GB</span>
                                <span className="font-mono text-[10px] text-emerald-500/70 animate-pulse">● PROCESSING_DATA</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
