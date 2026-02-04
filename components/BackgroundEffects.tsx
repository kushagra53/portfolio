"use client";

import { useEffect, useRef } from "react";

export default function BackgroundEffects() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                containerRef.current.style.setProperty("--x", `${e.clientX}px`);
                containerRef.current.style.setProperty("--y", `${e.clientY}px`);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-0 pointer-events-none"
        >
            {/* Mouse Spotlight - the only effect we need here since grid is in CSS */}
            <div className="absolute inset-0 spotlight" />
        </div>
    );
}
