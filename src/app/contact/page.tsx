import { ContactForm } from "@/components/contact-form";
import { InitPageSession } from "@/components/init-session";
import { AuroraText } from "@/components/magicui/aurora-text";
import { ShineBorder } from "@/components/magicui/shine-border";
import { Typography } from "@/components/typography";
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
            <div className="relative bg-card p-6 rounded-[0.625rem] border-white/15 mt-6 max-w-[40rem] m-auto">
                <AuroraText colors={["#00F0FF", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light!">
                    Formulaire de Contact
                </AuroraText>
                <Suspense>
                    <ContactForm className="mt-2" />
                </Suspense>
                <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
            </div>
        </section>
        <InitPageSession page="contact"/>
    </>
)

export default Contact