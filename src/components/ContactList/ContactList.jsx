import css from './ContactList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContactList } from 'redux/contactSlice';
import { getFilterList } from 'redux/filterSlice';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContactList);
    const getfilter = useSelector(getFilterList);

    const visibleContacts = [...contacts.filter(contact => contact.name.toLowerCase().includes(getfilter)),
        
  ];
  
  //console.log(visibleContacts)


    return (
        
    <ul>
        {visibleContacts.map(({id, name, number}) => (
                <li key={id} >
                    <p> {name} : {number} </p>
                    <button className={css.buttonDelete}  
                            onClick={ () => dispatch(deleteContact(id)) }> Delete </button>
                </li>
            ))}
    </ul>
    );
};
