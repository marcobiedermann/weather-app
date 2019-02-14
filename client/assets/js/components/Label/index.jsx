import PropTypes from 'prop-types';
import React from 'react';

const Label = props => {
  const { children, htmlFor, ...otherProps } = props;

  return (
    <label htmlFor={htmlFor} {...otherProps}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string.isRequired,
};

Label.defaultProps = {
  children: null,
};

export default Label;
