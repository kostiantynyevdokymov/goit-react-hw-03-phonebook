import React from 'react';
import PropTypes from 'prop-types';
import DeleteBtn from './ButtonDelete.styled';

const ButtonDelete = ({ name, onClickDelete, id }) => (
  <DeleteBtn type="button" onClick={onClickDelete} id={id}>
    {name}
  </DeleteBtn>
);

export default ButtonDelete;

ButtonDelete.propTypes = {
  name: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
