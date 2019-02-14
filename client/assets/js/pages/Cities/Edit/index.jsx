import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { removeCity } from '../../../actions/cities';
import Card from '../../../components/Card';
import City from '../../../components/City';
import * as routes from '../../../constants/routes';
import styles from './style.module.css';

const EditPage = props => {
  const { cities, removeCity } = props;

  return (
    <div>
      <Helmet>
        <title>Edit</title>
      </Helmet>
      <ul className={styles.cities}>
        {cities.map(city => (
          <li key={city.id}>
            <Card>
              <City {...city} />
              <button type="button" onClick={() => removeCity(city.id)}>
                x
              </button>
            </Card>
          </li>
        ))}
        <li>
          <Card>
            <Link to={routes.SEARCH.path}>Add</Link>
          </Card>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeCity,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPage);
