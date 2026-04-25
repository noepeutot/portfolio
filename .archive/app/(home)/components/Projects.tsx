import React from 'react';
import {
    SiAngular, SiBootstrap,
    SiCodeigniter,
    SiJavascript, SiJquery,
    SiPhp,
    SiPostgresql,
    SiPython,
    SiSymfony
} from "react-icons/si";
import Title from "@/archive/app/(home)/components/Title";
import {cn} from "@/archive/lib/utils";
import {DirectionAwareHover} from "@/archive/components/ui/direction-aware-hover";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/archive/components/ui/dialog"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/archive/components/ui/carousel"
import Image from "next/image";

export default function Projects() {
    const projects = [
        {
            title: "Space Charity",
            tech: [SiJavascript, SiPhp, SiPostgresql],
            description: "Durant ma deuxième année de BUT Informatique, j'ai eu comme projet de réaliser une application d'enchère en ligne. " +
                "En équipe de 6, il a été réalisé Space Charity, une application d'enchère en ligne pour des planètes. " +
                "Dans le contexte de l'application, elle avait pour objectif la récolte d’argent au profit d’association de lutte pour l’environnement, car c’est un enjeu majeur de notre futur. "+
                "Cela aidera à compenser la pollution créée par l’industrie de l’espace, c’est pour cela que la récolte de fonds se fait via des astres, le thème global est donc l’espace. "+
                "Cette vente aux enchères se déroulera plusieurs fois par an, le temps de quelques jours. " +
                "Entre deux évènements, le propriétaire d’une planète reste le même, et peut donner un surnom à sa planète. "+
                "Au début d’un nouvel évènement, les planètes sont toutes remises aux enchères. "+
                "Pendant l’évènement, les astres sont regroupés par lots, appelés vagues. "+
                "Chaque vague à une durée déterminée, souvent de quelques heures, durant lesquelles les utilisateurs peuvent enchérir sur les différents astres. "+
                "Ces enchères sont montantes, et commencent à un montant minimum, différent pour chaque astre. "+
                "Chacun peut enchérir un montant de 0 à 1000€, et dans le cas où une autre personne aurait déjà enchérit dans les 2 minutes précédentes, "+
                "l’utilisateur a environ 30 secondes pour : "+
                "Annuler son enchère, "+
                "Confirmer son enchère (avec un nouveau prix si le prix a été modifié entre-temps). "+
                "En effet, il a pu y avoir des enchères simultanées qui n’ont pas été actualisées à temps. "+
                "Le message de confirmation d’enchère permet d’afficher le nouveau prix si une autre enchère est effectivement arrivée en même temps. "+
                "Confirmer son enchère (avec un nouveau prix si le prix a été modifié entre-temps). "+
                "En effet, il a pu y avoir des enchères simultanées qui n’ont pas été actualisées à temps. Le message de confirmation d’enchère permet d’afficher le nouveau prix si une autre enchère est effectivement arrivée en même temps. ",
            image: [{url: "/projects/spacecharity/PageAccueil.png"},
                {url: "/projects/spacecharity/planete.png"},
                {url: "/projects/spacecharity/classement.png"},
                {url: "/projects/spacecharity/login.png"},
                {url: "/projects/spacecharity/TableauDeBord.png"},
                {url: "/projects/spacecharity/GestionEditions.png"},
            ],
            cover: "/projects/spacecharity/PageAccueil.png",
            background: "bg-green-500"
        },
        {
            title: "Map PULL",
            tech: [SiPhp, SiJavascript, SiPython],
            description: "Au cours de mon stage au Centre de Recherches sur les Macromolécules Végétales (CERMAV), " +
                "j’ai participé au développement d'une base de données et d'un site web dédié à l'analyse métagénomique des microbiotes humains. " +
                "Mon travail s'est concentré sur l'intégration de l'outil BLAST via SequenceServer, " +
                "permettant aux chercheurs d’effectuer des recherches sur des séquences génétiques. " +
                "J'ai développé une interface utilisateur intuitive, " +
                "facilitant l'exploration des données et le téléchargement de fichiers de génomes au format GFF et FASTA. " +
                "Le site comprend également un backoffice complet pour l'administration des bases de données, " +
                "où les chercheurs peuvent ajouter de nouvelles bases, visualiser et gérer les séquences stockées. " +
                "J'ai mis en place un système d'authentification sécurisé pour restreindre l'accès à ces fonctionnalités avancées. " +
                "Des scripts en PHP ont été créés pour automatiser le traitement et la création de bases de données compatibles, " +
                "incluant une gestion des erreurs pour accompagner les utilisateurs non spécialisés en informatique. " +
                "Enfin, l’interface a été modernisée avec un design responsive, respectant les standards d'ergonomie, " +
                "afin d’améliorer l’expérience utilisateur. Ce projet m'a permis de combiner mes compétences en développement web " +
                "et en bio-informatique tout en contribuant à un domaine de recherche innovant.",
            image: [{url: "/projects/mappul/Recherche.png"},
                {url: "/projects/mappul/blast.png"},
                {url: "/projects/mappul/backoffice.png"}
            ],
            cover: "/projects/mappul/Recherche.png",
            background: "bg-cyan-500"
        },
        {
            title: "GADI",
            tech: [SiAngular, SiSymfony, SiPostgresql],
            description: "Dans ce projet, nous avons modernisé l'application GADI, utilisée par les professeurs de l'I.U.T 2 pour gérer leurs ressources et activités. " +
                "L'objectif était de répondre aux évolutions du programme national, en intégrant notamment les Situations d'Apprentissage et d'Évaluation (SAÉ). " +
                "En collaboration étroite avec les utilisateurs, nous avons identifié des fonctionnalités clés telles que la planification des ressources et des SAÉ, " +
                "la gestion des évaluations, et l'attribution des tâches aux enseignants. " +
                "Nous avons choisi Symfony pour le backend (API) et Angular pour le frontend, avec PostgreSQL comme base de données. " +
                "Ces choix ont permis de créer une application robuste et facile à maintenir. " +
                "Parmi les fonctionnalités développées figurent la planification hebdomadaire des cours, " +
                "l'authentification, un tableau de bord interactif, et des outils de gestion des indisponibilités. " +
                "L'interface modernisée facilite l'utilisation et améliore l’expérience utilisateur. " +
                "Ce projet a été une opportunité enrichissante pour appliquer mes compétences en développement web " +
                "tout en répondant aux besoins spécifiques du personnel enseignant. ",
            image: [{url: "/projects/gadi/TableauDeBord.png"},
                {url: "/projects/gadi/Ressource.png"},
                {url: "/projects/gadi/Seances.png"},
                {url: "/projects/gadi/backofficeRessource.png"},
                {url: "/projects/gadi/creationRessource.png"}
            ],
            cover: "/projects/gadi/TableauDeBord.png",
            background: "bg-purple-500"
        },
        {
            title: "Trombinoscope",
            tech: [SiCodeigniter, SiBootstrap, SiJquery],
            description: "Dans le cadre de ma formation en BUT Informatique, j'ai eu l'opportunité d'effectuer un stage au laboratoire G2Elab à Grenoble, spécialisé dans l'ingénierie électrique. Mon stage s'est déroulé au service informatique, où j'ai été chargé de développer un nouveau trombinoscope pour le laboratoire, destiné à remplacer une version obsolète datant de vingt ans. L'objectif principal était de créer un site moderne et dynamique permettant aux utilisateurs de mettre à jour leurs informations personnelles de manière sécurisée, avec validation par les administrateurs.\n" +
                "Pour ce projet, j'ai développé une interface utilisateur intuitive en utilisant les couleurs du laboratoire pour rendre le site attractif. Le site permet aux utilisateurs de mettre à jour leurs informations personnelles avec chaque modification nécessitant une validation par les administrateurs. J'ai également intégré une barre de recherche et des filtres avancés pour faciliter la navigation et la recherche de personnel par statut, équipe ou tutelle.\n" +
                "Le backoffice permet aux administrateurs et modérateurs de gérer les validations et de superviser les modifications apportées par les utilisateurs. Le design de l'interface, inspiré du style minimaliste \"bento\", améliore la clarté visuelle et rend l'expérience utilisateur agréable.\n" +
                "La possibilité de modifier les informations et de télécharger de nouvelles photos de profil a été implémentée avec des contrôles stricts pour garantir la conformité des fichiers.\n" +
                "Ce projet m'a permis de développer mes compétences en développement web, gestion de bases de données et sécurité informatique, tout en contribuant à l'amélioration des outils de gestion du personnel au sein du G2Elab.\n",
            image: [{url: "/projects/trombi/PageAccueil.png"},
                {url: "/projects/trombi/page_profile.png"},
                {url: "/projects/trombi/page_modification.png"},
                {url: "/projects/trombi/page_login.png"},
                {url: "/projects/trombi/dashboard.png"},
                {url: "/projects/trombi/users.png"},
                {url: "/projects/trombi/moderation.png"},
                {url: "/projects/trombi/modearation_en_attente.png"}
            ],
            cover: "/projects/trombi/PageAccueil.png",
            background: "bg-yellow-500"
        }
    ]

    return (
        <div id="projet" className="py-10 p-5 sm:p-0">
            <Title text={"Projets 💻"} className="flex flex-col items-center justify-center rotate-6"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-5">
                {projects.map((project, index) => {
                    return <Dialog key={index}>
                        <DialogTrigger>
                            <div>
                                <div className={cn("p-5 rounded-md", project.background)}>
                                    <DirectionAwareHover imageUrl={project.cover}
                                                         className="w-full space-y-5 cursor-pointer">
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
                            </div>
                        </DialogTrigger>
                        <DialogContent className={cn("overflow-y-scroll")}>
                            <DialogHeader>
                                <DialogTitle className="flex flex-row justify-start mb-5">
                                    <h1 className="text-3xl">{project.title}</h1>
                                    <span className="flex flex-row align-middle ms-5">
                                        {project.tech.map((Icon, index) => {
                                            return <Icon className="w-8 h-8 ms-2 me-2" key={index}/>
                                        })}
                                    </span>
                                </DialogTitle>
                                <DialogDescription
                                    className="text-xl text-justify flex items-center justify-center flex-col">
                                    <Carousel className="w-[720px]">
                                        <CarouselContent>
                                            {project.image.map((image, index) => {
                                                return <CarouselItem key={index}>
                                                    <Image className="pb-5" src={image.url}
                                                           alt={project.title} width={720} height={480}/>
                                                </CarouselItem>
                                            })}
                                        </CarouselContent>
                                        <CarouselPrevious/>
                                        <CarouselNext/>
                                    </Carousel>
                                    {project.description}
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                })}
            </div>
        </div>
    );
}