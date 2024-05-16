import {type DataType, type ColType, type UserType} from '@/types/propTypes';
import React, {type ReactNode, useCallback, useEffect, useState, useMemo} from 'react';
import {useSelector} from 'react-redux';

import BaseTable from '@/components/admin/tables/BaseTable';
import {debounce} from '@/utils/debounce';
import SearchInput from '@/components/admin/forms/SearchInput';
import {usersCols} from '@/utils/constants';
import usersApiSlice, {
	initialState,
	useGetUserReferralsQuery,
	useGetUsersQuery,
	usePrefetch,
	usersAdapter,
	usersSelectors,
} from '../../usersApiSlice';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '@/hooks/useAuth';
import {createSelector} from '@reduxjs/toolkit';
import {type RootState} from '@/app/store';
import useSelectUserReferrals from '@/hooks/useSelectUserReferrals';
import {Link} from 'react-router-dom';

/* 
Imports and renders at least one <UserTable /> component.
Can do conditional checks to decide what and how to render and can render titles, headings,
instructions and labels before or after the <UserTable /> component
*/

// Const colFields = cols.map((item) => item.accessorkey);

// Console.log(colAccess);

function UsersListPage() {
	const [data, setData] = useState<UserType[]>([]);
	const [searched, setSearched] = useState<string>('');
	const authUser = useAuth();

	// GET AUTH USER'S REFERRALS
	// Prefect the Auth user's referrals
	const {isLoading, isFetching, isSuccess, isError, error} = useGetUserReferralsQuery(
		authUser.username,
	);
	// Console.log('Referral Users:', referrals);

	// BEST OPTION
	// Selet the Auth user's referrals from state

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

	if (isSuccess) {
		content = (
			<div style={{display: 'flex', flexDirection: 'column', gap: 50, marginTop: 80}}>
				{/* <h2 className='text-gray-600 font-bold'>Users List</h2> */}
				<SearchInput changeHandler={handleChange} label='Search by username' />
				<BaseTable cols={usersCols} data={data} />
			</div>
		);
	}

	return content;
}

export default UsersListPage;
