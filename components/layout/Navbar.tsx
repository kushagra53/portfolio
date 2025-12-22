"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "The Vault", href: "#projects" },
        { name: "System Logs", href: "#about" },
        { name: "Encrypted Comms", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-[#0a192f]/80 backdrop-blur-md border-[#64ffda]/10 py-2 shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]"
                    : "bg-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-4">
                        <div className="relative flex items-center justify-center w-12 h-12 border-2 border-[#64ffda] rounded-sm bg-[#0a192f] group-hover:bg-[#64ffda]/20 transition-all shadow-[0_0_10px_rgba(100,255,218,0.3)]" suppressHydrationWarning>
                            <Shield className="w-8 h-8 text-[#64ffda]" suppressHydrationWarning />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[#e6f1ff] font-bold font-mono tracking-tighter text-2xl leading-none group-hover:animate-glitch">
                                KUSHAGRA<span className="text-[#64ffda]">.PANDEY</span>
                            </span>
                            <span className="text-xs text-[#8892b0] font-mono tracking-[0.2em] mt-1 pl-0.5">
                                SECURE//SYSTEMS
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative text-sm font-mono text-[#e6f1ff] hover:text-[#64ffda] transition-colors group"
                                >
                                    <span className="text-[#64ffda] mr-1">0{index + 1}.</span>
                                    {link.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#64ffda] transition-all group-hover:w-full" />
                                </Link>
                            ))}
                        </div>
                        <button className="px-4 py-2 bg-[#64ffda]/10 border border-[#64ffda] text-[#64ffda] text-sm font-mono rounded hover:bg-[#64ffda]/20 transition-all focus:outline-none focus:ring-1 focus:ring-[#64ffda] shadow-[0_0_10px_rgba(100,255,218,0.2)]">
                            Resume.pdf
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-[#64ffda] p-2 hover:bg-[#112240] rounded focus:outline-none"
                        suppressHydrationWarning
                    >
                        {isOpen ? <X size={24} suppressHydrationWarning /> : <Menu size={24} suppressHydrationWarning />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#112240] flex flex-col justify-center items-center md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xl font-mono text-[#e6f1ff] hover:text-[#64ffda] transition-colors"
                                >
                                    <div className="text-[#64ffda] text-xs mb-1">0{index + 1}.</div>
                                    {link.name}
                                </Link>
                            ))}
                            <button className="mt-4 px-8 py-3 border border-[#64ffda] text-[#64ffda] font-mono rounded hover:bg-[#64ffda]/10">
                                Resume.pdf
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
