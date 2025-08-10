import { Globe } from "./magicui/globe";
import { Typograpy } from "./Typography";
import { Button } from "./ui/button";

export const Hero = () => (
    <div className="w-full p-4 md:py-8 md:px-24 flex flex-col-reverse md:flex-row justify-center ">
        <div className="md:h-[600px] md:w-1/2 flex justify-center">
            <div className="md:w-3/4 my-auto flex flex-col justify-center items-start border-b-1 border-b-white/15">
                <Typograpy.Header1 className="z-10 text-(--secondary) font-light">
                    Exposer votre idée au monde 
                </Typograpy.Header1>
                <Typograpy.Header1 className="z-10 md:mt-6 font-light">
                    Une idée ? on la code.
                </Typograpy.Header1>
                <Typograpy.Text className="mt-4! md:mt-12!">Développement de SaaS, WebApp, Site vitrine ou autre, prennez un rdv avec nous.</Typograpy.Text>
                <Button variant="outline" className="rounded-full border-(--secondary) my-4 md:my-12">Contact</Button>
            </div>
        </div>
        <div className="h-[350px] md:h-[600px] md:w-1/2 relative overflow-hidden">
            <Globe className="md:m-0"/>
        </div>
    </div>
)