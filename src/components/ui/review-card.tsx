import { cn } from '@/lib/utils';

export const ReviewCard = ({
  img,
  name,
  body,
  shorted = true,
}: {
  img: string;
  name: string;
  body: string;
  shorted: boolean;
}) => {
  const text = shorted
    ? body.length > 120
      ? body.slice(0, 120) + '...'
      : body
    : body;

  return (
    <figure
      className={cn(
        'relative flex h-48 md:h-52 max-w-48 md:max-w-86 flex-col cursor-pointer overflow-hidden rounded-xl bg-card p-4 transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]',
        'hover:border-secondary hover:bg-card/80',
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={`Photo de ${name}`}
          src={img}
          loading="lazy"
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-foreground">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 flex-1 overflow-hidden text-sm text-muted-foreground line-clamp-5 md:line-clamp-6">
        {text}
      </blockquote>
    </figure>
  );
};
