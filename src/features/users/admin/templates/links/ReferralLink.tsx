import './ReferralLink.css';

import {
	CheckBox,
	ContentCopy,
	ContentPaste,
	CopyAllRounded,
	LibraryAdd,
	LibraryAddCheck,
} from '@mui/icons-material';
import React, {useEffect, useState} from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';
import {useLocation} from 'react-router-dom';

function ReferralLink({username}: {username: string}) {
	// Const refLink = `http://localhost:5173/signup?ref=${username}`;
	const refLink = `${import.meta.env.REACT_APP_SIGNUP_BASE_URL}?ref=${username}`;

	const [link, setLink] = useState('');
	// Const [link, setLink] = useState('');
	const [copyStatus, setCopyStatus] = useState(false);

	useEffect(() => {
		setLink(refLink);
	}, []);

	const onCopyText = () => {
		setCopyStatus(true);
		setTimeout(() => {
			setCopyStatus(false);
		}, 2000); // Reset status after 2 seconds
	};

	return (
		<div style={{display: 'flex', borderWidth: 1, borderColor: '#b9b9b9'}} className='ref-link'>
			<h2 className='text-gray-300 text-xl overflow-hidden aff-link'>{link}</h2>
			<CopyToClipboard text={link} onCopy={onCopyText}>
				{copyStatus ? (
					<CheckBox className='text-green-400 cursor-pointer' />
				) : (
					<ContentCopy className='text-gray-700 cursor-pointer' />
				)}
			</CopyToClipboard>
			{/* {copyStatus && <p>copied!</p>} */}
		</div>
	);
}

export default ReferralLink;
