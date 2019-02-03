import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Results from '../../components/Results';
import Search from '../../containers/Search';

const SearchPage = (props) => {
  const { search } = props;

  return (
    <div>
      <Search />
      <Results results={search.list} />
    </div>
  );
};

SearchPage.propTypes = {
  search: PropTypes.shape(),
};

SearchPage.defaultProps = {
  search: null,
};

const mapStateToProps = ({ search }) => ({
  search,
});

export default connect(
  mapStateToProps,
)(SearchPage);
