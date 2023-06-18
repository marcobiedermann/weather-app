import { ReactNode } from 'react';
import styles from './style.module.css';

interface HeaderProps {
  children: ReactNode;
}

function Header(props: HeaderProps): JSX.Element {
  return <header className={styles.header} {...props} />;
}

export type { HeaderProps };
export default Header;
