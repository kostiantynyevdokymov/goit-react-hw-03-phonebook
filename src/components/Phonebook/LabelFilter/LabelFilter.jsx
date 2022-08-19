import React from 'react';
import PropTypes from 'prop-types';
import FilterStyled from './LabelFilter.styled';

const LabelFilter = ({ title, children }) => (
  <FilterStyled>
    <p>{title}</p>
    {children}
  </FilterStyled>
);

export default LabelFilter;

LabelFilter.propTypes = {
  title: PropTypes.string.isRequired,
};
