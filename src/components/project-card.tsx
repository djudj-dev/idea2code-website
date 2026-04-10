import { ArrowUpRight, ImageOff } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Typography } from './ui/typography';
import { TechBadge } from './tech-badge';
import { string } from '@/utils/string';

type AccentKey = 'primary' | 'secondary' | 'amber' | 'emerald';

const ACCENT_STYLES: Record<AccentKey, { text: string; bg: string }> = {
  primary: { text: 'text-primary', bg: 'bg-primary' },
  secondary: { text: 'text-secondary', bg: 'bg-secondary' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-400' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-400' },
};

const MAX_VISIBLE_TAGS = 5;

export interface ProjectCardProps {
  number?: string;
  accent?: AccentKey;
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  imageFit?: 'cover' | 'contain';
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export const ProjectCard = ({
  number,
  accent = 'primary',
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  imageFit = 'cover',
  video,
  links,
  className,
}: ProjectCardProps) => {
  const style = ACCENT_STYLES[accent];
  const visibleTags = tags.slice(0, MAX_VISIBLE_TAGS);
  const extraTags = tags.length - MAX_VISIBLE_TAGS;

  return (
    <Card className="group/project relative flex h-full min-h-[520px] flex-col pt-0 overflow-hidden transition-colors hover:bg-card/80">
      <Link
        href={href || ''}
        className={cn(
          'relative block cursor-pointer overflow-hidden',
          className,
        )}
      >
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-68 w-full object-cover object-top transition-transform duration-500 group-hover/project:scale-105"
          />
        )}
        {image && (
          <div
            className={cn(
              'relative h-68 w-full overflow-hidden',
              imageFit === 'contain' && 'bg-white',
            )}
          >
            <Image
              src={image}
              alt={title}
              width={500}
              height={300}
              className={cn(
                'h-full w-full transition-transform duration-500 group-hover/project:scale-105',
                imageFit === 'cover'
                  ? 'object-cover object-top'
                  : 'object-contain p-6',
              )}
            />
          </div>
        )}
        {!image && !video && (
          <div
            aria-hidden
            className={cn(
              'relative flex h-68 w-full items-center justify-center overflow-hidden bg-gradient-to-br from-card via-card to-background',
            )}
          >
            <div
              className={cn(
                'absolute inset-0 opacity-10',
                `bg-gradient-to-br from-transparent via-transparent to-current`,
                style.text,
              )}
            />
            <ImageOff
              className={cn('size-16 opacity-20', style.text)}
              strokeWidth={1.25}
            />
          </div>
        )}
        {/* Gradient overlay — fades image into card surface */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent"
        />
      </Link>

      {/* Content wrapper with ghost number */}
      <div className="relative flex flex-1 flex-col">
        {/* Ghost number in background */}
        {number && (
          <div
            aria-hidden
            className={cn(
              'pointer-events-none absolute -top-4 right-2 font-display font-black leading-none select-none',
              style.text,
            )}
            style={{
              fontSize: '6rem',
              color: 'transparent',
              WebkitTextStroke: '1px currentColor',
              opacity: 0.12,
            }}
          >
            {number}
          </div>
        )}

        <CardHeader className="relative px-4 md:px-6">
          <div className="space-y-1">
            <time
              className={cn(
                'font-display text-[0.7rem] font-bold uppercase tracking-[0.15em]',
                style.text,
              )}
            >
              {dates}
            </time>
            <CardTitle className="mt-2 text-xl">
              <Typography.H2 className="text-2xl! border-none pb-0">
                {title}
              </Typography.H2>
            </CardTitle>
            <div className="hidden font-sans text-xs underline print:visible">
              {link
                ?.replace('https://', '')
                .replace('www.', '')
                .replace('/', '')}
            </div>
            <Typography.Text className="prose mt-2 line-clamp-3 leading-5! max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {description}
            </Typography.Text>
          </div>
        </CardHeader>

        <CardContent className="relative mt-0 flex flex-col px-4 md:px-6">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {visibleTags.map((tag, index) => (
                <TechBadge key={index} tech={tag} />
              ))}
              {extraTags > 0 && (
                <Badge
                  variant="outline"
                  className={cn(
                    'm-1 rounded-full px-3 py-1.5 text-xs font-bold',
                    style.text,
                  )}
                >
                  +{extraTags}
                </Badge>
              )}
            </div>
          )}
        </CardContent>

        {/* Footer — links + hover reveal */}
        {(links && links.length > 0) || href ? (
          <div className="relative mt-auto flex items-center justify-between gap-3 px-4 pt-4 pb-4 md:px-6">
            {links && links.length > 0 ? (
              <div className="flex flex-row flex-wrap items-start gap-1">
                {links.map((linkItem, idx) => (
                  <Link href={linkItem.href} key={idx} target="_blank">
                    <Badge
                      key={idx}
                      className="m-1 rounded-full px-2 sm:border"
                    >
                      {linkItem.icon}
                      <Typography.Text className="!my-1.5 font-bold leading-none md:text-sm">
                        {linkItem.type}
                      </Typography.Text>
                    </Badge>
                  </Link>
                ))}
              </div>
            ) : (
              <span />
            )}
            {href && (
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-[0.15em] opacity-60 transition-all group-hover/project:opacity-100 group-hover/project:translate-x-0.5',
                  style.text,
                )}
              >
                {string.projectCard.viewProject}
                <ArrowUpRight className="size-3.5" strokeWidth={2.5} />
              </span>
            )}
          </div>
        ) : null}
      </div>
    </Card>
  );
};
