import {Navigate, Outlet, useLocation} from 'react-router-dom';
import React, {type ReactNode} from 'react';

import useAuth from '@/hooks/useAuth';

export type RolesType = {
	permitedRoles: string[];
};

function RequireAuth({permitedRoles}: RolesType) {
	const location = useLocation();
	const {username, roles} = useAuth();
	let content: ReactNode;
	if (!username) {
		content = <Navigate to='/' state={{from: location}} replace />;
	}

	const validRole = roles?.some((role) => permitedRoles.includes(role));

	if (validRole) {
		content = <Outlet />;
	} else {
		content = <Navigate to='/' state={{from: location}} replace />;
	}

	return content;
}

export default RequireAuth;
