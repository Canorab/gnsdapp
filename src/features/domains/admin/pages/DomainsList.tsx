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

function DomainsList() {
	const [data, setData] = useState<DomainType[]>([]);
	const [searched, setSearched] = useState<string>('');

	const {isLoading, isFetching, isSuccess, isError, error} = useGetDomainsQuery();
	const allData = useSelector(domainsSelectors.selectAll);

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

	if (isError && 'status' in error) {
		const errMsg = 'error' in error ? error.error : (error.data as DataType['data']).message;

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
					{`${errMsg}`}
					{error.status === 403 && (
						<Link style={{fontWeight: 'bold'}} to='/'>
							Please login
						</Link>
					)}
				</p>
			</div>
		);
	}

	const handleChange = useCallback(
		debounce((value: string) => {
			setSearched(value);
		}),
		[],
	);

	useEffect(() => {
		if (isSuccess) {
			try {
				const searchResult = allData.filter((item) =>
					searched.toLowerCase() === '' ? item : item.username.toLowerCase().includes(searched),
				);

				setData(searchResult);
			} catch (error) {
				console.log(error);
			}
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
