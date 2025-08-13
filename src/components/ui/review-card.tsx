import { cn } from "@/lib/utils";

export const ReviewCard = ({
    img,
    name,
    body,
}: {
    img: string;
    name: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full max-w-48 md:max-w-86 cursor-pointer overflow-hidden rounded-[0.625rem] border p-4",
                // dark styles
                "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="32" height="32" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium text-white">
                        {name}
                    </figcaption>
                </div>
            </div>
            <blockquote className="mt-2 text-sm">{body.length > 120 ? body.slice(0, 120) + '...' : body}</blockquote>
        </figure>
    );
};
