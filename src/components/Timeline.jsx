import { motion } from 'framer-motion';

const TimelineItem = ({ date, title, subtitle, description, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative pl-10 pb-16 last:pb-0 border-l border-[#233554] last:border-0 ml-2"
        >
            <div className="absolute left-[-5px] top-1 w-3 h-3 rounded-full bg-[#64FFDA] shadow-[0_0_10px_rgba(100,255,218,0.5)]" />
            <div className="text-sm text-[#64FFDA] mb-2 font-mono tracking-wide">{date}</div>
            <h3 className="text-xl font-bold text-[#E6F1FF] mb-1">{title}</h3>
            <div className="text-[#8892B0] font-medium mb-4">{subtitle}</div>
            <p className="text-[#8892B0]/80 text-base leading-relaxed max-w-prose">{description}</p>
        </motion.div>
    );
};

const Timeline = ({ items }) => {
    return (
        <div className="py-4">
            {items.map((item, index) => (
                <TimelineItem key={index} index={index} {...item} />
            ))}
        </div>
    );
};

export default Timeline;
