import React, { FC } from 'react';
import City, { CityProps } from '../City';
import styles from './style.module.css';

export interface CitiesProps {
  cities: CityProps[];
}

const Cities: FC<CitiesProps> = (props) => {
  const { cities, ...otherProps } = props;

  return (
    <ul className={styles.cities} {...otherProps}>
      {cities.map((city) => (
        <li key={city.id}>
          <City {...city} />
        </li>
      ))}
    </ul>
  );
};

export default Cities;
