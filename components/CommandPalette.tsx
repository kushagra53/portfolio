"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, Folder, Mail, Terminal, X, ArrowRight, Monitor } from "lucide-react";

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
            /* Listen for real keypresses */
            if ((e.metaKey || e.ctrlKey) && e.key === "k") {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };

        /* Listen for custom event from Navbar */
        const handleOpenCommandEvent = () => setIsOpen(true);

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("open-command-palette", handleOpenCommandEvent);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("open-command-palette", handleOpenCommandEvent);
        };
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
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                    />

                    {/* Command Palette */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="relative w-full max-w-lg bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl overflow-hidden ring-1 ring-emerald-500/20"
                    >
                        <div className="flex items-center px-4 border-b border-slate-800/50">
                            <Search size={18} className="text-emerald-500/50" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Execute command..."
                                className="flex-1 px-4 py-4 bg-transparent text-emerald-100 placeholder-slate-500 focus:outline-none font-mono text-sm"
                            />
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-slate-800 rounded text-slate-500 hover:text-slate-300 transition-colors"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="p-2">
                            {filteredCommands.length > 0 ? (
                                <div className="space-y-1">
                                    <div className="px-2 py-1.5 text-[10px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                        <Monitor size={10} />
                                        System Commands
                                    </div>
                                    {filteredCommands.map((cmd) => (
                                        <button
                                            key={cmd.id}
                                            onClick={cmd.action}
                                            className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-emerald-500/10 hover:text-emerald-400 group transition-all text-left border border-transparent hover:border-emerald-500/20"
                                        >
                                            <div className="p-2 rounded bg-slate-800/50 text-slate-400 group-hover:bg-emerald-500/20 group-hover:text-emerald-500 transition-colors">
                                                <cmd.icon size={16} />
                                            </div>
                                            <span className="flex-1 font-mono text-sm text-slate-300 group-hover:text-emerald-400">
                                                {cmd.label}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <span className="font-mono text-[10px] text-slate-600 group-hover:text-emerald-500/50">Return</span>
                                                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-emerald-500" />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className="px-4 py-8 text-center text-slate-500 font-mono text-sm">
                                    No matching executables found.
                                </div>
                            )}
                        </div>

                        <div className="px-4 py-2 border-t border-slate-800/50 bg-slate-950/30 flex items-center justify-between text-[10px] text-slate-600 font-mono">
                            <div className="flex gap-2">
                                <span><kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-400">Esc</kbd> close</span>
                                <span><kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-400">↑↓</kbd> navigate</span>
                                <span><kbd className="px-1 py-0.5 rounded bg-slate-800 text-slate-400">Enter</kbd> select</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                <span>ONLINE</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
