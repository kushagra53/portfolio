import { motion } from 'framer-motion';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "font-sans font-medium px-6 py-2 rounded-none transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white disabled:opacity-50";

    const variants = {
        primary: "bg-white text-black hover:bg-gray-200 border border-white",
        outline: "bg-transparent text-white border border-[#333] hover:border-white hover:bg-white/5",
        ghost: "text-white hover:text-gray-300"
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
