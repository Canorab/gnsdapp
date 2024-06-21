import './SidebarLayout.css';

import {Diamond, Logout, Redeem} from '@mui/icons-material';
import {Home, Users} from 'lucide-react';
import {useLocation, useNavigate} from 'react-router-dom';

import Sidebar from './Sidebar';
import {SidebarLink} from './SidebarLink';
import {useSendLogoutMutation} from '@/features/auth/authApiSlice';

function SidebarLayout() {
	const navigate = useNavigate();
	const [sendLogout] = useSendLogoutMutation();
	const handleLogout = async () => {
		const result = await sendLogout(null);
		navigate('/');
	};

	const currentPath = useLocation();

	return (
		<div className='sidebar'>
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
			</Sidebar>
		</div>
	);
}

export default SidebarLayout;
