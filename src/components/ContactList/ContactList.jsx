import { useSelector,  useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact } from 'redux/slices/items'; //c Slice
import ContactListItem from '../ContactListItem/ContactListItem';
// import * as contactsOperations from '../../redux/contacts/contactsOperations';
// import * as contactsSelectors from '../../redux/contacts/contactsSelectors';
import { contactsOperations, contactsSelectors } from 'redux/contacts';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getContacts);
  const filterValue = useSelector((state) => state.filter);
  // console.log(`filter`, filterValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue),
  );
  
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onClick={()=>dispatch(deleteContact(id))}
        />
      ))}
    </ul>
  );
}

