import type { ReactNode } from 'react';
import { Link as ReactRouterLink } from 'react-router';

interface LinkProps {
  children: ReactNode;
  className?: string;
  to: string;
}

function Link(props: LinkProps): JSX.Element {
  return <ReactRouterLink {...props} />;
}

export type { LinkProps };
export default Link;
