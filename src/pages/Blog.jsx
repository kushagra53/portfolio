import { motion } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            title: 'Understanding Adversarial Attacks on ML Models',
            excerpt: 'Exploring how subtle perturbations in input data can fool state-of-the-art Deep Learning models, and how to defend against them using adversarial training.',
            date: 'Dec 15, 2025',
            author: 'Jaypee Dev',
            tags: ['ML Security', 'Adversarial AI']
        },
        {
            title: 'Securing MLOps Pipelines on AWS',
            excerpt: 'A comprehensive guide to implementing security best practices in your MLOps workflow, from data ingestion to model deployment using AWS SageMaker and IAM roles.',
            date: 'Nov 28, 2025',
            author: 'Jaypee Dev',
            tags: ['MLOps', 'Cloud Security', 'AWS']
        },
        {
            title: 'The Rise of AI-Powered Cyber Attacks',
            excerpt: 'Analyzing how threat actors are leveraging Artificial Intelligence to automate attacks, craft convincing phishing emails, and bypass traditional security measures.',
            date: 'Oct 10, 2025',
            author: 'Jaypee Dev',
            tags: ['Cybersecurity', 'AI Trends']
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold mb-4">Latest <span className="text-[#00D4FF]">Insights</span></h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Thoughts and tutorials on the intersection of Artificial Intelligence and Cybersecurity.
                </p>
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
                        <Card hover={true} className="h-full flex flex-col group cursor-pointer hover:border-[#00D4FF]/50 transition-colors">
                            <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                            </div>

                            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#00D4FF] transition-colors">{post.title}</h3>
                            <p className="text-gray-400 text-sm mb-4 flex-grow">{post.excerpt}</p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#234b6e]">
                                <div className="flex gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded bg-[#0A2540] text-[#00D4FF] border border-[#234b6e]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
