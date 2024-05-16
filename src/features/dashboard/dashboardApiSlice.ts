import {type EntityState, createEntityAdapter, createSelector} from '@reduxjs/toolkit';

import {apiSlice} from '../../app/api/apiSlice';
import {type StatType} from '@/types/propTypes';
import {type RootState} from '@/app/store';
import {v4 as uuid} from 'uuid';

export const dashboardAdapter = createEntityAdapter<StatType>({});

export const initialState = dashboardAdapter.getInitialState();
// Export type UserType = {

// }
export const dashboardApSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAdminStats: builder.query<EntityState<StatType, string>, string | void>({
			// Query: () => 'users'
			query: () => ({
				url: 'stats/admin',
				validateStatus: (response, result) => response.status === 200 && !result.isError,
			}),
			transformResponse(responseData: StatType[], meta, args) {
				const loadedStats = responseData.map((stat) => {
					stat.id = uuid();

					return stat;
				});

				return dashboardAdapter.setAll(initialState, loadedStats);
			},
			forceRefetch({currentArg, previousArg}) {
				return currentArg !== previousArg;
			},
		}),
		getUserStats: builder.query<EntityState<StatType, string>, string>({
			// Query: () => 'users'
			query: (username) => ({
				url: `stats/${username}`,
				validateStatus: (response, result) => response.status === 200 && !result.isError,
			}),
			transformResponse(responseData: StatType[], meta, args) {
				const loadedStats = responseData.map((stat) => {
					stat.id = uuid();

					return stat;
				});

				return dashboardAdapter.setAll(initialState, loadedStats);
			},
			forceRefetch({currentArg, previousArg}) {
				return currentArg !== previousArg;
			},
		}),
		// More ApiSlices
	}),
});

export const {useGetAdminStatsQuery, useGetUserStatsQuery} = dashboardApSlice;

// Returns the query result object for the getusers query. i.e results from /users endpoint
export const selectAllAdminStatsResult = dashboardApSlice.endpoints.getAdminStats.select();

// Creates memoized selector
const selectAllStatsData = createSelector(
	selectAllAdminStatsResult,
	(usersResult) => usersResult.data, // Normalized state object with ids & entities
);

export const statsSelectors = dashboardAdapter.getSelectors(
	(state: RootState) => selectAllStatsData(state) ?? initialState,
);

export default dashboardApSlice;

/**
 * You can define and inject any api endpoints into the root apiSlice
 * in this case defined the followiing
 * getUsers - Query endpoint, url: /users
 * getDomains - Query endpoint, url: /domains
 * After all, this feature is meant to only fetch and render data and has no mutation responsibility
 */

/*
Should have the getAggregateDataQuery api endpoint which calls the mongodb aggregate data url endpoint; /aggregate
of our mongodb instance.
Therefore, the rtkquery action mentioned above should be responsble for fetching and synching data from our mongodb
aggregate uri endpoint and persisting to state.
*/
