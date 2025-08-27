import { ProjectCardProps } from "@/components/project-card";
import { FolderCode, Globe, LayoutPanelLeft, PanelTop, Rocket, Store, Wrench } from "lucide-react";
import NPM from "@/../public/npm.jpg"
import Lily from "@/../public/lily-bg.jpg"
import SpredictWebsite from "@/../public/spredict.png"
import SpredictWebApp from "@/../public/spredict.webp"
import DiotSciaci from '@/../public/diot-sciaci-bg.png'
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
        body: "Très bonne communication, a su répondre à nos attentes, je recommande",
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
        Icon: <Rocket className="mr-2 size-7" />,
        desc: `Transformez vos visiteurs en clients. Une page d’atterrissage moderne et optimisée pour maximiser vos conversions grâce à un design attractif, des contenus percutants et une expérience utilisateur fluide.`,
        values: ['Taux de conversion optimisé', 'Design responsive et professionnel', 'Temps de chargement ultra-rapide', 'Suivi complet via analytics et tracking'],
        stack: ['Nextjs', 'Tailwind', 'Typescript'],
        button: { text: 'Obtenir un devis', link: '/contact' },
        price: 'A Partir de 500€'
    },
    vitrineSite: {
        title: 'Site Vitrine',
        Icon: <Store className="mr-2 size-7" />,
        desc: `Mettez en valeur votre activité en ligne. Un site web multi-pages pensé pour renforcer votre crédibilité, améliorer votre visibilité et attirer de nouveaux clients, avec une gestion simple et une optimisation SEO complète.`,
        values: ['Image professionnelle et crédible', 'Optimisation SEO intégrale', 'Gestion de contenu simplifiée', 'Compatibilité tous supports (desktop, mobile, tablette)'],
        stack: ['Nextjs', 'Strapi', 'React', 'Tailwind', 'Typescript'],
        button: { text: 'Obtenir un devis', link: '/contact' },
        price: 'A Partir de 800€'
    },
    webapp: {
        title: 'SaaS Sur-Mesure',
        Icon: <FolderCode className="mr-2 size-7" />,
        desc: `Votre application web, taillée pour votre business. Un logiciel en ligne évolutif, sécurisé et conçu sur-mesure pour votre activité : tableau de bord, gestion des utilisateurs, paiements, fonctionnalités métier… tout est pensé pour accompagner votre croissance.`,
        values: ['Solution métier 100 % personnalisée', 'Monétisation intégrée (paiements en ligne)', 'Évolutivité garantie (architecture scalable)', 'Performance et sécurité renforcées'],
        stack: ['Nextjs', 'React', 'Tailwind', 'Typescript', 'Nodejs', 'Strapi', 'Pgsql', 'Docker'],
        button: { text: 'Obtenir un devis', link: '/contact' },
        price: 'A Partir de 2000€'
    },
    intervention: {
        title: `Evolution d'Apps`,
        Icon: <Wrench className="mr-2 size-7" />,
        desc: `Améliorez et faites évoluer vos outils existants. Nous intervenons directement sur vos applications déjà en place pour : ajouter de nouvelles fonctionnalités, corriger les éventuels dysfonctionnements, renforcer les performances et assurer une maintenance continue.`,
        values: [`Valorisation de l'existant`, 'Nouvelles fonctionnalités rapidement', 'Optimisation des performances', 'Maintenance technique assurée'],
        stack: ['Python', 'React', 'Php', 'Adaptable à votre stack'],
        button: { text: 'Obtenir un devis', link: '/contact' },
        price: 'A Partir de 280€/jour'
    }
}

export const ProjectData: ProjectCardProps[] = [
    {

        title: 'UX/UI React Integration',
        dates: 'Juillet 2025',
        tags: ['Typescript', 'React',],
        description: `Integration d'element d'UI/X et fix de bug d'une application interne`,
        image: DiotSciaci.src
    },
    {

        title: 'Developpement Appli Web3',
        dates: 'Octobre 2024 - novembre 2024',
        tags: ['Typescript', 'Tailwind', 'React', 'Nextjs', 'Nodejs', 'Strapi', 'Pgsql', 'Docker',],
        description: `Dévelopement d'une Dapp de prédiction sportive qui interagie avec une blockchain privée`,
        image: SpredictWebApp.src
    },
    {

        title: 'Site Vitrine Appli web3',
        dates: 'Septembre 2024',
        tags: ['Typescript', 'Tailwind', 'Nextjs'],
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
        description: `Développement d'une mini application web génératrice de signature électronique email pour l’équipe commerciale`,
        image: Lily.src
    },
]