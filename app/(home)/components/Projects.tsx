import React from 'react';
import {SiNextdotjs} from "react-icons/si";
import Title from "@/app/(home)/components/Title";
import {HoverEffect} from "@/components/ui/card-hover-effect";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {DirectionAwareHover} from "@/components/ui/direction-aware-hover";

export default function Projects() {
    const projects = [
        {
            title: "Project 1",
            tech: [SiNextdotjs, SiNextdotjs, SiNextdotjs],
            link: "link1",
            cover: "/projects/project-1/PageAccueil.png",
            background: "bg-indigo-500"
        },
        {
            title: "Project 2",
            tech: [SiNextdotjs, SiNextdotjs, SiNextdotjs],
            link: "link2",
            cover: "/projects/project-2/PageAccueil.png",
            background: "bg-green-500"
        },
        {
            title: "Project 3",
            tech: [SiNextdotjs, SiNextdotjs, SiNextdotjs],
            link: "link3",
            cover: "/projects/project-3/PageAccueil.png",
            background: "bg-cyan-500"
        },
        {
            title: "Project 3",
            tech: [SiNextdotjs, SiNextdotjs, SiNextdotjs],
            link: "link3",
            cover: "/projects/project-3/PageAccueil.png",
            background: "bg-purple-500"
        }
    ]
    return (
        <div className="py-10 p-5 sm:p-0">
            <Title text={"Projets 💻"} className="flex flex-col items-center justify-center rotate-6"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
                {projects.map((project, index) => {
                    return <Link href={project.link} key={index}>
                        <div className={cn("p-5 rounded-md", project.background)}>
                            <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                                <div className="space-y-5">
                                    <h1 className="text-2xl font-bold">{project.title}</h1>
                                    <div className="flex items-center gap-5">
                                        {project.tech.map((Icon, index) => {
                                            return <Icon className="w-8 h-8" key={index}/>
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                })}
            </div>
        </div>
    );
}