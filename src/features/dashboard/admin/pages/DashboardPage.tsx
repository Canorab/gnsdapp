import './DashboardPage.css';

import BaseTable from '@/components/admin/tables/BaseTable';
import {type UserType, type ColType, type DataType} from '@/types/propTypes';
import React, {type ReactNode, useCallback, useEffect, useState} from 'react';
import StatBlock from '../templates/cards/stats/StatBlock';

// Import UserRow from '@features/users/templates/table/UserRow';
// import UsersListPage from '@features/users/pages/UsersListPage';

import {usersCols} from '@/utils/constants';
import {useGetUsersQuery, usersSelectors} from '@/features/users/usersApiSlice';
import {debounce} from '@/utils/debounce';
import {useSelector} from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import {useGetAdminStatsQuery} from '../../dashboardApiSlice';
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
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-expect-error
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

	// Console.log(data);
	// return (
	// 	<div className='dashboard-page'>
	// 		{/* <h1 style={{textAlign: 'center'}}>Dashboard</h1> */}
	// 		<StatBlock />
	// 		{/* <BaseTable cols={cols} data={data.users} /> */}
	// 		<BaseTable cols={usersCols} data={data} />
	// 	</div>
	// );
}

export default Dashboard;
