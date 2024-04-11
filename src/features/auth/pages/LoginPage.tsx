import './Signup.css';

import LoginForm from '../forms/LoginForm';
import React from 'react';

function Login() {
	return (
		<div className='signup-page'>
			<div className='form-wrapper'>
				<h2 className='text-2xl mb-8 font-bold'>LOGIN</h2>
				<LoginForm />
			</div>
		</div>
	);
}

export default Login;
