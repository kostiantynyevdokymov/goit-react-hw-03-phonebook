import React from 'react';
import PropTypes from 'prop-types';
import ContactsList from './Contacts.styled';
import LabelFilter from '../LabelFilter/LabelFilter';
import InputFilter from '../Input/Filter/InputFilter';
import ButtonDelete from '../Button/ButtonDelete/ButtonDelete';

const Contacts = ({ name, contactsList, onChange, value, onClickDelete }) => (
  <ContactsList>
    <p>{name}</p>
    <LabelFilter title="Find contacts by name">
      <InputFilter onChange={onChange} value={value} />
    </LabelFilter>
    <ul>
      {contactsList.map(contact => (
        <li key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <ButtonDelete
            name="Delete"
            onClickDelete={() => onClickDelete(contact.id)}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  </ContactsList>
);
export default Contacts;

Contacts.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,

  contactsList: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
