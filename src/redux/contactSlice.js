import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsInitialState = {
    items: [],
    isLoading: false,
    error: null,
  };

  const handlePending = state => {
    state.isLoading = true;
  };
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContact.pending]: handlePending,
        [deleteContact.pending]: handlePending,

        [fetchContacts.rejected]: handleRejected,
        [addContact.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,

        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
          },
        
          [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
              task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
          },
          
      },
  });

  export const contactsReducer = contactsSlice.reducer;


/*const initialState = {

    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'} ]
    
  };

 const contactSlice = createSlice({

    name: 'contacts',
    initialState: initialState,
    reducers: {

        addContact: {
            reducer(state, action) {
            state.contacts.push(action.payload);
            //return [...state, action.payload];
        },
        prepare (name, number) {
            return {
                payload: {
                    id: nanoid(),
                    name,
                    number,
                },
            };
        },
    },

        deleteContact(state, action) {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
    },
  });

  export const getContactList = state => state.contacts.contacts;

  export const {addContact, deleteContact} = contactSlice.actions;

  export const contactReducer = contactSlice.reducer;*/



