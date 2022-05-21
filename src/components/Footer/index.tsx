import React, { ReactNode } from 'react';

interface FooterProps {
  children: ReactNode;
}

function Footer(props: FooterProps): JSX.Element {
  return <div {...props} />;
}

export type { FooterProps };
export default Footer;
