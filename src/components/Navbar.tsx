import { Typograpy } from "./Typography";

export const NavBar = () => (
    <nav className="w-full bg-(--background) border-b-1 border-b-white/15 px-4 py-2 flex justify-between">
        <Typograpy.Lead>Idea To Code</Typograpy.Lead>
        <div className="flex gap-4">
            <Typograpy.Text className="mt-0!">Contact</Typograpy.Text>
            <Typograpy.Text className="mt-0!">Technos</Typograpy.Text>
            <Typograpy.Text className="mt-0!">Projets</Typograpy.Text>
        </div>
    </nav>
)