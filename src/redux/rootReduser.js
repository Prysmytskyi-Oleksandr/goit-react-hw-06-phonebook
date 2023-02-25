import { combineReducers } from '@reduxjs/toolkit';
import contactsReduser from './contacts/contactsSlice';
import filterReduser from './filter/filterSlice';

const rootReduser = combineReducers({
  contacts: contactsReduser,
  filter: filterReduser,
});

export default rootReduser;