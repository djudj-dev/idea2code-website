import type { Metadata } from 'next';
import { ExpertiseStrata } from '@/components/expertise-strata';
import { InitPageSession } from '@/components/init-session';
import { SectionHeading } from '@/components/section-heading';
import { ServicesCard } from '@/components/services-card';
import { servicesData } from '@/utils/data';
import { string } from '@/utils/string';

export const metadata: Metadata = {
  title: string.metadata.pages.services.title,
  description: string.metadata.pages.services.description,
  alternates: { canonical: '/services' },
  openGraph: {
    title: `${string.metadata.pages.services.title} | ${string.metadata.siteName}`,
    description: string.metadata.pages.services.description,
    url: `${string.metadata.url}/services`,
  },
};

const Services = () => (
  <>
    <section className="w-full py-16 md:pt-24">
      <div className="max-w-screen-2xl mx-auto px-6">
        <SectionHeading
          tagline={string.services.hero.tagline}
          title={string.services.hero.title}
          description={string.services.hero.desc}
        />
      </div>
    </section>

    <section className="w-full pb-24">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid xl:grid-cols-2 gap-6">
          <ServicesCard {...servicesData.landingPage} />
          <ServicesCard {...servicesData.vitrineSite} />
          <ServicesCard {...servicesData.webapp} />
          <ServicesCard {...servicesData.intervention} />
        </div>
      </div>
    </section>

    <section className="w-full pt-24 md:pt-32">
      <div className="max-w-screen-2xl mx-auto px-6">
        <SectionHeading
          as="h2"
          tagline={string.services.strata.tagline}
          title={string.services.strata.title}
          description={string.services.strata.desc}
          className="text-center!"
        />
      </div>
      <ExpertiseStrata />
    </section>

    <InitPageSession page="service" />
  </>
);

export default Services;
