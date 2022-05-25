import { Component } from 'react/cjs/react.production.min';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

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

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  isSameContact = (name, number) => {
    let contactsNameArray = [];
    let contactsNumberArray = [];

    contactsNameArray = this.state.contacts.map(contact => contact.name);

    contactsNumberArray = this.state.contacts.map(contact => contact.number);

    return (
      contactsNameArray.includes(name) || contactsNumberArray.includes(number)
    );
  };

  addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const updatedContacts = [...this.state.contacts, newContact];

    this.isSameContact(name, number)
      ? alert('This contact is already exists')
      : this.setState({ contacts: updatedContacts });
  };

  filterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
      border: 1px solid black;
      height: 100vh;

      display: flex;
      flex-direction: column;
      align-items: center;
    `;

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h1>Contacts</h1>

        <Filter value={this.state.filter} onChange={this.filterChange} />

        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.deleteContact}
        />
      </Wrapper>
    );
  }
}
