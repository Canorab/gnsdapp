import React, {type ReactNode, useCallback, useEffect, useState} from 'react';

import BaseTable from '@/components/admin/tables/BaseTable';
import {type DataType, type DomainType} from '@/types/propTypes';
import SearchInput from '@/components/admin/forms/SearchInput';
import {debounce} from '@mui/material/utils';
import {domainCols} from '@/utils/constants';
import CircularProgress from '@mui/material/CircularProgress';
import {domainsSelectors, useGetDomainsQuery} from '../../domainsApiSlice';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

/*
Get the wallet address of the currently logged in user's redux state and use it to query
opensea, then update the user's domains (i.e write new docs to the user collection)
for the user. Then update the user's domains count in the User table.
*/

function DomainsList() {
	const [data, setData] = useState<DomainType[]>([]);
	const [searched, setSearched] = useState<string>('');

	// Better to prefetch with this so we could have access to the lifecyle values (isLoading, isSuccess etc)
	const {isLoading, isFetching, isSuccess, isError, error} = useGetDomainsQuery();
	const allData = useSelector(domainsSelectors.selectAll);
	// Console.log(allData);
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
					{`${(error as DataType)?.data?.message} - `}
					<Link style={{fontWeight: 'bold'}} to='/'>
						Please login again
					</Link>
				</p>
			</div>
		);

	const handleChange = useCallback(
		debounce((value: string) => {
			setSearched(value);
		}),
		[],
	);
	//  Use this to sort returned data: // .sort((a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1))

	useEffect(() => {
		try {
			const searchResult = allData.filter((item) =>
				searched.toLowerCase() === '' ? item : item.username.toLowerCase().includes(searched),
			);

			setData(searchResult);
		} catch (error) {
			console.log(error);
		}
	}, [searched, allData]);

	if (isSuccess) {
		content = (
			<div
				className='domainslist-page'
				style={{display: 'flex', flexDirection: 'column', gap: 50, marginTop: 80}}>
				<SearchInput changeHandler={handleChange} label='Search domains by owner' />
				<BaseTable cols={domainCols} data={data} />
			</div>
		);
	}

	return content;
}

export default DomainsList;
