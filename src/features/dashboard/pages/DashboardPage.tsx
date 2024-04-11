import './DashboardPage.css';

import BaseTable from '@/components/tables/BaseTable';
import {type UserType, type ColType} from '@/types/propTypes';
import React, {useEffect, useState} from 'react';
import StatBlock from '../templates/cards/stats/StatBlock';
import Table from '@/components/tables/BaseTable';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContent from '@/components/tables/TableContent';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import UserRow from '@/features/users/templates/table/UserRow';
import UserThead from '@/features/users/templates/table/UserThead';
// Import UserRow from '@features/users/templates/table/UserRow';
// import UsersListPage from '@features/users/pages/UsersListPage';
import UsersTable from '../../users/templates/table/UsersTable';

/*
Render User's Profileheader at the top
Should render Stats cards at the top and UserList Table at the bottom 

*/

/*
You have to construct a cols object and pass it to BaseTable's props
where ever you used it.
data should be fetched from the RTK global state
*/

const cols: ColType[] = [
	{
		header: 'ID',
		accessorkey: 'id',
		footer: 'ID',
	},
	{
		header: 'Date',
		accessorkey: 'timestamp',
		footer: 'Date',
	},
	{
		header: 'Username',
		accessorkey: 'username',
		footer: 'Username',
	},
	{
		header: 'First Name',
		accessorkey: 'firstName',
		footer: 'First Name',
	},
	{
		header: 'Last Name',
		accessorkey: 'lastName',
		footer: 'Last Name',
	},
	{
		header: 'Domains',
		accessorkey: 'domains',
		footer: 'Domains',
	},
	{
		header: 'Wallet',
		accessorkey: 'wallet',
		footer: 'Wallet',
	},
	{
		header: 'Referrer',
		accessorkey: 'referrerUsername',
		footer: 'Referrer',
	},
];

function Dashboard() {
	const [data, setData] = useState<UserType[]>([]);

	// Sort function
	// .sort((a, b) => (a.calories < b.calories ? -1 : 1))

	useEffect(() => {
		fetch('http://localhost:3000/users?_limit=20')
			.then(async (res) => res.json())
			.then((res: UserType[]) => {
				// SetData(res.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1)));
				// .sort((a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1))
				setData(res);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, []);

	// Console.log(data);
	return (
		<div className='dashboard-page'>
			{/* <h1 style={{textAlign: 'center'}}>Dashboard</h1> */}
			<StatBlock />
			{/* <BaseTable cols={cols} data={data.users} /> */}
			<BaseTable cols={cols} data={data} />
		</div>
	);
}

export default Dashboard;
