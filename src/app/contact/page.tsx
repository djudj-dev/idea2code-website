import { ContactForm } from "@/components/contact-form";
import { LinkedInIcon } from "@/components/icons/network/LinkedIn";
import { InitPageSession } from "@/components/init-session";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Typography } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Calendar, Mail } from "lucide-react";
import { Suspense } from "react";

const Contact = () => (
    <>
        <section className="w-full pb-4 md:pb-8 flex flex-col justify-center">
            <AuroraText colors={["#00F0FF", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl font-light">
                Donnons Vie à Votre Projet
            </AuroraText>
            <Typography.Lead className="mt-4 pb-4 text-base! md:text-lg! border-b-1 border-b-white/15">
                Échangeons sur votre vision et transformons-la en solution digitale performante
            </Typography.Lead>
            <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="md:order-2 order-1 relative bg-card p-6 rounded-[0.625rem] border-white/15 mt-6 max-w-[30rem] lg:max-w-[40rem] m-auto">
                    <AuroraText colors={["#00F0FF", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light!">
                        Formulaire de Contact
                    </AuroraText>
                    <Suspense>
                        <ContactForm className="mt-2" />
                    </Suspense>
                    <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                </div>
                <div className="px-2 pt-12 md:px-0 md:pt-0">
                    <div className="h-fit">
                        <AuroraText colors={["#00F0FF", "#5200FF", "#FF2DF7"]} className="mt-6 scroll-m-20 text-2xl md:text-3xl font-extrabold tracking-tight font-light">
                            Échangeons Directement Sur Votre Projet
                        </AuroraText>
                        <Typography.Text>
                            Vous préférez un échange en direct ? Réservons 30 minutes ensemble pour discuter de votre vision, analyser vos besoins et vous proposer la meilleure approche technique.
                        </Typography.Text>
                        <Typography.Text>
                            Cet échange gratuit me permet de comprendre parfaitement vos objectifs et de vous conseiller sur la solution la plus adaptée à votre budget et vos délais.      
                        </Typography.Text>
                        <a target="_blank" href={'https://calendar.app.google/1eJbTACt2SDiQ3Tt7'}>
                            <Button variant="outline" className="relative cursor-pointer rounded-full border-(--secondary) px-6! my-4">
                                <Calendar/>
                                Réserver un créneau gratuit
                            <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                            </Button>
                        </a>
                    </div>
                    <div className="h-fit">
                        <AuroraText colors={["#00F0FF", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 text-2xl md:text-3xl font-extrabold tracking-tight font-light">
                            Restons Connectés
                        </AuroraText>
                        <Typography.Text>
                            Suivez l'actualité de mes projets, découvrez mes dernières réalisations et bénéficiez de conseils techniques réguliers sur mes différents réseaux. 
                        </Typography.Text>
                       <a target="_blank" href={'mailto:contact.ideatocode@gmail.com'}>
                            <Button variant="outline" className="relative cursor-pointer rounded-full border-(--secondary) px-6! my-4 mr-2">
                                <Mail/>
                                contact.ideatocode@gmail.com
                                <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                            </Button>
                        </a>
                       <a target="_blank" href={'https://www.linkedin.com/company/ideatocode'}>
                            <Button variant="outline" className="relative cursor-pointer rounded-full border-(--secondary) px-6! my-4 mr-2">
                                <LinkedInIcon/>
                                    LinkedIn
                                <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <InitPageSession page="contact"/>
    </>
)

export default Contact