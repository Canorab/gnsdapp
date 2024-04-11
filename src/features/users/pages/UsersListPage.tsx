import {type ColType, type UserType} from '@/types/propTypes';
import React, {useCallback, useEffect, useState} from 'react';

import BaseTable from '@/components/tables/BaseTable';
import {debounce} from '@/utils/debounce';
import SearchInput from '@/components/forms/SearchInput';
import {usersCols} from '@/utils/constants';

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

	const handleChange = useCallback(
		debounce((value: string) => {
			setSearched(value);
		}),
		[],
	);

	useEffect(() => {
		fetch('http://localhost:3000/users2')
			.then(async (res) => res.json())
			.then((res: UserType[]) => {
				const searchResult = res.filter((item) =>
					searched.toLowerCase() === '' ? item : item.username.toLowerCase().includes(searched),
				);

				setData(searchResult);
			})
			.catch((e) => {
				console.log(e.message);
			});
	}, [searched]);

	return (
		<div style={{display: 'flex', flexDirection: 'column', gap: 50, marginTop: 80}}>
			{/* <h2 className='text-gray-600 font-bold'>Users List</h2> */}
			<SearchInput changeHandler={handleChange} label='Search users' />
			<BaseTable cols={usersCols} data={data} />
		</div>
	);
}

export default UsersListPage;
