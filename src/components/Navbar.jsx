import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Shield } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'glass-panel py-2 shadow-lg'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between h-14">
                    <Link to="/" className="flex items-center space-x-2 group z-50">
                        <div className="relative">
                            <Shield className="w-8 h-8 text-[#64FFDA] transform transition-transform group-hover:rotate-12" />
                            <Code2 className="w-4 h-4 text-[#0A192F] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold" />
                        </div>
                        <span className="font-bold text-xl tracking-tight text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">
                            Jaypee<span className="text-[#64FFDA]">Dev</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-sm font-medium transition-colors duration-200 relative group flex flex-col items-center ${location.pathname === link.path ? 'text-[#64FFDA]' : 'text-[#8892B0] hover:text-[#64FFDA]'
                                        }`}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {link.name !== 'Contact' ? null : null} {/* Logic holder */}
                                </Link>
                            ))}
                            <Link to="/contact">
                                <Button variant="outline" className="px-4 py-1.5 text-xs">Resume</Button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-[#64FFDA] focus:outline-none p-2"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#112240] flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="space-y-6 text-center">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-3 py-2 text-2xl font-light ${location.pathname === link.path
                                        ? 'text-[#64FFDA]'
                                        : 'text-[#E6F1FF]'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link to="/contact" onClick={() => setIsOpen(false)}>
                                    <Button variant="outline" className="px-8 py-3 text-sm">Resume</Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
