import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

const config: Config = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a192f', // Deep Navy
                foreground: '#e6f1ff', // White/Light
                primary: {
                    DEFAULT: '#64ffda', // Neon Cyan
                    foreground: '#0a192f'
                },
                secondary: {
                    DEFAULT: '#8892b0', // Slate Gray
                    foreground: '#0a192f'
                },
                muted: {
                    DEFAULT: '#112240', // Light Navy
                    foreground: '#8892b0'
                },
                accent: {
                    DEFAULT: '#64ffda',
                    foreground: '#0a192f'
                }
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                mono: ['var(--font-fira-code)', 'monospace']
            },
            animation: {
                "spin-slow": "spin 8s linear infinite",
                "glitch": "glitch 1s linear infinite",
            },
            keyframes: {
                glitch: {
                    "2%, 64%": { transform: "translate(2px,0) skew(0deg)" },
                    "4%, 60%": { transform: "translate(-2px,0) skew(0deg)" },
                    "62%": { transform: "translate(0,0) skew(5deg)" },
                }
            }
        }
    },
    plugins: [
        animate,
        typography
    ],
};
export default config;
