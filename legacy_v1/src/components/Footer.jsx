import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black border-t border-[#333] py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-gray-500 text-sm font-mono uppercase tracking-wider">
                            © {new Date().getFullYear()} JaypeeDev.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="mailto:contact@example.com" className="text-gray-500 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
