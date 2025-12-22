import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
    return (
        <motion.div
            whileHover={hover ? { borderColor: '#ffffff' } : {}}
            className={`bg-black border border-[#333] p-6 transition-colors duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
