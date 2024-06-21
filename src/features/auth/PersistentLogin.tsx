import {Link, Outlet} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';

import Box from '@mui/material/Box';
import {type DataType} from '@/types/propTypes';
import LinearProgress from '@mui/material/LinearProgress';
import {selectCurrentToken} from './authSlice';
import usePersist from '@/hooks/usePersist';
import {useRefreshMutation} from './authApiSlice';
import {useSelector} from 'react-redux';

function PersistentLogin() {
	const [persist] = usePersist('true', 'persit');
	const token = useSelector(selectCurrentToken);
	const effectRan = useRef(false);

	const [trueSucess, setTrueSuccess] = useState(false);

	const [refresh, {isUninitialized, isLoading, isSuccess, isError, error}] = useRefreshMutation();

	// || process.env.NODE_ENV === 'production'
	useEffect(() => {
		if (effectRan.current || process.env.NODE_ENV === 'production') {
			const verifyRefreshToken = async () => {
				try {
					await refresh();

					setTrueSuccess(true);
				} catch (error) {}
			};

			if (!token && persist)
				verifyRefreshToken()
					.then((value) => {
						console.log(value);
					})
					.catch((error) => {
						console.log(error);
					});
		}

		return () => {
			effectRan.current = true;
		};
	}, []);

	let content;
	if (!persist) {
		content = <Outlet />;
	} else if (isLoading) {
		content = (
			<div
				className='loading-state'
				style={{
					width: '100vw',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				<p>Contacting backend</p>
				<Box sx={{width: '100%'}}>
					<LinearProgress />
				</Box>
			</div>
		);
	} else if (isError && 'status' in error) {
		// Const errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
		const errMsg = 'error' in error ? error.error : (error.data as DataType['data']).message;
		if (error.status === 'FETCH_ERROR') {
			content = (
				<div className='err-cta' style={{fontWeight: 'bold'}}>
					<div className='errmsg'>
						{/* <h3>{`${errMsg} - `}</h3> */}
						<p>Our Servers are down at the moment. Check back later.</p>
					</div>
				</div>
			);
		} else {
			content = (
				<div className='err-cta' style={{fontWeight: 'bold'}}>
					<div className='errmsg'>
						<h3>{`${errMsg} `}</h3>

						<Link style={{fontWeight: 'bold'}} to='/'>
							Please login again
						</Link>
					</div>
				</div>
			);
		}
	} else if (isSuccess && trueSucess) {
		content = <Outlet />;
	} else if (token && isUninitialized) {
		content = <Outlet />;
	}

	return content;
}

export default PersistentLogin;
