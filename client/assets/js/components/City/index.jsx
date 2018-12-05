import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

const City = (props) => {
  const { id, name } = props;

  return (
    <div>
      <h2>
        <Link to={`/cities/${id}`}>{name}</Link>
      </h2>
    </div>
  );
};

City.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
};

City.defaultProps = {
  name: '',
  id: 0,
};

export default City;
