import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import City from '../City';
import styles from './style.module.css';

const Cities = props => {
  const { cities, className, ...otherProps } = props;

  return (
    <ul className={classNames(className, styles.cities)} {...otherProps}>
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
  className: PropTypes.string,
};

Cities.defaultProps = {
  cities: [],
  className: '',
};

export default Cities;
