import { motion } from 'framer-motion';

const SkillBadge = ({ name, icon: Icon }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 px-4 py-2 border border-[#333] rounded-none hover:border-white transition-colors cursor-default bg-black"
        >
            {Icon && <Icon size={16} className="text-white" />}
            <span className="text-gray-400 font-mono text-xs uppercase tracking-wider">{name}</span>
        </motion.div>
    );
};

export default SkillBadge;
