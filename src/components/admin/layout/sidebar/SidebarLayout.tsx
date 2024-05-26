import './SidebarLayout.css';

import {AssignmentInd, Diamond, Logout, Redeem} from '@mui/icons-material';
import {Globe, Home, NotebookPen, Settings, Users} from 'lucide-react';
import React, {useContext} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

import Sidebar from './Sidebar';
import {SidebarContext} from '@/components/admin/layout/sidebar/Sidebar';
import {SidebarLink} from './SidebarLink';
import {useSendLogoutMutation} from '@/features/auth/authApiSlice';

function SidebarLayout() {
	// Const activePath = useParams();
	// console.log(activePath);
	// const {menuOpen} = useContext(SidebarContext)!;
	const handleLogout = () => {
		// SendLogout();
		// navigate("/");
		const navigate = useNavigate();
		const [sendLogout] = useSendLogoutMutation();
		const handleLogout = async () => {
			const result = await sendLogout(null);
			// Console.log(result);

			navigate('/');
		};
	};

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
				<li
					className='lg:hidden md:hidden logout-link cursor-pointer text-gray-900'
					onClick={handleLogout}>
					<Logout fontSize='medium' /> <span>Logout</span>
				</li>
				{/* <li className='menu-link cursor-pointer text-gray-900' onClick={handleLogout}>
					<Logout fontSize='large' /> <span>Logout</span>
				</li> */}
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
