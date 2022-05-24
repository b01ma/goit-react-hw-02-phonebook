import { Component } from 'react/cjs/react.production.min';
import { nanoid } from 'nanoid';
import Phonebook from './Phonebook/Phonebook';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const updatedContacts = [...this.state.contacts, newContact];
    this.setState({ contacts: updatedContacts });
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    return (
      <div>
        <Phonebook onSubmit={this.addContact} />

        <h1>Contacts</h1>

        <Filter value={this.state.filter} onChange={this.filterChange} />

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
