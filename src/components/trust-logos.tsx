'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { SpredictIcon } from '@/components/icons/network/Spredict';
import { LilyIcon } from '@/components/icons/network/Lily';
import DiotSciaci from '@/../public/diot-sciaci.png';
import Ozapay from '@/../public/ozapay.png';
import Amcos from '@/../public/amcos.webp';
import Saml from '@/../public/saml-fayat.jpg';
import { string } from '@/utils/string';

const LogoLoop = dynamic(
  () => import('@/components/react-bits/LogoLoop').then((m) => m.LogoLoop),
  { ssr: false },
) as any;

const LOGOS = [
  { node: <LilyIcon className="md:h-20 h-10 w-auto" />, title: 'Lily' },
  { node: <SpredictIcon className="h-full w-auto" />, title: 'Spredict' },
  { src: DiotSciaci.src, alt: 'Diot-Sciaci' },
  { src: Ozapay.src, alt: 'Ozapay' },
  { src: Amcos.src, alt: 'Amcos' },
  { src: Saml.src, alt: 'Saml-Fayat' },
];

const BREAKPOINTS = {
  sm: { logoHeight: 25, gap: 48, speed: 40 },
  md: { logoHeight: 45, gap: 72, speed: 50 },
  lg: { logoHeight: 60, gap: 96, speed: 60 },
};

const useResponsiveConfig = () => {
  const [config, setConfig] = useState(BREAKPOINTS.lg);

  useEffect(() => {
    const mdQuery = window.matchMedia('(min-width: 768px)');
    const lgQuery = window.matchMedia('(min-width: 1024px)');

    const update = () => {
      if (lgQuery.matches) setConfig(BREAKPOINTS.lg);
      else if (mdQuery.matches) setConfig(BREAKPOINTS.md);
      else setConfig(BREAKPOINTS.sm);
    };

    update();
    mdQuery.addEventListener('change', update);
    lgQuery.addEventListener('change', update);
    return () => {
      mdQuery.removeEventListener('change', update);
      lgQuery.removeEventListener('change', update);
    };
  }, []);

  return config;
};

export const TrustLogos = () => {
  const { logoHeight, gap, speed } = useResponsiveConfig();

  return (
    <LogoLoop
      className="overflow-hidden"
      logos={LOGOS}
      speed={speed}
      direction="left"
      logoHeight={logoHeight}
      gap={gap}
      hoverSpeed={0}
      fadeOut
      fadeOutColor="var(--background)"
      ariaLabel={string.trustLogos.ariaLabel}
    />
  );
};
