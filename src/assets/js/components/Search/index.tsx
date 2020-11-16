import classNames from 'classnames';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../Settings/style.module.css';

interface Values {
  query: string;
}

export interface SearchProps {
  initialValues: Values;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;
}

const Search: FC<SearchProps> = (props) => {
  const { t } = useTranslation();

  return (
    <Formik {...props}>
      {({ isSubmitting }) => (
        <Form>
          <div className={styles.form__field}>
            <Field name="query" className={styles.form__input} />
          </div>

          <div className={styles.form__field}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={classNames(styles.form__input, styles['form__input--submit'])}
            >
              {t('translation:search')}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Search;
