import { Field, Form, withFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Label from '../Label';
import { languages, units } from '../../constants/localization';

const Settings = props => {
  const { isSubmitting } = props;

  return (
    <Form>
      <div>
        <Label htmlFor="language">Language</Label>
        <Field component="select" name="language">
          {languages.map(language => (
            <option value={language.id} key={language.id}>
              {language.name}
            </option>
          ))}
        </Field>
      </div>
      <div>
        <Label htmlFor="unit">Unit</Label>
        <Field component="select" name="unit">
          {units.map(unit => (
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
  );
};

Settings.propTypes = {
  isSubmitting: PropTypes.bool,
};

Settings.defaultProps = {
  isSubmitting: false,
};

export default withFormik({
  handleSubmit: (values, { props, setSubmitting }) => {
    props.updateSettings(values);
    setSubmitting(false);
  },
  mapPropsToValues: props => ({
    language: props.language,
    unit: props.unit,
  }),
})(Settings);
