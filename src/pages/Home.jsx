import Hero from '../components/Hero';
import SkillBadge from '../components/SkillBadge';
import { motion } from 'framer-motion';
import { Brain, Shield, Cloud, Key, Terminal } from 'lucide-react';

const Home = () => {
    const skills = [
        { name: 'Python', icon: Terminal, color: '#3776AB' },
        { name: 'Random Forest', icon: Brain, color: '#64FFDA' },
        { name: 'CNNs', icon: Brain, color: '#FF6B6B' },
        { name: 'Ethical Hacking', icon: Shield, color: '#00FF94' },
        { name: 'AWS/OCI', icon: Cloud, color: '#FF9900' },
        { name: 'Cryptography', icon: Key, color: '#E6F1FF' },
    ];

    return (
        <div className="space-y-32 pb-32">
            <Hero />

            <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <span className="h-[1px] w-12 bg-[#233554]"></span>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#E6F1FF]">Technical <span className="text-[#64FFDA]">Arsenal</span></h2>
                        <span className="h-[1px] w-12 bg-[#233554]"></span>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <SkillBadge {...skill} />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
