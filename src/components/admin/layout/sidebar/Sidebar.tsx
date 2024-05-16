/* eslint-disable react/react-in-jsx-scope */
// prettier-ignore
import './SidebarNavs.css';
import {ChevronFirst, ChevronLast, MoreVertical} from 'lucide-react';
import {createContext, useContext, useEffect, useState} from 'react';

import {type SidebarProps} from '@/types/propTypes';
import {type SidebarContextType} from '@/types/stateTypes';
import {Logout} from '@mui/icons-material';
import {useSendLogoutMutation} from '@/features/auth/authApiSlice';
import {useNavigate} from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import Avatar from '@/features/auth/admin/template/avatar/Avatar';

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar({children}: SidebarProps) {
	const {username, email} = useAuth();
	const [expanded, setExpanded] = useState(true);
	const [sendLogout] = useSendLogoutMutation();
	const navigate = useNavigate();

	const userInitals = username?.substring(0, 2).toLocaleUpperCase();

	// UseEffect(() => {
	// 	if (isSuccess) {
	// 		navigate('/');
	// 	}
	// }, [navigate, isSuccess]);

	return (
		<aside className='h-screen'>
			<nav className='h-full flex flex-col border-r shadow-sm'>
				{/* Header */}
				<div className='p-4 pb-2 flex justify-between items-center'>
					<img
						src='/images/gtx-stream-logo1.png'
						className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-0'}`}
						alt=''
					/>
					<button
						onClick={() => {
							setExpanded((curr) => !curr);
						}}
						className='p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100'>
						{expanded ? <ChevronFirst color='black' /> : <ChevronLast color='#000' />}
					</button>
				</div>
				{/* Links */}
				<SidebarContext.Provider value={{expanded}}>
					<ul className='flex-1 px-3'>{children}</ul>
				</SidebarContext.Provider>
				{/* Footer */}
				<div className='border-t flex p-3 sidebar-userinfo'>
					<Avatar initials={userInitals} borderRadius={8} width={50} height={50} />
					<div
						className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
          `}>
						<div className='leading-4'>
							<h4 className='font-semibold text-gray-600'> {username} </h4>
							<span className='text-xs text-gray-600'> {email} </span>
						</div>
						{/* <MoreVertical size={20} className='text-gray-600' /> */}
						<Logout
							className='text-gray-900 cursor-pointer'
							onClick={async (e) => {
								// Alert('Logged out !');
								const result = await sendLogout(null);
								// Console.log(result);

								navigate('/admin');
							}}
						/>
					</div>
				</div>
			</nav>
		</aside>
	);
}
