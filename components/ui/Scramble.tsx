"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 90;
const CHARS = "!@#$%^&*():{};|,.<>/?";

type Props = {
    text: string;
    className?: string;
};

export default function ScrambleText({ text, className }: Props) {
    const [displayText, setDisplayText] = useState(text);

    useEffect(() => {
        let pos = 0;
        let interval: NodeJS.Timeout;

        interval = setInterval(() => {
            const scrambled = text.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }
                    const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
                    return randomChar;
                })
                .join("");

            setDisplayText(scrambled);
            pos++;

            if (pos >= text.length * CYCLES_PER_LETTER) {
                clearInterval(interval);
            }
        }, SHUFFLE_TIME);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {displayText}
        </motion.span>
    );
}
