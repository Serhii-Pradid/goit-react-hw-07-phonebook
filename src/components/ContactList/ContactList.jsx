import css from './ContactList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from "redux/operations";
import { selectContacts, selectStatusFilter } from "redux/selectors"

export const ContactList = () => {
    const dispatch = useDispatch();

    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectStatusFilter);

    const visibleContacts = [...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
        
  ];

    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId));
    };
      
  //console.log(visibleContacts)


    return (
        
    <ul>
        {visibleContacts.map(({id, name, number}) => (
                <li key={id} >
                    <p> {name} : {number} </p>
                    <button className={css.buttonDelete}  
                            onClick={ () => dispatch(handleDeleteContact(id)) }> Delete </button>
                </li>
            ))}
    </ul>
    );
};
