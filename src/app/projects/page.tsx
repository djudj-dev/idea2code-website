import { AuroraText } from "@/components/magicui/aurora-text";
import { ProjectCard } from "@/components/project-card";
import { Typography } from "@/components/typography";
import { ProjectData } from "@/utils/data";

const Projects = () => (
    <>
        <section className="w-full pb-4 md:pb-8 flex flex-col justify-center">
            <AuroraText colors={["#00F0FF", "#5200FF", "#FF2DF7"]} className=" mt-12 scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl font-light">
                Projets & Réalisations
            </AuroraText>
            <Typography.Lead className="mt-4 pb-4 text-base! md:text-lg! border-b-1 border-b-white/15">
                Découvrez comment j'ai transformé des idées en succès digitaux
            </Typography.Lead>
            <div className="mt-12 w-full grid lg:grid-cols-2 2xl:grid-cols-4 gap-12">
                {
                    ProjectData.map((props, index) => <ProjectCard key={props.title + index} {...props} />)
                }
            </div>
        </section>
    </>
)

export default Projects;