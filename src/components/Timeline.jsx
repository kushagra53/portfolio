import { motion } from 'framer-motion';

const TimelineItem = ({ date, title, subtitle, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 pb-12 last:pb-0 border-l-2 border-[#112D4E] last:border-0"
        >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-[#00D4FF] shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
            <div className="text-sm text-[#00D4FF] mb-1 font-mono">{date}</div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="text-gray-400 font-medium mb-2">{subtitle}</div>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
};

const Timeline = ({ items }) => {
    return (
        <div className="py-8">
            {items.map((item, index) => (
                <TimelineItem key={index} index={index} {...item} />
            ))}
        </div>
    );
};

export default Timeline;
