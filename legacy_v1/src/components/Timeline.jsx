import { motion } from 'framer-motion';

const TimelineItem = ({ date, title, subtitle, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="relative pl-8 pb-12 last:pb-0 border-l border-[#333] last:border-0 ml-1"
        >
            <div className="absolute left-[-3px] top-2 w-1.5 h-1.5 bg-white" />
            <div className="text-xs text-gray-500 mb-2 font-mono uppercase tracking-widest">{date}</div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <div className="text-gray-400 font-medium mb-4">{subtitle}</div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-prose">{description}</p>
        </motion.div>
    );
};

const Timeline = ({ items }) => {
    return (
        <div className="py-2">
            {items.map((item, index) => (
                <TimelineItem key={index} index={index} {...item} />
            ))}
        </div>
    );
};

export default Timeline;
