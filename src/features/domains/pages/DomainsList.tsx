import React, {useCallback, useEffect, useState} from 'react';

import BaseTable from '@/components/tables/BaseTable';
import {type DomainType} from '@/types/propTypes';
import SearchInput from '@/components/forms/SearchInput';
import {debounce} from '@mui/material/utils';
import {domainCols} from '@/utils/constants';

/*
Get the wallet address of the currently logged in user's redux state and use it to query
opensea, then update the user's domains (i.e write new docs to the user collection)
for the user. Then update the user's domains count in the User table.
*/

function DomainsList() {
	const [data, setData] = useState<DomainType[]>([]);
	const [searched, setSearched] = useState<string>('');

	const handleChange = useCallback(
		debounce((value: string) => {
			setSearched(value);
		}),
		[]
	);

	useEffect(() => {
		fetch('http://localhost:3000/domains')
			.then(async (res) => res.json())
			.then((res: DomainType[]) => {
				const searchResult = res.filter((item) =>
					searched.toLowerCase() === '' ? item : item.username.toLowerCase().includes(searched)
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
			<SearchInput changeHandler={handleChange} label='Search domains' />
			<BaseTable cols={domainCols} data={data} />
		</div>
	);
}

export default DomainsList;
