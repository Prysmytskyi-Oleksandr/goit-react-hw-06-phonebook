import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: contactsReduser,
    filter: filterReduser,
  },
});

export default store;
