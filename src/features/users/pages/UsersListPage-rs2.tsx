import {type ColType, type UserType} from '@/types/propTypes';
import React, {type ChangeEventHandler, useCallback, useEffect, useState} from 'react';

import BaseTable from '@/components/tables/BaseTable';
import {debounce} from '@/utils/debounce';
import SearchInput from '@/components/forms/SearchInput';

/* 
Imports and renders at least one <UserTable /> component.
Can do conditional checks to decide what and how to render and can render titles, headings,
instructions and labels before or after the <UserTable /> component
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

const colFields = cols.map(
	(item) =>
		// Const field = Object.values(item.accessorkey);
		item.accessorkey,
);

// Console.log(colAccess);

// Obsolate
const fields = [
	'id',
	'timestamp',
	'username',
	'firstName',
	'lastName',
	'domains',
	'wallet',
	'referrerUsername',
];

function UsersListPage() {
	const [data, setData] = useState<UserType[]>([]);
	const [searched, setSearched] = useState<string>('');

	const handleChange = useCallback(
		debounce((value: string) => {
			setSearched(value);
		}),
		[],
	);

	// Sort function
	// .sort((a, b) => (a.calories < b.calories ? -1 : 1))

	useEffect(() => {
		fetch('http://localhost:3000/users2')
			.then(async (res) => res.json())
			.then((res: UserType[]) => {
				// SetData(res.sort((a, b) => (a.timestamp > b.timestamp ? -1 : 1)));
				// .sort((a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1))
				const searchResult = res.filter((item) =>
					searched.toLowerCase() === '' ? item : item.username.toLowerCase().includes(searched),
				);
				// Console.log(searchResult);
				setData(searchResult);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, [searched]);

	return (
		<div style={{display: 'flex', flexDirection: 'column', gap: 50, marginTop: 80}}>
			{/* <h2 className='text-gray-600 font-bold'>Users List</h2> */}
			<SearchInput changeHandler={handleChange} />
			<BaseTable cols={cols} data={data} fields={colFields} />
		</div>
	);
}

export default UsersListPage;
