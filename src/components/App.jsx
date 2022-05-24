import { Component } from 'react/cjs/react.production.min';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    const updatedContacts = [...this.state.contacts, newContact];

    this.setState({ contacts: updatedContacts });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <p>Phonebook</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>

          <label>
            Contact
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={this.state.number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <p>Contacts</p>

        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
        />

        <ul>
          {this.state.contacts.map(
            contact =>
              contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase()) && (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                </li>
              )
          )}
        </ul>
      </div>
    );
  }
}
