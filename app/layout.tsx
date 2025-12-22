import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });

export const metadata: Metadata = {
  title: "Secure Void | AI & Cybersecurity Portfolio",
  description: "Portfolio of a Machine Learning & Cybersecurity Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans bg-[#0a192f] text-[#e6f1ff] antialiased selection:bg-[#64ffda] selection:text-[#0a192f] flex flex-col min-h-screen`} suppressHydrationWarning>
        <ParticleBackground />
        <Navbar />
        <main className="flex-grow pt-16 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
