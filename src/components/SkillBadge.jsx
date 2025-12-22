import { motion } from 'framer-motion';

const SkillBadge = ({ name, icon: Icon, color = "#64FFDA" }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, borderColor: color }}
            className="flex items-center space-x-3 px-5 py-3 rounded-lg border border-[#233554] bg-[#112240] cursor-default transition-colors group hover:bg-[#112240]/80"
        >
            {Icon && <Icon size={20} style={{ color }} className="group-hover:drop-shadow-[0_0_8px_rgba(100,255,218,0.5)] transition-all" />}
            <span className="text-[#8892B0] group-hover:text-[#E6F1FF] font-medium text-sm transition-colors">{name}</span>
        </motion.div>
    );
};

export default SkillBadge;
