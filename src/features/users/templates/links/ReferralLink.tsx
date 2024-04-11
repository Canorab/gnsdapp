import './ReferralLink.css';

import {ContentCopy, CopyAllRounded} from '@mui/icons-material';
import React, {useEffect, useState} from 'react';

function ReferralLink({username}) {
	const refLink = `http://localhost:5173/signup?ref=${username}`;
	const [link, setLink] = useState('');

	useEffect(() => {
		setLink(refLink);
	}, []);
	return (
		<div style={{display: 'flex', borderWidth: 2, borderColor: '#b9b9b9'}} className='ref-link'>
			<h2 className='text-gray-700 text-xl overflow-hidden aff-link'>{link}</h2>
			<ContentCopy className='text-gray-700 cursor-pointer' />
		</div>
	);
}

export default ReferralLink;
