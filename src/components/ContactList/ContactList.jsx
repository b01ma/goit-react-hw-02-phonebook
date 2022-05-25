export const ContactList = ({ contacts, filter, onDelete }) => {
  return (
    <ul>
      {contacts.map(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) && (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
          )
      )}
    </ul>
  );
};
