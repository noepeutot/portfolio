import React from 'react';
import {SiGithub} from "react-icons/si";
import {SiLinkedin} from "react-icons/si";
import Link from "next/link";
import {cn} from "@/lib/utils";

export default function Navbar({className}: { className?: string }) {
    const socials = [
        {
            link: "https://www.linkedin.com/in/noe-peutot/",
            label: "Linkeddin",
            icon: SiLinkedin,
        },
        {
            link: "https://github.com/noepeutot",
            label: "Github",
            icon: SiGithub,
        }
    ]
    return (
        <nav className={cn("py-10 flex justify-between items-center", className)}>
            <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
                Portfolio 👨‍💻
            </h1>
            <div className="flex items-centerg gap-5">
                {socials.map((social, index) => {
                    const Icon = social.icon;
                    return <Link href={social.link} key={index} aria-label={social.label}>
                        <Icon className="w-5 g-5 hover:scale-125 transition-all"></Icon>
                    </Link>
                })}
            </div>
        </nav>
    );
}