import PropTypes from 'prop-types';
import React from 'react';

const Main = props => {
  const { children, ...otherProps } = props;

  return <main {...otherProps}>{children}</main>;
};

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
