import React from 'react';
import Navbar from "@/app/(home)/components/Navbar";
import HeroSection from "@/app/(home)/components/HeroSection";
import Skills from "@/app/(home)/components/Skills";
import Projects from "@/app/(home)/components/Projects";
import Footer from "@/app/(home)/components/footer";

export default function Home() {
    return <div className="min-h-scneen bg-black overflow-hidden ">
        <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
            <div className="max-w-7xl mx-auto p-5">
                <Navbar/>
                <HeroSection/>
            </div>
            <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full">
            </div>
        </div>
        <div className="max-w-7xl mx-auto p-5 mt-20">
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    </div>;
}
