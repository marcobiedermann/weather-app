import React, { FC } from 'react';
import styles from './style.module.css';

const Card: FC = (props) => {
  return <div className={styles.card} {...props} />;
};

export default Card;
