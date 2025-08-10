import { Globe } from "./magicui/globe";
import { Typograpy } from "./Typography";
import { Button } from "./ui/button";
import Test from "../../public/cube.svg"
import Image from "next/image";
import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";
import { WarpBackground } from "./magicui/warp-background";
import { Ripple } from "./magicui/ripple";
import { FlickeringGrid } from "./magicui/flickering-grid";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ShineBorder } from "./magicui/shine-border";
import { Mail, ShieldCheck, Shuffle, TimerReset, Zap } from 'lucide-react';
import { AuroraText } from "./magicui/aurora-text";
import { Particles } from "./magicui/particles";
import { NeonGradientCard } from "./magicui/neon-gradient-card";

export const Hero = () => (
    <>
        <section className="w-full p-4 md:py-8 md:px-24 flex flex-col-reverse md:flex-row justify-center ">
            <div className="md:h-[600px] md:w-1/2 flex justify-center">
                <div className="md:w-3/4 relative my-auto flex flex-col items-start border-b-1 border-b-white/15">
                    <AuroraText colors={["#00F0FF", "#5200FF", "#FF2DF7"]} className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl font-light">
                        Une Idée ? On la Code !
                    </AuroraText>
                    <Typograpy.Header1 className="z-10 md:mt-6 font-light">
                        Votre vision devient réalité
                    </Typograpy.Header1>
                    <Typograpy.Text className="mt-4! md:mt-8! md:font-normal font-thin">Du concept à la mise en ligne, créons ensemble des solutions digitales solides, performantes et évolutives</Typograpy.Text>
                    <Button variant="outline" className="relative cursor-pointer rounded-full border-(--secondary) my-4 md:my-12">
                        Contact
                        <ShineBorder  shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                    </Button>
                </div>
            </div>
            <div className="h-[350px] md:h-[600px] md:w-1/2 relative overflow-hidden">
                <Globe className="md:m-0"/>
            </div>
        </section>
        <section className="w-full p-4 md:py-8 md:px-24 flex flex-col-reverse md:flex-row justify-left items-center gap-6">
            <div className="md:w-1/2 flex justify-center items-center">
                <div className="md:w-3/4 my-auto py-4 md:py-12 flex flex-col justify items-start md:border-b-1 md:border-b-white/15">
                    <AuroraText colors={["#00F0FF", "#7a3dffff", "#ffffffff"]} className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light!">
                         Des Solutions Complètes
                    </AuroraText>
                    <Typograpy.Text className=" mt-4! md:mt-8! leading-5! md:leadin8! md:font-normal font-thin">
                       {`Startup avec une idée révolutionnaire, entreprise cherchant à moderniser ses outils, ou professionnel voulant marquer sa présence en ligne ? Peu importe votre profil, je développe la solution technique qui correspond exactement à vos besoins et ambitions.`}
                    </Typograpy.Text>
                    <br/>
                    <Typograpy.Text className="mt-0! leading-5! font-thin md:leadin8! md:font-normal">
                    {`De l'analyse initiale au déploiement final, je prends en charge l'intégralité de votre projet avec une approche sur-mesure. Vous gardez le contrôle de votre vision, je transforme vos idées en réalité digitale performante et évolutive.`}
                    </Typograpy.Text>
                    <Button variant="outline" className=" relative cursor-pointer rounded-full mt-4 md:mt-12">
                        Nos Sevices
                        <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                    </Button>
                </div>
            </div>
            <Terminal className="md:w-1/2 ">
                <TypingAnimation>&gt; Développer mon idée</TypingAnimation>
                <AnimatedSpan className="text-green-500">
                    <span>✔ Prise de contact</span>
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    <span>✔ Validation Devis</span>
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    <span>✔ Démarrage developpement...</span>
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    <span>✔ Plusieurs validation pendant le développement</span>
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    <span>✔ Validation version finale</span>
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    <span>✔ Deploiement</span>
                </AnimatedSpan>
                <AnimatedSpan className="text-green-500">
                    <span>✔ Votre V1 et disponible !</span>
                </AnimatedSpan>
                <AnimatedSpan className="text-blue-500">
                    <span>Voici vos librables</span>
                    <span className="pl-2">- Code source</span>
                    <span className="pl-2">- documentation</span>
                </AnimatedSpan>
                <TypingAnimation className="text-muted-foreground">
                    {`bravo ! votre projet a vue le jours en un clin d'oeil`}
                </TypingAnimation>
                <TypingAnimation className="text-muted-foreground">
                    Besoin de nouvelle fonctionalitées ?
                </TypingAnimation>
            </Terminal>
        </section>
    {/* <section className="w-full p-4 md:py-8 md:px-24 flex flex-col md:flex-row justify-left items-center gap-6">
        <div className="md:w-1/2">
            <Image className=" max-w-128 m-auto" src={Test} alt="cube"/>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
            <div className="md:w-3/4 my-auto py-4 md:py-12 flex flex-col justify items-start border-b-1 border-b-white/15">
                <Typograpy.Header2 className="z-10 text-(--secondary) font-light!">
                    Performance
                </Typograpy.Header2>
                <Typograpy.Text className="mt-0! leading-5! font-thin md:leadin8! md:font-normal">
                    Chaque milliseconde compte pour vos utilisateurs. J'optimise vos applications pour des temps de chargement ultra-rapides et une expérience utilisateur fluide, quel que soit le volume de trafic. Votre succès passe par des performances qui impressionnent.
                </Typograpy.Text>
                <Button variant="outline" className="cursor-pointer rounded-full border-(--secondary) mt-4 md:mt-12">Nos Sevices</Button>
            </div>
        </div>
    </section> */}
       <section className="w-full p-4 md:py-8 md:px-24 mb-12">
            <div className="w-full md:w-9/10 m-auto mb-10">
                <AuroraText colors={["#00F0FF", "#7a3dffff", "#ffffffff"]} className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light! w-full">
                    Pourquoi nous ?
                </AuroraText>
            </div>
            <div className="w-full md:w-3/4 m-auto grid grid-rows-3 md:grid-cols-3 md:grid-rows-none gap-6">
                <Card className="relative overflow-hidden w-full rounded-[0.625rem]">
                    <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                    <CardHeader className="flex items-center">
                        <Zap />
                        <CardTitle>Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="font-thin md:font-normal">
                        {`Chaque milliseconde compte pour vos utilisateurs. J'optimise vos applications pour des temps de chargement ultra-rapides et une expérience utilisateur fluide, quel que soit le volume de trafic. Votre succès passe par des performances qui impressionnent.`}
                    </CardContent>
                </Card>
                <Card className="relative overflow-hidden w-full rounded-[0.625rem]">
                    <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                    <CardHeader className="flex items-center">
                        <ShieldCheck />
                        <CardTitle>Stabilité</CardTitle>
                    </CardHeader>
                    <CardContent className="font-thin md:font-normal">
                        {`Votre projet mérite des fondations à toute épreuve. J'architecture vos solutions avec des technologies éprouvées et un code robuste qui résiste au temps et à la montée en charge. Sécurité, stabilité et fiabilité garanties.`}
                    </CardContent>
                </Card>
                <Card className="relative overflow-hidden w-full rounded-[0.625rem]">
                    <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                    <CardHeader className="flex items-center">
                        <Shuffle />
                        <CardTitle>Flexibilité</CardTitle>
                    </CardHeader>
                    <CardContent className="font-thin md:font-normal">
                       {` Vos besoins évoluent, vos solutions aussi. Je développe avec des technologies modernes et une architecture modulaire qui facilite les évolutions futures. Votre investissement technique grandit avec votre business.`}
                    </CardContent>
                </Card>
            </div>
        </section>
        <section className="relative w-full p-4 md:px-24 mb-12 overflow py-24">
            <Particles
                className="absolute inset-0 z-0"
                quantity={200}
                ease={120}
                color={"#00F0FF"}
            />
            <Card className="relative overflow-hidden w-full rounded-[0.625rem] border-0 bg-gradient-to-r from-[#00F0FF] via-[#5200FF] to-[#FF2DF7] p-4 pt-8 md:p-12">
                <CardHeader className="flex items-center ">
                    <Mail />
                    <CardTitle className="text-2xl">Contacter nous</CardTitle>
                </CardHeader>
                <CardContent className=" md:font-normal">
                   Discutons de votre vision et transformons-la ensemble en solution digitale performante. Premier échange gratuit pour analyser vos besoins.
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="bg-black/15 relative cursor-pointer rounded-full ">
                        Contact
                        <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                    </Button>
                </CardFooter>
            </Card>
        </section> 

    </>
)