"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/lib/data";

const iconMap: { [key: string]: React.ReactNode } = {
    github: <Github size={20} />,
    linkedin: <Linkedin size={20} />,
    mail: <Mail size={20} />,
};

export default function Footer() {
    const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <footer className="py-12 border-t border-slate-800">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo / Brand */}
                    <motion.a
                        href="#"
                        className="font-mono text-lg font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
                        whileHover={{ scale: 1.02 }}
                    >
                        {"<K />"}
                    </motion.a>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 text-slate-400 hover:text-emerald-500 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-all"
                                whileHover={{ y: -2, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={link.name}
                            >
                                {iconMap[link.icon]}
                            </motion.a>
                        ))}
                    </div>

                    {/* Last Updated */}
                    <div className="font-mono text-xs text-slate-500">
                        <span className="text-slate-600">Last Updated:</span>{" "}
                        <span className="text-slate-400">{currentDate}</span>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-6 border-t border-slate-800/50 text-center">
                    <p className="font-mono text-xs text-slate-500">
                        © {new Date().getFullYear()} • Built with Next.js, TypeScript & Tailwind
                    </p>
                </div>
            </div>
        </footer>
    );
}
