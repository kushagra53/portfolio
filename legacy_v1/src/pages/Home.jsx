import { motion } from 'framer-motion';
import Button from '../components/Button';
import SkillBadge from '../components/SkillBadge';
import Card from '../components/Card';
import { ArrowRight, Terminal, Brain, Shield, Cloud, Key, FolderGit2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const skills = [
        { name: 'Python', icon: Terminal },
        { name: 'ML/AI', icon: Brain },
        { name: 'Security', icon: Shield },
        { name: 'Cloud', icon: Cloud },
        { name: 'Crypto', icon: Key },
    ];

    return (
        <div className="min-h-screen pt-24 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto flex flex-col justify-center">
            {/* Hero Text */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-24"
            >
                <h1 className="text-massive font-bold text-white mb-6 uppercase tracking-tighter">
                    Secure<br />
                    <span className="text-gray-600">Intelligence.</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10 font-light leading-relaxed">
                    Building the intersection of Artificial Intelligence and Cybersecurity.
                    Engineering robust systems that learn, adapt, and protect.
                </p>

                <div className="flex flex-wrap gap-4 mb-12">
                    <Link to="/projects">
                        <Button>VIEW WORK</Button>
                    </Link>
                    <Link to="/about">
                        <Button variant="outline">ABOUT ME</Button>
                    </Link>
                </div>

                <div className="flex flex-wrap gap-3">
                    {skills.map(skill => (
                        <SkillBadge key={skill.name} {...skill} />
                    ))}
                </div>
            </motion.div>

            {/* Featured Preview */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="pt-4 border-t border-[#333]">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">Latest Project</span>
                    <Link to="/projects" className="group">
                        <h3 className="text-2xl text-white font-bold mb-2 group-hover:underline decoration-1 underline-offset-4">NSL-KDD Anomaly Detection</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Network Intrusion Detection System utilizing Random Forest with 99.8% accuracy.
                        </p>
                        <span className="text-white text-xs flex items-center gap-1">
                            View Case Study <ArrowRight size={12} />
                        </span>
                    </Link>
                </div>
                <div className="pt-4 border-t border-[#333]">
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">Latest Insight</span>
                    <Link to="/blog" className="group">
                        <h3 className="text-2xl text-white font-bold mb-2 group-hover:underline decoration-1 underline-offset-4">Adversarial ML Attacks</h3>
                        <p className="text-gray-500 text-sm mb-4">
                            Exploring how subtle perturbations can fool state-of-the-art Deep Learning models.
                        </p>
                        <span className="text-white text-xs flex items-center gap-1">
                            Read Article <ArrowRight size={12} />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    return <Hero />
}

export default Home;
