interface StatCardProps {
  value: string;
  label: string;
}

export const StatCard = ({ value, label }: StatCardProps) => (
  <div className="text-center">
    <div className="font-display text-4xl font-bold lg:text-5xl">{value}</div>
    <div className="mt-1 text-sm text-muted-foreground md:text-base">
      {label}
    </div>
  </div>
);
