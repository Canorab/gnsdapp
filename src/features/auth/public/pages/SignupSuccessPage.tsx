import Button from '@mui/material/Button';
import React from 'react';
import {useNavigate} from 'react-router-dom';

function SignupSuccessPage() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/dash');
	};

	return (
		<div className='signup-page'>
			<div className='form-wrapper'>
				<h2 style={{marginBottom: 30, fontSize: '1.2rem', fontWeight: 'bold'}}>
					Account created successfully !
				</h2>
				<Button variant='contained' onClick={handleClick}>
					View Dashboard
				</Button>
			</div>
		</div>
	);
}

export default SignupSuccessPage;
