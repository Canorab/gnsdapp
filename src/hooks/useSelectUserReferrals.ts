import {type skipToken} from '@reduxjs/toolkit/query';
import {createSelector} from '@reduxjs/toolkit';
import React, {useMemo} from 'react';
import usersApiSlice, {initialState, usersAdapter} from '@/features/users/usersApiSlice';
import {type RootState} from '@/app/store';

function useSelectUserReferrals(selectorId: string | typeof skipToken) {
	return useMemo(() => {
		const selectUserReferralsCacheEntry =
			usersApiSlice.endpoints.getUserReferrals.select(selectorId);
		const selectAllReferralsdata = createSelector(
			[selectUserReferralsCacheEntry],
			(cacheResults) => cacheResults.data,
		);
		return usersAdapter.getSelectors(
			(state: RootState) => selectAllReferralsdata(state) ?? initialState,
		);
		// Return userReferralsSelector;
	}, [selectorId]);
}

export default useSelectUserReferrals;
