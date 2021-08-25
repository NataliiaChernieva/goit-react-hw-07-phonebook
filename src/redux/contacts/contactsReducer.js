import { combineReducers, createReducer } from "@reduxjs/toolkit";
//import * as contactsActions from './contactsActions'; // без AsyncThunk
import { fetchContacts } from './contactsOperations'; // c AsyncThunk

// // без AsyncThunk
// const entities = createReducer([], {
//     [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//     [contactsActions.fetchContactsRequest]: () => true,
//     [contactsActions.fetchContactsSuccess]: () => false,
//     [contactsActions.fetchContactsError]: () => false,
// });

// const error = createReducer(null, {
//     [contactsActions.fetchContactsError]: (_, action)=>action.payload,
//     [contactsActions.fetchContactsRequest]: () => null,
// });

// c AsyncThunk
const entities = createReducer([], {
    [fetchContacts.fulfilled]: (_, action) => action.payload,
});

const isLoading = createReducer(false, {
    [fetchContacts.pending]: () => true,
    [fetchContacts.fulfilled]: () => false,
    [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
    [fetchContacts.rejected]: (_, action)=>action.payload,
    [fetchContacts.pending]: () => null,
})

export default combineReducers({
    entities,
    isLoading,
    error,
})