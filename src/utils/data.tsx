import { ProjectCardProps } from '@/components/project-card';
import { FolderCode, Rocket, Store, Wrench } from 'lucide-react';
import NPM from '@/../public/npm.jpg';
import Lily from '@/../public/lily-bg.jpg';
import SpredictWebsite from '@/../public/spredict.png';
import SpredictWebApp from '@/../public/spredict.webp';
import DiotSciaci from '@/../public/diot-sciaci-bg.png';
import Amcos from '@/../public/amcos.webp';
import Ozapay from '@/../public/ozapay.png';
import Saml from '@/../public/saml.jpg';
import Cedac from '@/../public/cedac.jpg';

import { GithubIcon } from '@/components/icons/tech';

export const reviews = [
  {
    name: 'Freelance',
    body: 'Merci pour le travail effectué',
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'IPSSI',
    body: 'Fait preuve d’un professionnalisme exemplaire. Son sens du détail, sa rigueur et sa capacité à fournir un travail soigné sont remarquables. Chaque mission est réalisée avec sérieux et efficacité, dans le respect des délais. On peut compter sur lui pour fournir un résultat de grande qualité, toujours à la hauteur des attentes.',
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'Mane',
    body: 'Très bonne communication, a su répondre à nos attentes, je recommande',
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Asana Code',
    body: "J’ai eu le plaisir de collaborer avec le fondateur d’IdeaToCode dans une précédente entreprise, et c’est quelqu’un que j'admire pour sa polyvalence et sa rigueur. Très à l’aise aussi bien sur le développement frontend que sur l’infrastructure, il maîtrise parfaitement les enjeux DevOps, les outils comme Docker, GitLab CI/CD, et les bonnes pratiques de déploiement sécurisé. Au-delà de ses compétences techniques, c’est un collègue fiable et proactif. Même si je n’ai pas encore eu l’occasion de collaborer avec IdeaToCode directement, je recommande vivement cette agence en toute confiance !",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    name: 'Deviez Intérieur',
    body: 'Idéa 2 code à su faire preuve d’un suivi exemplaire, de la compréhension de nos besoins aux respects des délais. Super communication, retours réguliers, bref, ce que l’on attend ce genre de prestataire.',
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    name: 'Codeur.com',
    body: 'Excellent travail fait rapidement.',
    img: 'https://avatar.vercel.sh/codeur',
  },
  {
    name: 'Codeur.com',
    body: 'Facilité de communication et compréhension de mes attentes. La prestation est à la hauteur de ce que j’espérais et le délai de réalisation a largement été tenu. Merci et je recommande !',
    img: 'https://avatar.vercel.sh/codeur-2',
  },
];

export const servicesData = {
  landingPage: {
    number: '01',
    accent: 'primary' as const,
    title: 'Landing Page',
    icon: Rocket,
    desc: `Une page construite pour convertir. Structure claire, performances mesurées, contenu aligné sur votre offre. Le minimum requis pour transformer un visiteur en prospect, sans superflu.`,
    values: [
      'Structure pensée pour la conversion',
      'Core Web Vitals mesurés et optimisés',
      'SEO technique et métadonnées propres',
      'Analytics et suivi des conversions',
    ],
    button: {
      text: 'Obtenir un devis',
      link: '/contact?projectType=landingpage',
    },
    price: 'À partir de 750€',
  },
  vitrineSite: {
    number: '02',
    accent: 'secondary' as const,
    title: 'Site Vitrine',
    icon: Store,
    desc: `Un site multi-pages sobre et maintenable. Contenu éditable, SEO technique soigné, performances qui tiennent dans la durée. Une présence web qui fait ce qu'elle promet, sans usine à gaz.`,
    values: [
      'CMS pour éditer sans toucher au code',
      'SEO technique (schema, sitemap, meta)',
      'Responsive et accessible par défaut',
      'Hébergement rapide et scale-to-zero',
    ],
    button: {
      text: 'Obtenir un devis',
      link: '/contact?projectType=vitrinewebsite',
    },
    price: 'À partir de 2000€',
  },
  webapp: {
    number: '03',
    accent: 'amber' as const,
    title: 'SaaS',
    icon: FolderCode,
    desc: `Votre application métier, conçue pour durer en production. Architecture lisible, authentification, paiements, APIs, base de données. Chaque brique est assemblée selon vos besoins réels, pas selon un catalogue de fonctionnalités.`,
    values: [
      'Architecture adaptée à votre métier',
      'Authentification et paiements intégrés',
      'Base de données et APIs typées',
      'Déploiement automatisé et monitoré',
    ],
    button: { text: 'Obtenir un devis', link: '/contact?projectType=SaaS' },
    price: 'À partir de 3500€',
  },
  intervention: {
    number: '04',
    accent: 'emerald' as const,
    title: 'Interventions',
    icon: Wrench,
    desc: `Nous reprenons une application existante et la remettons en état. Refonte d'outils internes, migration progressive, nouvelles fonctionnalités, correction de la dette technique. Nous intervenons sur ce qui tourne déjà, sans réécriture complète par défaut.`,
    values: [
      `Refonte d'outils internes PME`,
      'Migration progressive et sans casse',
      'Nouvelles fonctionnalités et correctifs',
      'Dette technique résorbée',
    ],
    button: {
      text: 'Obtenir un devis',
      link: '/contact?projectType=Intervention',
    },
    price: 'À partir de 300€/jour',
  },
};

