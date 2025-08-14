import { NextjsIcon, ReactIcon, TailwindIcon, TypescriptIcon } from "@/components/icons/tech";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { TechBadge } from "@/components/tech-badge";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpDown, Cloud, Cloudy, FileJson, GlobeLock, Infinity, LayoutPanelLeft, PanelTop, PencilRuler, Repeat, SearchCode, Store, Wrench } from "lucide-react";
import Link from "next/link";
import React from "react";


const ServicesCard = ({
    title,
    desc,
    values,
    stack,
    Icon,
    button,
    price
}: {
    title: string,
    Icon: React.JSX.Element,
    desc: string,
    values: string[],
    stack: string[]
    button: { text: string, link: string },
    price: string
}) => (
    <Card className="relative rounded-[0.625rem] ">
        <CardHeader>
            <CardTitle className="pb-2">
                <div className="p-2 px-4 h-fit w-fit flex items-center text-xl md:text-2xl flex rounded-full bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF]">
                    {Icon}
                    <Typography.Header3 className="pr-4 font-medium!">
                        {title}
                    </Typography.Header3>
                </div>
            </CardTitle>
            <CardDescription className="mt-3">
                <Typography.Text className="leading-5! md:leading-6! text-xs! md:text-base! text-white">
                    {desc}
                </Typography.Text>
            </CardDescription>
        </CardHeader>
        <CardContent className="h-full border-t-1 border-t-white/15 py-2 md:py-4">
            <div>
                <Typography.Lead className="font-semibold text-base! md:text-xl!">
                    Valeur Ajouté :
                </Typography.Lead>
                <ul className="ml-4 mt-3">
                    {values.map((value, index) => (
                        <li key={index} className="flex items-center text-xs! md:text-base!">- {value}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <Typography.Lead className="font-semibold text-base! md:text-xl!">
                    Technologies utilisées :
                </Typography.Lead>
                <div className="mt-2">
                    {stack.map((tech, index) => (
                        <TechBadge key={index} tech={tech} />
                    ))}
                </div>
            </div>
        </CardContent>
        <CardFooter className="h-fit flex items-end justify-between pt-4 border-t-1 border-t-white/15">
            <Typography.Large className="font-semibold text-base! md:text-xl!">{price}</Typography.Large>
            <Link href={button.link}>
                <Button variant="outline" className="bg-black/15 relative cursor-pointer rounded-full ">
                    {button.text}
                    <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                </Button>
            </Link>
        </CardFooter>
        <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
    </Card>
)


const data = {
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

const Services = () => (<>
    <section className="w-full pb-4 md:pb-8 flex flex-col justify-center">
        <AuroraText colors={["#00F0FF", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl font-light">
            Services & Expertise
        </AuroraText>
        <Typography.Lead className="mt-4 pb-4 text-base! md:text-lg! border-b-1 border-b-white/15">
            Des solutions techniques adaptées à chaque étape de votre croissance digitale
        </Typography.Lead>
        <AuroraText colors={["#00F0FF", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light!">
            Services :
        </AuroraText>
        <div className="mt-12 w-full grid lg:grid-cols-2 2xl:grid-cols-4 gap-12">
            <ServicesCard {...data.landingPage} />
            <ServicesCard {...data.vitrineSite} />
            <ServicesCard {...data.webapp} />
            <ServicesCard {...data.intervention} />
        </div>
    </section>
    <section className="w-full py-4 md:py-8 flex flex-col justify-center">
        <AuroraText colors={["#00F0FF", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light!">            Nos Process :
        </AuroraText>
        <div className="mt-6 p-6 bg-muted relative font-light! md:font-semibold! rounded font-mono text-sm font-semibold rounded-[0.625rem] border-1 border-white/15">
            <div className="flex items-center  ">
                <SearchCode />
                <Typography.Text className="ml-2 mt-0! leading-5!">
                    Analyse & Conseil - Étude de vos besoins
                </Typography.Text>
            </div>
            <div className="flex items-center mt-3">
                <PencilRuler />
                <Typography.Text className="ml-2 mt-0! leading-5!">
                    Conception & Architecture - Choix techniques optimaux
                </Typography.Text>
            </div>
            <div className="flex items-center mt-3">
                <FileJson />
                <Typography.Text className="ml-2 mt-0! leading-5!">
                    Développement - Code propre et testé
                </Typography.Text>
            </div>
            <div className="flex items-center mt-3">
                <GlobeLock strokeWidth={2} className="size-6 font-light!" />
                <Typography.Text className="ml-2 mt-0! leading-5!">
                    Déploiement - Mise en ligne sécurisée
                </Typography.Text>
            </div>
            <div className="flex items-center mt-3">
                <SearchCode />
                <Typography.Text className="ml-2 mt-0! leading-5!">
                    Suivi & Évolution - Accompagnement continu
                </Typography.Text>
            </div>
        </div>
    </section>
    <section className="w-full py-4 md:py-8 flex flex-col justify-center">
        <AuroraText colors={["#00F0FF", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light!">
            Expertises :
        </AuroraText>
        <div className="mt-12 w-full grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card className="relative rounded-[0.625rem] ">
                <CardHeader>
                    <CardTitle>
                        <div className="p-1 h-fit w-fit flex items-center text-xl flex rounded-full bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF]">
                            <Typography.Header3 className="px-2">
                                Frontend
                            </Typography.Header3>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="mt-0">
                    <TechBadge tech="React" />
                    <TechBadge tech="Tailwind" />
                    <TechBadge tech="Nextjs" />
                    <TechBadge tech="Typescript" />
                </CardContent>
                <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
            </Card>
            <Card className="relative rounded-[0.625rem] ">
                <CardHeader>
                    <CardTitle>
                        <div className="p-1 h-fit w-fit flex items-center text-xl flex rounded-full bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF]">
                            <Typography.Header3 className="px-2 ">
                                Backend
                            </Typography.Header3>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="">
                    <TechBadge tech="Nodejs" />
                    <TechBadge tech="Strapi" />
                    <TechBadge tech="Typescript" />
                    <TechBadge tech="Python" />
                    <TechBadge setIcon={({ className }: { className: string }) => <ArrowUpDown className={className} />} tech="API REST/GraphQL" />
                </CardContent>
                <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
            </Card>
            <Card className="relative rounded-[0.625rem] ">
                <CardHeader>
                    <CardTitle>
                        <div className="p-1 h-fit w-fit flex items-center text-xl flex rounded-full bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF]">
                            <Typography.Header3 className="px-2 ">
                                Base de donnée
                            </Typography.Header3>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="">
                    <TechBadge tech="Redis" />
                    <TechBadge tech="Pgsql" />
                    <TechBadge tech="Mongodb" />
                </CardContent>
                <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
            </Card>
            <Card className="relative rounded-[0.625rem] ">
                <CardHeader>
                    <CardTitle>
                        <div className="p-1 h-fit w-fit flex items-center text-xl flex rounded-full bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF]">
                            <Typography.Header3 className="px-2 ">
                                DevOps
                            </Typography.Header3>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="">
                    <TechBadge tech="Docker" />
                    <TechBadge tech="Git" />
                    <TechBadge tech="Bash" />
                    <TechBadge setIcon={({ className }: { className: string }) => <Cloudy className={className} />} tech="Cloud ( AWS / Vercel )" />
                    <TechBadge setIcon={({ className }: { className: string }) => <Repeat className={className} />} tech="CI/CD" />
                </CardContent>
                <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
            </Card>
        </div>
    </section>
</>)

export default Services;