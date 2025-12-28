"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const FloatingNodes = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 900], [1, 0]);
    const pointerEvents = useTransform(scrollY, (value) => value > 900 ? "none" : "auto");

    const nodes = [
        {
            icon: Github,
            href: "https://github.com/kushagra53",
            label: "GITHUB",
            position: "top-[15%] right-[10%]"
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/kushagra-pandey-bb6b9a285/",
            label: "LINKEDIN",
            position: "top-[45%] left-[5%]"
        },
        {
            icon: Mail,
            href: "mailto:contact@kushagra.dev",
            label: "MAIL",
            position: "bottom-[15%] right-[15%]"
        },
    ];

    return (
        <motion.div
            className="fixed inset-0 z-[9999] overflow-hidden block"
            style={{ opacity, pointerEvents: pointerEvents as any }}
        >
            {nodes.map((node, i) => (
                <motion.a
                    key={node.label}
                    href={node.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: [0, 40, -30, 20, 0],
                        y: [0, -50, 20, -10, 0],
                        rotate: [0, 10, -10, 5, 0]
                    }}
                    transition={{
                        opacity: { duration: 0.5, delay: i * 0.2 },
                        scale: { duration: 0.5, delay: i * 0.2 },
                        x: {
                            duration: 18 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        y: {
                            duration: 18 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        },
                        rotate: {
                            duration: 18 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    whileHover={{
                        scale: 1.2,
                        rotate: 0,
                        transition: { duration: 0.2 }
                    }}
                    className={`fixed ${node.position} flex items-center justify-center cursor-pointer pointer-events-auto`}
                >
                    {/* Solid White Pearl */}
                    <div
                        className="w-28 h-28 rounded-full flex items-center justify-center border-0 shadow-[0_0_50px_rgba(255,255,255,0.8)] transition-all duration-300 group"
                        style={{
                            backgroundColor: "#ffffff", // HARD CODED WHITE
                            opacity: 1, // HARD CODED OPACITY
                            boxShadow: "0 0 20px 5px rgba(255, 255, 255, 0.6)" // HARD CODED GLOW
                        }}
                        suppressHydrationWarning
                    >
                        <node.icon
                            size={48}
                            className="text-[#0a192f] transition-transform group-hover:scale-110"
                            strokeWidth={2.5}
                            suppressHydrationWarning
                        />

                        {/* Tooltip */}
                        <span className="absolute -bottom-14 left-1/2 -translate-x-1/2 px-4 py-2 bg-white text-[#0a192f] text-xs font-bold rounded-md shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border-2 border-gray-200">
                            {node.label}
                        </span>
                    </div>
                </motion.a>
            ))}
        </motion.div>
    );
};

export default FloatingNodes;
