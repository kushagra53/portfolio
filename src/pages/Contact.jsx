import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';
import { Mail, MapPin, Download, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-24"
            >
                <span className="text-[#64FFDA] font-mono text-sm mb-4 block">What's Next?</span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#E6F1FF]">Get In <span className="text-[#64FFDA]">Touch</span></h1>
                <p className="text-[#8892B0] max-w-xl mx-auto text-lg">
                    I'm currently looking for internship opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="space-y-8">
                        <Card className="flex items-center gap-6 !p-6 hover:bg-[#112240]/80 transition-colors">
                            <div className="p-4 rounded-full bg-[#64FFDA]/10 text-[#64FFDA] flex-shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-[#8892B0] font-mono mb-1">Email</p>
                                <p className="text-[#E6F1FF] font-medium text-lg">student@jaypee.edu.in</p>
                            </div>
                        </Card>

                        <Card className="flex items-center gap-6 !p-6 hover:bg-[#112240]/80 transition-colors">
                            <div className="p-4 rounded-full bg-[#64FFDA]/10 text-[#64FFDA] flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-[#8892B0] font-mono mb-1">Location</p>
                                <p className="text-[#E6F1FF] font-medium text-lg">Himachal Pradesh, India</p>
                            </div>
                        </Card>

                        <div className="pt-8">
                            <Button variant="outline" className="w-full h-12 flex items-center justify-center gap-3 text-lg">
                                <Download size={20} /> Download Resume
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
                        <h2 className="text-2xl font-bold mb-8 text-[#E6F1FF]">Send Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="block text-sm font-medium text-[#8892B0] mb-2">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-md bg-[#0A192F] border border-[#233554] text-[#E6F1FF] focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#8892B0] mb-2">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 rounded-md bg-[#0A192F] border border-[#233554] text-[#E6F1FF] focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#8892B0] mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-md bg-[#0A192F] border border-[#233554] text-[#E6F1FF] focus:border-[#64FFDA] focus:ring-1 focus:ring-[#64FFDA] focus:outline-none transition-colors resize-none"
                                    placeholder="Hello, I'd like to discuss..."
                                />
                            </div>
                            <Button type="submit" className="w-full h-12 flex items-center justify-center gap-2 mt-4 text-lg">
                                Send Message <Send size={20} />
                            </Button>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
