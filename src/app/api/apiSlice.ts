/*
 * @Author: Joshua Eigbe jeigbe@gmail.com
 * @Github: https://github.com/jsh007
 * @Date: 2024-03-26 16:38:48
 * @LastEditors: Joshua Eigbe jeigbe@gmail.com
 * @LastEditTime: 2024-03-26 22:07:17
 * @FilePath: /gns_dapp/src/app/api/apiSlice.ts
 * @copyrightText: Copyright (c) Joshua Eigbe. All Rights Reserved.
 * @Description: See Github repo
 */
import {
	type BaseQueryApi,
	createApi,
	fetchBaseQuery,
	type FetchArgs,
	type FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {type RootState} from '../store';
import {logOut, setCredentials} from '@/features/auth/authSlice';
import {type MaybePromise} from '@reduxjs/toolkit/dist/query/tsHelpers';
import {type ThunkDispatch} from '@reduxjs/toolkit';
import {
	type QueryReturnValue,
	type BaseQueryArg,
	type BaseQueryFn,
} from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export type AccessTokenType = {
	accessToken: string;
};

// Base query
const baseQuery = fetchBaseQuery({
	// BaseUrl: 'http://localhost:5001/api/',
	// BaseUrl: "https://serv1.gtxstream.com/api/",
	baseUrl: 'https://gnsserv1.onrender.com/api/',
	credentials: 'include',
	prepareHeaders(headers, {getState}) {
		const {token} = (getState() as RootState).auth;

		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}

		return headers;
	},
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
	args,
	api,
	extraOptions,
) => {
	// Console.log(args) // request url, method, body
	// console.log(api) // signal, dispatch, getState()
	// console.log(extraOptions) //custom like {shout: true}

	let result = await baseQuery(args, api, extraOptions);

	// If you want, handle other status codes, too
	// removed result.error &&
	if (result?.error?.status === 403) {
		// Console.log('sending refresh token');

		// Send refresh token to get new access token
		const refreshResult = await baseQuery('auth/refresh', api, extraOptions);

		if (refreshResult?.data) {
			// Store the new token
			// console.log(refreshResult);
			// Const token = refreshResult.data;
			api.dispatch(setCredentials({...refreshResult.data}));

			// Retry original query with new access token
			result = await baseQuery(args, api, extraOptions);
		} else {
			if (refreshResult?.error?.status === 403) {
				// This message is printed by the PersistLogin component on line 93. So you have to style/change the design of that component
				// Apparently, the persistLogin component is respsonsble for the DarkBg loading page that suddenly  appears for a while
				// when loading content.
				(refreshResult.error.data as Record<string, string>).message = 'Your login has expired ';
			}

			// Api.dispatch(logOut({}));
			return refreshResult;
		}
	}

	return result;
};

export const apiSlice = createApi({
	reducerPath: 'gnsApi',
	baseQuery: baseQueryWithReauth,
	// BaseQuery,
	tagTypes: ['User', 'Domain'],
	refetchOnMountOrArgChange: true,
	// RefetchOnFocus: true,
	refetchOnReconnect: true,
	endpoints: (builder) => ({}),
	// KeepUnusedDataFor: 60
});
