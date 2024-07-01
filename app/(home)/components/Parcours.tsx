"use client";
import React from 'react';
import Title from "@/app/(home)/components/Title";
import {SiBootstrap, SiCodeigniter, SiMysql, SiPhp, SiPython, SiRuby} from "react-icons/si";

export default function Parcours() {
    const education = [
        {
            title: "BUT Informatique",
            place: "IUT2 de Grenoble",
            date: "2020-2024",
            description: "Parcours : Réalisation d'applications, conception, développement, validation."
        },
        {
            title: "Baccalauréat Scientifique",
            place: "Lycée Champollion",
            date: "2020",
            description: "Mention Bien. Spécialité Mathématiques et Physique-Chimie."
        }
    ]

    const experience = [
        {
            title: "Stage en développement web",
            place: "Laboratoire G2Elab",
            date: "Mars 2024 - Juin 2024",
            description: "Elaboration d'un trombinoscope pour le laboratoire. " +
                "Possibilité de recherche par filtre et modification des informations. " +
                "Backoffice pour modérer les modifications.",
            tech: [SiCodeigniter, SiBootstrap]
        },
        {
            title: "Stage en développement web",
            place: "Laboratoire CERMAV",
            date: "Avril 2023 - Juin 2023",
            description: "Élaboration d'une base de données de microbiotes humains et mise en place d'outils d'analyse (BLAST, JBrowse). " +
                "Développement d'un site web avec back-office.",
            tech: [SiPhp, SiPython, SiMysql, SiRuby]
        }
    ]

    return (<div>
            <div id="education" className="max-w-5xl mx-auto px-8">
                <Title text={"Education 🎓"} className="flex flex-col items-center justify-center -rotate-6"/>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-5">
                    {education.map((edu, index) => {
                        return <div key={index} className="p-5 rounded-md bg-blue-500">
                            <div className="w-full space-y-5">
                                <h1 className="text-2xl font-bold">{edu.title}</h1>
                                <h2 className="text-xl font-bold">{edu.place}</h2>
                                <h3 className="text-lg font-bold">{edu.date}</h3>
                                <p>{edu.description}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <div id="experience" className="max-w-5xl mx-auto px-8">
                <Title text={"Expériences 💼"}
                       className="flex flex-col items-center justify-center rotate-6"/>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-5">
                    {experience.map((exp, index) => {
                        return <div key={index} className="p-5 rounded-md bg-blue-500">
                            <div className="w-full space-y-5">
                                <h1 className="text-2xl font-bold">{exp.title}</h1>
                                <h2 className="text-xl font-bold">{exp.place}</h2>
                                <h3 className="text-lg font-bold">{exp.date}</h3>
                                <p>{exp.description}</p>
                                <div className="flex items-center gap-5">
                                    {exp.tech.map((Icon, index) => {
                                        return <Icon className="w-8 h-8" key={index}/>
                                    })}
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}