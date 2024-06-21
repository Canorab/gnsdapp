import {type DomainType} from './../../types/propTypes';
import {type EntityState, createEntityAdapter, createSelector} from '@reduxjs/toolkit';

import {apiSlice} from '../../app/api/apiSlice';

import {type RootState} from '@/app/store';

export const domainsAdapter = createEntityAdapter<DomainType>({});

export const initialState = domainsAdapter.getInitialState();

export const domainsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getDomains: builder.query<EntityState<DomainType, string>, string | void>({
			query: () => ({
				url: 'domains',
				validateStatus: (response, result) => response.status === 200 && !result.isError,
			}),
			transformResponse(responseData: DomainType[], meta, args) {
				const loadedDomains = responseData.map((domain) => {
					domain.id = domain._id;
					return domain;
				});
				return domainsAdapter.setAll(initialState, loadedDomains);
			},
			providesTags(result, error, arg) {
				if (result?.ids) {
					return [
						{type: 'Domain', id: 'LIST'},
						...result.ids.map((id) => ({type: 'Domain' as const, id})),
					];
				}

				return [{type: 'Domain', id: 'LIST'}];
			},
			forceRefetch({currentArg, previousArg}) {
				return currentArg !== previousArg;
			},
		}),

		getUserDomains: builder.query<EntityState<DomainType, string>, string>({
			query: (username) => ({
				url: `domains/${username}`,
				validateStatus: (response, result) => response.status === 200 && !result.isError,
			}),
			transformResponse(responseData: DomainType[], meta, args) {
				const loadedDomains = responseData.map((domain) => {
					domain.id = domain._id;
					return domain;
				});
				return domainsAdapter.setAll(initialState, loadedDomains);
			},
			providesTags(result, error, arg) {
				if (result?.ids) {
					return [
						{type: 'Domain', id: 'LIST'},
						...result.ids.map((id) => ({type: 'Domain' as const, id})),
					];
				}

				return [{type: 'Domain', id: 'LIST'}];
			},
			forceRefetch({currentArg, previousArg}) {
				return currentArg !== previousArg;
			},
		}),
		getUserReferralsDomains: builder.query<EntityState<DomainType, string>, string>({
			query: (username) => ({
				url: `users/referrals/domains/${username}`,
				validateStatus: (response, result) => response.status === 200 && !result.isError,
			}),
			transformResponse(responseData: DomainType[], meta, args) {
				const loadedDomains = responseData.map((domain) => {
					domain.id = domain._id;
					return domain;
				});
				return domainsAdapter.setAll(initialState, loadedDomains);
			},
			providesTags(result, error, arg) {
				if (result?.ids) {
					return [
						{type: 'Domain', id: 'LIST'},
						...result.ids.map((id) => ({type: 'Domain' as const, id})),
					];
				}

				return [{type: 'Domain', id: 'LIST'}];
			},
			forceRefetch({currentArg, previousArg}) {
				return currentArg !== previousArg;
			},
		}),
	}),
});

export const {useGetDomainsQuery, useGetUserDomainsQuery, useGetUserReferralsDomainsQuery} =
	domainsApiSlice;

// Returns the query result object for the getusers query. i.e results from /users endpoint
export const selectAllDomainsResult = domainsApiSlice.endpoints.getDomains.select();
// Creates memoized selector
const selectAllDomainsData = createSelector(
	selectAllDomainsResult,
	(usersResult) => usersResult.data, // Normalized state object with ids & entities
);
export const domainsSelectors = domainsAdapter.getSelectors(
	(state: RootState) => selectAllDomainsData(state) ?? initialState,
);

export default domainsApiSlice;
