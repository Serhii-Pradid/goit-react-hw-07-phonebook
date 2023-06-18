import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { selectIsLoading, selectError } from "redux/selectors";

import Form from "./Form/Form";
import { ContactList } from "./ContactList/ContactList";
import  { Filter }  from "./Filter/Filter";
import './App.module.css'





export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  // Викликаємо операцію
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

 return (

  <section>

    <h1>Phonebook</h1>
    <Form />
    <h1> Contacts </h1>
    <Filter />
    {isLoading && !error && <b>Request in progress</b>}
    <ContactList />
  </section>
);
};

