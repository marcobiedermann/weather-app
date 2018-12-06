import PropTypes from 'prop-types';
import React from 'react';

const Label = (props) => {
  const { children, htmlFor } = props;

  return (
    <label htmlFor={htmlFor}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.node,
  htmlFor: PropTypes.string,
};

Label.defaultProps = {
  children: null,
  htmlFor: '',
};

export default Label;
