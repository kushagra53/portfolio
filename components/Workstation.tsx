"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { bio, setup, terminalLines } from "@/lib/data";
import { Monitor, Terminal, Cpu } from "lucide-react";

export default function Workstation() {
    const [displayText, setDisplayText] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);
    const [isComplete, setIsComplete] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Cursor blink
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    // Typing effect - plays once on mount
    useEffect(() => {
        if (isComplete) return;

        const currentLine = terminalLines[lineIndex];

        if (charIndex < currentLine.length) {
            intervalRef.current = setTimeout(() => {
                setDisplayText((prev) => prev + currentLine[charIndex]);
                setCharIndex((prev) => prev + 1);
            }, 60);
        } else {
            // Line complete
            intervalRef.current = setTimeout(() => {
                if (lineIndex < terminalLines.length - 1) {
                    setDisplayText((prev) => prev + "\n");
                    setLineIndex((prev) => prev + 1);
                    setCharIndex(0);
                } else {
                    setIsComplete(true);
                }
            }, 1500);
        }

        return () => {
            if (intervalRef.current) clearTimeout(intervalRef.current);
        };
    }, [charIndex, lineIndex, isComplete]);

    return (
        <section className="min-h-screen flex items-center pt-20">
            <div className="max-w-5xl mx-auto px-6 py-16 w-full">
                {/* Workstation Header Bar */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 p-3 rounded-lg border border-slate-800 bg-slate-900/50 flex items-center justify-between"
                >
                    <div className="flex items-center gap-3">
                        <Monitor size={16} className="text-emerald-500" />
                        <span className="font-mono text-sm text-slate-300">
                            USER: <span className="text-emerald-500">{bio.name.toUpperCase()}</span>
                        </span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="font-mono text-xs text-slate-500">
                            OS: {setup.primaryOS} | LAB: {setup.labEnvironment}
                        </span>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                            <span className="font-mono text-xs text-emerald-500">
                                STATUS: {bio.status}
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Split View */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left: About */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div>
                            <h1 className="font-mono text-3xl md:text-4xl font-bold text-slate-100 mb-4">
                                The <span className="text-emerald-500">Technical</span> Lab
                            </h1>
                            <p className="text-slate-400 leading-relaxed">
                                {bio.tagline}
                            </p>
                        </div>

                        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/30">
                            <div className="flex items-center gap-2 mb-3">
                                <Cpu size={14} className="text-emerald-500" />
                                <span className="font-mono text-xs text-slate-500 uppercase">
                                    Background
                                </span>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                {bio.about}
                            </p>
                        </div>

                        {/* Current Focus */}
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1.5 font-mono text-xs text-emerald-500 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                                Currently Learning
                            </span>
                            <span className="px-3 py-1.5 font-mono text-xs text-slate-400 bg-slate-800/50 border border-slate-700 rounded-lg">
                                Polishing Skills
                            </span>
                        </div>
                    </motion.div>

                    {/* Right: Live Terminal */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="rounded-xl border border-slate-800 bg-black/80 overflow-hidden"
                    >
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <span className="font-mono text-xs text-slate-500">
                                workstation.sh
                            </span>
                            <Terminal size={12} className="text-slate-500" />
                        </div>

                        {/* Terminal Body */}
                        <div className="p-4 min-h-[200px]">
                            <pre className="font-mono text-sm text-emerald-400 whitespace-pre-wrap leading-relaxed">
                                {displayText}
                                <span className={`${showCursor ? "opacity-100" : "opacity-0"} text-emerald-500`}>
                                    █
                                </span>
                            </pre>
                            {isComplete && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-4 pt-3 border-t border-slate-800"
                                >
                                    <span className="font-mono text-xs text-slate-500">
                                        {">"} Ready for next task...
                                    </span>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
