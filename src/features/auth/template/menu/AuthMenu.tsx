import './AuthMenu.css';

import {AccountCircle, ExpandMore, Logout, Settings} from '@mui/icons-material';
import React, {useState} from 'react';

import {Link} from 'react-router-dom';

function AuthMenu() {
	const [toggle, setToggle] = useState(false);

	/**
	 * @description Fires the sendLogout function from useSendLogoutMutation from the authApiSlice
	 */
	const handleLogout = () => {
		// SendLogout();
		// navigate("/");
		alert('Logout Clicked !');
	};

	return (
		<div style={{position: 'relative'}} className='auth-menu'>
			<ExpandMore
				onClick={() => {
					setToggle((prev) => !prev);
				}}
				className='cursor-pointer'
				style={{color: '#000'}}
			/>
			{toggle && (
				<ul className='auth-menu-links'>
					<li className='menu-link cursor-pointer'>
						<AccountCircle fontSize='small' />
						<Link to='/dash/users/profile'>
							<span>Profile</span>
						</Link>
					</li>
					<li className='menu-link cursor-pointer'>
						<Settings fontSize='small' />
						<Link to='/dash/users/tasks'>
							<span>Tasks</span>
						</Link>
					</li>
					<li className='menu-link cursor-pointer'>
						<Settings fontSize='small' />
						<Link to='/dash/users/settings'>
							<span>Settings</span>
						</Link>
					</li>
					<li className='menu-link cursor-pointer' onClick={handleLogout}>
						<Logout fontSize='small' /> <span>Logout</span>
					</li>
				</ul>
			)}
		</div>
	);
}

export default AuthMenu;
