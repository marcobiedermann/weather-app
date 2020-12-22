import React, { FC } from 'react';
import styles from './style.module.css';

const Card: FC = (props) => <div className={styles.card} {...props} />;

export default Card;
