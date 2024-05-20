import './DashboardPage.css';

import BaseTable from '@/components/admin/tables/BaseTable';
import {type UserType, type ColType, type DataType} from '@/types/propTypes';
import React, {type ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import StatBlock from '../templates/cards/stats/StatBlock';
import Table from '@/components/admin/tables/BaseTable';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';

import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Import UserRow from '@features/users/templates/table/UserRow';
// import UsersListPage from '@features/users/pages/UsersListPage';
import useAuth from '@/hooks/useAuth';
import {usersCols} from '@/utils/constants';
import usersApiSlice, {
	initialState,
	useGetUserReferralsQuery,
	usersAdapter,
} from '@/features/users/usersApiSlice';
import {debounce} from '@/utils/debounce';
import CircularProgress from '@mui/material/CircularProgress';
import {createSelector} from '@reduxjs/toolkit';
import {type RootState} from '@/app/store';
import {useSelector} from 'react-redux';
import useSelectUserReferrals from '@/hooks/useSelectUserReferrals';
import {Link} from 'react-router-dom';

/*
Render User's Profileheader at the top
Should render Stats cards at the top and UserList Table at the bottom 

*/

/*
You have to construct a cols object and pass it to BaseTable's props
where ever you used it.
data should be fetched from the RTK global state
*/

function Dashboard() {
	const [data, setData] = useState<UserType[]>([]);
	const [searched, setSearched] = useState<string>('');
	const authUser = useAuth();
	// Sort function
	// .sort((a, b) => (a.calories < b.calories ? -1 : 1))

	// GET AUTH USER'S REFERRALS
	// Prefect the Auth user's referrals
	const {isLoading, isFetching, isSuccess, isError, error} = useGetUserReferralsQuery(
		authUser.username,
	);

	// BEST OPTION
	// Selet the Auth user's referrals from state

	// const userReferralsSelector = useMemo(() => {
	// 	const selectUserReferralsCacheEntry = usersApiSlice.endpoints.getUserReferrals.select(
	// 		authUser.username
	// 	);
	// 	const selectAllReferralsdata = createSelector(
	// 		[selectUserReferralsCacheEntry],
	// 		(cacheResults) => cacheResults.data
	// 	);
	// 	return usersAdapter.getSelectors(
	// 		(state: RootState) => selectAllReferralsdata(state) ?? initialState
	// 	);
	// 	// Return userReferralsSelector;
	// }, [authUser.username]);
	// Custom Hook
	const userReferralsSelector = useSelectUserReferrals(authUser.username);

	const allData = useSelector(userReferralsSelector.selectAll);
	// Console.log('All Auth User Referrals', allData);

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
					{`${(error as DataType)?.data?.message}`}
					{/* <Link style={{fontWeight: 'bold'}} to='/'>
						Please login again
					</Link> */}
				</p>
			</div>
		); // Content = <h4 className='errmsg'>{error?.data?.message}</h4>;

	if (isError && error?.status === 403)
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
				const searchResult = allData.filter((item) =>
					searched.toLowerCase() === '' ? item : item.username.toLowerCase().includes(searched),
				);

				setData(searchResult);
			}
		} catch (error) {
			console.log(error);
		}
	}, [searched, allData]);

	// Style={{display: 'flex', flexDirection: 'column', gap: 50, marginTop: 80}}
	if (isSuccess) {
		content = (
			<div className='dashboard-page'>
				{/* <h2 className='text-gray-600 font-bold'>Users List</h2> */}
				{/* <SearchInput changeHandler={handleChange} label='Search users' /> */}
				<StatBlock />
				<BaseTable cols={usersCols} data={data} />
			</div>
		);
	}

	return content;
}

export default Dashboard;
