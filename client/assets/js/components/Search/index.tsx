import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Search: FC = () => {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        query: '',
      }}
      onSubmit={(values, actions) => {
        const { setSubmitting } = actions;

        console.log({ values });

        setSubmitting(false);
      }}
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
