import classNames from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

export interface CityProps {
  id: number;
  main: {
    temp: number;
  };
  name: string;
}

const City: FC<CityProps> = (props) => {
  const { id, main, name, ...otherProps } = props;

  return (
    <div
      className={classNames(styles.city, {
        [styles['city--cold']]: main.temp <= 0,
        [styles['city--warm']]: main.temp >= 15,
      })}
      {...otherProps}
    >
      <Link to={`/cities/${id}`}>
        {main.temp} °C
        <h2>{name}</h2>
      </Link>
    </div>
  );
};

export default City;
