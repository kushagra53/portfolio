"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, Search, User, Folder, Mail, Terminal, X, ArrowRight } from "lucide-react";

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const commands = [
        { id: "projects", label: "goto projects", icon: Folder, action: () => scrollToSection("lab") },
        { id: "whoami", label: "whoami", icon: User, action: () => scrollToSection("top") },
        { id: "contact", label: "initiate_uplink", icon: Mail, action: () => scrollToSection("contact") },
        { id: "skills", label: "list_skills", icon: Terminal, action: () => scrollToSection("skills") },
    ];

    const filteredCommands = commands.filter(cmd =>
        cmd.label.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        setQuery("");

        if (id === "top") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <>
            {/* Floating Trigger Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all"
            >
                <Command size={24} />
            </motion.button>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                        />

                        {/* Command Palette */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden"
                        >
                            <div className="flex items-center px-4 border-b border-slate-800">
                                <Search size={18} className="text-slate-500" />
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Type a command..."
                                    className="flex-1 px-4 py-4 bg-transparent text-slate-200 placeholder-slate-500 focus:outline-none font-mono text-sm"
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-slate-800 rounded text-slate-500 hover:text-slate-300"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <div className="p-2">
                                {filteredCommands.length > 0 ? (
                                    <div className="space-y-1">
                                        <div className="px-2 py-1.5 text-xs font-mono text-slate-500 uppercase tracking-widest">
                                            Available Execution Paths
                                        </div>
                                        {filteredCommands.map((cmd) => (
                                            <button
                                                key={cmd.id}
                                                onClick={cmd.action}
                                                className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-emerald-500/10 hover:text-emerald-400 group transition-colors text-left"
                                            >
                                                <div className="p-2 rounded bg-slate-800 text-slate-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-500 transition-colors">
                                                    <cmd.icon size={16} />
                                                </div>
                                                <span className="flex-1 font-mono text-sm text-slate-300 group-hover:text-emerald-400">
                                                    {cmd.label}
                                                </span>
                                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-emerald-500" />
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="px-4 py-8 text-center text-slate-500 font-mono text-sm">
                                        No matching executables found.
                                    </div>
                                )}
                            </div>

                            <div className="px-4 py-2 border-t border-slate-800 bg-slate-950/50 flex items-center justify-between text-[10px] text-slate-600 font-mono">
                                <div className="flex gap-2">
                                    <span>Press <kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-400">Esc</kbd> to close</span>
                                    <span><kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-400">↑↓</kbd> to navigate</span>
                                </div>
                                <span>v1.0.0</span>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
