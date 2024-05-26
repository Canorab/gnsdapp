/* eslint-disable @typescript-eslint/ban-ts-comment */
import {Controller, useForm} from 'react-hook-form';
import {type LoginSchemaType, loginSchema, signupSchema} from '@/utils/schema';
import React, {useCallback, useEffect} from 'react';

import {
	Box,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormHelperText,
	InputAdornment,
} from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import {AccountCircle, CheckBox, Lock, PersonOutline} from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import {zodResolver} from '@hookform/resolvers/zod';
import {ThemeProvider, createTheme} from '@mui/material';
import {type Theme, useTheme} from '@mui/material/styles';
import {customTheme} from '@/utils/customTheme';
import {useLoginMutation} from '../../authApiSlice';
import {useNavigate} from 'react-router-dom';
import {setCredentials} from '../../authSlice';
import {useDispatch} from 'react-redux';

// There should be different login pages and forms for regular users and admins
// admin logn page should navgate to dash/users while regular login page shoould goto userdash/users

function LoginForm() {
	const theme = useTheme();

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [login, {isLoading, isSuccess, isError, error: rtkError}] = useLoginMutation();

	const {
		register,
		handleSubmit,
		control,
		reset,
		setError,
		formState: {isSubmitting, isSubmitSuccessful, errors},
	} = useForm({
		mode: 'all',
		resolver: zodResolver(loginSchema),
		defaultValues: {
			username: '',
			password: '',
			// Terms: false,
		},
	});

	useEffect(() => {
		if (isSuccess) {
			navigate('/dash', {replace: true});
		}
	}, [isSuccess, navigate]);

	const onSubmit = useCallback(async (data: LoginSchemaType) => {
		// Dispatch the useAddNewUserMutation RTK action here passing it the form data
		// This should make a POST request to the /users endpoint which will trigger the creation of a new
		// Mongodb doc in the backend.

		try {
			const {accessToken} = await login(data).unwrap();

			dispatch(setCredentials({accessToken}));
		} catch (error) {
			// @ts-expect-error
			if (error?.status === 'FETCH_ERROR') {
				setError('root.serverError', {
					type: 'server',
					message: 'Network or internet Error',
				});
			}

			// @ts-expect-error
			if (error?.status === 404) {
				// SetError('username', {
				// 	type: 'server',
				// 	message: 'Username taken, try another one !',
				// 	// Message: error?.data?.message,
				// });
				setError('root.serverError', {
					type: 'server',
					message: 'Invalid Login Credentials',
				});
			}
		}
	}, []);

	return (
		<div>
			<div className='title-wrapper w-full flex justify-between items-center mb-8 '>
				<img src='/images/gtx-stream-logo1.png' className={'w-32'} alt='' />
				<h2 className='text-2xl font-bold text-center text-gray-50'>Login</h2>
			</div>
			<ThemeProvider theme={customTheme(theme)}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Box
						component='div'
						sx={{
							p: '2px 4px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							gap: 2,
							width: 350,
							// Background: '#1da1f2',
							boxShadow: 0,
						}}>
						<Controller
							name='username'
							control={control}
							render={({field, fieldState: {error}, formState}) => (
								<TextField
									id='username'
									label='Username'
									variant='filled'
									type='text'
									error={Boolean(errors.username)}
									helperText={errors.username?.message}
									{...field}
									fullWidth
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												{/* <AccountCircle /> */}
												<PersonOutline />
											</InputAdornment>
										),
									}}
								/>
							)}
						/>

						<Controller
							name='password'
							control={control}
							render={({field, fieldState: {error}, formState}) => (
								<TextField
									id='password'
									label='Password'
									variant='filled'
									type='password'
									error={Boolean(errors.password)}
									helperText={errors.password?.message}
									{...field}
									fullWidth
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												{/* <AccountCircle /> */}
												<Lock />
											</InputAdornment>
										),
									}}
								/>
							)}
						/>

						<Button type='submit' variant='contained' className='btn'>
							Submit
						</Button>
						<div>
							<p style={{fontWeight: 'bold'}}>
								{errors.root?.serverError?.message /* note the cross check */}
							</p>
						</div>
					</Box>
				</form>
			</ThemeProvider>
		</div>
	);
}

export default LoginForm;
