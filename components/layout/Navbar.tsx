"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Background blur threshold
            setScrolled(currentScrollY > 50);

            // Auto-hide logic
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setVisible(false); // Scrolling down
            } else {
                setVisible(true); // Scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "The Vault", href: "#projects" },
        { name: "System Logs", href: "#about" },
        { name: "Encrypted Comms", href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                scrolled
                    ? "bg-[#0a192f]/90 backdrop-blur-lg border-[#64ffda]/10 py-2 shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)]"
                    : "bg-transparent py-4",
                !visible && !isOpen ? "-translate-y-full" : "translate-y-0"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between h-16">
                    {/* Logo remains the same */}
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
                        className="md:hidden text-[#64ffda] p-2 hover:bg-[#112240] rounded focus:outline-none z-[60] relative"
                        suppressHydrationWarning
                    >
                        {isOpen ? <X size={28} suppressHydrationWarning /> : <Menu size={28} suppressHydrationWarning />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay - Force Right Side Fix */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-[#020c1b]/80 backdrop-blur-sm z-[99] md:hidden"
                            suppressHydrationWarning
                        />
                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed right-0 top-0 h-screen w-64 z-[100] bg-[#112240] shadow-[-10px_0_30px_rgba(2,12,27,0.5)] flex flex-col p-8 md:hidden shadow-cyan-900/20"
                        >
                            {/* Inner Close Button */}
                            <button
                                onClick={() => setIsOpen(false)}
                                className="self-end text-[#64ffda] p-2 hover:bg-[#112240] rounded mb-12"
                            >
                                <X size={32} />
                            </button>

                            <div className="flex flex-col gap-10 text-center w-full">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-mono text-[#e6f1ff] hover:text-[#64ffda] transition-colors group flex flex-col items-center"
                                    >
                                        <span className="text-[#64ffda] text-xs mb-1 opacity-70 tracking-widest">0{index + 1}.</span>
                                        {link.name}
                                    </Link>
                                ))}

                                <a
                                    href="/resume.pdf"
                                    className="w-full mt-4 py-3 border border-cyan-500 text-cyan-500 text-center font-mono hover:bg-cyan-500/10 transition-all rounded text-sm font-bold tracking-widest"
                                >
                                    RESUME_DOWNLOAD
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
