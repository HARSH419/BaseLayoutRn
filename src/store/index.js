import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi, verificationApi } from '../services/authService';
import { counterSlice } from './counterSlice';
import logger from 'redux-logger';

export const store = configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      [verificationApi.reducerPath]: verificationApi.reducer,
      counter: counterSlice,
    },
  
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(verificationApi.middleware)
        .concat(logger),
  });
  
  setupListeners(store.dispatch);