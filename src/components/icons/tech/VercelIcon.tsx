import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-cy="VercelIcon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path className="fill-primary" d="M12 1L24 22H0L12 1Z" />
  </svg>
);

export { SvgComponent as VercelIcon };
