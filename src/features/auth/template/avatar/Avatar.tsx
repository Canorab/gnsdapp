import './Avatar.css';

import {type AvatarProps} from '@/types/propTypes';
import React from 'react';

/*
You can import a MUI Avatar into this file or create your own custom avatar using the user's First name initials
*/

function Avatar(props: AvatarProps) {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				// Position: 'relative',
				// background: 'black',
				background: '#141441',
				borderRadius: 60,
				width: 60,
				height: 60,
			}}>
			<h4 className='text-white font-bold'> {props.initials} </h4>
		</div>
	);
}

export default Avatar;
