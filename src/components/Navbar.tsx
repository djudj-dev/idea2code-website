import { Typograpy } from "./Typography";

export const NavBar = () => (
    <nav className="w-full bg-(--background) fixed z-30 border-b-1 border-b-white/15 px-4 py-2 flex justify-between">
        <Typograpy.Lead>IdeaToCode</Typograpy.Lead>
        <div className="flex gap-4">
            <Typograpy.Text className="mt-0!">Services</Typograpy.Text>
            <Typograpy.Text className="mt-0!">Réalisations</Typograpy.Text>
            <Typograpy.Text className="mt-0!">Contact</Typograpy.Text>
        </div>
    </nav>
)