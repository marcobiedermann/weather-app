import PropTypes from 'prop-types';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Result = (props) => {
  const { addCity, main, name, sys, ...otherProps } = props;
  const { t } = useTranslation();

  return (
    <div {...otherProps}>
      <h3>
        {name}, {sys.country}
      </h3>
      {main.temp}

      <button type="button" onClick={() => addCity(props)}>
        {t('translation:add')}
      </button>
    </div>
  );
};

Result.propTypes = {
  addCity: PropTypes.func,
  main: PropTypes.shape(),
  name: PropTypes.string,
  sys: PropTypes.shape(),
};

Result.defaultProps = {
  addCity: () => {},
  main: null,
  name: '',
  sys: null,
};

export default Result;
