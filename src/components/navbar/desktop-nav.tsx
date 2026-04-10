import Image from 'next/image';
import i2cIcon from '@/../public/icon_unicolor.svg';
import { LinkTrack } from '../link-track';

import { Button } from '../ui/button';
import { string } from '@/utils/string';

export const DesktopNav = ({
  links,
}: {
  links: { text: string; url: string }[];
}) => (
  <nav className="hidden w-full bg-background/60 backdrop-blur-xl fixed z-30 border-b border-border h-20 md:block">
    <div className="max-w-screen-2xl mx-auto h-full px-6 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <LinkTrack
          eventName="navigation"
          href="/"
          className="group flex items-center gap-2"
        >
          <Image src={i2cIcon} alt="IdeaToCode logo" className="h-4.5 w-auto" />
          <span className="font-display text-2xl font-bold text-foreground">
            IdeaToCode
          </span>
        </LinkTrack>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          {links.map(({ text, url }, index) => (
            <LinkTrack eventName="navigation" key={index} href={url}>
              <Button variant="ghost" className="font-display" size={'lg'}>
                {text}
              </Button>
            </LinkTrack>
          ))}
        </div>
        <LinkTrack eventName="navigation-cta" href="/contact">
          <Button size="lg">{string.nav.ctaButton}</Button>
        </LinkTrack>
      </div>
    </div>
  </nav>
);
