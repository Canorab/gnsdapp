/* eslint-disable react/react-in-jsx-scope */
import './index.css';

import {Link, Route, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

import AffiliatesListPage from '@/features/affiliates/pages/AffiliatesListPage';
import AppFlow from './src/components/admin/navigation/AppFlow';
import ConnectWallet from './src/features/auth/admin/pages/ConnectWallet';
import DashFlow from './src/components/admin/navigation/DashFlow';
import Dashboard from './src/features/dashboard/admin/pages/DashboardPage';
import DomainsList from './src/features/domains/admin/pages/DomainsList';
import EditDomain from './src/features/domains/admin/pages/EditDomain';
import Error404Page from '@/pages/Error404Page';
import Login from './src/features/auth/admin/pages/LoginPage';
import PersistentLogin from '@/features/auth/PersistentLogin';
import Prefetch from '@/features/auth/Prefetch';
import ProfilePage from '@/features/dashboard/admin/pages/ProfilePage';
import RequireAuth from '@/features/auth/RequireAuth';
import SettingsPage from '@/features/dashboard/admin/pages/SettingsPage';
import Signup from './src/features/auth/public/pages/SignupPage';
import Tasks from '@/features/dashboard/admin/pages/Tasks';
import UserDashFlow from './src/components/public/navigation/DashFlow';
import UserDashboard from './src/features/dashboard/public/pages/DashboardPage';
import UserDomainsList from './src/features/domains/public/pages/DomainsList';
import UserLogin from './src/features/auth/public/pages/LoginPage';
import UserReferralsList from './src/features/users/public/pages/UsersListPage';
import UserTasks from '@/features/dashboard/public/pages/Tasks';
import UsersList from './src/features/users/admin/pages/UsersListPage';
import {roles} from '@/config/roles';

export const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<AppFlow />} errorElement={<Error404Page />}>
			{/* Public Routes */}
			<Route index element={<UserLogin />} />
			<Route path='signup' element={<Signup />} />
			<Route path='admin' element={<Login />} />

			<Route element={<PersistentLogin />}>
				{/* 
All routes are open to all users but the admin routes are only accessible  to admins
That way regular Users are able to access their routes but the admin routes are futher protected from them 
*/}
				{/* <Route element={<RequireAuth permitedRoles={[roles.admin, roles.user]} />}> */}
				{/* Protected Routes - Admin Routes */}
				{/* Have a admin/DashFlow, admin/DashPage and the respective data pages:
			- admin/Userslist - shows all users
			- admin/DomainsList - shows all domains
			- admin/AffilatesList - shows all affilates
			- admin/AllDomainsLst - shows all nft domains belonging to the contract address
			- Stats - system wide stats; 
			Total users, Today's users, Total domains, Today's Domains
			** Change the container path to admin-dash/
			*/}
				{/* <Route element={<Prefetch />}></Route> */}
				<Route element={<RequireAuth permitedRoles={[roles.admin]} />}>
					<Route path='admindash' element={<DashFlow />}>
						<Route index element={<Dashboard />} />
						{/* Features Routes */}
						<Route path='users'>
							<Route index element={<UsersList />} />
							{/* <Route path='profile' element={<ProfilePage />} />
							<Route path='settings' element={<SettingsPage />} /> */}
							<Route path='tasks' element={<Tasks />} />
							{/* <Route path=':id' element={<EditUser />} /> */}
						</Route>
						<Route path='affiliates'>
							<Route index element={<AffiliatesListPage />} />
							{/* <Route path=':id' element={<EditDomain />} /> */}
						</Route>
						<Route path='domains'>
							<Route index element={<DomainsList />} />
							<Route path=':id' element={<EditDomain />} />
						</Route>
					</Route>
				</Route>

				{/* Protected Routes - User Routes */}
				{/* Have a public/DashFlow, public/DashPage and the respective data pages:
			- public/Userslist - shows all users referred by the loggedin user
			- public/DomainsList - shows all domains by the auth user's referrals
			- public/AllDomainsList - shows all nft domains belonging to the contract address
			- Stats - Auth User's stats: 
			Total Referred users, Today's Referred users, Total Referral domains, Today's Referral Domains
			*/}
				<Route element={<RequireAuth permitedRoles={[roles.user]} />}>
					<Route path='dash' element={<UserDashFlow />}>
						<Route index element={<UserDashboard />} />
						{/* Features Routes */}
						<Route path='users'>
							<Route index element={<UserReferralsList />} />
							{/* <Route path='profile' element={<ProfilePage />} />
							<Route path='settings' element={<SettingsPage />} /> */}
							<Route path='tasks' element={<UserTasks />} />
							{/* <Route path=':id' element={<EditUser />} /> */}
						</Route>
						<Route path='domains'>
							<Route index element={<UserDomainsList />} />
							<Route path=':id' element={<EditDomain />} />
						</Route>
					</Route>
				</Route>
			</Route>
		</Route>,
	),
);
