"use client";

import { useEffect, useState } from "react";

export default function BackgroundEffects() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-grid-white/5 bg-[position:center] [mask-image:linear-gradient(to_bottom,transparent,black)]" />

            {/* Mouse Spotlight */}
            <div
                className="absolute w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl transition-transform duration-75 will-change-transform"
                style={{
                    transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-black/40 [mask-image:radial-gradient(circle_at_center,transparent_40%,black_100%)]" />
        </div>
    );
}
