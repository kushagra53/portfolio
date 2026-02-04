import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kushagra | Software Developer",
  description: "DevSecOps and Cybersecurity focused developer, leveraging Machine Learning for anomaly detection and secure cloud infrastructure.",
  keywords: ["DevSecOps", "Cybersecurity", "Machine Learning", "Software Developer", "AWS", "Terraform", "Intern", "Looking for Job"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-slate-950 text-slate-100`}
      >
        {/* Scanline Effect */}
        <div className="scanline" />
        {children}
      </body>
    </html>
  );
}
