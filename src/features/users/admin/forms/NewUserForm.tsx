/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/react-in-jsx-scope */
import './NewuserForm.css';

import {AccountBalanceWallet, Email, Lock, People, PersonOutline} from '@mui/icons-material';
import {
	Button,
	Checkbox,
	FormControl,
	FormControlLabel,
	FormHelperText,
	InputAdornment,
	TextField,
} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import {ThemeProvider} from '@mui/material';
import Box from '@mui/material/Box';
import {useCallback, useEffect} from 'react';
import {type SignupSchemaType, signupSchema, type ReferralSchemaType} from '@/utils/schema';
// Import {schema} from '@/utils/schema';
import {zodResolver} from '@hookform/resolvers/zod';
// Import {useTheme} from '@emotion/react';
import {useTheme} from '@mui/material/styles';
import {customTheme} from '@/utils/customTheme';
// Import {useAddNewUserMutation} from '../../usersApiSlice';
import {useNavigate} from 'react-router-dom';
import {useAddNewUserMutation} from '@/features/auth/authApiSlice';

/*
Import into the Signup.tsx component page and use it to create a new user by capturing filled form fields and
dispatching the addNewUserMutaton RTK action creator, passing the captured data as payload.
*/

// domains,
function NewUserForm({wallet, referrerUsername}: ReferralSchemaType) {
	const theme = useTheme();
	// Const formTheme = createTheme({});
	// Console.log(wallet);
	// Form
	const navigate = useNavigate();
	const [addNewUser, {isSuccess}] = useAddNewUserMutation();

	useEffect(() => {
		if (isSuccess) {
			navigate('/dash/users');
		}
	}, [isSuccess, navigate]);

	const {
		handleSubmit,
		control,
		setError,
		formState: {errors},
	} = useForm({
		resolver: zodResolver(signupSchema),
		mode: 'all',
		defaultValues: {
			// _id: '0001',
			firstName: '',
			lastName: '',
			username: '',
			password: '',
			// ConfirmPassword: '',
			email: '',
			// Domains: 0,
			wallet,
			referrerUsername, // You may want to include this field in zod so it can throw an errror if it's empty
			// ReferrerId: '',
			// timestamp: new Date(), // Remove
			terms: false,
		},
		values: {
			firstName: '',
			lastName: '',
			username: '',
			password: '',
			// ConfirmPassword: '',
			email: '',
			wallet,
			referrerUsername,
			terms: false,
		},
		resetOptions: {
			keepDirty: true,
			keepErrors: true,
			// KeepValues: true,
		},
	});

	const onSubmit = useCallback(async (data: SignupSchemaType) => {
		// Console.log(wallet);
		// const requestBody = {...data, wallet, referrerUsername}; // Domains
		// const requestBody = {...data}; // Domains
		// Dispatch the useAddNewUserMutation RTK action here passing it the form data
		// This should make a POST request to the /users endpoint which will trigger the creation of a new
		// Mongodb doc in the backend.

		// alert(JSON.stringify(requestBody, null, 4));
		// Await addNewUser(requestBody);
		try {
			const requestBody = {...data}; // Domains
			// alert(JSON.stringify(requestBody, null, 4));
			const response = await addNewUser(requestBody);
			// Console.log(response);
			// Catch Duplicate username Errors
			// @ts-expect-error
			if (response?.error?.status === 409) {
				setError('username', {
					type: 'server',
					message: 'Username taken, try another one !',
					// Message: error?.data?.message,
				});
			}

			// Catch Invalid or manipulated referrerUsername Errors
			// @ts-expect-error
			if (response?.error?.status === 401) {
				setError('referrerUsername', {
					type: 'server',
					message: 'Invalid affiliate username.',
					// Message: error?.data?.message,
				});
			}
		} catch (error) {
			// Catch Server Errors
			// console.log(error);
			// @ts-expect-error
			if (error?.status === 'FETCH_ERROR') {
				setError('root.serverError', {
					type: 'server',
					message: 'Network or internet Error',
				});
			}
		}
	}, []);

	return (
		<div>
			<div className='title-wrapper w-full flex justify-between items-center mb-8 '>
				<img src='/images/gtx-stream-logo1.png' className={'w-32'} alt='' />
				<h2 className='text-2xl font-bold text-center'>Sign Up</h2>
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
							name='firstName'
							control={control}
							render={({field}) => (
								<TextField
									id='firstName'
									label='First Name'
									variant='filled'
									type='text'
									error={Boolean(errors.firstName)}
									helperText={errors.firstName?.message}
									{...field}
									fullWidth
									color='secondary'
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
							name='lastName'
							control={control}
							render={({field}) => (
								<TextField
									id='lastName'
									label='Last Name'
									variant='filled'
									type='text'
									error={Boolean(errors.lastName)}
									helperText={errors.lastName?.message}
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
							name='username'
							control={control}
							render={({field}) => (
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
										autoComplete: 'off',
									}}
								/>
							)}
						/>

						<Controller
							name='password'
							control={control}
							render={({field}) => (
								<TextField
									id='password'
									label='Password'
									variant='filled'
									type='password'
									error={Boolean(errors.password)}
									helperText={errors.password?.message}
									autoComplete='off'
									{...field}
									fullWidth
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<Lock />
											</InputAdornment>
										),
									}}
								/>
							)}
						/>

						<Controller
							name='email'
							control={control}
							render={({field}) => (
								<TextField
									id='email'
									label='Email'
									variant='filled'
									type='email'
									error={Boolean(errors.email)}
									helperText={errors.email?.message}
									{...field}
									fullWidth
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<Email />
											</InputAdornment>
										),
									}}
								/>
							)}
						/>

						<Controller
							name='wallet'
							control={control}
							render={({field}) => (
								<TextField
									id='wallet'
									label='Wallet'
									variant='filled'
									type='text'
									error={Boolean(errors.wallet)}
									helperText={errors.wallet?.message}
									// Hidden={true}
									disabled
									{...field}
									fullWidth
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<AccountBalanceWallet />
											</InputAdornment>
										),
									}}
								/>
							)}
						/>

						<Controller
							name='referrerUsername'
							control={control}
							render={({field}) => (
								<TextField
									id='referrerUsername'
									label='Referrer'
									variant='filled'
									type='text'
									error={Boolean(errors.referrerUsername)}
									helperText={errors.referrerUsername?.message}
									// Hidden={true}
									disabled
									{...field}
									fullWidth
									InputProps={{
										startAdornment: (
											<InputAdornment position='start'>
												<People />
											</InputAdornment>
										),
									}}
								/>
							)}
						/>

						<Controller
							name='terms'
							control={control}
							render={({field}) => (
								<FormControl error={Boolean(errors.terms)} variant='outlined'>
									<FormControlLabel
										{...field}
										control={<Checkbox {...field} />}
										label='Accept terms and conditions'
									/>
									{errors.terms && <FormHelperText> {errors.terms.message} </FormHelperText>}
								</FormControl>
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

export default NewUserForm;
