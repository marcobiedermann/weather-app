import classNames from 'classnames';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { languages, units } from '../../constants/localization';
import Label from '../Label';
import styles from './style.module.css';

type Unit = 'metric' | 'imperial';

interface Values {
  language: string;
  unit: Unit;
}

export interface SettingsProps {
  initialValues: Values;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;
}

const Settings: FC<SettingsProps> = (props) => {
  return (
    <Formik {...props}>
      {({ isSubmitting }) => (
        <Form>
          <div className={styles.form__field}>
            <Label htmlFor="language">Language</Label>
            <Field component="select" name="language" className={styles.form__input}>
              {languages.map((language) => (
                <option value={language.id} key={language.id}>
                  {language.name}
                </option>
              ))}
            </Field>
          </div>
          <div className={styles.form__field}>
            <Label htmlFor="unit">Unit</Label>
            <Field component="select" name="unit" className={styles.form__input}>
              {units.map((unit) => (
                <option value={unit.id} key={unit.id}>
                  {unit.name}
                </option>
              ))}
            </Field>
          </div>
          <div className={styles.form__field}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={classNames(styles.form__input, styles['form__input--submit'])}
            >
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Settings;
