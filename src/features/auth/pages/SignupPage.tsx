/*
Import the NewUserForm.tsx form component and use it to create a new user by capturing filled form fields and
dispatching the addNewUserMutaton RTK action creator, passing the captured data as payload.
------
Ensure the each userr's affiliate link ( i.e their personalized link to the signup page) 
is formated like so:
http://localhost:5173/signup?ref=muna i.e http://localhost:5173/signup?ref={username}
i.e the currently logged in user's username should be interpolated into the ref parameter
of the signu page's url
- Then from wthin the form on the signup page ( the New user form), extract the ref paramter
and assign to the referral field.
*/

import './Signup.css';

import React, {useState} from 'react';
import {useLocation, useParams, useSearchParams} from 'react-router-dom';

import Button from '@mui/material/Button';
import NewUserForm from '../../users/forms/NewUserForm';

// Import {URLSearchParams} from 'url';

function Signup() {
	const [searchParams, setSearchParams] = useSearchParams();
	const referralUsername = searchParams.get('ref');
	const referralId = ''; // Use the referrerusername above to fetch referrer's doc id - x no important.
	// const domains = 0; // Fetch the current user's nft domains via the opensea api using their connected wallet
	const walletAddress = '1ARkLRp38WHR2JRsLQVYPRYorV5CPmiFPU';
	const referrerId = '';
	const [isConnect, setIsConnect] = useState(false); // Pass this into the Form's props
	const [wallet, setWallet] = useState(''); // Pass this into the Form's props
	const [domains, setDomains] = useState(0); // Pass this into the Form's props
	// Const routeParams = useParams();
	// const location = useLocation();
	console.log(searchParams.get('ref'));

	const handleConnect = () => {
		setWallet(walletAddress);
		setIsConnect(!isConnect);
	};

	const handleDisconnect = () => {
		setWallet('');
		setIsConnect(!isConnect);
	};

	return (
		<div className='signup-page'>
			<div className='form-wrapper'>
				<div className='connect-box mb-12'>
					<p> {wallet} </p>
					{/* <Button variant='contained' className='connect-btn'>
						Connect
					</Button> */}
					{isConnect ? (
						<Button variant='contained' className='connect-btn' onClick={handleDisconnect}>
							disconnect
						</Button>
					) : (
						<Button variant='contained' className='connect-btn' onClick={handleConnect}>
							Connect
						</Button>
					)}
				</div>
				<h2 className='text-2xl mb-8 font-bold'>SIGN UP</h2>
				<NewUserForm wallet={wallet} domains={domains} referrerUsername={referralUsername} />
			</div>
		</div>
	);
}

export default Signup;
