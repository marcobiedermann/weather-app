import { ReactNode } from 'react';
import styles from './style.module.css';

interface FooterProps {
  children: ReactNode;
}

function Footer(props: FooterProps): JSX.Element {
  return <footer className={styles.footer} {...props} />;
}

export type { FooterProps };
export default Footer;
