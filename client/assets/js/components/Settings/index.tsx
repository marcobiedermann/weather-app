import { Field, Form, Formik } from 'formik';
import React, { FC } from 'react';
import { languages, units } from '../../constants/localization';
import Label from '../Label';

const Settings: FC = () => {
  return (
    <Formik
      initialValues={{
        language: 'en',
        unit: 'metric',
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
