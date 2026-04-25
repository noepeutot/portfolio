import React from 'react';
import Navbar from "@/archive/app/(home)/components/Navbar";
import HeroSection from "@/archive/app/(home)/components/HeroSection";
import Skills from "@/archive/app/(home)/components/Skills";
import Projects from "@/archive/app/(home)/components/Projects";
import Footer from "@/archive/app/(home)/components/footer";
import Parcours from "@/archive/app/(home)/components/Parcours";
import {FloatingNav} from "@/archive/components/ui/floating-navbar";
import AboutMe from "@/archive/app/(home)/components/AboutMe";

export default function Home() {
    const navItems = [
        {
            name: "A propos",
            link: "#propos",
            icon: "🙋‍♂️",
        },
        {
            name: "Compétences",
            link: "#competence",
            icon: "🧠️",
        },
        {
            name: "Projets",
            link: "#projet",
            icon: "💻",
        },
        {
            name: "Education",
            link: "#education",
            icon: "🎓",
        },
        {
            name: "Experiences",
            link: "#experience",
            icon: "💼",
        },
    ];
    return (
        <div className="min-h-scneen bg-black overflow-hidden ">
            <FloatingNav navItems={navItems} />
            <div className="dark:bg-black bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative">
                <div className="max-w-7xl mx-auto p-5">
                    <Navbar/>
                    <HeroSection/>
                </div>
                <div
                    className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full">
                </div>
            </div>
            <div className="max-w-7xl mx-auto p-5 mt-20">
                <AboutMe/>
                <Projects/>
                <Skills/>
                <Parcours/>
                <Footer/>
            </div>
        </div>
    );
}
