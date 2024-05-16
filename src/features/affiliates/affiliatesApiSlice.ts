import {type EntityState, createEntityAdapter, createSelector} from '@reduxjs/toolkit';

import {apiSlice} from '../../app/api/apiSlice';
import {type AffiliateType} from '@/types/propTypes';
import {type RootState} from '@/app/store';

export const affiliatesAdapter = createEntityAdapter<AffiliateType>({});

export const initialState = affiliatesAdapter.getInitialState();
// Export type UserType = {

// }
export const affiliatesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUsersWithStats: builder.query<EntityState<AffiliateType, string>, string | void>({
			// Query: () => 'users'
			query: () => ({
				url: 'users/affiliates',
				validateStatus: (response, result) => response.status === 200 && !result.isError,
			}),
			transformResponse(responseData: AffiliateType[], meta, args) {
				const loadedUsers = responseData.map((user) => {
					user.id = user._id;
					user.totalReferralsCount = user.referrals.length;
					user.todayReferralsCount = user.todayReferrals.length;
					user.totalDomainsCount = user.referralsDomains.length;
					user.todayDomainsCount = user.todayReferralsDomains.length;
					return user;
				});
				return affiliatesAdapter.setAll(initialState, loadedUsers);
			},
			providesTags(result, error, arg) {
				if (result?.ids) {
					return [
						{type: 'User', id: 'LIST'},
						...result.ids.map((id) => ({type: 'User' as const, id})),
					];
				}

				return [{type: 'User', id: 'LIST'}];
				// Return result ? result.map(({id}) => ({type: 'Posts', id})) : [];
			},
			forceRefetch({currentArg, previousArg}) {
				return currentArg !== previousArg;
			},
		}),
		// Should be used to fetch a user's refferals for public(non-admin) dashboards
		// update; use for both public and admin dashboards
	}),
});

export const {useGetUsersWithStatsQuery} = affiliatesApiSlice;

// Returns the query result object for the getusers query. i.e results from /users endpoint
export const selectAllAffilatesResult = affiliatesApiSlice.endpoints.getUsersWithStats.select();

// Creates memoized selector
const selectAllAffiliatesData = createSelector(
	selectAllAffilatesResult,
	(usersResult) => usersResult.data, // Normalized state object with ids & entities
);

export const affiliatesSelectors = affiliatesAdapter.getSelectors(
	(state: RootState) => selectAllAffiliatesData(state) ?? initialState,
);

export default affiliatesApiSlice;
