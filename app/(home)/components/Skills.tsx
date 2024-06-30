"use client";
import React from 'react';
import Title from "@/app/(home)/components/Title";
import {HoverEffect} from "@/components/ui/card-hover-effect";
import {
    SiAngular, SiCodeigniter,
    SiCplusplus, SiHtml5,
    SiJavascript,
    SiMongodb, SiMysql,
    SiPhp,
    SiPostgresql, SiPython, SiSymfony,
} from "react-icons/si";

import {FaJava} from "react-icons/fa";


export default function Skills() {
    const skills = [
        {
            text: "Angular",
            Icon: SiAngular
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
            text: "JavaScript",
            Icon: SiJavascript
        },
        {
            text: "PHP",
            Icon: SiPhp
        },
        {
            text: "HTML",
            Icon: SiHtml5
        },
        {
            text: "Java",
            Icon: FaJava
        },
        {
            text: "C++",
            Icon: SiCplusplus
        },
        {
            text: "Python",
            Icon: SiPython
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
        <div id="competence" className="max-w-5xl mx-auto px-8">
            <Title text={"Compétences 🧠"} className="flex flex-col items-center justify-center -rotate-6"/>
            <HoverEffect items={skills}/>
        </div>
    );
}