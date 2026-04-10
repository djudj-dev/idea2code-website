import { cn } from '@/lib/utils';
import { Typography } from '@/components/ui/typography';

interface SectionHeadingProps {
  tagline?: string;
  title: string;
  description?: string;
  className?: string;
  /** Heading level — `h1` for the page's main heading, `h2` for subsequent sections. */
  as?: 'h1' | 'h2';
}

export const SectionHeading = ({
  tagline,
  title,
  description,
  className,
  as = 'h1',
}: SectionHeadingProps) => {
  const isCentered = className?.includes('text-center');
  return (
    <div className={cn('mb-12', className)}>
      {tagline && (
        <Typography.Label className="text-primary font-bold">
          {tagline}
        </Typography.Label>
      )}
      <Typography.H1 as={as} className="mt-2">
        {title}
      </Typography.H1>
      {description && (
        <Typography.Lead
          className={cn(
            'mt-4 max-w-2xl text-lg whitespace-pre-line',
            isCentered && 'mx-auto',
          )}
        >
          {description}
        </Typography.Lead>
      )}
    </div>
  );
};
