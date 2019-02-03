import { Field, Form, withFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

const Search = (props) => {
  const { isSubmitting } = props;

  return (
    <Form>
      <div>
        <Field name="query" />
      </div>
      <div>
        <button type="submit" disabled={isSubmitting}>
          Search
        </button>
      </div>
    </Form>
  );
};

Search.propTypes = {
  isSubmitting: PropTypes.bool,
};

Search.defaultProps = {
  isSubmitting: false,
};

export default withFormik({
  handleSubmit: (values, { props, setSubmitting }) => {
    props.fetchSearch(values.query);
    setSubmitting(false);
  },
  mapPropsToValues: () => ({
    query: '',
  }),
})(Search);
