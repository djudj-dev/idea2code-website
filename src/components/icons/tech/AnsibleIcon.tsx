import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-cy="AnsibleIcon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      className="fill-primary"
      fillRule="evenodd"
      d="M16 29.951a13.952 13.952 0 1 1 .193-27.9A13.951 13.951 0 0 1 16 29.951Zm-2.221-13.13c.1.1.1.1.193.1C16 18.559 18.027 20.1 19.958 21.745a10.928 10.928 0 0 0 1.255.965.99.99 0 0 0 1.545-.676 1.643 1.643 0 0 0-.1-.676L18.9 12.38c-.579-1.352-1.159-2.8-1.738-4.151a.87.87 0 0 0-.579-.579c-.579-.193-.965.1-1.255.676-2.027 4.731-3.958 9.558-5.986 14.289 0 .1-.1.193-.1.29h1.931c.193 0 .193-.1.29-.193.386-.869.676-1.834 1.062-2.7A31.234 31.234 0 0 1 13.779 16.821Z"
    />
  </svg>
);

export { SvgComponent as AnsibleIcon };
