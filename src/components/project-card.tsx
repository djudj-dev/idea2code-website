import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "./typography";
import { TechBadge } from "./tech-badge";
import { ShineBorder } from "./magicui/shine-border";

export type ProjectCardProps = {
    title: string;
    href?: string;
    description: string;
    dates: string;
    tags: readonly string[];
    link?: string;
    image?: string;
    video?: string;
    links?: readonly {
        icon: React.ReactNode;
        type: string;
        href: string;
    }[];
    className?: string;
}

export function ProjectCard({
    title,
    href,
    description,
    dates,
    tags,
    link,
    image,
    video,
    links,
    className,
}: ProjectCardProps) {
    return (
        <Card
            className={
                "relative flex flex-col pt-0 overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out rounded-[0.625rem]"
            }
        >
            <Link
                href={href || "#"}
                className={cn("block cursor-pointer", className)}
            >
                {video && (
                    <video
                        src={video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
                    />
                )}
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        width={500}
                        height={300}
                        className="h-64 w-full overflow-hidden object-cover object-top"
                    />
                )}
            </Link>
            <CardHeader className="px-2 md:px-6">
                <div className="space-y-1">
                    <CardTitle className="mt-1 text-xl"><Typography.Header2 className="text-2xl!">{title}</Typography.Header2></CardTitle>
                    <time className="font-sans text-xs">{dates}</time>
                    <div className="hidden font-sans text-xs underline print:visible">
                        {link?.replace("https://", "").replace("www.", "").replace("/", "")}
                    </div>
                    <Typography.Text className="prose leading-5! max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                        {description}
                    </Typography.Text>
                </div>
            </CardHeader>
            <CardContent className="mt-0 flex flex-col px-2 md:px-6">
                {tags && tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                        {tags?.map((tag, index) => (
                            <TechBadge key={index} tech={tag} />
                        ))}
                    </div>
                )}
            </CardContent>
            <CardFooter className="px-2 md:px-6 mt-0">
                {links && links.length > 0 && (
                    <div className="flex flex-row flex-wrap items-start gap-1 ">
                        {links?.map((link, idx) => (
                            <Link href={link?.href} key={idx} target="_blank">
                                <Badge key={idx} className="m-1 px-2 rounded-full sm:border">
                                    {link.icon}
                                    <Typography.Text className="!my-1.5 font-bold leading-none md:text-sm">{link.type}</Typography.Text>
                                </Badge>
                            </Link>
                        ))}
                    </div>
                )}
            </CardFooter>
            <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
        </Card>
    );
}