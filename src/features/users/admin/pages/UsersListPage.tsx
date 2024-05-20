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
import {useAppSelector} from '@/hooks/hooks';
import {createSelector} from '@reduxjs/toolkit';
import {type RootState} from '@/app/store';
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

	// USE SELECTOR APPROACH - ALL USERS
	// Better to prefetch with this so we could have access to the lifecyle values (isLoading, isSuccess etc)
	const {isLoading, isFetching, isSuccess, isError, error} = useGetUsersQuery();
	const allUsers = useSelector(usersSelectors.selectAll);
	// Console.log('All Users:', allUsers);

	// CONTENT VARIABLE
	let content: ReactNode;

	// Render loading indictator

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
			const searchResult = allUsers.filter((item) =>
				searched.toLowerCase() === '' ? item : item.username.toLowerCase().includes(searched),
			);

			setData(searchResult);
		} catch (error) {
			console.log(error);
		}
	}, [searched, allUsers]);

	if (isSuccess) {
		content = (
			<div style={{display: 'flex', flexDirection: 'column', gap: 50, marginTop: 80}}>
				{/* <h2 className='text-gray-600 font-bold'>Users List</h2> */}
				<SearchInput changeHandler={handleChange} label='Search users' />
				<BaseTable cols={usersCols} data={data} />
			</div>
		);
	}

	return content;
}

export default UsersListPage;
