import React, {useCallback, useEffect, useState} from 'react';

import BaseTable from '@/components/tables/BaseTable';
import {type DomainType} from '@/types/propTypes';
import SearchInput from '@/components/forms/SearchInput';
import {debounce} from '@mui/material/utils';
import {domainCols} from '@/utils/constants';

function DomainsList() {
	const [data, setData] = useState<DomainType[]>([]);
	const [searched, setSearched] = useState<string>('');

	const handleChange = useCallback(
		debounce((value: string) => {
			setSearched(value);
		}),
		[],
	);

	useEffect(() => {
		fetch('http://localhost:3000/domains')
			.then(async (res) => res.json())
			.then((res: DomainType[]) => {
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
			<SearchInput changeHandler={handleChange} label='Search domains' />
			<BaseTable cols={domainCols} data={data} />
		</div>
	);
}

export default DomainsList;
