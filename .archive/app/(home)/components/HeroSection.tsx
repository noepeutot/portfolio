import React from 'react';
import Link from "next/link";
import Title from "@/archive/app/(home)/components/Title";


export default function HeroSection() {

    return (
        <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:flex-row lg:gap-0 items-center justify-between">
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7xl font-bold">
                    Bienvenue ! 👋
                    <br/>
                    <span className="underline underline-offset-8 decoration-green-500">{"Je suis Noé Peutot."}</span>
                </h1>

                <p className="md:w-96 text-lg text-gray-300">
                    {"Étudiant à Grenoble, je suis un développeur web fullstack passionné par la création de sites web et d'applications web."}
                </p>

                <Link href={"mailto:noepeutot@gmail.com"} className="inline-block">
                    <Title text={"Contactez moi 📫"}/>
                </Link>
            </div>

            <div>
                <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                        <div className="w-32 h-32 rounded-full bg-green-500"></div>
                    </div>
                    <div className="glow absolute top-[40%] right-1/2 -z-10">

                    </div>
                </div>
            </div>
        </div>
    );
}