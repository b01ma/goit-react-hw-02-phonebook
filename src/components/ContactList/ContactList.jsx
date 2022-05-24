export const ContactList = ({ contacts, filter }) => {
  return (
    <ul>
      {contacts.map(
        contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) && (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          )
      )}
    </ul>
  );
};
