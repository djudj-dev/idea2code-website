import { SectionHeading } from '@/components/section-heading';
import { StatCard } from '@/components/stat-card';
import { Timeline } from '@/components/timeline';
import { ProjectCard } from '@/components/project-card';
import { Button } from '@/components/ui/button';
import { Typography } from '@/components/ui/typography';
import { HomeProjectData } from '@/utils/data';
import { string } from '@/utils/string';
import { InitPageSession } from '@/components/init-session';
import { LinkTrack } from '@/components/link-track';
import { Aurora } from '@/components/react-bits/Aurora';
import { TrustLogos } from '@/components/trust-logos';
import { ExpertiseBento } from '@/components/expertise-bento';
import { Particles } from '@/components/magicui/particles';

const Home = () => (
  <>
    {/* Hero */}
    <section className="relative w-full bg-background -mt-20 min-h-screen">
      <Aurora
        className="absolute inset-0 max-h-[33rem] lg:max-h-[50rem]"
        colorStops={['#06dcff', '#4919ff', '#cf20f9']}
        amplitude={0.3}
        blend={1}
        speed={0.75}
      />

      <div className="relative max-w-screen-2xl mx-auto px-6 min-h-screen flex flex-col items-center justify-center text-center">
        <Typography.Display className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl">
          {string.home.hero.title}
        </Typography.Display>
        <Typography.H2 className="mt-2 sm:mt-3 md:mt-4 lg:mt-6">
          {string.home.hero.subtitle}
        </Typography.H2>
        <Typography.Lead className="mt-1 md:mt-4 lg:mt-6 max-w-2xl text-base sm:text-lg md:text-xl">
          {string.home.hero.desc}
        </Typography.Lead>
        <div className="mt-6 md:mt-8 lg:mt-10 flex flex-wrap justify-center gap-4">
          <LinkTrack eventName="home-hero-contact" href="/contact">
            <Button size="lg">{string.home.hero.ctaPrimary}</Button>
          </LinkTrack>
          <LinkTrack eventName="home-hero-projects" href="/projects">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/5"
            >
              {string.home.hero.ctaSecondary}
            </Button>
          </LinkTrack>
        </div>
      </div>
    </section>

    {/* Trust / Stats */}
    <section className="w-full py-24 md:py-32 pt-0!">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-end">
          {/* Left: About text */}
          <div>
            <Typography.Label className="text-primary">
              {string.home.about.label}
            </Typography.Label>
            <Typography.H1 as="h2" className="mt-4">
              {string.home.about.title}
            </Typography.H1>
            <Typography.Lead className="mt-4 whitespace-pre-line">
              {string.home.about.desc}
            </Typography.Lead>
          </div>
          {/* Right: Stats grid with border separator */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4 sm:gap-8 md:gap-12 md:border-l md:border-border md:pl-12">
            {string.home.stats.items.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        {/* Client logos */}
        <div className="mt-24">
          <Typography.Label className="block text-center mb-8">
            {string.home.stats.trustLabel}
          </Typography.Label>
          <TrustLogos />
        </div>
      </div>
    </section>

    {/* Expertise Grid */}
    <section className="w-full bg-surface py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6">
        <SectionHeading
          as="h2"
          tagline={string.home.expertise.tagline}
          title={string.home.expertise.title}
          className="text-center"
        />
        <ExpertiseBento />
      </div>
    </section>

    {/* Portfolio Grid */}
    <section className="w-full py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <SectionHeading
            as="h2"
            tagline={string.home.portfolio.tagline}
            title={string.home.portfolio.title}
            className="mb-0"
          />
          <LinkTrack eventName="home-projects-all" href="/projects">
            <Button variant="link" className="text-primary font-display">
              {string.home.portfolio.viewAll}
            </Button>
          </LinkTrack>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {HomeProjectData.map((project, index) => (
            <div
              key={project.title + index}
              className={index === 3 ? 'max-md:hidden lg:hidden' : undefined}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Methodology Timeline — 2-column with sticky heading */}
    <section className="w-full py-24 md:py-32">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 lg:gap-10">
          <div className="lg:sticky lg:top-32 lg:h-fit w-full lg:col-span-5">
            <SectionHeading
              as="h2"
              tagline={string.home.methodology.tagline}
              title={string.home.methodology.title}
            />
          </div>
          <Timeline
            steps={string.home.methodology.steps}
            className="col-span-7"
          />
        </div>
      </div>
    </section>

    {/* CTA — particles background */}
    <section className="relative w-full overflow-hidden bg-surface-lowest py-24 md:py-32">
      {/* Top fade from previous section bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 z-20 bg-gradient-to-b from-background to-transparent"
      />
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={100}
        color="#00b4d8"
        refresh
      />
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 text-center">
        <Typography.Display as="h2" className="text-3xl! md:text-5xl!">
          {string.home.cta.title}
        </Typography.Display>
        <Typography.Lead className="mt-6 max-w-2xl mx-auto text-muted-foreground text-base!">
          {string.home.cta.desc}
        </Typography.Lead>
        <div className="mt-10">
          <LinkTrack eventName="home-cta-contact" href="/contact">
            <Button size="lg">{string.home.cta.button}</Button>
          </LinkTrack>
        </div>
      </div>
    </section>

    <InitPageSession page="home" />
  </>
);

export default Home;
