import { motion } from 'framer-motion';
import Card from '../components/Card';
import { Calendar, User } from 'lucide-react';

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
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-20"
            >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#E6F1FF]">Latest <span className="text-[#64FFDA]">Insights</span></h1>
                <p className="text-[#8892B0] max-w-2xl mx-auto text-lg">
                    Deep dives into the intersection of Artificial Intelligence and Cybersecurity.
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
                        <Card hover={true} className="h-full flex flex-col group cursor-pointer border-[#233554] hover:border-[#64FFDA] transition-all">
                            <div className="flex items-center gap-4 text-xs font-mono text-[#64FFDA] mb-4">
                                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                            </div>

                            <h3 className="text-xl font-bold mb-4 text-[#E6F1FF] group-hover:text-[#64FFDA] transition-colors">{post.title}</h3>
                            <p className="text-[#8892B0] text-sm mb-6 flex-grow leading-relaxed">{post.excerpt}</p>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#233554]">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map(tag => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded bg-[#112240] text-[#8892B0] border border-[#233554]">
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
