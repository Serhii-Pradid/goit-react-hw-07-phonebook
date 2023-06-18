import { configureStore, combineReducers } from '@reduxjs/toolkit'
//import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { contactReducer }  from './contactSlice'
import { filterReducer } from './filterSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
blacklist: ['filter']
}

  const rootReducer = combineReducers({
        contacts: contactReducer,
        filter: filterReducer
  });

  const persistedReducer = persistReducer(
    persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
    })
});

export const persistor = persistStore(store);