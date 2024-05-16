import {
	type Api,
	type BaseQueryFn,
	type FetchArgs,
	type FetchBaseQueryError,
	type skipToken,
} from '@reduxjs/toolkit/query';
import {type EntityState, createSelector} from '@reduxjs/toolkit';
import React, {useMemo} from 'react';
import {type RootState} from '@/app/store';
import domainsApiSlice, {domainsAdapter, initialState} from '@/features/domains/domainsApiSlice';

function useSelectUserDomains(selectorId: string | typeof skipToken) {
	return useMemo(() => {
		const selectUserDomainsCacheEntry = domainsApiSlice.endpoints.getUserDomains.select(selectorId);
		const selectAllUserDomainsData = createSelector(
			[selectUserDomainsCacheEntry],
			(cacheResults) => cacheResults.data,
		);
		return domainsAdapter.getSelectors(
			(state: RootState) => selectAllUserDomainsData(state) ?? initialState,
		);
		// Return userReferralsSelector;
	}, [selectorId]);
}

export default useSelectUserDomains;
