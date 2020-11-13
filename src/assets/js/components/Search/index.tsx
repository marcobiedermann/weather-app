import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface Values {
  query: string;
}

export interface SearchProps {
  initialValues: Values;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;
}

const Search: FC<SearchProps> = (props) => {
  const { t } = useTranslation();

  return (
    <Formik {...props}>
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
