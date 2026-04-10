'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

interface StepVisual {
  src: string;
  alt: string;
  gradient: string;
}

const STEP_VISUALS: StepVisual[] = [
  {
    src: '/strategy.svg',
    alt: 'Cadrage du besoin et du périmètre',
    gradient: 'from-primary/30 via-primary/10 to-transparent',
  },
  {
    src: '/conception.svg',
    alt: 'Conception technique et maquettes',
    gradient: 'from-secondary/30 via-secondary/10 to-transparent',
  },
  {
    src: '/programing.svg',
    alt: 'Développement itératif',
    gradient: 'from-amber-500/30 via-amber-500/10 to-transparent',
  },
  {
    src: '/data.svg',
    alt: 'Mise en production et suivi',
    gradient: 'from-emerald-500/30 via-emerald-500/10 to-transparent',
  },
];

const SCROLL_TRIGGER_RATIO = 0.5;

export const Timeline = ({ steps, className }: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineWrapperRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      frameId = 0;
      const container = containerRef.current;
      const lineWrapper = lineWrapperRef.current;
      const fill = fillRef.current;
      const firstBadge = badgeRefs.current[0];
      const lastBadge = badgeRefs.current[badgeRefs.current.length - 1];
      if (!container || !lineWrapper || !fill || !firstBadge || !lastBadge)
        return;

      const containerRect = container.getBoundingClientRect();
      const firstRect = firstBadge.getBoundingClientRect();
      const lastRect = lastBadge.getBoundingClientRect();

      const startY = firstRect.top - containerRect.top + firstRect.height / 2;
      const endY = lastRect.top - containerRect.top + lastRect.height / 2;
      const lineHeight = endY - startY;

      lineWrapper.style.top = `${startY}px`;
      lineWrapper.style.height = `${lineHeight}px`;

      const triggerY = window.innerHeight * SCROLL_TRIGGER_RATIO;
      const lineTopAbsolute = containerRect.top + startY;
      const progress = (triggerY - lineTopAbsolute) / lineHeight;
      const clamped = Math.max(0, Math.min(1, progress));
      fill.style.height = `${clamped * 100}%`;

      const fillBottomPx = lineTopAbsolute + clamped * lineHeight;
      badgeRefs.current.forEach((badge) => {
        if (!badge) return;
        const badgeRect = badge.getBoundingClientRect();
        const badgeCenter = badgeRect.top + badgeRect.height / 2;
        badge.dataset.passed = badgeCenter <= fillBottomPx ? 'true' : 'false';
      });
    };

    const onScroll = () => {
      if (frameId) return;
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {/* Line wrapper — spans from first badge center to last badge center */}
      <div
        ref={lineWrapperRef}
        className="absolute left-[15px] md:left-[23px] w-px"
        style={{ top: 0, height: 0 }}
      >
        {/* Background line */}
        <div className="absolute inset-0 bg-border" />
        {/* Progress fill */}
        <div
          ref={fillRef}
          className="absolute left-0 right-0 top-0 bg-primary shadow-[0_0_8px_var(--primary)]"
          style={{ height: '0%' }}
        >
          {/* Leading glow dot */}
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-primary shadow-[0_0_16px_4px_var(--primary)]" />
        </div>
      </div>
      <div className="space-y-20 md:space-y-28">
        {steps.map((step, index) => {
          const visual = STEP_VISUALS[index] ?? STEP_VISUALS[0];
          return (
            <div key={step.number} className="group relative pl-10 md:pl-20">
              {/* Number badge */}
              <div
                ref={(el) => {
                  badgeRefs.current[index] = el;
                }}
                data-passed="false"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex w-8 h-8 md:w-12 md:h-12 shrink-0 items-center justify-center rounded-full border border-border bg-background font-display text-[10px] md:text-base font-bold text-muted-foreground transition-colors duration-500 data-[passed=true]:border-primary data-[passed=true]:bg-primary data-[passed=true]:text-background"
              >
                {String(step.number).padStart(2, '0')}
              </div>

              {/* Card */}
              <Card className="pt-0">
                <div
                  className={cn(
                    'relative aspect-[16/10] lg:aspect-auto lg:h-64 w-full bg-gradient-to-br',
                    visual.gradient,
                  )}
                >
                  <Image
                    src={visual.src}
                    alt={visual.alt}
                    fill
                    className="object-contain p-6 md:p-8"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground transition-colors">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="text-sm md:text-base lg:text-lg leading-relaxed">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
