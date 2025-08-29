import { Typography } from "./typography";

export const Footer = () => (
    <nav className="w-full bg-(--background) border-t-1 border-t-[--foreground]/15 px-4 py-8 flex justify-between">
        <Typography.Lead className="mt-0! text-xs md:text-base text-center w-full text-[--foreground]/50">IdeaToCode Société de developpement web sur mesure.</Typography.Lead>
    </nav>
)