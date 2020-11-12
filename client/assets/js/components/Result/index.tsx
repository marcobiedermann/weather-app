import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface ResultProps {
  addCity: () => void;
  main: {
    temp: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

const Result: FC<ResultProps> = (props) => {
  const { addCity, main, name, sys } = props;
  const { t } = useTranslation();

  return (
    <div>
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

export default Result;
