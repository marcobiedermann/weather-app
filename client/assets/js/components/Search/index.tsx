import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Values {
  query: string;
}

export interface SearchProps {
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;
}

const Search: FC<SearchProps> = (props) => {
  const { onSubmit } = props;
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field name="query" />
          </div>

          <div>
            <button type="submit" disabled={isSubmitting}>
              {t('translation:search')}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Search;
