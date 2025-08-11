import { Globe } from "./magicui/globe";
import { Typograpy } from "./Typography";
import { Button } from "./ui/button";
import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ShineBorder } from "./magicui/shine-border";
import { Mail, ShieldCheck, Shuffle, Zap } from 'lucide-react';
import { AuroraText } from "./magicui/aurora-text";
import { Particles } from "./magicui/particles";
import { string } from "@/utils/string";
import { Marquee } from "./magicui/marquee";
import { cn } from "@/lib/utils";


const reviews = [
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


const ReviewCard = ({
    img,
    name,
    body,
}: {
    img: string;
    name: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full max-w-48 md:max-w-86 cursor-pointer overflow-hidden rounded-[0.625rem] border p-4",
                // dark styles
                "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-white">
                        {name}
                    </figcaption>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body.length > 120 ? body.slice(0, 120) + '...' : body}</blockquote>
        </figure>
    );
};



export const Hero = () => (
    <>
        <section className="w-full p-4 md:py-8 md:px-24 flex flex-col-reverse md:flex-row justify-center ">
            <div className="md:h-[600px] md:w-1/2 flex justify-center">
                <div className="md:w-3/4 relative my-auto flex flex-col items-start border-b-1 border-b-white/15">
                    <AuroraText colors={["#00F0FF", "#5200FF", "#FF2DF7"]} className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl font-light">
                        {string.hero.title1}
                    </AuroraText>
                    <Typograpy.Header1 className="z-10 md:mt-6 font-light">
                        {string.hero.title2}
                    </Typograpy.Header1>
                    <Typograpy.Text className="mt-4! md:mt-8! md:font-normal font-thin">{string.hero.desc}</Typograpy.Text>
                    <Button variant="outline" className="relative cursor-pointer rounded-full border-(--secondary) my-4 md:my-12">
                        {string.hero.button}
                        <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                    </Button>
                </div>
            </div>
            <div className="h-[350px] md:h-[600px] md:w-1/2 relative overflow-hidden">
                <Globe className="md:m-0" />
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
                    <br />
                    <Typograpy.Text className="mt-0! leading-5! font-thin md:leadin8! md:font-normal">
                        {` De l'analyse initiale au déploiement final, je prends en charge l'intégralité de votre projet avec une approche sur-mesure. Vous gardez le contrôle de votre vision, je transforme vos idées en réalité digitale performante et évolutive.`}
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
        <section className="w-full p-4 md:py-8 md:px-24 mb-12">
            <div className="w-full md:w-9/10 m-auto mb-10">
                <AuroraText colors={["#00F0FF", "#7a3dffff", "#ffffffff"]} className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light! w-full">
                    Ils nous on fait confiance.
                </AuroraText>
            </div>
            <div className="relative flex w-full md:w-3/4  m-auto flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:60s]">
                    {reviews.map((review) => (
                        <ReviewCard key={review.name} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </section>
        <section className="relative w-full p-4 md:px-24 mb-12 overflow py-24 md:py-32">
            <Particles
                className="absolute inset-0 z-0"
                quantity={150}
                ease={200}
                color={"#00F0FF"}
            />
            <Card className="relative overflow-hidden w-full md:w-3/4  m-auto rounded-[0.625rem] border-0 bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] pt-8 md:p-12">
                <CardHeader className="flex items-center ">
                    <CardTitle className="text-2xl">
                        Lancer votre projet !
                    </CardTitle>
                </CardHeader>
                <CardContent className=" md:font-normal">
                    Discutons de votre vision et transformons-la ensemble en solution digitale performante. Premier échange gratuit pour analyser vos besoins.
                </CardContent>
                <CardFooter>
                    <Button variant="outline" className="bg-black/15 relative cursor-pointer rounded-full ">
                        Contacter nous
                        <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                    </Button>
                </CardFooter>
            </Card>
        </section>
    </>
)