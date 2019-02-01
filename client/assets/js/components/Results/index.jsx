import PropTypes from 'prop-types';
import React from 'react';
import Result from '../../containers/Result';

const Results = (props) => {
  const { results } = props;

  return (
    <ul>
      {results.map(result => (
        <li key={result.id}>
          <Result {...result} />
        </li>
      ))}
    </ul>
  );
};

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape()),
};

Results.defaultProps = {
  results: [],
};

export default Results;
