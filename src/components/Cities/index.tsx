import React from 'react';
import CityPreview, { CityPreviewProps } from '../CityPreview';
import styles from './style.module.css';

interface CitiesProps {
  cities?: CityPreviewProps[];
}

function Cities(props: CitiesProps): JSX.Element {
  const { cities = [], ...otherProps } = props;

  return (
    <ul className={styles.cities} {...otherProps}>
      {cities.map((city) => (
        <li key={city.id}>
          <CityPreview {...city} />
        </li>
      ))}
    </ul>
  );
}

export type { CitiesProps };
export default Cities;
