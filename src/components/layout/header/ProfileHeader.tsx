import './ProfileHeader.css';

import Avatar from '../../../features/auth/template/avatar/Avatar';
import {type ProfileHeaderProps} from '@/types/propTypes';
import ProfileInfo from '../../../features/auth/template/widgets/ProfileInfo';
import React from 'react';
import UserMenu from '../../../features/auth/template/widgets/ProfileInfo';
import Welcome from '../../../features/auth/template/greetings/Welcome';
import ReferralLink from '@/features/users/templates/links/ReferralLink';

/* 
Should contain Welcome message on the left and User Avatar on the left
Should fetch the currently logged in user and ther data from RTK state and pass on the data to it's children.
*/

function ProfileHeader(props: ProfileHeaderProps) {
	/*
	This data wll be received from the props or global RTK state n production
	*/
	const profileData = {
		username: 'Muna',
		dashTip: 'Explore your Dashboard',
	};
	return (
		<div className='profile-header'>
			{/* <h1>Profile Header</h1> */}
			<Welcome username={profileData.username} dashTip={profileData.dashTip} />
			<ReferralLink username={profileData.username} />
			{/* <UserMenu /> */}
			<ProfileInfo username={profileData.username} />
		</div>
	);
}

export default ProfileHeader;
