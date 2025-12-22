import { motion } from 'framer-motion';

const SkillBadge = ({ name, icon: Icon, color = "#00D4FF" }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1, backgroundColor: `${color}20` }}
            className="flex items-center space-x-2 px-4 py-2 rounded-full border border-[#234b6e] bg-[#112D4E] cursor-pointer"
        >
            {Icon && <Icon size={18} style={{ color }} />}
            <span className="text-gray-200 font-medium text-sm">{name}</span>
        </motion.div>
    );
};

export default SkillBadge;
