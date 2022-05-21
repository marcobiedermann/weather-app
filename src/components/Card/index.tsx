import React, { ReactNode } from 'react';
import styles from './style.module.css';

interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps): JSX.Element {
  return <div className={styles.card} {...props} />;
}

export type { CardProps };
export default Card;
