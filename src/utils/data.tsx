import { ProjectCardProps } from "@/components/project-card";
import { Globe, LayoutPanelLeft, PanelTop, Store, Wrench } from "lucide-react";
import NPM from "@/../public/npm.jpg"
import Lily from "@/../public/lily-bg.jpg"
import SpredictWebsite from "@/../public/spredict.png"
import SpredictWebApp from "@/../public/spredict.webp"
import { GithubIcon } from "@/components/icons/tech";


export const reviews = [
    {
        name: "Freelance",
        body: "Merci pour le travail effectué",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "IPSSI",
        body: "Fait preuve d’un professionnalisme exemplaire. Son sens du détail, sa rigueur et sa capacité à fournir un travail soigné sont remarquables. Chaque mission est réalisée avec sérieux et efficacité, dans le respect des délais. On peut compter sur lui pour fournir un résultat de grande qualité, toujours à la hauteur des attentes.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "Mane",
        body: "Tres bonne communication, à su répondre à nos attentes, je recommande",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Asana Code",
        body: "J’ai eu le plaisir de collaborer avec le fondateur d’IdeaToCode dans une précédente entreprise, et c’est quelqu’un que j'admire pour sa polyvalence et sa rigueur. Très à l’aise aussi bien sur le développement frontend que sur l’infrastructure, il maîtrise parfaitement les enjeux DevOps, les outils comme Docker, GitLab CI/CD, et les bonnes pratiques de déploiement sécurisé. Au-delà de ses compétences techniques, c’est un collègue fiable et proactif. Même si je n’ai pas encore eu l’occasion de collaborer avec IdeaToCode directement, je recommande vivement cette agence en toute confiance !",
        img: "https://avatar.vercel.sh/jane",
    },
    {
        name: "Deviez Intérieur",
        body: "Idéa 2 code à su faire preuve d’un suivi exemplaire, de la compréhension de nos besoins aux respects des délais. Super communication, retours réguliers, bref, ce que l’on attend ce genre de prestataire.",
        img: "https://avatar.vercel.sh/jenny",
    },
];

export const servicesData = {
    landingPage: {
        title: 'Landing Page',
        Icon: <PanelTop className="mr-2 size-7" />,
        desc: `Page d'atterrissage optimisée pour transformer vos visiteurs en clients. Design moderne, contenu persuasif et expérience utilisateur parfaite pour maximiser vos conversions.`,
        values: ['Taux de conversion optimisé', 'Design responsive et moderne', 'Temps de chargement litra-rapide', 'Intégration analytics et tracking'],
        stack: ['Nextjs', 'Tailwind', 'Typescript'],
        button: { text: 'Obtenir devis', link: '/' },
        price: 'A Partir de 500€'
    },
    vitrineSite: {
        title: 'Site Vitrine',
        Icon: <Store className="mr-2 size-7" />,
        desc: `Vitrine digitale complète pour présenter votre activité avec élégance. Multi-pages, optimisé SEO et conçu pour renforcer votre crédibilité et attirer de nouveaux clients.`,
        values: ['Présence professionnelle en ligne', 'Optimisation SEO complète', 'Gestion de contenu simplifiée', 'Compatible tous appareils'],
        stack: ['Nextjs', 'Strapi', 'React', 'Tailwind', 'Typescript'],
        button: { text: 'Obtenir devis', link: '/' },
        price: 'A Partir de 800€'
    },
    webapp: {
        title: 'SaaS Sur-Mesure',
        Icon: <LayoutPanelLeft className="mr-2 size-7" />,
        desc: `Application web complète avec tableau de bord, gestion utilisateurs, paiements et toutes les fonctionnalités métier spécifiques à votre business. Architecture scalable et sécurisée.`,
        values: ['Solution métier personnalisée', 'Monétisation intégrée', 'Évolutivité garantie', 'Sécurité et performance'],
        stack: ['Nextjs', 'React', 'Tailwind', 'Typescript', 'Nodejs', 'Strapi', 'Pgsql', 'Docker', 'CI/CD'],
        button: { text: 'Obtenir devis', link: '/' },
        price: 'A Partir de 2000€'
    },
    intervention: {
        title: `Intervention d'Apps`,
        Icon: < Wrench className="mr-2 size-7" />,
        desc: `Développement de nouvelles fonctionnalités ou intervention technique sur votre application existante. Audit, optimisation, corrections et évolutions pour maintenir votre avantage concurrentiel.`,
        values: [`Valorisation de l'existant`, 'Nouvelles fonctionnalités rapidement', 'Optimisation des performances', 'Maintenance technique assurée'],
        stack: ['Adaptable à votre stack existante', 'Python', 'Php', 'React'],
        button: { text: 'Obtenir devis', link: '/' },
        price: 'A Partir de 280€/jour'
    }
}

export const ProjectData: ProjectCardProps[] = [
    {

        title: 'Developpement Appli Web3',
        dates: 'Octobre 2024 - novembre 2024',
        tags: ['Typescript', 'Nextjs',],
        description: `Dévelopement d'une Dapp de prédiction sportive qui interagie avec une blockchain privée`,
        image: SpredictWebApp.src
    },
    {

        title: 'Site Vitrine Appli web3',
        dates: 'Septembre 2024',
        tags: ['Typescript', 'Nextjs',],
        description: `Developpement d'un site vitrine pour une Dapp de prédiction sportive qui interagie avec une blockchain privée`,
        image: SpredictWebsite.src,
        links: [
            {
                href: 'https://spredict.io',
                type: 'Site web',
                icon: <Globe className="size-5!" />
            }
        ]
    },
    {

        title: 'Refonte Application Web',
        dates: 'septembre 2022 - aout 2024',
        tags: ['Typescript', 'Nodejs', 'React', 'Pgsql', 'Strapi', 'Docker', 'Kubernetes', 'Ovh Cloud'],
        description: `Refonte total d'un application V2 vers V3`,
        image: Lily.src
    },
    {

        title: 'Librairie Object Mapping Redis Typesafe',
        dates: 'Juil 2023',
        tags: ['Typescript', 'Nodejs', 'Redis'],
        description: `A small library that uses zod and ioredis to create typesafe schemas for an easyest redis object use`,
        links: [
            {
                href: 'https://www.npmjs.com/package/@e2fy/ioredis-zod-om',
                type: 'Code source',
                icon: <GithubIcon className="size-5! p-0.25 bg-black rounded-full" />
            }
        ],
        image: NPM.src
    },
    {

        title: 'Librairie de chiffrement Typesafe JS',
        dates: 'Juil 2023',
        tags: ['Typescript', 'Nodejs',],
        description: `Crypto lib for hash password, encrypt data or generate jwt with type safety`,
        links: [
            {
                href: 'https://www.npmjs.com/package/@e2fy/effy-crypto',
                type: 'Code source',
                icon: <GithubIcon className="size-5! p-0.25 bg-black rounded-full" />
            }
        ],
        image: NPM.src
    },
    {

        title: 'Developpement Micro SaaS Signature Email',
        dates: 'mai 2023 - juin 2023',
        tags: ['Typescript', 'Nodejs', 'React'],
        description: `Développement d'une mini application web génératrice de signature électronique email pour l’équipe commercial`,
        image: Lily.src
    },
]