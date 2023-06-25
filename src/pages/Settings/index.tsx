import Seo from '../../components/Seo';
import Settings, { FormData } from '../../components/Settings';
import { updateSettings } from '../../reducers/settings';
import { selectSettings } from '../../selectors/settings';
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
      <Seo title="Settings" />
      <Settings defaultValues={defaultValues} onSubmit={onSubmit} />
    </>
  );
}

export default SettingsPage;
