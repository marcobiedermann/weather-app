import PropTypes from 'prop-types';
import React from 'react';

const Footer = (props) => {
  const { children, ...otherProps } = props;

  return <div {...otherProps}>{children}</div>;
};

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.defaultProps = {
  children: null,
};

export default Footer;
