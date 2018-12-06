import PropTypes from 'prop-types';
import React from 'react';

const Footer = (props) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

Footer.defaultProps = {
  children: null,
};

export default Footer;
