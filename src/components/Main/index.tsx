import { ReactNode } from 'react';
import styles from './style.module.css';

interface MainProps {
  children: ReactNode;
}

function Main(props: MainProps): JSX.Element {
  return <main className={styles.main} {...props} />;
}

export type { MainProps };
export default Main;
