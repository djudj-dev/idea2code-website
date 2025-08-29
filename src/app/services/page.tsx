import { InitPageSession } from "@/components/init-session";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { ServicesCard } from "@/components/services-card";
import { TechBadge } from "@/components/tech-badge";
import { Typography } from "@/components/typography";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesData } from "@/utils/data";
import { ArrowUpDown, Cloudy, FileJson, GlobeLock, PencilRuler, Repeat, SearchCode } from "lucide-react";
import React from "react";

const Services = () => (<>
    <section className="w-full pb-4 md:pb-8 flex flex-col justify-center">
        <AuroraText colors={["var(--foreground)", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl font-light">
            Services & Expertise
        </AuroraText>
        <Typography.Lead className="mt-4 pb-4 text-base! md:text-lg! border-b-1 border-b-[--foreground]/15">
            Des solutions techniques adaptées à chaque étape de votre croissance digitale
        </Typography.Lead>
        <div className="mt-12 w-full grid lg:grid-cols-2 2xl:grid-cols-4 gap-12">
            <ServicesCard {...servicesData.landingPage} />
            <ServicesCard {...servicesData.vitrineSite} />
            <ServicesCard {...servicesData.webapp} />
            <ServicesCard {...servicesData.intervention} />
        </div>
    </section>
    <section className="w-full py-4 md:py-8 flex flex-col justify-center">
        <AuroraText colors={["var(--foreground)", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light!">
            Nos Process :
        </AuroraText>
        <div className="mt-6 p-6 bg-muted relative font-light! md:font-semibold! rounded font-mono text-sm font-semibold rounded-[0.625rem] border-1 border-[--foreground]/15">
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
        <AuroraText colors={["var(--foreground)", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light!">
            Expertises :
        </AuroraText>
        <div className="mt-12 w-full grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card className="relative rounded-[0.625rem] ">
                <CardHeader>
                    <CardTitle>
                        <div className="p-1 h-fit w-fit flex items-center text-xl flex rounded-full bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF]">
                            <Typography.Header3 className="px-2 text-white">
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
                            <Typography.Header3 className="px-2 text-white">
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
                            <Typography.Header3 className="px-2 text-white">
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
                            <Typography.Header3 className="px-2 text-white">
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
    <InitPageSession page="service"/>
</>)

export default Services;