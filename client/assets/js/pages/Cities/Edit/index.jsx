import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { removeCity } from '../../../actions/cities';
import City from '../../../components/City';
import * as routes from '../../../constants/routes';
import styles from './style.module.css';

const EditPage = (props) => {
  const { cities, removeCity } = props;

  return (
    <div>
      <ul className={styles.cities}>
        {cities.map(city => (
          <li key={city.id}>
            <City {...city} />
            <button type="button" onClick={() => removeCity(city.id)}>x</button>
          </li>
        ))}
        <li>
          <Link to={routes.SEARCH.path}>Add</Link>
        </li>
      </ul>
    </div>
  );
};

EditPage.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape()),
  removeCity: PropTypes.func,
};

EditPage.defaultProps = {
  cities: [],
  removeCity: () => {},
};

const mapStateToProps = ({ cities }) => ({
  cities,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    removeCity,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPage);
