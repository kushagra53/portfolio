import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import { Mail, MapPin, Download, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-4xl font-bold mb-4">Get in <span className="text-[#00D4FF]">Touch</span></h1>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Interested in collaboration or hiring? Feel free to drop a message or download my resume.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
                    <div className="space-y-6">
                        <Card className="flex items-center gap-4 bg-[#0A2540]/50">
                            <div className="p-3 rounded-full bg-[#00D4FF]/10 text-[#00D4FF]">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <p className="text-white font-medium">student@jaypee.edu.in</p>
                            </div>
                        </Card>

                        <Card className="flex items-center gap-4 bg-[#0A2540]/50">
                            <div className="p-3 rounded-full bg-[#00D4FF]/10 text-[#00D4FF]">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="text-white font-medium">Himachal Pradesh, India</p>
                            </div>
                        </Card>

                        <div className="pt-6">
                            <h3 className="text-lg font-bold mb-4">Documents</h3>
                            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                                <Download size={18} /> Download Resume
                            </Button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card className="h-full">
                        <h2 className="text-2xl font-bold mb-6">Send Message</h2>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2 rounded-md bg-[#0A2540] border border-[#234b6e] text-white focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] focus:outline-none transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 rounded-md bg-[#0A2540] border border-[#234b6e] text-white focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-2 rounded-md bg-[#0A2540] border border-[#234b6e] text-white focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] focus:outline-none transition-colors resize-none"
                                    placeholder="How can we help each other?"
                                />
                            </div>
                            <Button type="submit" className="w-full flex items-center justify-center gap-2 mt-2">
                                Send Message <Send size={18} />
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
