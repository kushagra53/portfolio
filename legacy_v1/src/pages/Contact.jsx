import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import { Mail, MapPin, Download, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32">
            <div className="grid md:grid-cols-2 gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-4">Contact</span>
                    <h1 className="text-6xl font-bold mb-10 text-white tracking-tight">Get in <span className="text-gray-600">Touch.</span></h1>

                    <div className="space-y-8 mb-12">
                        <div>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">Email</span>
                            <p className="text-white text-xl font-medium">student@jaypee.edu.in</p>
                        </div>
                        <div>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">Location</span>
                            <p className="text-white text-xl font-medium">Himachal Pradesh, India</p>
                        </div>
                    </div>

                    <Button variant="outline" className="flex items-center gap-3">
                        <Download size={18} /> Download Portfolio PDF
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Card className="h-full">
                        <h2 className="text-2xl font-bold mb-8 text-white">Send Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-0 py-2 bg-transparent border-b border-[#333] text-white focus:border-white focus:outline-none transition-colors rounded-none placeholder-gray-700"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-0 py-2 bg-transparent border-b border-[#333] text-white focus:border-white focus:outline-none transition-colors rounded-none placeholder-gray-700"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-0 py-2 bg-transparent border-b border-[#333] text-white focus:border-white focus:outline-none transition-colors rounded-none resize-none placeholder-gray-700"
                                    placeholder="Tell me about your project..."
                                />
                            </div>
                            <div className="pt-4">
                                <Button type="submit" className="w-full flex justify-between items-center group">
                                    Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
