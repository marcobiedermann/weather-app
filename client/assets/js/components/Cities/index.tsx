import React, { FC } from 'react';
import CityPreview, { CityPreviewProps } from '../CityPreview';
import styles from './style.module.css';

export interface CitiesProps {
  cities: CityPreviewProps[];
}

const Cities: FC<CitiesProps> = (props) => {
  const { cities, ...otherProps } = props;

  return (
    <ul className={styles.cities} {...otherProps}>
      {cities.map((city) => (
        <li key={city.id}>
          <CityPreview {...city} />
        </li>
      ))}
    </ul>
  );
};

export default Cities;
