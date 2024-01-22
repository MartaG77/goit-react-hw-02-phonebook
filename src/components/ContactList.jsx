import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ setPhonebook, phonebook, filteredContacts }) => {
  const removeContact = id => {
    const removing = phonebook.contacts.filter(contact => contact.id !== id);
    setPhonebook({ ...phonebook, contacts: removing });
  };
  return (
    <ul class="list">
      {phonebook.filter === ''
        ? phonebook.contacts?.map(item => (
            <ContactListItem
              key={item.id}
              name={item.name}
              number={item.number}
              onRemove={removeContact}
              id={item.id}
            />
          ))
        : filteredContacts?.map(item => (
            <ContactListItem
              key={item.id}
              name={item.name}
              number={item.number}
              onRemove={removeContact}
              id={item.id}
            />
          ))}
    </ul>
  );
};

ContactList.propTypes = {
  phonebook: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  setPhonebook: PropTypes.string,
  filteredContacts: PropTypes.string
};
export default ContactList;


