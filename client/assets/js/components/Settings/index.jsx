import { Field, Form, withFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import { languages } from '../../constants/languages';

const Settings = (props) => {
  const { isSubmitting } = props;

  return (
    <Form>
      <Field component="select" name="language">
        {languages.map(language => (
          <option value={language.id} key={language.id}>
            {language.name}
          </option>
        ))}
      </Field>
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
  handleSubmit: (values) => {
    console.log(values);
  },
  mapPropsToValues: () => ({
    language: 'en',
  }),
})(Settings);
