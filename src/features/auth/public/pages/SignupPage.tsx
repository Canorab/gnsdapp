import './Signup.css';

import {config, connect} from '@/utils/walletConnectApi';

import Button from '@mui/material/Button';
import NewUserForm from '../../../users/admin/forms/NewUserForm';
import {useSearchParams} from 'react-router-dom';
import {useState} from 'react';
import {watchAccount} from '@wagmi/core';

function Signup() {
	const [searchParams, setSearchParams] = useSearchParams();
	const referralUsername = searchParams.get('ref');

	const walletAddress = '0x2672c5D6e73dcb98F241D95FE33CBD545Fac9CeE';
	const walletAddress2 = '0x2672c5D6e73dcb98F241D95FE33CBD545Fac9CeA';
	const walletAddress3 = '0xC966CCc0a40ED21bB05e22d0e1Aca4daE8fA68Ec';

	const [isConnect, setIsConnect] = useState(false);
	const [wallet, setWallet] = useState<string | undefined>('');
	const [btnLabel, setBtnLabel] = useState('Connect Wallet');

	const handleConnect = async () => {
		await connect();
	};

	watchAccount(config, {
		onChange(account) {
			setWallet(account.address ?? '');
			if (account.isConnected) {
				setBtnLabel('Disconnect');
			} else {
				setBtnLabel('Connect Wallet');
			}
		},
	});

	return (
		<div className='signup-page'>
			<div className='form-wrapper'>
				<div className='connect-box mb-12'>
					<p> {wallet} </p>
					<Button variant='contained' className='connect-btn' onClick={handleConnect}>
						{btnLabel}
					</Button>
				</div>
				<NewUserForm wallet={wallet} referrerUsername={referralUsername!} />
			</div>
		</div>
	);
}

export default Signup;
