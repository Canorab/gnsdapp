/* eslint-disable react/react-in-jsx-scope */
import './NewuserForm.css';

import {Email, PersonOutline} from '@mui/icons-material';
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
import {useAddNewUserMutation} from '../../usersApiSlice';
import {useNavigate} from 'react-router-dom';

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
	});

	const onSubmit = useCallback(async (data: SignupSchemaType) => {
		// Console.log(wallet);
		const requestBody = {...data, wallet, referrerUsername}; // Domains
		// Dispatch the useAddNewUserMutation RTK action here passing it the form data
		// This should make a POST request to the /users endpoint which will trigger the creation of a new
		// Mongodb doc in the backend.

		// alert(JSON.stringify(requestBody, null, 4));
		await addNewUser(requestBody);
	}, []);

	return (
		<div>
			<div className='title-wrapper w-full'>
				<h2 className='text-2xl mb-8 font-bold text-left'>SIGN UP</h2>
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
							background: '#1da1f2',
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
												{/* <AccountCircle /> */}
												<PersonOutline />
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

						{/* <Controller
						name='domains'
						control={control}
						render={({field, fieldState: {error}, formState}) => (
							<TextField
								id='domains'
								label='Domains'
								variant='filled'
								type='number'
								error={Boolean(errors.domains)}
								helperText={errors.domains?.message}
								hidden={true}
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
					/> */}

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
					</Box>
				</form>
			</ThemeProvider>
		</div>
	);
}

export default NewUserForm;
