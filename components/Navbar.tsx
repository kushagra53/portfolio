"use client";

import { motion } from "framer-motion";
import { Github, Search } from "lucide-react";
import { navLinks, bio } from "@/lib/data";

export default function Navbar() {
    const handleOpenCommand = () => {
        window.dispatchEvent(new CustomEvent("open-command-palette"));
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800"
        >
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
                <motion.a
                    href="#"
                    className="font-mono text-base md:text-lg font-semibold text-emerald-500 hover:text-emerald-400 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                >
                    {"<K />"}
                </motion.a>

                <div className="flex items-center gap-3 md:gap-6">
                    {/* Nav Links — Desktop only */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="font-mono text-sm text-slate-400 hover:text-emerald-500 transition-colors min-h-[44px] flex items-center"
                                whileHover={{ y: -2 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Command Palette — Desktop: CTRL+K hint */}
                    <button
                        onClick={handleOpenCommand}
                        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/50 border border-slate-800 text-slate-500 hover:text-emerald-500 hover:border-emerald-500/50 transition-all cursor-pointer min-h-[44px]"
                    >
                        <span className="font-mono text-xs">CTRL + K</span>
                    </button>

                    {/* Command Palette — Mobile: Search icon */}
                    <button
                        onClick={handleOpenCommand}
                        className="md:hidden flex items-center justify-center min-h-[44px] min-w-[44px] rounded bg-slate-900/50 border border-slate-800 text-slate-400 active:text-emerald-500 active:border-emerald-500/50 transition-all"
                        aria-label="Open command palette"
                    >
                        <Search size={18} />
                    </button>

                    <motion.a
                        href={bio.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-500 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github size={20} />
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    );
}
