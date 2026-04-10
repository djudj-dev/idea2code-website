import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { LinkedInIcon } from '@/components/icons/network/LinkedIn';
import { InitPageSession } from '@/components/init-session';
import { SectionHeading } from '@/components/section-heading';
import { Typography } from '@/components/ui/typography';
import { Calendar, Mail } from 'lucide-react';
import { Suspense } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { string } from '@/utils/string';

export const metadata: Metadata = {
  title: string.metadata.pages.contact.title,
  description: string.metadata.pages.contact.description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: `${string.metadata.pages.contact.title} | ${string.metadata.siteName}`,
    description: string.metadata.pages.contact.description,
    url: `${string.metadata.url}/contact`,
  },
};

interface SubHeadingProps {
  tagline: string;
  title: string;
}

const SubHeading = ({ tagline, title }: SubHeadingProps) => (
  <div className="space-y-2">
    <Typography.Label className="text-primary font-bold">
      {tagline}
    </Typography.Label>
    <Typography.H2 className="text-2xl md:text-3xl">{title}</Typography.H2>
  </div>
);

const Contact = () => (
  <>
    <section className="w-full py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-6">
        <SectionHeading
          tagline={string.contact.hero.tagline}
          title={string.contact.hero.title}
          description={string.contact.hero.desc}
        />
      </div>
    </section>

    <section className="w-full pb-24 md:pb-32">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: info sections */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div>
              <SubHeading
                tagline={string.contact.meeting.tagline}
                title={string.contact.meeting.title}
              />
              <Typography.Text className="mt-4 text-muted-foreground text-base">
                {string.contact.meeting.desc}
              </Typography.Text>
              <Typography.Text className="mt-3 text-muted-foreground text-base">
                {string.contact.meeting.additional}
              </Typography.Text>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="mt-6 gap-2"
              >
                <a
                  target="_blank"
                  href="https://cal.eu/ideatocode/point-de-cadrage"
                >
                  <Calendar className="size-4 text-primary" />
                  {string.contact.meeting.button}
                </a>
              </Button>
            </div>

            <div>
              <SubHeading
                tagline={string.contact.social.tagline}
                title={string.contact.social.title}
              />
              <Typography.Text className="mt-4 text-muted-foreground text-base">
                {string.contact.social.desc}
              </Typography.Text>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a target="_blank" href="mailto:contact@ideatocode.io">
                    <Mail className="size-4 text-primary" />
                    {string.contact.social.emailLabel}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/ideatocode"
                  >
                    <LinkedInIcon className="size-4" />
                    {string.contact.social.linkedinLabel}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: form in card */}
          <div className="lg:col-span-7">
            <Card className="p-6 md:p-8">
              <SubHeading
                tagline={string.contact.form.tagline}
                title={string.contact.form.title}
              />
              <Suspense>
                <ContactForm className="mt-6" />
              </Suspense>
            </Card>
          </div>
        </div>
      </div>
    </section>

    <InitPageSession page="contact" />
  </>
);

export default Contact;
