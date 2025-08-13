import Link from "next/link";
import { Typograpy } from "../Typography";
import { Button } from "../ui/button";

export const DesktopNav = ({
    links,
}: {
    links: { text: string; url: string }[];
}) => (
    <nav className=" hidden w-full h-12 bg-(--background) fixed z-30 border-b-1 border-b-white/15 px-4 py-2 md:flex justify-between">
        <Typograpy.Lead>IdeaToCode</Typograpy.Lead>
        <div className="flex gap-4">
            {
                links.map(({ text, url }, index) =>
                    <Link key={index} href={url}>
                        <Typograpy.Text className="mt-0!">{text} /</Typograpy.Text>
                    </Link>)
            }
        </div>
    </nav>
)
