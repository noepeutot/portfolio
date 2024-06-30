"use client";
import React from 'react';
import Title from "@/app/(home)/components/Title";


export default function AboutMe() {
    return (
        <div id="propos" className="max-w-5xl mx-auto px-8">
            <Title text={"A propos 🙋‍♂️"} className="flex flex-col items-center justify-center rotate-6"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-5">
                <div className="p-5 rounded-md bg-blue-500">
                    <div className="w-full space-y-5">
                        <h1 className="text-2xl font-bold">Qui suis-je ?</h1>
                        <p>
                            Je suis actuellement en dernière année de mon BUT Informatique à l'IUT2 de Grenoble.
                            Ma formation m'a permis d'acquérir des compétences solide en développement logiciel, web et
                            en gestion de base de données. Elle m'a fait découvrir le monde merveilleux du développement
                            Web. Grâce à mes stages au CERMAV et G2Elab, j'ai pu comprendre que le développement Web est
                            un domaine qui me passionne. C'est pour cela que j'envisage de poursuivre mes études
                            dedans. </p>
                    </div>
                </div>
                <div className="p-5 rounded-md bg-blue-500">
                    <div className="w-full space-y-5">
                        <h1 className="text-2xl font-bold">Mes loisirs ?</h1>
                        <p>
                            Depuis mon plus jeune âge, j'ai touché aux jeux-vidéos. C'est une passion qui m'a permis de
                            m'épanouir et de m'évader du monde réel. J'ai également pratiqué de nombreux sports : 4 ans
                            de judo, 3 ans de handball, 1 an de gymnastique, 1 an de badminton et 1 an de musculation.
                            Le monde m'attire beaucoup et j'aspire à voyager pour découvrir de nouvelles cultures et de
                            nouveaux paysages. J'ai déjà eu l'occasion de visiter le pays de ma mère, le Laos et je
                            compte y retourner dès que possible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}