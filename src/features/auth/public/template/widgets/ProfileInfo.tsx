import './ProfileInfo.css';

import AuthMenu from '../menu/AuthMenu';
import Avatar from '../avatar/Avatar';
import {type ProfileInfoProps} from '@/types/propTypes';
import React from 'react';

function ProfileInfo(props: ProfileInfoProps) {
	const userInitals = props.username?.substring(0, 2).toLocaleUpperCase();
	return (
		<div className='profile-info'>
			<Avatar initials={userInitals} />
			<h4 className='username text-lg font-semibold overflow-hidden'>{props.username}</h4>
			<AuthMenu />
		</div>
	);
}

export default ProfileInfo;
