"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HexGridProps {
    className?: string;
}

const HexGrid = ({ className }: HexGridProps) => {
    const [hexData, setHexData] = useState<string[]>([]);

    useEffect(() => {
        // Generate a grid of random hex codes
        const count = 64; // 8x8 grid
        const codes = [];
        const hexChars = "0123456789ABCDEF";

        for (let i = 0; i < count; i++) {
            let code = "0x";
            code += hexChars[Math.floor(Math.random() * 16)];
            code += hexChars[Math.floor(Math.random() * 16)];
            codes.push(code);
        }
        setHexData(codes);
    }, []);

    return (
        <div className={cn("grid grid-cols-8 gap-2 p-4 font-mono text-xs text-[#64ffda] pointer-events-none select-none overflow-hidden", className)}>
            {hexData.map((code, i) => (
                <motion.span
                    key={i}
                    className="opacity-40"
                    animate={{ opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 2, delay: i * 0.05, repeat: Infinity }}
                >
                    {code}
                </motion.span>
            ))}
        </div>
    );
};

export default HexGrid;
