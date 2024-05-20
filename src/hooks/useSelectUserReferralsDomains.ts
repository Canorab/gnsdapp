import {type skipToken} from '@reduxjs/toolkit/query';
import {type EntityState, createSelector} from '@reduxjs/toolkit';
import React, {useMemo} from 'react';
import {type RootState} from '@/app/store';
import domainsApiSlice, {domainsAdapter, initialState} from '@/features/domains/domainsApiSlice';

function useSelectUserReferralsDomains(selectorId: string | typeof skipToken) {
	return useMemo(() => {
		const selectUserReferralsDomainsCacheEntry =
			domainsApiSlice.endpoints.getUserReferralsDomains.select(selectorId);
		const selectAllUserReferralsDomainsData = createSelector(
			[selectUserReferralsDomainsCacheEntry],
			(cacheResults) => cacheResults.data,
		);
		return domainsAdapter.getSelectors(
			(state: RootState) => selectAllUserReferralsDomainsData(state) ?? initialState,
		);
		// Return userReferralsSelector;
	}, [selectorId]);
}

export default useSelectUserReferralsDomains;
