import Link from "next/link"
import { Typography } from "./typography"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { ShineBorder } from "./magicui/shine-border"
import { TechBadge } from "./tech-badge"

export const ServicesCard = ({
    title,
    desc,
    values,
    stack,
    Icon,
    button,
    price
}: {
    title: string,
    Icon: React.JSX.Element,
    desc: string,
    values: string[],
    stack: string[]
    button: { text: string, link: string },
    price: string
}) => (
    <Card className="relative rounded-[0.625rem] ">
        <CardHeader>
            <CardTitle className="pb-2">
                <div className="p-2 px-4 h-fit w-fit flex items-center text-xl md:text-2xl flex rounded-full bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF]">
                    {Icon}
                    <Typography.Header3 className="pr-4 font-medium!">
                        {title}
                    </Typography.Header3>
                </div>
            </CardTitle>
            <CardDescription className="mt-3">
                <Typography.Text className="leading-5! md:leading-6! text-xs! md:text-base! text-white">
                    {desc}
                </Typography.Text>
            </CardDescription>
        </CardHeader>
        <CardContent className="h-full border-t-1 border-t-white/15 py-2 md:py-4">
            <div>
                <Typography.Lead className="font-semibold text-base! md:text-xl!">
                    Valeur ajoutée
                </Typography.Lead>
                <ul className="ml-4 mt-3">
                    {values.map((value, index) => (
                        <li key={index} className="flex items-center text-xs! md:text-base!">- {value}</li>
                    ))}
                </ul>
            </div>
            <div className="mt-4">
                <Typography.Lead className="font-semibold text-base! md:text-xl!">
                    Technologies utilisées :
                </Typography.Lead>
                <div className="mt-2">
                    {stack.map((tech, index) => (
                        <TechBadge key={index} tech={tech} />
                    ))}
                </div>
            </div>
        </CardContent>
        <CardFooter className="h-fit flex items-end justify-between pt-4 border-t-1 border-t-white/15">
            <Typography.Large className="font-semibold text-base! md:text-xl!">{price}</Typography.Large>
            <Link href={button.link}>
                <Button variant="outline" className="bg-black/15 relative cursor-pointer rounded-full ">
                    {button.text}
                    <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
                </Button>
            </Link>
        </CardFooter>
        <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
    </Card>
)