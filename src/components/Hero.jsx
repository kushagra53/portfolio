import { motion } from 'framer-motion';
import Button from './Button';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
            {/* Background gradients */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D4FF]/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0A2540] rounded-full blur-[100px] border border-[#00D4FF]/10" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] text-sm font-semibold mb-6 border border-[#00D4FF]/20">
                        Available for Internships
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-blue-500">AI Innovator</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                        Bridging the gap between Machine Learning and Cybersecurity. Building robust, intelligent systems at Jaypee University.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link to="/projects">
                            <Button className="flex items-center gap-2">
                                View Projects <ArrowRight size={18} />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline" className="flex items-center gap-2">
                                Download Resume <Download size={18} />
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
