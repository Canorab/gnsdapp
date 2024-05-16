import React, {type ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import usersApiSlice, {
	initialState,
	useGetUserReferralsQuery,
	usersAdapter,
} from '@/features/users/usersApiSlice';

import BaseTable from '@/components/admin/tables/BaseTable';
import CircularProgress from '@mui/material/CircularProgress';
import {type RootState} from '@/app/store';
import SearchInput from '@/components/admin/forms/SearchInput';
import {type DataType, type AffiliateType, type UserType} from '@/types/propTypes';
import {affiliatesCols} from '@/utils/constants';
import {createSelector} from '@reduxjs/toolkit';
import {debounce} from '@/utils/debounce';
import useAuth from '@/hooks/useAuth';
import {useSelector} from 'react-redux';
import {affiliatesSelectors, useGetUsersWithStatsQuery} from '../affiliatesApiSlice';
import {Link} from 'react-router-dom';

/* 
			Expect these table cols; SN, Date, Username, firstName, lastName, wallet, TotalReferrals,
			TodayReferrals, TotalDomains, TodayDomains. You might have to to dispatch multiple rtkquery
			actions from the usersApiSlice and affliatesApiSlice as follows: - useGetUsersQueery: to
			receive the affiliate user's bio data; SN, Date, Username, firstName, lastName, wallet, -
			useGetAffiliateTotalReferralsCount: To get the affilate user's total referrals count. -
			useGetAffiliateTodayReferralsCount: To get the affiliate user's today's referrals count. -
			useGetAffiliateTotalReferralsDomainsCount: To get the total domains owned by the referrals of
			the affiliate user - useGetAffiliateTodayReferralsDomainsCount: To get the total domains
			bought by the affiliate user's referrals for the day. 
			Then spread them into a custom object and pass on to the table component.

			OPTION 2:
			Define the user's stats endpoints in the usersApiSlice and call/use them whereever they are needed;
			For the public/ directory; the dashboard/public/DashboardPage,
			For the admin/ directory; the affiliates/AffiliateslistPage
			** Only the dashboard/admin/DashboardPage  should use endpoints from the dashboardApiSlice
			** these endpoints would pull in system-wide stats data (not user-specific stats data).

			BEST OPTION:
			-Best to have the server return a list of affilate users along with their todays and Total stat counts.
			- Trying to get the  stats of the currehnt auth user won't work because that user will be the admin.,
			*/

function AffiliatesListPage() {
	const [data, setData] = useState<AffiliateType[]>([]);
	const [searched, setSearched] = useState<string>('');

	// GET AUTH USER'S REFERRALS
	// Prefect the Auth user's referrals
	const {isLoading, isFetching, isSuccess, isError, error} = useGetUsersWithStatsQuery();
	const allAffiliates = useSelector(affiliatesSelectors.selectAll);

	const allUsers = allAffiliates;
	// Console.log('From Affilates page:', allUsers);

	// CONTENT VARIABLE
	let content: ReactNode;

	if (isLoading || isFetching)
		content = (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 50,
					marginTop: 80,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<CircularProgress />
			</div>
		);
	if (isError)
		content = (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 50,
					marginTop: 80,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<p className='errmsg'>
					{`${(error as DataType)?.data?.message} - `}
					<Link style={{fontWeight: 'bold'}} to='/'>
						Please login again
					</Link>
				</p>
			</div>
		); // Content = <h4 className='errmsg'>{error?.data?.message}</h4>;

	const handleChange = useCallback(
		debounce((value: string) => {
			setSearched(value);
		}),
		[],
	);

	//  Use this to sort returned data: // .sort((a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1))

	useEffect(() => {
		try {
			if (isSuccess) {
				const searchResult = allUsers.filter((item) =>
					searched.toLowerCase() === '' ? item : item.username.toLowerCase().includes(searched),
				);

				setData(searchResult);
			}
		} catch (error) {
			console.log(error);
		}
	}, [searched, allUsers]);

	if (isSuccess) {
		content = (
			<div style={{display: 'flex', flexDirection: 'column', gap: 50, marginTop: 80}}>
				{/* <h2 className='text-gray-600 font-bold'>Users List</h2> */}
				<SearchInput changeHandler={handleChange} label='Search users' />
				<BaseTable cols={affiliatesCols} data={data} />
			</div>
		);
	}

	return content;
}

export default AffiliatesListPage;
