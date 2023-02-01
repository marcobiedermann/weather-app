import clsx from 'clsx';
import React from 'react';
import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';
import styles from '../Settings/style.module.css';

interface FormData {
  query: string;
}

interface SearchProps {
  defaultValues: FormData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: FormData) => void | Promise<any>;
}

function Search(props: SearchProps): JSX.Element {
  const { defaultValues, onSubmit } = props;
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues,
  });
  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__field}>
        <input {...register('query')} className={styles.form__input} />
      </div>

      <div className={styles.form__field}>
        <button type="submit" className={clsx(styles.form__input, styles['form__input--submit'])}>
          {t('translation:search')}
        </button>
      </div>
    </form>
  );
}

export type { FormData, SearchProps };
export default Search;
