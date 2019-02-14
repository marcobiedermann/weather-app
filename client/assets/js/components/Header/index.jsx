import PropTypes from 'prop-types';
import React from 'react';

const Header = props => {
  const { children, ...otherProps } = props;

  return <header {...otherProps}>{children}</header>;
};

Header.propTypes = {
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};

export default Header;
