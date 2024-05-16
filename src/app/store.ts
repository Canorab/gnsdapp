import {apiSlice} from './api/apiSlice';
import authReducer from '../features/auth/authSlice';
import {configureStore} from '@reduxjs/toolkit';
// Import { apiSlice } from './api/apiSlice'
import {setupListeners} from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
	devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
