'use client';

import { AppWindow, Server, Smartphone, Cloud } from 'lucide-react';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { string } from '@/utils/string';
import SpotlightCard from '@/components/react-bits/SpotlightCard';

const EXPERTISE_ICONS = [AppWindow, Server, Smartphone, Cloud];
const EXPERTISE_COLORS = [
  { bg: 'bg-primary/10', border: 'border-primary/20', text: 'text-primary' },
  {
    bg: 'bg-secondary/10',
    border: 'border-secondary/20',
    text: 'text-secondary',
  },
  {
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-500',
  },
  {
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-500',
  },
];

// Bento: md = 2 cols, lg+ = 8 cols. Card 0 tall left, 1+2 stacked right, 3 full width bottom
const BENTO_SPANS = [
  'lg:col-span-3 lg:row-span-2',
  'lg:col-span-5',
  'lg:col-span-3',
  'lg:col-span-2',
];

export const ExpertiseBento = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6">
    {string.home.expertise.cards.map((card, index) => {
      const Icon = EXPERTISE_ICONS[index];
      const color = EXPERTISE_COLORS[index];
      const span = BENTO_SPANS[index];
      return (
        <SpotlightCard
          key={card.title}
          className={`${span} p-8 md:p-10`}
          spotlightColor="rgba(0, 180, 216, 0.15)"
        >
          <CardHeader className="flex flex-row items-center gap-3 p-0">
            <div
              className={`flex w-14 h-14 items-center justify-center rounded-2xl border ${color.bg} ${color.border} ${color.text}`}
            >
              <Icon className="size-6" />
            </div>
          </CardHeader>
          <CardTitle className="font-display text-xl font-bold mt-4 md:text-2xl">
            {card.title}
          </CardTitle>
          <CardContent className="text-sm text-muted-foreground p-0 mt-3">
            {card.description}
          </CardContent>
        </SpotlightCard>
      );
    })}
  </div>
);
