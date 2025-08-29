import { InitPageSession } from "@/components/init-session";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Marquee } from "@/components/magicui/marquee";
import { ProjectCard } from "@/components/project-card";
import { Typography } from "@/components/typography";
import { ReviewCard } from "@/components/ui/review-card";
import { ProjectData, reviews } from "@/utils/data";

const Projects = () => (
    <>
        <section className="w-full pb-4 md:pb-8 flex flex-col justify-center">
            <AuroraText colors={["var(--foreground)", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl font-light">
                Projets & Réalisations
            </AuroraText>
            <Typography.Lead className="mt-4 pb-4 text-base! md:text-lg! border-b-1 border-b-[--foreground]/15">
                {`Découvrez comment j'ai transformé des idées en succès digitaux`}
            </Typography.Lead>
            <div className="mt-12 w-full grid lg:grid-cols-2 2xl:grid-cols-4 gap-12">
                {
                    ProjectData.map((props, index) => <ProjectCard key={props.title + index} {...props} />)
                }
            </div>
        </section>
        <section className="w-full py-4 md:py-8">
            <div className="w-full m-auto mb-10">
                <AuroraText colors={["var(--foreground)", "#5200FF", "#FF2DF7"]} className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light! w-full">
                    Nos Temoignages
                </AuroraText>
            </div>
            <div className="relative flex w-full m-auto flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:60s]">
                    {reviews.map((review) => (
                        <ReviewCard shorted={false} key={review.name} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
        </section>
        <InitPageSession page="project"/>
    </>
)

export default Projects;