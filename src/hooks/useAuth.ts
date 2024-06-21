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

	let isAdmin = false;
	let status = 'user';

	if (token) {
		const decoded = jwtDecode<CustomJwtType>(token);
		const {username, roles, wallet, email} = decoded.userInfo as UserInfoType;

		isAdmin = roles.includes('admin');

		if (isAdmin) status = 'admin';
		return {username, roles, wallet, email, isAdmin, status}; // Removed IsManager,
	}

	return {username: '', roles: [], wallet: '', email: '', isAdmin, status}; // Removed IsManager,
};

export default useAuth;
