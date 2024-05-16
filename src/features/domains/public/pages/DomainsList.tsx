import React, {type ReactNode, useCallback, useEffect, useState} from 'react';

import BaseTable from '@/components/admin/tables/BaseTable';
import {type DataType, type DomainType} from '@/types/propTypes';
import SearchInput from '@/components/admin/forms/SearchInput';
import {debounce} from '@mui/material/utils';
import {domainCols} from '@/utils/constants';
import useAuth from '@/hooks/useAuth';
import useSelectUserReferrals from '@/hooks/useSelectUserReferrals';
import {useSelector} from 'react-redux';
import {useGetUserDomainsQuery} from '../../domainsApiSlice';
import useSelectUserDomains from '@/hooks/useSelectUserDomains';
import CircularProgress from '@mui/material/CircularProgress';
import {Link} from 'react-router-dom';

/*
Get the wallet address of the currently logged in user's redux state and use it to query
opensea, then update the user's domains (i.e write new docs to the user collection)
for the user. Then update the user's domains count in the User table.
*/

function DomainsList() {
	const [data, setData] = useState<DomainType[]>([]);
	const [searched, setSearched] = useState<string>('');

	const authUser = useAuth();

	// GET AUTH USER'S REFERRALS
	// Prefect the Auth user's referrals
	const {isLoading, isFetching, isSuccess, isError, error} = useGetUserDomainsQuery(
		authUser.username,
	);

	// Custom Hook
	const userDomainsSelector = useSelectUserDomains(authUser.username);

	const allData = useSelector(userDomainsSelector.selectAll);
	// Console.log('All Auth User Referrals', allData);
	// Render loading indictator

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
		);

	const handleChange = useCallback(
		debounce((value: string) => {
			setSearched(value);
		}),
		[],
	);

	useEffect(() => {
		try {
			const searchResult = allData.filter((item) =>
				searched.toLowerCase() === '' ? item : item.name.toLowerCase().includes(searched),
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
				<SearchInput changeHandler={handleChange} label='Search domains by name' />
				<BaseTable cols={domainCols} data={data} />
			</div>
		);
	}

	return content;

	// Return (
	// 	<div style={{display: 'flex', flexDirection: 'column', gap: 50, marginTop: 80}}>
	// 		{/* <h2 className='text-gray-600 font-bold'>Users List</h2> */}
	// 		<SearchInput changeHandler={handleChange} label='Search domains' />
	// 		<BaseTable cols={domainCols} data={data} />
	// 	</div>
	// );
}

export default DomainsList;
