import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './style.module.css';

const Card = props => {
  const { children, className, ...otherProps } = props;

  return (
    <div className={classNames(className, styles.card)} {...otherProps}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  className: '',
};

export default Card;
