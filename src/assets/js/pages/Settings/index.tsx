import { FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Settings from '../../components/Settings';
import { selectSettings, updateSettings } from '../../reducers/settings';

type Unit = 'metric' | 'imperial';

interface Values {
  language: string;
  unit: Unit;
}

const SettingsPage: FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  const { language, unit } = useSelector(selectSettings);

  const initialValues: Values = {
    language,
    unit,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(values: Values, formikHelpers: FormikHelpers<Values>): void | Promise<any> {
    const { setSubmitting } = formikHelpers;

    dispatch(updateSettings(values));
    setSubmitting(false);
  }

  return (
    <>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <Settings initialValues={initialValues} onSubmit={onSubmit} />
    </>
  );
};

export default SettingsPage;
