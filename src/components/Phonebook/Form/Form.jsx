import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form.styled';

const FormPhonebook = ({ onSubmit, children }) => (
  <Form onSubmit={onSubmit}>{children}</Form>
);

export default FormPhonebook;

FormPhonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
