import Image from 'next/image';
import i2cIcon from '@/../public/icon_unicolor.svg';
import Link from 'next/link';
import { string } from '@/utils/string';

export const Footer = () => (
  <footer className="w-full border-t border-border py-12">
    <div className="max-w-screen-2xl mx-auto px-6 flex flex-col items-center gap-8 md:flex-row md:justify-between">
      <Link href="/" className="flex items-center gap-2">
        <Image src={i2cIcon} alt="IdeaToCode logo" className="h-4.5 w-auto" />
        <span className="font-display text-2xl font-bold text-foreground">
          IdeaToCode
        </span>
      </Link>
      <nav className="flex gap-6">
        {string.footer.links.map(({ text, url }) => (
          <Link
            key={url}
            href={url}
            className="text-xs font-bold font-display uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            {text}
          </Link>
        ))}
      </nav>
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} {string.footer.copyright}
      </p>
    </div>
  </footer>
);
