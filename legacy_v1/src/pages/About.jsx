import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import Card from '../components/Card';
import { Brain, Shield, Code } from 'lucide-react';

const About = () => {
    const educationData = [
        {
            date: '2023 - Present',
            title: 'Bachelor of Technology in CSE',
            subtitle: 'Jaypee University of Information Technology',
            description: 'Specializing in Machine Learning and Cybersecurity. Deep diving into Data Structures, Network Security, and AI algorithms.',
        },
        {
            date: '2021 - 2023',
            title: 'Senior Secondary',
            subtitle: 'Science Stream',
            description: 'Rigorous foundation in Mathematics, Physics, and Computer Science.',
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-24 max-w-4xl"
            >
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">Biography</span>
                <h1 className="text-6xl font-bold mb-8 text-white tracking-tight">About <span className="text-gray-600">Me.</span></h1>
                <div className="prose prose-xl prose-invert text-gray-400 leading-relaxed font-light">
                    <p className="mb-6">
                        I am a third-year Computer Science student positioned at the intersection of <span className="text-white font-medium">Artificial Intelligence</span> and <span className="text-white font-medium">Cybersecurity</span>.
                    </p>
                    <p>
                        My passion lies in building intelligent systems that are not only powerful but secure by design. Whether it's training robust Random Forest models or analyzing network traffic patterns for anomalies, I thrive on solving complex, multi-dimensional problems.
                    </p>
                </div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-20">
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-8 border-b border-[#333] pb-4">Education History</span>
                    <Timeline items={educationData} />
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-8 border-b border-[#333] pb-4">Focus Areas</span>
                    <div className="space-y-4">
                        <Card hover={false}>
                            <div className="mb-4 text-white"><Brain size={24} /></div>
                            <h3 className="text-white font-bold mb-2 text-lg">Machine Learning</h3>
                            <p className="text-sm text-gray-500">Developing predictive models, anomaly detection systems, and recommendation engines.</p>
                        </Card>
                        <Card hover={false}>
                            <div className="mb-4 text-white"><Shield size={24} /></div>
                            <h3 className="text-white font-bold mb-2 text-lg">Cybersecurity</h3>
                            <p className="text-sm text-gray-500">Vulnerability assessment, ethical hacking, and securing AI pipelines (MLSecOps).</p>
                        </Card>
                        <Card hover={false}>
                            <div className="mb-4 text-white"><Code size={24} /></div>
                            <h3 className="text-white font-bold mb-2 text-lg">Web Development</h3>
                            <p className="text-sm text-gray-500">Building responsive full-stack applications with modern frameworks like React and Node.js.</p>
                        </Card>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default About;
