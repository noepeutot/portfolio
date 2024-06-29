"use client";
import React from 'react';
import Title from "@/app/(home)/components/Title";
import {HoverEffect} from "@/components/ui/card-hover-effect";
import {
    SiAngular, SiCodeigniter,
    SiCplusplus,
    SiJavascript,
    SiMongodb, SiMysql,
    SiNextdotjs,
    SiPhp,
    SiPostgresql, SiPython,
    SiReact, SiSymfony,
    SiTypescript
} from "react-icons/si";

export default function Skills() {
    const skills = [
        {
            text: "Angular",
            Icon: SiAngular
        },
        {
            text: "React",
            Icon: SiReact
        },
        {
            text: "CodeIgniter",
            Icon: SiCodeigniter
        },
        {
            text: "Symfony",
            Icon: SiSymfony
        },
        {
            text: "Next.js",
            Icon: SiNextdotjs
        },
        {
            text: "TypeScript",
            Icon: SiTypescript
        },
        {
            text: "JavaScript",
            Icon: SiJavascript
        },
        {
            text: "PHP",
            Icon: SiPhp
        },
        {
            text: "Python",
            Icon: SiPython
        },
        {
            text: "Java",
            Icon: SiPhp
        },
        {
            text: "C++",
            Icon: SiCplusplus
        },
        {
            text: "PostgreSQL",
            Icon: SiPostgresql
        },
        {
            text: "MySQL",
            Icon: SiMysql
        },
        {
            text: "MongoDB",
            Icon: SiMongodb
        }
    ]
    return (
        <div className="max-w-5xl mx-auto px-8">
            <Title text={"Compétences 🔪"} className="flex flex-col items-center justify-center -rotate-6"/>
            <HoverEffect items={skills}/>
        </div>
    );
}