import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCity } from '../../../actions/cities';

const EditPage = (props) => {
  const { cities, removeCity } = props;

  return (
    <div>
      <ul>
        {cities.map(city => (
          <li key={city.id}>
            <h2>
              {city.name}
            </h2>
            <button type="button" onClick={() => removeCity(city.id)}>Remove</button>
          </li>
        ))}
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
