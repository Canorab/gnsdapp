import {type skipToken} from '@reduxjs/toolkit/query';
import {createSelector} from '@reduxjs/toolkit';
import React, {useMemo} from 'react';

import {type RootState} from '@/app/store';
import dashboardApSlice, {
	dashboardAdapter,
	initialState,
} from '@/features/dashboard/dashboardApiSlice';

function useSelectUserStats(selectorId: string | typeof skipToken) {
	return useMemo(() => {
		const selectUserStatsCacheEntry = dashboardApSlice.endpoints.getUserStats.select(selectorId);
		const selectUserStatsData = createSelector(
			[selectUserStatsCacheEntry],
			(cacheResults) => cacheResults.data,
		);
		return dashboardAdapter.getSelectors(
			(state: RootState) => selectUserStatsData(state) ?? initialState,
		);
		// Return userReferralsSelector;
	}, [selectorId]);
}

export default useSelectUserStats;
