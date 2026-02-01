"use client";

import { motion } from "framer-motion";
import { bio, socialLinks } from "@/lib/data";
import { Github, Linkedin, Mail, Radio } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
    github: <Github size={16} />,
    linkedin: <Linkedin size={16} />,
};

export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <Radio size={14} className="text-emerald-500" />
                        <span className="font-mono text-xs text-emerald-500 tracking-widest uppercase">
                            Communication Channel
                        </span>
                    </div>

                    <h2 className="font-mono text-3xl md:text-4xl font-bold text-slate-100 mb-8">
                        {">"} INITIATE_CONTACT
                    </h2>

                    {/* Email Display */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="mb-8 p-4 rounded-lg border border-slate-800 bg-slate-900/30"
                    >
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-emerald-500" />
                            <a
                                href={`mailto:${bio.email}`}
                                className="font-mono text-slate-300 hover:text-emerald-500 transition-colors"
                            >
                                {">"} {bio.email}
                            </a>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="flex items-center gap-4"
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 font-mono text-sm text-slate-400 hover:text-emerald-500 border border-slate-800 rounded-lg hover:border-emerald-500/50 transition-all"
                            >
                                {iconMap[link.icon]}
                                <span className="uppercase">{link.name}</span>
                            </a>
                        ))}
                    </motion.div>

                    {/* Status */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                        className="mt-8 pt-6 border-t border-slate-800"
                    >
                        <p className="font-mono text-xs text-slate-600">
                            {">"} Response time: Usually within 24-48 hours
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
