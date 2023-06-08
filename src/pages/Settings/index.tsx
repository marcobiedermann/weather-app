import { Helmet } from 'react-helmet';
import Settings, { FormData } from '../../components/Settings';
import { selectSettings, updateSettings } from '../../reducers/settings';
import { useAppDispatch, useAppSelector } from '../../store';

function SettingsPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const { language, unit } = useAppSelector(selectSettings);

  const defaultValues: FormData = {
    language,
    unit,
  };

  function onSubmit(data: FormData): void {
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
