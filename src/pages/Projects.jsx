import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import { Github, ExternalLink, Database, Cloud, Lock, BookOpen } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'NSL-KDD Anomaly Detection',
            description: 'Network Intrusion Detection System using Machine Learning. Implemented and optimized Random Forest Classifier using GridSearchCV to detect network anomalies with high precision.',
            tags: ['Python', 'Scikit-learn', 'Random Forest', 'Cybersecurity'],
            links: { github: '#', demo: null },
            icon: Lock,
            metrics: [
                { model: 'Random Forest', accuracy: '99.8%', precision: '99.7%', recall: '99.9%' },
                { model: 'SVM', accuracy: '96.5%', precision: '95.2%', recall: '97.1%' },
                { model: 'Logistic Reg', accuracy: '92.3%', precision: '89.5%', recall: '93.0%' },
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
            description: 'Collaborative filtering based recommendation engine. Suggests books based on user reading history and preferences.',
            tags: ['Python', 'Pandas', 'Colab', 'ML'],
            links: { github: '#', colab: '#' },
            icon: BookOpen,
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold mb-4">Featured <span className="text-[#00D4FF]">Projects</span></h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    A showcase of my technical projects ranging from Machine Learning models to Full Stack Web Applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="h-full flex flex-col hover:border-[#00D4FF]/50 transition-colors duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-3 rounded-lg bg-[#00D4FF]/10 text-[#00D4FF]">
                                    <project.icon size={24} />
                                </div>
                                <div className="flex gap-2">
                                    {project.links.github && (
                                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.links.demo && (
                                        <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                    {project.links.colab && (
                                        <a href={project.links.colab} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
                                            <BookOpen size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>

                            {project.metrics && (
                                <div className="mb-4 overflow-x-auto">
                                    <table className="w-full text-xs text-left text-gray-400">
                                        <thead className="text-gray-200 bg-[#0A2540] uppercase">
                                            <tr>
                                                <th className="px-2 py-1 rounded-l">Model</th>
                                                <th className="px-2 py-1">Acc</th>
                                                <th className="px-2 py-1">Prec</th>
                                                <th className="px-2 py-1 rounded-r">Recall</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {project.metrics.map((m, i) => (
                                                <tr key={i} className="border-b border-[#234b6e] last:border-0">
                                                    <td className="px-2 py-1 font-medium text-[#00D4FF]">{m.model}</td>
                                                    <td className="px-2 py-1">{m.accuracy}</td>
                                                    <td className="px-2 py-1">{m.precision}</td>
                                                    <td className="px-2 py-1">{m.recall}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#234b6e]">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-[#0A2540] text-[#00D4FF] border border-[#234b6e]">
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
