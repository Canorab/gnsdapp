import './Signup.css';

import LoginForm from '../forms/LoginForm';
import React from 'react';

function Login() {
	return (
		<div className='signup-page'>
			<div className='form-wrapper'>
				<LoginForm />
			</div>
		</div>
	);
}

export default Login;
