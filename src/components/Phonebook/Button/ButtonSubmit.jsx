import React from 'react';
import Button from './ButtonSubmit.styled';
import PropTypes from 'prop-types';

const ButtonSubmit = ({ text }) => <Button type="submit">{text}</Button>;

export default ButtonSubmit;

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
