import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

interface CityPreviewProps {
  id: number;
  main: {
    temp: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

function CityPreview(props: CityPreviewProps): JSX.Element {
  const { id, main, name, sys, ...otherProps } = props;

  return (
    <div
      className={clsx(styles.city, {
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
}

export type { CityPreviewProps };
export default CityPreview;
