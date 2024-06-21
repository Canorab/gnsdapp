import {type UserType, type DataType} from '@/types/propTypes';
import {type ReactNode, useCallback, useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import BaseTable from '@/components/admin/tables/BaseTable';
import {debounce} from '@/utils/debounce';
import SearchInput from '@/components/admin/forms/SearchInput';
import {usersCols} from '@/utils/constants';
import {useGetUserReferralsQuery} from '../../usersApiSlice';
import CircularProgress from '@mui/material/CircularProgress';
import useAuth from '@/hooks/useAuth';
import useSelectUserReferrals from '@/hooks/useSelectUserReferrals';
import {Link} from 'react-router-dom';

function UsersListPage() {
	const [data, setData] = useState<UserType[]>([]);
	const [searched, setSearched] = useState<string>('');
	const authUser = useAuth();

	const {isLoading, isFetching, isSuccess, isError, error} = useGetUserReferralsQuery(
		authUser.username,
	);

	const userReferralsSelector = useSelectUserReferrals(authUser.username);

	const allData = useSelector(userReferralsSelector.selectAll);

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
			<div style={{display: 'flex', flexDirection: 'column', gap: 50, marginTop: 80}}>
				<SearchInput changeHandler={handleChange} label='Search by username' />
				<BaseTable cols={usersCols} data={data} />
			</div>
		);
	}

	return content;
}

export default UsersListPage;
