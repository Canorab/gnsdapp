import {Navigate, Outlet, useLocation} from 'react-router-dom';
import React, {type ReactNode} from 'react';

import useAuth from '@/hooks/useAuth';

export type RolesType = {
	// SystemRoles: {
	// 	employee: string;
	// 	manager: string;
	// 	admin: string;
	// };
	permitedRoles: string[];
};

function RequireAuth({permitedRoles}: RolesType) {
	const location = useLocation();
	const {username, roles} = useAuth();
	let content: ReactNode;
	if (!username) {
		content = <Navigate to='/' state={{from: location}} replace />;
	}
	// Console.log(roles);

	// const content = roles.some((role) => allowedRoles?.includes(role)) ? (
	//   <Outlet />
	// ) : (
	//   <Navigate to="/login" state={{ from: location }} replace />
	// );
	const validRole = roles?.some((role) => permitedRoles.includes(role));
	// Let content: ReactNode;
	if (validRole) {
		content = <Outlet />;
	} else {
		// Content = <Navigate to='/login' state={{from: location}} replace />;
		content = <Navigate to='/' state={{from: location}} replace />;
	}

	return content;
}

export default RequireAuth;
