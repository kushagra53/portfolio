import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
            {/* Background Elements - Fixed z-index and positioning */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#64FFDA]/10 rounded-full blur-[120px] mix-blend-screen opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#112240] rounded-full blur-[120px] border border-[#64FFDA]/5 opacity-60" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block"
                    >
                        <span className="py-2 px-4 rounded-full bg-[#64FFDA]/10 text-[#64FFDA] text-sm font-mono font-medium tracking-wide mb-8 border border-[#64FFDA]/20 cursor-default hover:bg-[#64FFDA]/20 transition-colors">
                            Available for Internships
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight text-[#E6F1FF]">
                        Secure <span className="text-[#64FFDA]">AI Innovator</span>
                    </h1>

                    <p className="mt-6 text-xl md:text-2xl text-[#8892B0] max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                        Bridging the gap between <span className="text-[#E6F1FF] font-normal">Machine Learning</span> and <span className="text-[#E6F1FF] font-normal">Cybersecurity</span>. Building robust, intelligent systems at Jaypee University.
                    </p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/projects">
                            <Button className="flex items-center gap-2 group text-base px-8 py-3">
                                View Projects
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" className="flex items-center gap-2 text-base px-8 py-3">
                                Download Resume <Download size={18} />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
