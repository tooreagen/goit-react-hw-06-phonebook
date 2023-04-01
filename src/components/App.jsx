import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { filterContacts } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsArray, getFilterString } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContactsArray);
  const filter = useSelector(getFilterString);
  const dispatch = useDispatch();

  const contactAdd = evt => {
    const { name, number } = evt.target;
    evt.preventDefault();
    if (contacts.some(item => item.name === name.value)) {
      alert(`${name.value} is already in contacts.`);
    } else {
      const id = nanoid();
      dispatch(addContact({ id: id, name: name.value, number: number.value }));
    }
  };

  const contactDelete = id => {
    dispatch(deleteContact(id));
  };

  const contactFind = evt => {
    dispatch(filterContacts(evt.currentTarget.value));
  };

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
