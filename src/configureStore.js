import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import contactsReducer from './reducer/contactsSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export default () => {
  let store = configureStore({
    reducer: {
      contacts: persistedReducer
    }
  })
  
  let persistor = persistStore(store)
  return { store, persistor }
}