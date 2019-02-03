import PropTypes from 'prop-types';
import React from 'react';
import City from '../City';
import styles from './style.module.css';

const Cities = (props) => {
  const { cities } = props;

  return (
    <ul className={styles.cities}>
      {cities.map(city => (
        <li key={city.id}>
          <City {...city} />
        </li>
      ))}
    </ul>
  );
};

Cities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape()),
};

Cities.defaultProps = {
  cities: [],
};

export default Cities;
