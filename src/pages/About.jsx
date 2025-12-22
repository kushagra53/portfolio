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
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-24 text-center max-w-3xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#E6F1FF]">About <span className="text-[#64FFDA]">Me</span></h1>
                <div className="prose prose-lg prose-invert text-[#8892B0] leading-relaxed">
                    <p className="mb-6">
                        I am a third-year Computer Science student positioned at the intersection of <span className="text-[#64FFDA]">Artificial Intelligence</span> and <span className="text-[#64FFDA]">Cybersecurity</span>.
                    </p>
                    <p>
                        My passion lies in building intelligent systems that are not only powerful but secure by design. Whether it's training robust Random Forest models or analyzing network traffic patterns for anomalies, I thrive on solving complex, multi-dimensional problems.
                    </p>
                </div>
            </motion.div>

            <div className="grid lg:grid-cols-12 gap-16">
                <motion.section
                    className="lg:col-span-7"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-[#E6F1FF]">
                        <span className="text-[#64FFDA] text-lg font-mono">01.</span> Education
                        <span className="h-[1px] bg-[#233554] flex-grow ml-4"></span>
                    </h2>
                    <Timeline items={educationData} />
                </motion.section>

                <motion.section
                    className="lg:col-span-5"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold mb-10 flex items-center gap-3 text-[#E6F1FF]">
                        <span className="text-[#64FFDA] text-lg font-mono">02.</span> Focus Areas
                        <span className="h-[1px] bg-[#233554] flex-grow ml-4"></span>
                    </h2>
                    <div className="space-y-6">
                        <Card hover={false} className="border-l-4 border-l-[#64FFDA] !bg-[#112240] !rounded-r-lg !rounded-l-none">
                            <div className="mb-4 text-[#64FFDA]"><Brain size={32} /></div>
                            <h3 className="text-[#E6F1FF] font-bold mb-2 text-lg">Machine Learning</h3>
                            <p className="text-sm text-[#8892B0]">Developing predictive models, anomaly detection systems, and recommendation engines.</p>
                        </Card>
                        <Card hover={false} className="border-l-4 border-l-[#64FFDA] !bg-[#112240] !rounded-r-lg !rounded-l-none">
                            <div className="mb-4 text-[#64FFDA]"><Shield size={32} /></div>
                            <h3 className="text-[#E6F1FF] font-bold mb-2 text-lg">Cybersecurity</h3>
                            <p className="text-sm text-[#8892B0]">Vulnerability assessment, ethical hacking, and securing AI pipelines (MLSecOps).</p>
                        </Card>
                        <Card hover={false} className="border-l-4 border-l-[#64FFDA] !bg-[#112240] !rounded-r-lg !rounded-l-none">
                            <div className="mb-4 text-[#64FFDA]"><Code size={32} /></div>
                            <h3 className="text-[#E6F1FF] font-bold mb-2 text-lg">Web Development</h3>
                            <p className="text-sm text-[#8892B0]">Building responsive full-stack applications with modern frameworks like React and Node.js.</p>
                        </Card>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default About;
