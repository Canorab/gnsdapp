/* eslint-disable react/react-in-jsx-scope */
import './index.css';

import {Link, Route, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

import App from './App';
import AppFlow from './src/components/navigation/AppFlow';
import ConnectWallet from './src/features/auth/pages/ConnectWallet';
import DashFlow from './src/components/navigation/DashFlow';
import Dashboard from './src/features/dashboard/pages/DashboardPage';
import DomainsList from './src/features/domains/pages/DomainsList';
import EditDomain from './src/features/domains/pages/EditDomain';
import EditUser from './src/features/users/pages/EditUserPage';
import Login from './src/features/auth/pages/LoginPage';
import ProfilePage from '@/features/dashboard/pages/ProfilePage';
import SettingsPage from '@/features/dashboard/pages/SettingsPage';
import Signup from './src/features/auth/pages/SignupPage';
import Tasks from '@/features/dashboard/pages/Tasks';
import UsersList from './src/features/users/pages/UsersListPage';

// Import AppFlow from '@components/navigation/AppFlow';
// import ConnectWallet from 'features/auth/ConnectWallet';
// import DashFlow from '@components/navigation/DashFlow';
// import Dashboard from '@pages/Dashboard';
// import DomainsList from 'features/domains/DomainsList';
// import EditDomain from 'features/domains/EditDomain';
// import EditUser from 'features/users/EditUser';
// import Login from 'features/auth/Login';
// import Signup from 'features/auth/Signup';
// import UsersList from 'features/users/UsersList';

// Export const Router = createBrowserRouter(
//   createRoutesFromElements(
//     [
//       {
//         path: '/',
//         element: <App />,
//       },
//       {
//         path: '/about',
//         element: <div>About Page</div>,
//       },
//     ]
//   )
// );
export const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<AppFlow />}>
			{/* Public Routes */}
			<Route index element={<ConnectWallet />} />
			<Route path='login' element={<Login />} />
			<Route path='signup' element={<Signup />} />

			{/* Protected Routes */}
			<Route path='dash' element={<DashFlow />}>
				<Route index element={<Dashboard />} />
				{/* Features Routes */}
				<Route path='users'>
					<Route index element={<UsersList />} />
					<Route path='profile' element={<ProfilePage />} />
					<Route path='settings' element={<SettingsPage />} />
					<Route path='tasks' element={<Tasks />} />
					<Route path=':id' element={<EditUser />} />
				</Route>
				<Route path='domains'>
					<Route index element={<DomainsList />} />
					<Route path=':id' element={<EditDomain />} />
				</Route>
			</Route>
		</Route>,
	),
);