export const ProjectData: ProjectCardProps[] = [
  {
    title: 'Refonte Application Gestion de Stocks',
    dates: 'Avril 2026  - Présent',
    tags: ['Typescript', 'Nextjs', 'Strapi', 'Pgsql', 'Docker'],
    description: `Refonte complète d'un outil interne (Magic → WebApp) pour SAML/FAYAT : inventaire par QR code, sorties de stocks, gestion des lavages, interfacé avec l'ERP LocPro`,
    image: Saml.src,
    imageFit: 'contain',
  },
  {
    title: 'CRM Interne & Simulateur de Chiffrage',
    dates: 'Février 2026 - Avril 2026',
    tags: ['React', 'Nextjs', 'Php', 'Pgsql', 'OvhCloud'],
    description: `Évolution d'un CRM interne (V1 → V2) avec développement d'un simulateur de durée d'évaluation pour établissements ESSMS`,
    image: Amcos.src,
    imageFit: 'contain',
  },
  {
    title: 'Site Vitrine Association Culturelle',
    dates: 'Mars 2026  - Présent',
    tags: ['Typescript', 'Nextjs', 'Strapi', 'Pgsql', 'Vercel'],
    description: `Développement d'un site vitrine pour le CEDAC Guadeloupe : événements, artistes, médiathèque et back-office CMS autonome`,
    image: Cedac.src,
  },
  {
    title: 'Refonte Technique Complète Fintech',
    dates: 'Aout 2025 - Présent',
    tags: ['Flutter', 'Typescript', 'Nodejs', 'Pgsql', 'Docker', 'Terraform'],
    description: `Reprise et refonte totale d'une application fintech Ozapay : reconstruction API, migration des données, app mobile iOS/Android, site vitrine et infrastructure`,
    image: Ozapay.src,
    imageFit: 'contain',
  },
  {
    title: 'UX/UI React Integration',
    dates: 'Juillet 2025',
    tags: ['Typescript', 'React'],
    description: `Integration d'element d'UI/X et fix de bug d'une application interne`,
    image: DiotSciaci.src,
  },
  {
    title: 'Developpement Appli Web3',
    dates: 'Octobre 2024 - novembre 2024',
    tags: [
      'Typescript',
      'Tailwind',
      'React',
      'Nextjs',
      'Nodejs',
      'Strapi',
      'Pgsql',
      'Docker',
    ],
    description: `Dévelopement d'une Dapp de prédiction sportive qui interagie avec une blockchain privée`,
    image: SpredictWebApp.src,
  },
  {
    title: 'Site Vitrine Appli web3',
    dates: 'Septembre 2024',
    tags: ['Typescript', 'Tailwind', 'Nextjs'],
    description: `Developpement d'un site vitrine pour une Dapp de prédiction sportive qui interagie avec une blockchain privée`,
    image: SpredictWebsite.src,
  },
  {
    title: 'Refonte Application Web',
    dates: 'septembre 2022 - aout 2024',
    tags: [
      'Typescript',
      'Nodejs',
      'React',
      'Pgsql',
      'Strapi',
      'Docker',
      'Kubernetes',
      'OvhCloud',
    ],
    description: `Refonte total d'un application V2 vers V3`,
    image: Lily.src,
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
        icon: (
          <GithubIcon className="size-5! p-0.25 bg-foreground rounded-full" />
        ),
      },
    ],
    image: NPM.src,
  },
  {
    title: 'Librairie de chiffrement Typesafe JS',
    dates: 'Juil 2023',
    tags: ['Typescript', 'Nodejs'],
    description: `Crypto lib for hash password, encrypt data or generate jwt with type safety`,
    links: [
      {
        href: 'https://www.npmjs.com/package/@e2fy/effy-crypto',
        type: 'Code source',
        icon: (
          <GithubIcon className="size-5! p-0.25 bg-foreground rounded-full" />
        ),
      },
    ],
    image: NPM.src,
  },
  {
    title: 'Developpement Micro SaaS Signature Email',
    dates: 'mai 2023 - juin 2023',
    tags: ['Typescript', 'Nodejs', 'React'],
    description: `Développement d'une mini application web génératrice de signature électronique email pour l’équipe commerciale`,
    image: Lily.src,
  },
];

const HOME_FEATURED_TITLES = [
  'Refonte Technique Complète Fintech',
  'Refonte Application Gestion de Stocks',
  'CRM Interne & Simulateur de Chiffrage',
  'Site Vitrine Association Culturelle',
];

export const HomeProjectData: ProjectCardProps[] = HOME_FEATURED_TITLES.flatMap(
  (title) => {
    const project = ProjectData.find((entry) => entry.title === title);
    return project ? [project] : [];
  },
);
