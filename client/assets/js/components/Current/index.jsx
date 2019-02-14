import PropTypes from 'prop-types';
import React from 'react';
import Weather from '../Weather';

const Current = props => {
  const { name, ...otherProps } = props;

  return (
    <div>
      <h2>{name}</h2>
      <Weather {...otherProps} />
    </div>
  );
};

Current.propTypes = {
  name: PropTypes.string,
};

Current.defaultProps = {
  name: '',
};

export default Current;
