import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -8, boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)' } : {}}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`glass-panel rounded-lg p-8 h-full transition-colors duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
