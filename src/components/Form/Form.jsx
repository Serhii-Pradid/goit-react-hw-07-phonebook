import { useState } from "react";
import css from './Form.module.css'
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactSlice";
import { getContactList } from 'redux/contactSlice';
//import PropTypes from 'prop-types';

  const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactList);
  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
  const {name, value} = event.target;

  switch (name) {
    case 'name':
      setName(value);
      break;

      case 'number':
      setNumber(value);
      break;
  
    default:
      break;
  }
}

const handleSubmit = event => {
  event.preventDefault();

  //const form = event.currentTarget;
  const formName = event.currentTarget.name.value;
  const formNumber = event.currentTarget.number.value;
  console.log(name, number)

  if (contacts.some(({ name }) => name === formName)) {
    return alert(`${formName} is already in contacts`);
  }

  dispatch(addContact(formName, formNumber));
  //form.reset();
  setName('');
  setNumber('');
 };

   return (
            <form onSubmit={handleSubmit}>
<div className={css.fieldForm}>
      <label > Name
   <input
  type="text"
  placeholder="Name Surname"
  name="name"
  value={name}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={handleChange}
  />
    </label>

     <label > Number

   <input
  type="tel"
  placeholder="xxx-xx-xx"
  name="number"
  value={number}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={handleChange}
  />
      </label>
</div>

<button className={css.buttonForm} type="submit"> Add Contact </button>

</form>
         );
  }  



export default Form;