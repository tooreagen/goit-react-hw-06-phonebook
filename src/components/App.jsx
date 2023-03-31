import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const contactAdd = evt => {
    const { name, number } = evt.target;
    evt.preventDefault();
    if (contacts.some(item => item.name === name.value)) {
      alert(`${name.value} is already in contacts.`);
    } else {
      setContacts([...contacts, {
        id: nanoid(),
        name: name.value,
        number: number.value,
      }]);
    }
  };

  const contactDelete = id => {
    setContacts(contacts.filter(item => item.id !== id));
  };

  const contactFind = evt => {
    setFilter(evt.currentTarget.value);
  };

  //get from storage
  useEffect(() => {
    if (localStorage.getItem('Phonebook')) {
      setContacts(JSON.parse(localStorage.getItem('Phonebook')));
    }
  }, []);

  //to storage if contacts are updated
  useEffect(() => {
    localStorage.setItem('Phonebook', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactsForm handleSubmit={contactAdd} />

      <h2>Contacts</h2>
      <Filter handleFind={contactFind} />
      <ContactsList
        contacts={contacts}
        filterString={filter}
        onDelete={contactDelete}
      />

      <GlobalStyle />
    </Layout>
  );
}
