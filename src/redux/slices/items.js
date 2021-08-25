import { createSlice } from '@reduxjs/toolkit'

const itemsSlice=createSlice({
  name: 'items',
  initialState: {
    entities: [],
    isLoading: false,
    error: null,
  } ,
  reducers: {
    addContact: (state, action) => ({ ...state, entities: [action.payload,...state.entities] }),
    deleteContact: (state, action) => ({ ...state, entities: state.entities.filter((contact) => contact.id !== action.payload), }),
  }
});

export const {addContact, deleteContact} = itemsSlice.actions;
export default itemsSlice.reducer;