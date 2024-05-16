import {logOut, setCredentials} from './authSlice';

import {type LoginSchemaType} from '@/utils/schema';
import {apiSlice} from '@/app/api/apiSlice';
import {type UserType} from '@/types/propTypes';

export type TokenType = {
	accessToken: string;
};

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// We can now signup via auth/signup
		addNewUser: builder.mutation<UserType, Partial<UserType>>({
			query: (newUser) => ({
				url: 'auth/signup',
				method: 'POST',
				body: newUser,
			}),
			invalidatesTags: [{type: 'User', id: 'LIST'}],
		}),
		login: builder.mutation<TokenType, LoginSchemaType>({
			query: (credentials) => ({
				url: 'auth',
				method: 'POST',
				body: credentials,
			}),
		}),
		sendLogout: builder.mutation({
			query: () => ({
				url: 'auth/logout',
				method: 'POST',
			}),
			// { dispatch, queryFulfilled, util }
			async onQueryStarted(arg, api) {
				try {
					await api.queryFulfilled;
					api.dispatch(logOut({}));
					setTimeout(() => {
						api.dispatch(apiSlice.util.resetApiState());
					}, 1000);
				} catch (error) {
					console.error(error);
				}
			},
		}),
		refresh: builder.mutation<TokenType, void>({
			query: () => ({
				url: 'auth/refresh',
				method: 'GET',
			}),
			async onQueryStarted(arg, {dispatch, queryFulfilled}) {
				try {
					const {data} = await queryFulfilled;
					// Console.log(data);
					const {accessToken} = data;
					dispatch(setCredentials({accessToken}));
				} catch (error) {
					console.error(error);
				}
			},
		}),
	}),
});

// Removed: useRefreshMutation

export const {useAddNewUserMutation, useLoginMutation, useRefreshMutation, useSendLogoutMutation} =
	authApiSlice;
