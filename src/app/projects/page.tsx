import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { InitPageSession } from '@/components/init-session';
import { SectionHeading } from '@/components/section-heading';
import { Marquee } from '@/components/magicui/marquee';
import { ProjectCard } from '@/components/project-card';
import { ReviewCard } from '@/components/ui/review-card';
import { ProjectData, reviews } from '@/utils/data';
import { LinkTrack } from '@/components/link-track';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import SpotlightCard from '@/components/react-bits/SpotlightCard';
import { string } from '@/utils/string';

export const metadata: Metadata = {
  title: string.metadata.pages.projects.title,
  description: string.metadata.pages.projects.description,
  alternates: { canonical: '/projects' },
  openGraph: {
    title: `${string.metadata.pages.projects.title} | ${string.metadata.siteName}`,
    description: string.metadata.pages.projects.description,
    url: `${string.metadata.url}/projects`,
  },
};

const PROJECT_STAT_VALUES = ['14+', '15+', '100%'];
const PROJECT_STATS = string.projects.hero.stats.map((stat, index) => ({
  ...stat,
  value: PROJECT_STAT_VALUES[index],
}));

const Projects = () => (
  <>
    <section className="w-full py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-6">
        <SectionHeading
          tagline={string.projects.hero.tagline}
          title={string.projects.hero.title}
          description={string.projects.hero.desc}
        />

        {/* Stats band — inline number + label, stacked on mobile */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
          {PROJECT_STATS.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-extrabold text-foreground md:text-4xl">
                {stat.value}
              </span>
              <Typography.Label className="text-muted-foreground">
                {stat.label}
              </Typography.Label>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="w-full pb-24">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* CTA Card — first, next to the most recent projects */}
          <SpotlightCard
            spotlightColor="rgba(0, 180, 216, 0.25)"
            className="group/cta flex items-center justify-center rounded-3xl! border-2! border-dashed! border-primary/30! bg-transparent! min-h-[520px] p-4! sm:p-6! md:p-8!"
          >
            <div className="flex flex-col items-center text-center">
              {/* Tagline */}
              <Typography.Label className="mt-6 text-primary font-bold">
                {string.projects.ctaCard.tagline}
              </Typography.Label>

              {/* Title */}
              <Typography.Display
                as="h2"
                className="mt-4 text-3xl! lg:text-5xl!"
              >
                {string.projects.ctaCard.title}
              </Typography.Display>

              {/* Description */}
              <Typography.Text className="mt-3 max-w-xs text-sm text-muted-foreground">
                {string.projects.ctaCard.desc}
              </Typography.Text>

              {/* Button */}
              <Button asChild size="lg" className="mt-8">
                <LinkTrack eventName="projects-cta" href="/contact">
                  <span>{string.projects.ctaCard.button}</span>
                  <ArrowRight data-icon="inline-end" className="size-4" />
                </LinkTrack>
              </Button>
            </div>
          </SpotlightCard>

          {ProjectData.map((props, index) => (
            <ProjectCard
              key={props.title + index}
              number={String(index + 1).padStart(2, '0')}
              accent={'primary'}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>

    <section className="relative w-full  py-24 md:py-32 overflow-hidden">
      {/* Soft background glow */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,180,216,0.1) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-screen-2xl mx-auto px-6">
        <SectionHeading
          as="h2"
          tagline={string.projects.testimonials.tagline}
          title={string.projects.testimonials.title}
          description={string.projects.testimonials.desc}
          className="text-center mx-auto max-w-2xl [&>p]:mx-auto"
        />
        <div
          className="relative flex w-full flex-col items-center justify-center overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
          }}
        >
          <Marquee pauseOnHover className="[--duration:60s]">
            {reviews.map((review) => (
              <ReviewCard shorted={false} key={review.img} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>

    <InitPageSession page="project" />
  </>
);

export default Projects;
