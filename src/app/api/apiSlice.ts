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
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';

const baseQuery = fetchBaseQuery({
	baseUrl: 'http://localhost:3500',
	// BaseUrl: "http://localhost:4000",
	credentials: 'include',
	// PrepareHeaders: (headers, { getState }) => {
	//   const token = getState().auth.token;

	//   if (token) {
	//     headers.set("authorization", `Bearer ${token}`);
	//   }
	//   return headers;
	// },
});

export const apiSlice = createApi({
	// BaseQuery: baseQueryWithReauth,
	baseQuery,
	tagTypes: ['User', 'Domain'],
	endpoints: (builder) => ({}),
});
