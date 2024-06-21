import {type ReactNode, useCallback, useEffect, useState} from 'react';

import BaseTable from '@/components/admin/tables/BaseTable';
import CircularProgress from '@mui/material/CircularProgress';
import SearchInput from '@/components/admin/forms/SearchInput';
import {type DataType, type AffiliateType} from '@/types/propTypes';
import {affiliatesCols} from '@/utils/constants';
import {debounce} from '@/utils/debounce';
import {useSelector} from 'react-redux';
import {affiliatesSelectors, useGetUsersWithStatsQuery} from '../affiliatesApiSlice';
import {Link} from 'react-router-dom';

function AffiliatesListPage() {
	const [data, setData] = useState<AffiliateType[]>([]);
	const [searched, setSearched] = useState<string>('');

	const {isLoading, isFetching, isSuccess, isError, error} = useGetUsersWithStatsQuery();
	const allAffiliates = useSelector(affiliatesSelectors.selectAll);

	const allUsers = allAffiliates;

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
							Please login again
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
				const searchResult = allUsers.filter((item) =>
					searched.toLowerCase() === '' ? item : item.username.toLowerCase().includes(searched),
				);

				setData(searchResult);
			} catch (error) {
				console.log(error);
			}
		}
	}, [searched, allUsers]);

	if (isSuccess) {
		content = (
			<div style={{display: 'flex', flexDirection: 'column', gap: 50, marginTop: 80}}>
				<SearchInput changeHandler={handleChange} label='Search users' />
				<BaseTable cols={affiliatesCols} data={data} />
			</div>
		);
	}

	return content;
}

export default AffiliatesListPage;
