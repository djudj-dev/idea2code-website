import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends TypographyProps {
  /** Override the rendered tag while keeping the visual style. */
  as?: HeadingTag;
}

export const Typography = {
  /** Display — Inter 800, gradient foreground → primary */
  Display: ({ children, className, as: Tag = 'h1' }: HeadingProps) => (
    <Tag
      className={cn(
        'scroll-m-20 bg-gradient-to-b from-foreground to-primary bg-clip-text text-6xl font-extrabold tracking-tighter text-transparent lg:text-7xl',
        className,
      )}
    >
      {children}
    </Tag>
  ),

  /** H1 — Inter 700 */
  H1: ({ children, className, as: Tag = 'h1' }: HeadingProps) => (
    <Tag
      className={cn(
        'scroll-m-20 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
        className,
      )}
    >
      {children}
    </Tag>
  ),

  /** H2 — Inter 700 */
  H2: ({ children, className }: TypographyProps) => (
    <h2
      className={cn(
        'scroll-m-20 text-2xl font-bold tracking-tight md:text-3xl',
        className,
      )}
    >
      {children}
    </h2>
  ),

  /** H3 — Inter 600 */
  H3: ({ children, className }: TypographyProps) => (
    <h3
      className={cn(
        'scroll-m-20 text-xl font-semibold tracking-tight md:text-2xl',
        className,
      )}
    >
      {children}
    </h3>
  ),

  /** H4 — Inter 600 */
  H4: ({ children, className }: TypographyProps) => (
    <h4
      className={cn(
        'scroll-m-20 text-lg font-semibold tracking-tight md:text-xl',
        className,
      )}
    >
      {children}
    </h4>
  ),

  /** Body text — Inter 400, with spacing between paragraphs */
  Text: ({ children, className }: TypographyProps) => (
    <p className={cn('text-base leading-7', className)}>{children}</p>
  ),

  /** Large body text — Inter 500 */
  Large: ({ children, className }: TypographyProps) => (
    <p className={cn('text-lg font-medium leading-7', className)}>{children}</p>
  ),

  /** Lead / subtitle — muted foreground */
  Lead: ({ children, className }: TypographyProps) => (
    <p className={cn('text-xl text-muted-foreground', className)}>{children}</p>
  ),

  /** Small text */
  Small: ({ children, className }: TypographyProps) => (
    <p className={cn('text-sm text-muted-foreground', className)}>{children}</p>
  ),

  /** Label — Space Grotesk 500, uppercase tracking */
  Label: ({ children, className }: TypographyProps) => (
    <span
      className={cn(
        'text-xs font-medium uppercase tracking-[0.2em] text-on-surface-variant font-[family-name:var(--font-label)]',
        className,
      )}
    >
      {children}
    </span>
  ),

  /** Code / Mono — Fira Code 400 */
  Code: ({ children, className }: TypographyProps) => (
    <code
      className={cn('text-sm font-[family-name:var(--font-code)]', className)}
    >
      {children}
    </code>
  ),
};
