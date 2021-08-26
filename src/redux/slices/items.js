import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/contacts/contactsOperations'; // c AsyncThunk

// const itemsSlice=createSlice({
//   name: 'items',
//   initialState: {
//     entities: [],
//     isLoading: false,
//     error: null,
//   } ,
//   reducers: {
//     addContact: (state, action) => ({ ...state, entities: [action.payload,...state.entities] }),
//     deleteContact: (state, action) => ({ ...state, entities: state.entities.filter((contact) => contact.id !== action.payload), }),
//   }
// });


const itemsSlice=createSlice({
  name: 'items',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
  } ,
  extraReducers: {
    [fetchContacts.fulfilled]: (state, action) => {
      return {
        ...state,
        entities: [...state.entities,...action.payload],
        isLoading: false,
        error: null,
      }
    },

    [fetchContacts.pending]: (state) => {
      return {...state, isLoading: true, error: null,}
    },

    [fetchContacts.rejected]: (state) => {
      return {...state, isLoading: false, error: "ERROR",}
    },


  }
});

export const {addContact, deleteContact} = itemsSlice.actions;
export default itemsSlice.reducer;


