import PropTypes from 'prop-types';
import React from 'react';

const City = (props) => {
  const { name } = props;

  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

City.propTypes = {
  name: PropTypes.string,
};

City.defaultProps = {
  name: '',
};

export default City;
