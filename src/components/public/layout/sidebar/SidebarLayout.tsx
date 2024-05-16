import './SidebarLayout.css';

import {Diamond, Logout, Redeem} from '@mui/icons-material';
import {Globe, Home, NotebookPen, Settings, Users} from 'lucide-react';
import {useLocation, useParams} from 'react-router-dom';

import React from 'react';
import Sidebar from './Sidebar';
import {SidebarLink} from './SidebarLink';

// Const SidebarContext = createContext({expanded: false});

function SidebarLayout() {
	// Const activePath = useParams();
	// console.log(activePath);

	// const handleLogout = () => {
	// 	// SendLogout();
	// 	// navigate("/");
	// 	alert('Logout Clicked !');
	// };

	const currentPath = useLocation();
	// Console.log(currentPath);

	return (
		<div className='sidebar'>
			{/* <SidebarHeader /> */}
			{/* <SidebarNavs /> */}
			<Sidebar>
				<SidebarLink
					icon={<Home />}
					label='Dashboard'
					active={currentPath.pathname === '/dash'}
					link='/dash'
				/>
				<SidebarLink
					icon={<Users />}
					label='Referrals'
					active={currentPath.pathname === '/dash/users'}
					link='/dash/users'
				/>
				<SidebarLink
					icon={<Diamond />}
					label='Domains'
					active={currentPath.pathname === '/dash/domains'}
					link='/dash/domains'
				/>
				<SidebarLink
					icon={<Redeem />}
					label='Airdrop'
					active={currentPath.pathname === '/dash/users/tasks'}
					link='/dash/users/tasks'
				/>
				{/* <SidebarLink
					icon={<Settings />}
					label='Settings'
					active={currentPath.pathname === '/dash/users/settings'}
					link='/dash/users/settings'
				/> */}
				{/* <SidebarLink
					icon={<Settings />}
					label='Settings'
					active={currentPath.pathname === '/dash/users/settings'}
					link='/dash/users/settings'
				/> */}
				{/* <li className='menu-link cursor-pointer text-gray-900' onClick={handleLogout}>
					<Logout fontSize='' /> <span>Logout</span>
				</li> */}
			</Sidebar>
		</div>
	);
}

export default SidebarLayout;
