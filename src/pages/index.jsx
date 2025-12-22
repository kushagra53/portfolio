import { motion } from 'framer-motion';

const PlaceholderPage = ({ title }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[50vh] flex items-center justify-center"
    >
        <h1 className="text-4xl font-bold text-gray-500">{title} Coming Soon</h1>
    </motion.div>
);

export { default as About } from './About';
export { default as Projects } from './Projects';
export { default as Blog } from './Blog';
export { default as Contact } from './Contact';
