import { Typography } from "../typography";
import Image from "next/image";
import i2cLogo from "@/../public/i2c-Logo.svg"
import { LinkTrack } from "../link-track";

export const DesktopNav = ({
    links,
}: {
    links: { text: string; url: string }[];
}) => (
    <nav className=" hidden w-full bg-(--background) fixed z-30 border-b-1 border-b-white/15 px-4 py-4 md:flex justify-between">
        <LinkTrack eventName="navigation" href="/">
           <Image src={i2cLogo} alt="IdeaToCode logo" className="max-h-14 rounded w-auto"/>
        </LinkTrack>
        <div className="flex gap-4 my-auto">
            {
                links.map(({ text, url }, index) =>
                    <LinkTrack eventName="navigation"  key={index} href={url}>
                        <Typography.Text className="mt-0! text-2xl mr-4 font-light">{text}/</Typography.Text>
                    </LinkTrack>
                )
            }
        </div>
    </nav>
)
