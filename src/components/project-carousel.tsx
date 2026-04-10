'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectCard } from '@/components/project-card';
import type { ProjectCardProps } from '@/components/project-card';

interface ProjectCarouselProps {
  projects: ProjectCardProps[];
}

const SCROLL_AMOUNT = 500;

export const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const offset = direction === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
    scrollRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <div className="relative">
      {/* Fade left */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-4 w-16 z-10 transition-opacity duration-300"
        style={{
          opacity: canScrollLeft ? 1 : 0,
          background:
            'linear-gradient(to right, var(--background) 0%, transparent 100%)',
        }}
      />
      {/* Fade right */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-4 w-16 z-10 transition-opacity duration-300"
        style={{
          opacity: canScrollRight ? 1 : 0,
          background:
            'linear-gradient(to left, var(--background) 0%, transparent 100%)',
        }}
      />

      {/* Left arrow — outside carousel */}
      {canScrollLeft && (
        <button
          className="absolute -left-16 top-1/2 -translate-y-1/2 z-20 hidden lg:flex w-12 h-12 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm text-muted-foreground hover:bg-accent cursor-pointer transition-all"
          onClick={() => scroll('left')}
          aria-label="Projet précédent"
        >
          <ChevronLeft className="size-5" />
        </button>
      )}
      {/* Right arrow — outside carousel */}
      {canScrollRight && (
        <button
          className="absolute -right-16 top-1/2 -translate-y-1/2 z-20 hidden lg:flex w-12 h-12 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-sm text-muted-foreground hover:bg-accent cursor-pointer transition-all"
          onClick={() => scroll('right')}
          aria-label="Projet suivant"
        >
          <ChevronRight className="size-5" />
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex items-stretch gap-6 overflow-x-auto pb-4 scrollbar-none"
        style={{ scrollbarWidth: 'none' }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-[88vw] shrink-0 sm:w-[60vw] md:w-[50vw] lg:w-[450px]"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};
