import './Welcome.css';

import React from 'react';
import {type Welcomeprops} from '@/types/propTypes';

function Welcome({username, dashTip}: Welcomeprops) {
	return (
		<div className='welcome-block'>
			<h2 className='greeting font-bold text-lg'>Welcome, {username}</h2>
			<h3 className='dash-tip'>{dashTip}</h3>
		</div>
	);
}

export default Welcome;
