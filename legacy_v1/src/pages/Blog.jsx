import { motion } from 'framer-motion';
import Card from '../components/Card';
import { ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: 'Understanding Adversarial Attacks on ML Models',
            excerpt: 'Exploring how subtle perturbations in input data can fool state-of-the-art Deep Learning models, and how to defend against them.',
            date: 'Dec 15, 2025',
            readTime: '5 min read',
            tags: ['Security', 'AI']
        },
        {
            title: 'Securing MLOps Pipelines on AWS',
            excerpt: 'A comprehensive guide to implementing security best practices in your MLOps workflow using AWS SageMaker.',
            date: 'Nov 28, 2025',
            readTime: '8 min read',
            tags: ['MLOps', 'AWS']
        },
        {
            title: 'The Rise of AI-Powered Cyber Attacks',
            excerpt: 'Analyzing how threat actors are leveraging Artificial Intelligence to automate attacks and bypass traditional security.',
            date: 'Oct 10, 2025',
            readTime: '4 min read',
            tags: ['Cybersec', 'Trends']
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20"
            >
                <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">Blog</span>
                <h1 className="text-6xl font-bold mb-6 text-white tracking-tight">Latest <span className="text-gray-600">Insights.</span></h1>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card hover={true} className="h-full flex flex-col justify-between group cursor-pointer hover:border-white">
                            <div>
                                <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-6 uppercase tracking-wider">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                                    <span>{post.readTime}</span>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:underline decoration-1 underline-offset-4">{post.title}</h3>
                                <p className="text-gray-400 text-sm mb-6 leading-relaxed font-light">{post.excerpt}</p>
                            </div>

                            <div className="flex items-center justify-between pt-6 border-t border-[#333] mt-auto">
                                <span className="text-white text-xs flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Read Article <ArrowRight size={14} />
                                </span>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
