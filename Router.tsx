import './index.css';

import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

import AffiliatesListPage from '@/features/affiliates/pages/AffiliatesListPage';
import AppFlow from './src/components/admin/navigation/AppFlow';
import DashFlow from './src/components/admin/navigation/DashFlow';
import Dashboard from './src/features/dashboard/admin/pages/DashboardPage';
import DomainsList from './src/features/domains/admin/pages/DomainsList';
import EditDomain from './src/features/domains/admin/pages/EditDomain';
import Error404Page from '@/pages/Error404Page';
import PersistentLogin from '@/features/auth/PersistentLogin';
import RequireAuth from '@/features/auth/RequireAuth';
import Tasks from '@/features/dashboard/admin/pages/Tasks';
import UserDashFlow from './src/components/public/navigation/DashFlow';
import UserDashboard from './src/features/dashboard/public/pages/DashboardPage';
import UserDomainsList from './src/features/domains/public/pages/DomainsList';
import UserLogin from './src/features/auth/public/pages/LoginPage';
import UserReferralsList from './src/features/users/public/pages/UsersListPage';
import UserTasks from '@/features/dashboard/public/pages/Tasks';
import UsersList from './src/features/users/admin/pages/UsersListPage';
import {lazy} from 'react';
import {roles} from '@/config/roles';

const Signup = lazy(async () => import('@features/auth/public/pages/SignupPage'));
const SignupSuccess = lazy(async () => import('@features/auth/public/pages/SignupSuccessPage'));
const Login = lazy(async () => import('@features/auth/admin/pages/LoginPage'));

export const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<AppFlow />} errorElement={<Error404Page />}>
			{/* Public Routes */}
			<Route index element={<UserLogin />} />
			<Route path='signup' element={<Signup />} />
			<Route path='admin' element={<Login />} />
			<Route path='success' element={<SignupSuccess />} />

			<Route element={<PersistentLogin />}>
				<Route element={<RequireAuth permitedRoles={[roles.admin]} />}>
					<Route path='admindash' element={<DashFlow />}>
						<Route index element={<Dashboard />} />
						{/* Features Routes */}
						<Route path='users'>
							<Route index element={<UsersList />} />

							<Route path='tasks' element={<Tasks />} />
						</Route>
						<Route path='affiliates'>
							<Route index element={<AffiliatesListPage />} />
						</Route>
						<Route path='domains'>
							<Route index element={<DomainsList />} />
							<Route path=':id' element={<EditDomain />} />
						</Route>
					</Route>
				</Route>

				<Route element={<RequireAuth permitedRoles={[roles.user]} />}>
					<Route path='dash' element={<UserDashFlow />}>
						<Route index element={<UserDashboard />} />
						{/* Features Routes */}
						<Route path='users'>
							<Route index element={<UserReferralsList />} />

							<Route path='tasks' element={<UserTasks />} />
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
