import './SidebarLayout.css';

import {Diamond, Logout, Redeem} from '@mui/icons-material';
import {Globe, Home, NotebookPen, Settings, Users} from 'lucide-react';
import React, {useContext} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

import Sidebar from './Sidebar';
import {SidebarContext} from '@/components/public/layout/sidebar/Sidebar';
import {SidebarLink} from './SidebarLink';
import {useSendLogoutMutation} from '@/features/auth/authApiSlice';

function SidebarLayout() {
	// Const activePath = useParams();
	// console.log(activePath);
	// const {menuOpen} = useContext(SidebarContext)!;
	const navigate = useNavigate();
	const [sendLogout] = useSendLogoutMutation();
	const handleLogout = async () => {
		const result = await sendLogout(null);
		// Console.log(result);

		navigate('/admin');
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

				<li
					className='lg:hidden md:hidden logout-link cursor-pointer text-gray-900'
					onClick={handleLogout}>
					<Logout fontSize='medium' /> <span>Logout</span>
				</li>
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
			</Sidebar>
		</div>
	);
}

export default SidebarLayout;
