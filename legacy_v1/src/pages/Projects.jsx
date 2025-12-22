import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Github, ExternalLink, Database, Cloud, Lock, BookOpen } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'NSL-KDD Anomaly Detection',
            description: 'Network Intrusion Detection System utilizing Machine Learning. Implemented and optimized Random Forest Classifier using GridSearchCV to detect network anomalies with high precision.',
            tags: ['Python', 'Scikit-learn', 'Random Forest', 'Cybersecurity'],
            links: { github: '#', demo: null },
            icon: Lock,
            metrics: [
                { model: 'Random Forest', accuracy: '99.8%', precision: '99.7%' },
                { model: 'SVM', accuracy: '96.5%', precision: '95.2%' },
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
            tags: ['TensorFlow', 'Keras', 'CNN', 'Vis'],
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20"
            >
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">Portfolio</span>
                <h1 className="text-6xl font-bold mb-6 text-white tracking-tight">Selected <span className="text-gray-600">Works.</span></h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col group hover:bg-[#0a0a0a]">
                            <div className="flex items-center justify-between mb-6">
                                <project.icon size={24} className="text-white" />
                                <div className="flex gap-4">
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {project.links.colab && (
                                        <a href={project.links.colab} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                                            <BookOpen size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed font-light">{project.description}</p>

                            {project.metrics && (
                                <div className="mb-6 rounded-none border border-[#333] overflow-hidden">
                                    <table className="w-full text-xs text-left text-gray-500">
                                        <thead className="bg-[#111] text-gray-300">
                                            <tr>
                                                <th className="px-3 py-2 font-medium">Model</th>
                                                <th className="px-3 py-2 font-medium">Accuracy</th>
                                                <th className="px-3 py-2 font-medium">Precision</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {project.metrics.map((m, i) => (
                                                <tr key={i} className="border-b border-[#333] last:border-0 hover:bg-[#111] transition-colors">
                                                    <td className="px-3 py-2 font-medium text-white">{m.model}</td>
                                                    <td className="px-3 py-2">{m.accuracy}</td>
                                                    <td className="px-3 py-2">{m.precision}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#333]">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-mono text-gray-500 uppercase tracking-wider">
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
