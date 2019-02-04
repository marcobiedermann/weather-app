import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.css';

const City = (props) => {
  const {
    className, id, main, name, ...otherProps
  } = props;

  return (
    <div
      className={classNames(className, styles.city, {
        [styles['city--cold']]: (main.temp <= 0),
        [styles['city--warm']]: (main.temp >= 15),
      })}
      {...otherProps}
    >
      <Link to={`/cities/${id}`}>
        {main.temp}
        {' '}
        °C
        <h2>
          {name}
        </h2>
      </Link>
    </div>
  );
};

City.propTypes = {
  className: PropTypes.string,
  main: PropTypes.shape(),
  name: PropTypes.string,
  id: PropTypes.number,
};

City.defaultProps = {
  className: '',
  main: null,
  name: '',
  id: 0,
};

export default City;
