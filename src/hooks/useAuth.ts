import {type JwtPayload, jwtDecode} from 'jwt-decode';

import {selectCurrentToken} from '@/features/auth/authSlice';
import {useSelector} from 'react-redux';

type UserInfoType = {
	id: string;
	username: string;
	roles: string[];
	wallet: string;
	email: string;
};

type CustomJwtType = {
	userInfo: UserInfoType | JwtPayload;
};

const useAuth = () => {
	const token = useSelector(selectCurrentToken);
	// Let isManager = false;
	let isAdmin = false;
	let status = 'user';

	if (token) {
		const decoded = jwtDecode<CustomJwtType>(token);
		const {username, roles, wallet, email} = decoded.userInfo as UserInfoType;
		// Console.log(roles);
		// isManager = roles.includes('Manager');
		isAdmin = roles.includes('admin');

		// If (isManager) status = 'Manager';
		if (isAdmin) status = 'admin';
		return {username, roles, wallet, email, isAdmin, status}; // Removed IsManager,
	}

	return {username: '', roles: [], wallet: '', email: '', isAdmin, status}; // Removed IsManager,
};

export default useAuth;
