import React from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import Settings, { FormData } from '../../components/Settings';
import { selectSettings, updateSettings } from '../../reducers/settings';

function SettingsPage(): JSX.Element {
  const dispatch = useDispatch();
  const { language, unit } = useSelector(selectSettings);

  const defaultValues: FormData = {
    language,
    unit,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function onSubmit(data: FormData): void | Promise<any> {
    dispatch(updateSettings(data));
  }

  return (
    <>
      <Helmet>
        <title>Settings</title>
      </Helmet>
      <Settings defaultValues={defaultValues} onSubmit={onSubmit} />
    </>
  );
}

export default SettingsPage;
