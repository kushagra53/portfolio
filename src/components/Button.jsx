import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-6 py-2 rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0A2540] disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary: "bg-[#00D4FF] text-[#0A2540] hover:bg-[#00B8E6] focus:ring-[#00D4FF] shadow-[0_0_15px_rgba(0,212,255,0.3)] hover:shadow-[0_0_25px_rgba(0,212,255,0.5)]",
        outline: "border-2 border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF]/10 focus:ring-[#00D4FF]",
        ghost: "text-[#00D4FF] hover:bg-[#00D4FF]/10"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
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
