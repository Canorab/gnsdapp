/* eslint-disable react/react-in-jsx-scope */
// prettier-ignore
import {ChevronFirst, ChevronLast, MoreVertical} from 'lucide-react';
import {createContext, useContext, useState} from 'react';

import {type SidebarProps} from '@/types/propTypes';
import {type SidebarContextType} from '@/types/stateTypes';
import {Logout} from '@mui/icons-material';

export const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function Sidebar({children}: SidebarProps) {
	const [expanded, setExpanded] = useState(true);

	return (
		<aside className='h-screen'>
			<nav className='h-full flex flex-col bg-white border-r shadow-sm'>
				{/* Header */}
				<div className='p-4 pb-2 flex justify-between items-center'>
					<img
						src='https://img.logoipsum.com/243.svg'
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
					<img
						src='https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true'
						alt=''
						className='w-10 h-10 rounded-md'
					/>
					<div
						className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'}
          `}>
						<div className='leading-4'>
							<h4 className='font-semibold text-gray-600'>Muna Kunle</h4>
							<span className='text-xs text-gray-600'>munak@email.com</span>
						</div>
						{/* <MoreVertical size={20} className='text-gray-600' /> */}
						<Logout
							className='text-gray-900 cursor-pointer'
							onClick={(e) => {
								alert('Logged out !');
							}}
						/>
					</div>
				</div>
			</nav>
		</aside>
	);
}
