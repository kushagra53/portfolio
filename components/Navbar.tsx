"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
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
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <motion.a
                    href="#"
                    className="font-mono text-lg font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
                    whileHover={{ scale: 1.02 }}
                >
                    {"<K />"}
                </motion.a>

                <div className="flex items-center gap-6">
                    {/* Nav Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                className="font-mono text-sm text-slate-400 hover:text-emerald-500 transition-colors"
                                whileHover={{ y: -2 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Command Palette Trigger */}
                    <button
                        onClick={handleOpenCommand}
                        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900/50 border border-slate-800 text-slate-500 hover:text-emerald-500 hover:border-emerald-500/50 transition-all group cursor-pointer"
                    >
                        <span className="font-mono text-xs">CTRL + K</span>
                    </button>

                    <motion.a
                        href={bio.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-emerald-500 transition-colors"
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
