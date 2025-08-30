import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import HomeSlice from './HomeSlice';

const persistedConfig = {
  key: 'RNTestApp',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  home: HomeSlice,
});

const persistedReducer = persistReducer(persistedConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
