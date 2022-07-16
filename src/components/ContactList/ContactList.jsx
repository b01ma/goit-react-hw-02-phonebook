import { Button, Ul, Li } from './ContactList.css';
import propTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Ul>
      {contacts.map(contact => (
        <Li key={contact.id}>
          {contact.name}: {contact.number}
          <Button onClick={() => onDelete(contact.id)}>Delete</Button>
        </Li>
      ))}
    </Ul>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ).isRequired,
};
