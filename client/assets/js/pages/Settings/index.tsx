import { FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import Settings from '../../components/Settings';
import { selectSettings, updateSettings } from '../../reducers/settings';

interface Values {
  language: string;
  unit: string;
}

const SettingsPage: FC = () => {
  const dispatch = useDispatch();
  const { language, unit } = useSelector(selectSettings);

  const initialValues: Values = {
    language,
    unit,
  };

  function onSubmit(values: Values, formikHelpers: FormikHelpers<Values>): void | Promise<any> {
    const { setSubmitting } = formikHelpers;
    const { language, unit } = values;

    console.log({ language, unit });
    dispatch(
      updateSettings({
        language,
        unit,
      }),
    );

    setSubmitting(false);
  }

  return (
    <div>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <Settings initialValues={initialValues} onSubmit={onSubmit} />
    </div>
  );
};

export default SettingsPage;
