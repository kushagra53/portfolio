import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Github, ExternalLink, Database, Cloud, Lock, BookOpen, FolderGit2 } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'NSL-KDD Anomaly Detection',
            description: 'Network Intrusion Detection System utilizing Machine Learning. Implemented and optimized Random Forest Classifier using GridSearchCV to detect network anomalies with high precision.',
            tags: ['Python', 'Scikit-learn', 'Random Forest', 'Cybersecurity'],
            links: { github: '#', demo: null },
            icon: Lock,
            metrics: [
                { model: 'Random Forest', accuracy: '99.8%', precision: '99.7%', recall: '99.9%' },
                { model: 'SVM', accuracy: '96.5%', precision: '95.2%', recall: '97.1%' },
            ]
        },
        {
            title: 'AgriAdvisor',
            description: 'Smart agriculture assistant providing crop recommendations based on weather patterns and soil data. Integrated with external Weather APIs for real-time forecasting.',
            tags: ['React', 'Node.js', 'Weather API', 'Vercel'],
            links: { github: '#', demo: '#' },
            icon: Cloud,
        },
        {
            title: 'CNN Landmark Classification',
            description: 'Deep Learning model to identify famous landmarks from images. Trained on a custom dataset using Convolutional Neural Networks with data augmentation techniques.',
            tags: ['TensorFlow', 'Keras', 'CNN', 'Computer Vision'],
            links: { github: '#', demo: null },
            icon: Database,
        },
        {
            title: 'Book Recommender System',
            description: 'Collaborative filtering based recommendation engine. Suggests books based on user reading history and preferences using matrix factorization.',
            tags: ['Python', 'Pandas', 'Colab', 'ML'],
            links: { github: '#', colab: '#' },
            icon: BookOpen,
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#E6F1FF]">Featured <span className="text-[#64FFDA]">Projects</span></h1>
                <p className="text-[#8892B0] max-w-2xl mx-auto text-lg">
                    A showcase of my technical projects ranging from Machine Learning models to Full Stack Web Applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col group relative overflow-hidden">
                            {/* Decoration */}
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <FolderGit2 size={100} />
                            </div>

                            <div className="flex items-center justify-between mb-6 relative z-10">
                                <div className="p-3 rounded-lg bg-[#112240] text-[#64FFDA] border border-[#233554]">
                                    <project.icon size={28} />
                                </div>
                                <div className="flex gap-4">
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-[#8892B0] hover:text-[#64FFDA] transition-colors">
                                            <Github size={22} />
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-[#8892B0] hover:text-[#64FFDA] transition-colors">
                                            <ExternalLink size={22} />
                                        </a>
                                    )}
                                    {project.links.colab && (
                                        <a href={project.links.colab} target="_blank" rel="noopener noreferrer" className="text-[#8892B0] hover:text-[#FF9900] transition-colors">
                                            <BookOpen size={22} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors relative z-10">{project.title}</h3>
                            <p className="text-[#8892B0] text-sm mb-6 flex-grow leading-relaxed relative z-10">{project.description}</p>

                            {project.metrics && (
                                <div className="mb-6 overflow-hidden rounded-lg border border-[#233554] relative z-10">
                                    <table className="w-full text-xs text-left text-[#8892B0]">
                                        <thead className="bg-[#112240] text-[#E6F1FF]">
                                            <tr>
                                                <th className="px-3 py-2 font-semibold">Model</th>
                                                <th className="px-3 py-2 font-semibold">Acc</th>
                                                <th className="px-3 py-2 font-semibold">Prec</th>
                                                <th className="px-3 py-2 font-semibold">Recall</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-[#0A192F]/50">
                                            {project.metrics.map((m, i) => (
                                                <tr key={i} className="border-b border-[#233554] last:border-0 hover:bg-[#112240] transition-colors">
                                                    <td className="px-3 py-2 font-medium text-[#64FFDA]">{m.model}</td>
                                                    <td className="px-3 py-2">{m.accuracy}</td>
                                                    <td className="px-3 py-2">{m.precision}</td>
                                                    <td className="px-3 py-2">{m.recall}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 relative z-10">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-mono px-2 py-1 rounded text-[#64FFDA]">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
