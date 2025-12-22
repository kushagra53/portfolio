import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "font-sans font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A192F] disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-[#64FFDA] text-[#0A192F] hover:bg-[#52E0C0] shadow-[0_0_20px_rgba(100,255,218,0.3)] hover:shadow-[0_0_30px_rgba(100,255,218,0.5)]",
        outline: "border border-[#64FFDA] text-[#64FFDA] hover:bg-[#64FFDA]/10 bg-transparent",
        ghost: "text-[#64FFDA] hover:bg-[#64FFDA]/10"
    };

    return (
        <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
