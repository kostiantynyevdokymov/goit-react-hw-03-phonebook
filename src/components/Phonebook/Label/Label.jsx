import React from 'react';
import PropTypes from 'prop-types';
import Label from './Label.styled';

const LabelPhonebook = ({ title, children }) => (
  <Label>
    <span>{title}</span>
    {children}
  </Label>
);

export default LabelPhonebook;

LabelPhonebook.propTypes = {
  title: PropTypes.string.isRequired,
};
