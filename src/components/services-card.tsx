import { ArrowRight, Check, type LucideIcon } from 'lucide-react';
import SpotlightCard from '@/components/react-bits/SpotlightCard';
import { Typography } from './ui/typography';
import { LinkTrack } from './link-track';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { string } from '@/utils/string';

type AccentKey = 'primary' | 'secondary' | 'amber' | 'emerald';

type SpotlightColor = `rgba(${number}, ${number}, ${number}, ${number})`;

const ACCENT_STYLES: Record<
  AccentKey,
  { text: string; bgSoft: string; button: string; spotlight: SpotlightColor }
> = {
  primary: {
    text: 'text-primary',
    bgSoft: 'bg-primary/10',
    button: 'bg-primary text-primary-foreground [a]:hover:bg-primary/80',
    spotlight: 'rgba(0, 180, 216, 0.22)',
  },
  secondary: {
    text: 'text-secondary',
    bgSoft: 'bg-secondary/10',
    button: 'bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80',
    spotlight: 'rgba(124, 77, 255, 0.24)',
  },
  amber: {
    text: 'text-amber-400',
    bgSoft: 'bg-amber-400/10',
    button: 'bg-amber-400 text-amber-950 [a]:hover:bg-amber-400/80',
    spotlight: 'rgba(245, 158, 11, 0.22)',
  },
  emerald: {
    text: 'text-emerald-400',
    bgSoft: 'bg-emerald-400/10',
    button: 'bg-emerald-400 text-emerald-950 [a]:hover:bg-emerald-400/80',
    spotlight: 'rgba(16, 185, 129, 0.22)',
  },
};

interface ServicesCardProps {
  number: string;
  accent: AccentKey;
  title: string;
  icon: LucideIcon;
  desc: string;
  values: string[];
  button: { text: string; link: string };
  price: string;
}

export const ServicesCard = ({
  number,
  accent,
  title,
  icon: Icon,
  desc,
  values,
  button,
  price,
}: ServicesCardProps) => {
  const style = ACCENT_STYLES[accent];

  return (
    <SpotlightCard spotlightColor={style.spotlight} className="flex flex-col  ">
      {/* Ghost number in background */}
      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute -top-8 -right-4 font-display font-black leading-none select-none',
          style.text,
        )}
        style={{
          fontSize: '11rem',
          color: 'transparent',
          WebkitTextStroke: '1px currentColor',
          opacity: 0.1,
        }}
      >
        {number}
      </div>

      <div className="relative grid flex-1 gap-x-8 gap-y-6 md:grid-cols-[1.15fr_1fr]">
        {/* Left column: header + desc + footer */}
        <div className="flex flex-col">
          {/* Icon + Title */}
          <div className="flex items-start gap-4">
            <div
              className={cn(
                'inline-flex size-12 shrink-0 items-center justify-center rounded-2xl backdrop-blur-sm',
                style.bgSoft,
              )}
            >
              <Icon className={cn('size-6', style.text)} strokeWidth={1.75} />
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-3"></div>
              <Typography.H3 className="text-foreground">{title}</Typography.H3>
            </div>
          </div>

          {/* Description */}
          <Typography.Text className="mt-3 text-sm text-muted-foreground">
            {desc}
          </Typography.Text>

          {/* Footer */}
          <div className="mt-auto pt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <Typography.Label className="text-muted-foreground">
                {string.servicesCard.priceLabel}
              </Typography.Label>
              <p className="mt-1 font-display text-base font-bold text-foreground">
                {price}
              </p>
            </div>
            <Button asChild className={style.button}>
              <LinkTrack eventName="service-card-button" href={button.link}>
                <span>{string.servicesCard.button}</span>
                <ArrowRight data-icon="inline-end" className="size-3.5" />
              </LinkTrack>
            </Button>
          </div>
        </div>

        {/* Right column: values */}
        <div className="flex flex-col rounded-xl p-5 md:p-6 bg-muted/80">
          <Typography.Label className={cn('block mb-4', style.text)}>
            {string.servicesCard.valueLabel}
          </Typography.Label>
          <ul className="space-y-3">
            {values.map((value) => (
              <li
                key={value}
                className="flex items-start gap-3 text-sm text-foreground"
              >
                <Check className={cn('size-4 shrink-0 mt-0.5', style.text)} />
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SpotlightCard>
  );
};
