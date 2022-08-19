import React from 'react';
import Input from '../Input.styled';
import PropTypes from 'prop-types';

const InputFilter = ({ onChange, value }) => (
  <div>
    <Input
      type="text"
      name="filter"
      placeholder="Find contact"
      onChange={onChange}
      value={value}
    />
  </div>
);

export default InputFilter;

InputFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
