import { createSlice } from "@reduxjs/toolkit";


const filterInitialState = '';

const filterSlice = createSlice({

    name: 'filters',
    initialState: filterInitialState,

    reducers: {
        filterContacts(state, action) {
            return (state = action.payload);
        }, 
    }
});

export const {filterContacts} = filterSlice.actions;
export const filterReducer = filterSlice.reducer;