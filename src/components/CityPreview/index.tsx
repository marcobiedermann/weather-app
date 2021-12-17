import classNames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export interface CityPreviewProps {
  id: number;
  main: {
    temp: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

const CityPreview: FC<CityPreviewProps> = (props) => {
  const { id, main, name, sys, ...otherProps } = props;

  return (
    <div
      className={classNames(styles.city, {
        [styles['city--cold']]: main.temp <= 0,
        [styles['city--warm']]: main.temp >= 15,
      })}
      {...otherProps}
    >
      <Link to={`/cities/${id}`} className={styles.city__link}>
        <div className={styles.city__temp}>{main.temp} °</div>
        <h2 className={styles.city__name}>{name}</h2>
        <h3 className={styles.city__country}>{sys.country}</h3>
      </Link>
    </div>
  );
};

export default CityPreview;
