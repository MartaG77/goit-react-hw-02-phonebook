import { useState } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export const App = () => {
  const [phonebook, setPhonebook] = useState({
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  });

  const filteredContacts = phonebook.contacts?.filter(contact =>
    contact.name.toLowerCase().includes(phonebook.filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm phonebook={phonebook} setPhonebook={setPhonebook} />

      <h2>Contacts</h2>
      <Filter phonebook={phonebook} setPhonebook={setPhonebook} />
      <ContactList
        phonebook={phonebook}
        setPhonebook={setPhonebook}
        filteredContacts={filteredContacts}
      />
    </div>
  );
};