import {apiSlice} from './api/apiSlice';
import {configureStore} from '@reduxjs/toolkit';
// Import { apiSlice } from './api/apiSlice'
import {setupListeners} from '@reduxjs/toolkit/query';
// Import authReducer from '../features/auth/authSlice'

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		// Auth: authReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});

setupListeners(store.dispatch);
