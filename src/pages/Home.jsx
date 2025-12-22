import Hero from '../components/Hero';
import SkillBadge from '../components/SkillBadge';
import { motion } from 'framer-motion';
import { Brain, Shield, Cloud, Terminal, Code } from 'lucide-react';

const Home = () => {
    const skills = [
        { name: 'Python', icon: Code, color: '#3776AB' },
        { name: 'Random Forest', icon: Brain, color: '#00D4FF' },
        { name: 'CNNs', icon: Brain, color: '#FF6B6B' },
        { name: 'Ethical Hacking', icon: Shield, color: '#00FF94' },
        { name: 'AWS/OCI', icon: Cloud, color: '#FF9900' },
    ];

    return (
        <div className="space-y-20 pb-20">
            <Hero />

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-bold mb-12">Technical <span className="text-[#00D4FF]">Arsenal</span></h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill) => (
                            <SkillBadge key={skill.name} {...skill} />
                        ))}
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
