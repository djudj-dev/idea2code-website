'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from './ui/switch';

export const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const changeTheme = (isDark: boolean) => {
    setTheme(isDark ? 'dark' : 'light');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="flex items-center justify-center"
    >
      <Sun className="size-6 text-primary" />
      <Switch
        className="mx-2"
        checked={resolvedTheme === 'dark'}
        onCheckedChange={(checked) => changeTheme(checked)}
      />
      <Moon className="size-6 text-primary" />
    </div>
  );
};

export default ThemeSwitch;