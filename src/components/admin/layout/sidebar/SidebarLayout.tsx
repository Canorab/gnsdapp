import './SidebarLayout.css';

import {AssignmentInd, Diamond, Logout, Redeem} from '@mui/icons-material';
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
					active={currentPath.pathname === '/admindash'}
					link='/admindash'
				/>
				<SidebarLink
					icon={<Users />}
					label='Users'
					active={currentPath.pathname === '/admindash/users'}
					link='/admindash/users'
				/>
				<SidebarLink
					icon={<AssignmentInd />}
					label='Affiliates'
					active={currentPath.pathname === '/admindash/affiliates'}
					link='/admindash/affiliates'
				/>
				<SidebarLink
					icon={<Diamond />}
					label='Domains'
					active={currentPath.pathname === '/admindash/domains'}
					link='/admindash/domains'
				/>
				<SidebarLink
					icon={<Redeem />}
					label='Airdrop'
					active={currentPath.pathname === '/admindash/users/tasks'}
					link='/admindash/users/tasks'
				/>
				{/* <SidebarLink
					icon={<Settings />}
					label='Settings'
					active={currentPath.pathname === '/admindash/users/settings'}
					link='/admindash/users/settings'
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
