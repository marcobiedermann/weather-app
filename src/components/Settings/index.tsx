import clsx from 'clsx';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Language, languages, supportedLanguages, units } from '../../constants/localization';
import Label from '../Label';
import styles from './style.module.css';

function isSupportedLanguage(language: Language): boolean {
  return supportedLanguages.includes(language.id);
}

type Unit = 'metric' | 'imperial';

interface FormData {
  language: string;
  unit: Unit;
}

interface SettingsProps {
  defaultValues: FormData;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: FormData) => void | Promise<any>;
}

function Settings(props: SettingsProps): JSX.Element {
  const { defaultValues, onSubmit } = props;
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.form__field}>
        <Label htmlFor="language">Language</Label>
        <select {...register('language')} className={styles.form__input}>
          {languages.filter(isSupportedLanguage).map((language) => (
            <option value={language.id} key={language.id}>
              {language.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.form__field}>
        <Label htmlFor="unit">Unit</Label>
        <select {...register('unit')} className={styles.form__input}>
          {units.map((unit) => (
            <option value={unit.id} key={unit.id}>
              {unit.name}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.form__field}>
        <button type="submit" className={clsx(styles.form__input, styles['form__input--submit'])}>
          Save
        </button>
      </div>
    </form>
  );
}

export type { FormData, SettingsProps };
export default Settings;
