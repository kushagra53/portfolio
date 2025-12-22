"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ConfusionMatrixProps {
    className?: string;
}

const ConfusionMatrix = ({ className }: ConfusionMatrixProps) => {
    const [matrix, setMatrix] = useState<string[]>([]);

    useEffect(() => {
        // Generate a grid of random "probabilities" typical in a confusion matrix
        const rows = 8;
        const cols = 8;
        const newMatrix = [];

        for (let i = 0; i < rows * cols; i++) {
            // Mostly 0s and 1s, but some float values to look like real data
            const val = Math.random();
            newMatrix.push(val > 0.8 ? (Math.random().toFixed(2)) : "0.00");
        }
        setMatrix(newMatrix);
    }, []);

    return (
        <div className={cn("grid grid-cols-8 gap-2 p-4 font-mono text-[10px] text-[#64ffda] pointer-events-none select-none overflow-hidden", className)}>
            {matrix.map((val, i) => (
                <span key={i} className="opacity-30">{val}</span>
            ))}
        </div>
    );
};

export default ConfusionMatrix;
