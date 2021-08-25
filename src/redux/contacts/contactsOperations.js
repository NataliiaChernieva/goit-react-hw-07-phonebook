import { createAsyncThunk } from '@reduxjs/toolkit'; // c AsyncThunk 
// import * as contactsActions from './contactsActions'; // без AsyncThunk 
import * as contactsAPI from 'services/contacts-api';

// //без AsyncThunk
// export const fetchContacts = () => async dispatch => {
//     dispatch(contactsActions.fetchContactsRequest());
//     try {
//         const contacts = await contactsAPI.fetchContacts();
//         console.log(`cont`, contacts)
//         dispatch(contactsActions.fetchContactsSuccess(contacts));
//     } catch (error) {
//         dispatch(contactsActions.fetchContactsError);
//     }
    
// };

// //c AsyncThunk 
export const fetchContacts = createAsyncThunk('contacts/fetchContacts',
    async (_, { rejectWithValue }) => {
        try {
            const contacts = await contactsAPI.fetchContacts();
            return contacts;   
        } catch (error) {
            return rejectWithValue(error);
        }
    
});