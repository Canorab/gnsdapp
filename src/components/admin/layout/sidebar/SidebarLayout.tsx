import './SidebarLayout.css';

import {AssignmentInd, Diamond, Logout, Redeem} from '@mui/icons-material';
import {Home, Users} from 'lucide-react';
import {useLocation, useNavigate} from 'react-router-dom';

import Sidebar from './Sidebar';
import {SidebarLink} from './SidebarLink';
import {useSendLogoutMutation} from '@/features/auth/authApiSlice';

function SidebarLayout() {
	const handleLogout = () => {
		const navigate = useNavigate();
		const [sendLogout] = useSendLogoutMutation();
		const handleLogout = async () => {
			const result = await sendLogout(null);

			navigate('/admin');
		};
	};

	const currentPath = useLocation();

	return (
		<div className='sidebar'>
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
			</Sidebar>
		</div>
	);
}

export default SidebarLayout;
