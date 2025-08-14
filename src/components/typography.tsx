import { ReactElement } from 'react';

type TypographyParams = {
  children: ReactElement | string | string[];
  className?: string;
};

export const Typography = {
  Header1: ({ children, className, ...otherProps }: TypographyParams) => (
    <h1
      className={`scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl ${className || ''}`}
      {...otherProps}
    >
      {children}
    </h1>
  ),
  Header2: ({ children, className, ...otherProps }: TypographyParams) => (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className || ''}`}
      {...otherProps}
    >
      {children}
    </h2>
  ),
  Header3: ({ children, className, ...otherProps }: TypographyParams) => (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className || ''}`}
      {...otherProps}
    >
      {children}
    </h3>
  ),
  Header4: ({ children, className, ...otherProps }: TypographyParams) => (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className || ''}`}
      {...otherProps}
    >
      {children}
    </h4>
  ),
  Text: ({ children, className, ...otherProps }: TypographyParams) => (
    <p
      className={`leading-7 [&:not(:first-child)]:mt-6 ${className || ''}`}
      {...otherProps}
    >
      {children}
    </p>
  ),
  Large: ({ children, className, ...otherProps }: TypographyParams) => (
    <p
      className={`font-semibold leading-7 [&:not(:first-child)]:mt-6 ${className || ''}`}
      {...otherProps}
    >
      {children}
    </p>
  ),
  Lead: ({ children, className, ...otherProps }: TypographyParams) => (
    <p
      className={`text-xl ${className || ''}`}
      {...otherProps}
    >
      {children}
    </p>
  ),
};

export { };