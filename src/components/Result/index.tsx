import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addCity } from '../../reducers/cities';
import styles from './style.module.css';

export interface ResultProps {
  id: number;
  main: {
    temp: number;
  };
  name: string;
  sys: {
    country: string;
  };
}

const Result: FC<ResultProps> = (props) => {
  const { id, main, name, sys } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className={styles.result}>
      <h3>
        {name}, {sys.country}
      </h3>
      {main.temp}

      <button type="button" onClick={() => dispatch(addCity(id))}>
        {t('translation:add')}
      </button>
    </div>
  );
};

export default Result;
