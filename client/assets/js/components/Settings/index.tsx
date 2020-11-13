import { Field, Form, Formik, FormikHelpers } from 'formik';
import React, { FC } from 'react';
import { languages, units } from '../../constants/localization';
import Label from '../Label';

type Unit = 'metric' | 'imperial';

interface Values {
  language: string;
  unit: Unit;
}

export interface SettingsProps {
  initialValues: Values;
  onSubmit: (values: Values, formikHelpers: FormikHelpers<Values>) => void | Promise<any>;
}

const Settings: FC<SettingsProps> = (props) => {
  return (
    <Formik {...props}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Label htmlFor="language">Language</Label>
            <Field component="select" name="language">
              {languages.map((language) => (
                <option value={language.id} key={language.id}>
                  {language.name}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <Label htmlFor="unit">Unit</Label>
            <Field component="select" name="unit">
              {units.map((unit) => (
                <option value={unit.id} key={unit.id}>
                  {unit.name}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
              Save
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Settings;
