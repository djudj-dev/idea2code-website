'use client';

import { ArrowUpRight, MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import i2cIcon from '@/../public/icon_unicolor.svg';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { LinkTrack } from '../link-track';

import { Button } from '../ui/button';
import { string } from '@/utils/string';

const panelVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.23, 1, 0.32, 1] as const,
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.15, ease: 'easeIn' as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -12 },
};

export const PhoneNav = ({
  links,
}: {
  links: { text: string; url: string }[];
}) => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <nav
        data-cy="phone-nav"
        className="w-full bg-background/80 backdrop-blur-xl fixed inset-x-0 top-0 z-40 border-b border-border"
      >
        <div className="max-w-screen-2xl mx-auto h-16 px-6 flex items-center justify-between">
          <LinkTrack
            eventName="navigation"
            href="/"
            className="group flex items-center gap-3"
            onClick={close}
          >
            <Image
              src={i2cIcon}
              alt="IdeaToCode logo"
              className="h-4.5 w-auto"
            />
            <span className="font-display text-xl font-bold text-foreground">
              IdeaToCode
            </span>
          </LinkTrack>
          <button
            type="button"
            data-cy="phone-menu-input"
            aria-label={open ? string.nav.menuClose : string.nav.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="relative flex size-10 items-center justify-center rounded-full border border-border bg-surface/60 transition-colors hover:bg-surface"
          >
            <AnimatePresence initial={false} mode="wait">
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <XIcon className="size-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="flex"
                >
                  <MenuIcon className="size-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={close}
              className="fixed inset-x-0 top-16 bottom-0 z-30 bg-background/40 backdrop-blur-lg"
              aria-hidden
            />
            <motion.div
              key="panel"
              data-cy="phone-menu"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-x-0 top-16 z-30 border-b border-border bg-background/60 shadow-2xl shadow-black/20"
            >
              <div className="max-w-screen-2xl mx-auto px-6 pt-4 pb-6 flex flex-col">
                <ul className="flex flex-col">
                  {links.map(({ text, url }) => (
                    <motion.li
                      key={url}
                      variants={itemVariants}
                      className="border-b border-border/60 last:border-b-0"
                    >
                      <LinkTrack
                        eventName="navigation"
                        href={url}
                        scroll={true}
                        onClick={close}
                        className="group flex items-center justify-between py-5"
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                            {text}
                          </span>
                        </div>
                        <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </LinkTrack>
                    </motion.li>
                  ))}
                </ul>

                <motion.div variants={itemVariants} className="mt-6">
                  <LinkTrack
                    eventName="navigation-cta"
                    href="/contact"
                    onClick={close}
                  >
                    <Button size="lg" className="w-full font-display">
                      {string.nav.ctaButton}
                    </Button>
                  </LinkTrack>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhoneNav;
