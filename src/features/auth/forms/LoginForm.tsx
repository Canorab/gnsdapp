import {Controller, useForm} from 'react-hook-form';
import {type LoginSchemaType, loginSchema, signupSchema} from '@/utils/schema';
import React, {useCallback} from 'react';

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
import {AccountCircle, CheckBox, PersonOutline} from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import {zodResolver} from '@hookform/resolvers/zod';
import {ThemeProvider, createTheme} from '@mui/material';
import {type Theme, useTheme} from '@mui/material/styles';
import {customTheme} from '@/utils/customTheme';

function LoginForm() {
	const theme = useTheme();
	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: {isSubmitting, isSubmitSuccessful, errors},
	} = useForm({
		mode: 'all',
		resolver: zodResolver(loginSchema),
		defaultValues: {
			username: '',
			password: '',
			terms: false,
		},
	});

	const onSubmit = useCallback((data: LoginSchemaType) => {
		// Dispatch the useAddNewUserMutation RTK action here passing it the form data
		// This should make a POST request to the /users endpoint which will trigger the creation of a new
		// Mongodb doc in the backend.

		alert(JSON.stringify(data, null, 4));
	}, []);

	return (
		<div>
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
									type='text'
									error={Boolean(errors.password)}
									helperText={errors.password?.message}
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
							name='terms'
							control={control}
							render={({field, fieldState: {error}, formState}) => (
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

export default LoginForm;
