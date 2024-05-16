/* eslint-disable no-return-assign */
import {Link, Outlet} from 'react-router-dom';
import React, {type ReactNode, useEffect, useRef, useState} from 'react';

/*
 * @Author: Joshua Eigbe jeigbe@gmail.com
 * @Github: https://github.com/jsh007
 * @Date: 2024-03-26 17:14:07
 * @LastEditors: Joshua Eigbe jeigbe@gmail.com
 * @LastEditTime: 2024-03-26 17:14:15
 * @FilePath: /gns_dapp/src/features/auth/PersistentLogin.tsx
 * @copyrightText: Copyright (c) Joshua Eigbe. All Rights Reserved.
 * @Description: See Github repo
 */
import CircularProgress from '@mui/material/CircularProgress';
import {selectCurrentToken} from './authSlice';
import usePersist from '@/hooks/usePersist';
import {useRefreshMutation} from './authApiSlice';
import {useSelector} from 'react-redux';
import {type FetchBaseQueryError} from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import {type SerializedError} from '@reduxjs/toolkit';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import {type DataType} from '@/types/propTypes';

// Ths component page is responsible for the DarkBg loading page that suddenly appears for a while
// when loading content.

// export type ErrorType = {
// 	error: FetchBaseQueryError | SerializedError | DataType;
// };

function PersistentLogin() {
	const [persist] = usePersist('true', 'persit');
	const token = useSelector(selectCurrentToken);
	const effectRan = useRef(false);

	const [trueSucess, setTrueSuccess] = useState(false);

	const [refresh, {isUninitialized, isLoading, isSuccess, isError, error}] = useRefreshMutation();

	useEffect(() => {
		if (effectRan.current || process.env.NODE_ENV !== 'production') {
			const verifyRefreshToken = async () => {
				// Console.log('...verifying Refresh Token');
				try {
					// Const response =
					await refresh();
					// Const {accessToken} = response.data;
					setTrueSuccess(true);
				} catch (error) {
					// Console.log(error);
				}
			};

			if (!token && persist)
				verifyRefreshToken()
					.then((value) => {
						console.log(value);
					})
					.catch((error) => {
						console.log(error);
					});
			// Const callRefresh = async () => {
			// 	if (!token && persist) await verifyRefreshToken();
			// };

			// callRefresh();
		}

		return () => {
			const cleanUp = () => (effectRan.current = true);
			cleanUp();
		};
		// Return function () {
		// 	const ran = (effectRan.current = true);
		// 	return ran;
		// };
	}, []);

	// Let content: ReactNode;
	let content;
	if (!persist) {
		// Persist: no
		// console.log('No persist');
		content = <Outlet />;
	} else if (isLoading) {
		// Persist: yes, token: no
		// console.log('Loading');
		content = (
			<div
				className='loading-state'
				style={{
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
	} else if (isError) {
		// Persist: yes, token: no
		// Put this Error message CTA conten
		// console.log(error);
		content = (
			<div className='err-cta'>
				<p className='errmsg'>
					{`${(error as DataType)?.data?.message} - `}
					<Link style={{fontWeight: 'bold'}} to='/'>
						Please login again
					</Link>
				</p>
			</div>
		);
	} else if (isSuccess && trueSucess) {
		// Persist: yes, token: yes
		// console.log('Success!');
		content = <Outlet />;
	} else if (token && isUninitialized) {
		// Persist: yes, token: yes
		// console.log('token and uninit !');
		// console.log(isUninitialized);
		// Console.log(roles);
		content = <Outlet />;
	}

	return content;
}

export default PersistentLogin;
