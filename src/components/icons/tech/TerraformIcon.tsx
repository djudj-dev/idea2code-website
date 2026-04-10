import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    data-cy="TerraformIcon"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <g className="fill-primary">
      <path d="M1 0v5.05l4.349 2.527V2.526L1 0zM10.175 5.344l-4.35-2.525v5.05l4.35 2.527V5.344zM10.651 10.396V5.344L15 2.819v5.05l-4.349 2.527zM10.174 16l-4.349-2.526v-5.05l4.349 2.525V16z" />
    </g>
  </svg>
);

export { SvgComponent as TerraformIcon };
