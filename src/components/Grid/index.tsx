import { ReactNode } from 'react';
import styles from './style.module.css';

interface GridProps {
  children: ReactNode;
}

function Grid(props: GridProps): JSX.Element {
  return <div className={styles.grid} {...props} />;
}

export type { GridProps };
export default Grid;
