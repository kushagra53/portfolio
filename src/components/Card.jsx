import { motion } from 'framer-motion';

const Card = ({ children, className = '', hover = true }) => {
    return (
        <motion.div
            whileHover={hover ? { y: -5 } : {}}
            className={`bg-[#112D4E] rounded-xl border border-[#234b6e] p-6 shadow-lg backdrop-blur-sm ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default Card;
