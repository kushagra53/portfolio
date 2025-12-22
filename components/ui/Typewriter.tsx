"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
    text: string | string[];
    speed?: number;
    className?: string;
    loop?: boolean;
}

const Typewriter = ({ text, speed = 0.05, className = "", loop = true }: TypewriterProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const strings = Array.isArray(text) ? text : [text];
    const currentString = strings[index % strings.length];

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const handleTyping = () => {
            setDisplayedText((prev) => {
                if (isDeleting) {
                    return currentString.substring(0, prev.length - 1);
                } else {
                    return currentString.substring(0, prev.length + 1);
                }
            });

            // Typing Speed
            const typingSpeed = isDeleting ? speed * 500 : speed * 1000;

            if (!isDeleting && displayedText === currentString) {
                // Finished typing one string
                if (loop) {
                    timeout = setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
                }
            } else if (isDeleting && displayedText === "") {
                // Finished deleting
                setIsDeleting(false);
                setIndex((prev) => prev + 1);
                timeout = setTimeout(handleTyping, 500); // Pause before next string
            } else {
                timeout = setTimeout(handleTyping, typingSpeed + (Math.random() * 50)); // Randomize slightly
            }
        };

        timeout = setTimeout(handleTyping, speed * 1000);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index, speed, loop, currentString]);

    return (
        <span className={className}>
            {displayedText}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className="inline-block w-[0.5em] h-[1em] bg-[#64ffda] ml-1 align-middle"
            />
        </span>
    );
};

export default Typewriter;
