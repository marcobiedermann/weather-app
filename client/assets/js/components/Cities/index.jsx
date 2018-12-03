import PropTypes from 'prop-types';
import React from 'react';
import City from '../City';

const Cities = (props) => {
  const { cities } = props;

  return (
    <ul>
      {cities.map(city => (
        <li>
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
