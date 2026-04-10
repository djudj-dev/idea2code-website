'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Blocks,
  Check,
  Clock,
  GitBranch,
  HandCoins,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';
import { TechBadge } from '@/components/tech-badge';
import { Button } from '@/components/ui/button';
import { LinkTrack } from '@/components/link-track';
import { string } from '@/utils/string';

interface LayerVisuals {
  stack: string[];
  accent: string;
  glow: string;
  Icon: LucideIcon;
}

const LAYER_VISUALS: LayerVisuals[] = [
  {
    stack: ['Nextjs', 'React', 'Typescript', 'Tailwind', 'Nodejs', 'Flutter'],
    accent: 'text-primary',
    glow: 'rgba(0,180,216,0.18)',
    Icon: Blocks,
  },
  {
    stack: ['Nodejs', 'Fastify', 'Typescript', 'Python', 'Prisma'],
    accent: 'text-secondary',
    glow: 'rgba(124,77,255,0.22)',
    Icon: Workflow,
  },
  {
    stack: [
      'Git',
      'Docker',
      'Kubernetes',
      'Terraform',
      'Ansible',
      'Vercel',
      'OvhCloud',
      'Aws',
    ],
    accent: 'text-amber-400',
    glow: 'rgba(245,158,11,0.18)',
    Icon: Server,
  },
  {
    stack: ['Php', 'Python', 'Typescript', 'React', 'Nodejs'],
    accent: 'text-emerald-400',
    glow: 'rgba(16,185,129,0.18)',
    Icon: GitBranch,
  },
];

const LAYERS = string.services.strata.layers.map((layer, index) => ({
  ...layer,
  ...LAYER_VISUALS[index],
}));

const REASSURANCE_VISUALS = [
  { Icon: Clock, text: 'text-primary', bg: 'bg-primary/10' },
  { Icon: HandCoins, text: 'text-secondary', bg: 'bg-secondary/10' },
  { Icon: ShieldCheck, text: 'text-emerald-400', bg: 'bg-emerald-400/10' },
];

const REASSURANCE = string.services.strata.finalCta.reassurance.map(
  (item, index) => ({
    ...item,
    ...REASSURANCE_VISUALS[index],
  }),
);

