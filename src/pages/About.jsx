import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';
import Card from '../components/Card';

const About = () => {
    const educationData = [
        {
            date: '2023 - Present',
            title: 'Bachelor of Technology in Computer Science',
            subtitle: 'Jaypee University of Information Technology',
            description: 'Specializing in Machine Learning and Cybersecurity. Coursework includes Data Structures, Algorithms, OS, DBMS, AI/ML, and Network Security.',
        },
        {
            date: '2021 - 2023',
            title: 'Senior Secondary (Class XII)',
            subtitle: 'Science Stream',
            description: 'Focused on Physics, Chemistry, and Mathematics with Computer Science.',
        }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
            >
                <h1 className="text-4xl font-bold mb-6">About <span className="text-[#00D4FF]">Me</span></h1>
                <div className="prose prose-invert max-w-none text-gray-300 text-lg leading-relaxed">
                    <p className="mb-4">
                        I am a passionate third-year Computer Science student with a unique dual focus on <span className="text-[#00D4FF]">Artificial Intelligence</span> and <span className="text-[#00D4FF]">Cybersecurity</span>.
                    </p>
                    <p>
                        My journey bridges the gap between building intelligent systems and securing them. From training robust Random Forest models to analyzing network traffic for anomalies using NSL-KDD datasets, I love solving complex technical challenges. I am constantly learning new technologies and testing my skills in CTFs and hackathons.
                    </p>
                </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
                <motion.section
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="w-8 h-1 bg-[#00D4FF] rounded-full"></span> Education
                    </h2>
                    <Timeline items={educationData} />
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        <span className="w-8 h-1 bg-[#00D4FF] rounded-full"></span> What I Do
                    </h2>
                    <div className="space-y-4">
                        <Card hover={false} className="bg-[#0A2540]/50 border-dashed">
                            <h3 className="text-[#00D4FF] font-bold mb-2">Machine Learning</h3>
                            <p className="text-sm text-gray-400">Developing predictive models, anomaly detection systems, and recommendation engines.</p>
                        </Card>
                        <Card hover={false} className="bg-[#0A2540]/50 border-dashed">
                            <h3 className="text-[#00D4FF] font-bold mb-2">Cybersecurity</h3>
                            <p className="text-sm text-gray-400">Vulnerability assessment, ethical hacking, and securing AI pipelines (MLSecOps).</p>
                        </Card>
                        <Card hover={false} className="bg-[#0A2540]/50 border-dashed">
                            <h3 className="text-[#00D4FF] font-bold mb-2">Web Development</h3>
                            <p className="text-sm text-gray-400">Building responsive full-stack applications with modern frameworks like React and Node.js.</p>
                        </Card>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default About;
