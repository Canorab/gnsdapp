import {type EntityState, createEntityAdapter, createSelector} from '@reduxjs/toolkit';

import {apiSlice} from '../../app/api/apiSlice';
import {type StatType} from '@/types/propTypes';
import {type RootState} from '@/app/store';
import {v4 as uuid} from 'uuid';

export const dashboardAdapter = createEntityAdapter<StatType>({});

export const initialState = dashboardAdapter.getInitialState();

export const dashboardApSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAdminStats: builder.query<EntityState<StatType, string>, string | void>({
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
