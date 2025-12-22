import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="w-full py-6 bg-[#0a192f] border-t border-[#112240] text-center">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-[#8892b0] font-mono text-xs">
                    <span className="text-[#64ffda]">© {new Date().getFullYear()}</span> Kushagra.Dev. All Systems Operational.
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors hover:-translate-y-1 transform duration-300">
                        <Github size={24} suppressHydrationWarning />
                    </a>
                    <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors hover:-translate-y-1 transform duration-300">
                        <Linkedin size={24} suppressHydrationWarning />
                    </a>
                    <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors hover:-translate-y-1 transform duration-300">
                        <Twitter size={24} suppressHydrationWarning />
                    </a>
                    <a href="#" className="text-[#8892b0] hover:text-[#64ffda] transition-colors hover:-translate-y-1 transform duration-300">
                        <Mail size={24} suppressHydrationWarning />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