export const ExpertiseStrata = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const stratumRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stratumRefs.current.indexOf(
              entry.target as HTMLDivElement,
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      },
    );

    stratumRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToStratum = (index: number) => {
    const node = stratumRefs.current[index];
    if (node) {
      node.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const activeLayer = LAYERS[activeIndex];
  const progressPercent = (activeIndex / (LAYERS.length - 1)) * 100;

  return (
    <div className="relative">
      {/* Smooth accent glow that follows active layer */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-out"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, ${activeLayer.glow} 0%, transparent 55%)`,
        }}
      />

      <div className="relative max-w-screen-2xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: sticky icon + progress — desktop only */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="sticky top-32 pt-24">
              {/* Big animated icon stack */}
              <div className="relative aspect-square w-full max-w-md mx-auto">
                {/* Ghost number behind everything */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
                >
                  <span
                    className={cn(
                      'font-display font-black leading-none tabular-nums transition-colors duration-1000',
                      activeLayer.accent,
                    )}
                    style={{
                      fontSize: '22rem',
                      color: 'transparent',
                      WebkitTextStroke: '1px currentColor',
                      opacity: 0.12,
                    }}
                  >
                    {activeLayer.number}
                  </span>
                </div>

                {/* Rotating rings */}
                <div
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-border/30 transition-transform duration-[3000ms] ease-linear"
                  style={{
                    transform: `rotate(${activeIndex * 90}deg)`,
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-8 rounded-full border border-border/20 transition-transform duration-[3000ms] ease-linear"
                  style={{
                    transform: `rotate(${activeIndex * -60}deg)`,
                  }}
                />
                <div
                  aria-hidden
                  className="absolute inset-16 rounded-full border border-border/10 transition-transform duration-[3000ms] ease-linear"
                  style={{
                    transform: `rotate(${activeIndex * 45}deg)`,
                  }}
                />

                {/* Accent glow behind icon */}
                <div
                  aria-hidden
                  className="absolute inset-1/4 rounded-full blur-3xl transition-all duration-1000"
                  style={{ backgroundColor: activeLayer.glow }}
                />

                {/* Crossfading icons */}
                {LAYERS.map((layer, index) => {
                  const Icon = layer.Icon;
                  const isActive = index === activeIndex;
                  return (
                    <div
                      key={layer.number}
                      className={cn(
                        'absolute inset-0 flex items-center justify-center transition-all duration-700 ease-out',
                        isActive
                          ? 'opacity-100 scale-100 rotate-0 blur-0'
                          : 'opacity-0 scale-75 -rotate-12 blur-sm',
                      )}
                    >
                      <Icon
                        className={cn('size-32 xl:size-40', layer.accent)}
                        strokeWidth={1.25}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Clickable timeline stepper */}
              <nav
                aria-label={string.services.strata.navAriaLabel}
                className="relative mt-16"
              >
                {/* Timeline background line */}
                <div
                  aria-hidden
                  className="absolute left-[0.4375rem] top-2 bottom-2 w-px bg-border"
                />
                {/* Timeline progress fill */}
                <div
                  aria-hidden
                  className={cn(
                    'absolute left-[0.4375rem] top-2 w-px bg-current transition-all duration-700 ease-out',
                    activeLayer.accent,
                  )}
                  style={{
                    height: `calc((100% - 1rem) * ${progressPercent / 100})`,
                  }}
                />

                <ol className="relative flex flex-col gap-7">
                  {LAYERS.map((layer, index) => {
                    const isActive = index === activeIndex;
                    const isPast = index < activeIndex;
                    return (
                      <li key={layer.number}>
                        <button
                          type="button"
                          onClick={() => scrollToStratum(index)}
                          className="group/step flex items-center gap-5 w-full text-left cursor-pointer"
                        >
                          <span
                            className={cn(
                              'relative z-10 size-3.5 shrink-0 rounded-full border-2 bg-background transition-all duration-500',
                              isActive &&
                                cn('border-current scale-110', layer.accent),
                              isPast && cn('border-current', layer.accent),
                              !isActive &&
                                !isPast &&
                                'border-border group-hover/step:border-foreground',
                            )}
                          >
                            <span
                              className={cn(
                                'absolute inset-0.5 rounded-full bg-current transition-all duration-500',
                                isActive || isPast
                                  ? cn('opacity-100', layer.accent)
                                  : 'opacity-0',
                              )}
                            />
                          </span>
                          <span
                            className={cn(
                              'font-display text-xs font-bold tabular-nums transition-colors duration-500',
                              isActive
                                ? layer.accent
                                : 'text-muted-foreground group-hover/step:text-foreground',
                            )}
                          >
                            {layer.number}
                          </span>
                          <span
                            className={cn(
                              'font-display text-xs font-bold uppercase tracking-[0.3em] transition-colors duration-500',
                              isActive
                                ? layer.accent
                                : 'text-muted-foreground group-hover/step:text-foreground',
                            )}
                          >
                            {layer.label}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </div>

          {/* Right: stacked strata content */}
          <div className="lg:col-span-7">
            {LAYERS.map((layer, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={layer.number}
                  ref={(node) => {
                    stratumRefs.current[index] = node;
                  }}
                  className={cn(
                    'min-h-[85vh] py-24 lg:py-32 flex flex-col justify-center transition-all duration-700 ease-out',
                    isActive ? 'opacity-100 blur-0' : 'opacity-30 blur-[1px]',
                  )}
                >
                  {/* Mobile icon */}
                  <div className="lg:hidden mb-8">
                    <div
                      className="inline-flex size-20 items-center justify-center rounded-full border border-border/50 backdrop-blur-sm transition-all"
                      style={{ backgroundColor: layer.glow }}
                    >
                      <layer.Icon
                        className={cn('size-10', layer.accent)}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  {/* Label */}
                  <div className="flex items-center gap-4 mb-4">
                    <span
                      className={cn(
                        'font-display text-base font-bold tabular-nums',
                        layer.accent,
                      )}
                    >
                      {layer.number}
                    </span>
                    <span
                      className={cn(
                        'font-display text-base font-bold uppercase tracking-[0.3em]',
                        layer.accent,
                      )}
                    >
                      {layer.label}
                    </span>
                  </div>

                  {/* Tagline */}
                  <Typography.Lead className="italic mb-4">
                    {layer.tagline}
                  </Typography.Lead>

                  {/* Title */}
                  <Typography.H2 className="text-foreground">
                    {layer.title}
                  </Typography.H2>

                  {/* Paragraphs */}
                  <div className="mt-6 space-y-4 max-w-2xl">
                    {layer.paragraphs.map((paragraph, pIndex) => (
                      <Typography.Text
                        key={pIndex}
                        className="text-muted-foreground whitespace-pre-line"
                      >
                        {paragraph}
                      </Typography.Text>
                    ))}
                  </div>

                  {/* Deliverables + Stack */}
                  <div className="mt-10 pt-8 border-t border-border/50 grid md:grid-cols-2 gap-8">
                    <div>
                      <Typography.Label
                        className={cn('block mb-4', layer.accent)}
                      >
                        {string.services.strata.deliverablesLabel}
                      </Typography.Label>
                      <ul className="space-y-3">
                        {layer.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-foreground"
                          >
                            <Check
                              className={cn(
                                'size-4 shrink-0 mt-1',
                                layer.accent,
                              )}
                            />
                            <span className="text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <Typography.Label
                        className={cn('block mb-4', layer.accent)}
                      >
                        {string.services.strata.stackLabel}
                      </Typography.Label>
                      <div className="flex flex-wrap gap-2 -ml-1">
                        {layer.stack.map((tech) => (
                          <TechBadge key={tech} tech={tech} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Final CTA — full width to let background glow breathe */}
      <div className="relative mt-12 py-24 md:py-32 overflow-hidden">
        {/* Soft multi-accent glow background with fade top/bottom */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 15% 20%, rgba(0,180,216,0.14) 0%, transparent 50%), radial-gradient(circle at 85% 80%, rgba(124,77,255,0.14) 0%, transparent 50%)',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        />

        <div className="relative max-w-screen-2xl mx-auto px-6">
          {/* Layer icons reminder with gradient connector */}
          <div className="relative flex items-center justify-center gap-0 mb-16">
            <div
              aria-hidden
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-full max-w-md"
              style={{
                backgroundImage:
                  'linear-gradient(to right, transparent, var(--primary), var(--secondary), #f59e0b, #10b981, transparent)',
                opacity: 0.6,
              }}
            />
            <div className="relative flex items-center gap-8 md:gap-12">
              {LAYERS.map((layer) => {
                const Icon = layer.Icon;
                return (
                  <div
                    key={layer.number}
                    className="flex size-12 md:size-14 items-center justify-center rounded-full border border-border/60 bg-background backdrop-blur-sm"
                  >
                    <Icon
                      className={cn('size-5 md:size-6', layer.accent)}
                      strokeWidth={1.75}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-16 items-center">
            {/* Left: headline + CTAs */}
            <div className="relative">
              {/* Ghost 00 */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -left-6 font-display font-black leading-none select-none text-primary"
                style={{
                  fontSize: '13rem',
                  color: 'transparent',
                  WebkitTextStroke: '1px currentColor',
                  opacity: 0.08,
                }}
              >
                {string.services.strata.finalCta.number}
              </div>

              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display text-xs font-bold tabular-nums text-primary">
                    {string.services.strata.finalCta.number}
                  </span>
                  <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
                    {string.services.strata.finalCta.label}
                  </span>
                </div>

                <Typography.Display as="h2" className="text-3xl! md:text-5xl!">
                  {string.services.strata.finalCta.titleLines.map(
                    (line, index) => (
                      <span key={index}>
                        {index > 0 && <br />}
                        {line}
                      </span>
                    ),
                  )}
                </Typography.Display>

                <Typography.Text className="mt-5 max-w-xl text-muted-foreground">
                  {string.services.strata.finalCta.desc}
                </Typography.Text>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg">
                    <LinkTrack
                      eventName="expertise-cta-contact"
                      href="/contact"
                    >
                      <span>
                        {string.services.strata.finalCta.primaryButton}
                      </span>
                      <ArrowRight data-icon="inline-end" className="size-4" />
                    </LinkTrack>
                  </Button>
                  <Button asChild variant="ghost" size="lg">
                    <LinkTrack
                      eventName="expertise-cta-projects"
                      href="/projects"
                    >
                      {string.services.strata.finalCta.secondaryButton}
                    </LinkTrack>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right: reassurance chips with rotating accents */}
            <div className="flex flex-col gap-3">
              {REASSURANCE.map(({ Icon, title, desc, text, bg }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl bg-accent p-5"
                >
                  <div
                    className={cn(
                      'flex size-10 shrink-0 items-center justify-center rounded-xl',
                      bg,
                    )}
                  >
                    <Icon className={cn('size-5', text)} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-foreground">
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
