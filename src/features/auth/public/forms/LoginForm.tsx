/* eslint-disable @typescript-eslint/ban-ts-comment */
import {Controller, useForm} from 'react-hook-form';
import {type LoginSchemaType, loginSchema} from '@/utils/schema';
import React, {useCallback, useEffect} from 'react';

import {Box, InputAdornment} from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Lock, PersonOutline, Visibility, VisibilityOff} from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import {zodResolver} from '@hookform/resolvers/zod';
import {ThemeProvider} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {customTheme} from '@/utils/customTheme';
import {useLoginMutation} from '../../authApiSlice';
import {useNavigate} from 'react-router-dom';
import {setCredentials} from '../../authSlice';
import {useDispatch} from 'react-redux';

function LoginForm() {
	const theme = useTheme();

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [login, {isLoading, isSuccess, isError, error: rtkError}] = useLoginMutation();

	const [showPassword, setShowPassword] = React.useState(false);
	const handleClickShowPassword = () => {
		setShowPassword((show) => !show);
	};

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
		},
	});

	useEffect(() => {
		if (isSuccess) {
			navigate('/dash', {replace: true});
		}
	}, [isSuccess, navigate]);

	const onSubmit = useCallback(async (data: LoginSchemaType) => {
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
									type={showPassword ? 'text' : 'password'}
									error={Boolean(errors.password)}
									helperText={errors.password?.message}
									{...field}
									fullWidth
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<Lock />
											</InputAdornment>
										),
										endAdornment: (
											<InputAdornment position='end'>
												<IconButton
													aria-label='toggle password visibility'
													onClick={handleClickShowPassword}
													edge='end'>
													{showPassword ? <VisibilityOff /> : <Visibility />}
												</IconButton>
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
							<p style={{fontWeight: 'bold'}}>{errors.root?.serverError?.message}</p>
						</div>
					</Box>
				</form>
			</ThemeProvider>
		</div>
	);
}

export default LoginForm;
