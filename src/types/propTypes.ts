import type {PropsWithChildren, ReactNode} from 'react';

export type DataType = {
	data: {
		message: string;
	};
};

export type StatProps = {
	id: number;
	label: string;
	value: number;
	timestamp: string;
	icon: string;
};

export type StatBlock = Record<string, unknown>;

export type SidebarProps = {
	children: ReactNode;
};

export type SidebarLinkProps = {
	icon: ReactNode;
	label: string;
	active?: boolean;
	alert?: boolean;
	link: string;
};

export type ProfileHeaderProps = {
	username: string;
	dashTip: string;
};

export type Welcomeprops = {
	username: string;
	dashTip: string;
};

export type ProfileInfoProps = {
	username: string;
};

export type AvatarProps = {
	initials: string;
	borderRadius?: number;
	width?: number;
	height?: number;
};

// Table
// export type TableProps = PropsWithChildren & {
// 	width?: number;
// 	// Children: ReactNode;
// };

// Export type UserRowType = {
// 	user: {
// 		id: number;
// 		username: string;
// 		first_name: string;
// 		last_name: string;
// 		email: string;
// 		wallet: string;
// 		referrer_id: Record<string, unknown>;
// 		referrer_username: string;
// 		timestamp: string;
// 	};
// };
export type UserRowType = {
	key?: number;
	user: {
		id: number;
		username: string;
		firstName: string;
		lastName: string;
		email: string;
		wallet: string;
		referrerId: Record<string, unknown>;
		referrerUsername: string;
		timestamp: string;
	};
};

export type UsersData = PropsWithChildren & {
	data: Array<{
		id: number;
		username: string;
		firstName: string;
		lastName: string;
		email: string;
		domains: number;
		wallet: string;
		referrerId: string;
		referrerUsername: string;
		timestamp: string;
	}>;
};

//    For (let index = 0; index < fields.length; index++) {
//         const fieldName = fields[index];

//         cols.push(
// 			<TableCell key={row.id} align='right'>
// 				{row[fieldName]}
// 			</TableCell>
// 		);
//     }

// Export type UsersData = PropsWithChildren & {
// 	[]: UserRowType[];
// };

// export type ColsType = {
// 	cols: {
// 		id: string;
// 		username: string;
// 		firstName: string;
// 		lastName: string;
// 		email: string;
// 		domains: string;
// 		wallet: string;
// 		referrerId: string;
// 		referrerUsername: string;
// 		timestamp: string;
// 	};
// };
export type ColType = {header: string; accessorkey: string; footer: string};
export type UserType = {
	id: string;
	_id: string;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	domainsCount: number;
	wallet: string;
	referrerId: string;
	referrerUsername: string;
	createdAt: string;
	updatedAt: string;
	active: boolean;
	// Timestamp: string;
};

export type UserCellType = {
	data: {
		id: string;
		_id: string;
		username: string;
		firstName: string;
		lastName: string;
		email: string;
		domainsCount: number;
		wallet: string;
		referrerId: string;
		referrerUsername: string;
		createdAt: string;
		updatedAt: string;
		active: boolean;
		// Timestamp: string;
	};
};

export type DomainType = {
	id: string;
	_id: string;
	userId: string;
	username: string;
	firstName: string;
	lastName: string;
	name: string;
	image_url: string;
	wallet: string;
	data: {
		name: string;
		description: string;
		image_url: string;
		identifier: string;
	};
	createdAt: string;
	updatedAt: string;
};

export type AffiliateType = UserType & {
	referrals: UserType[];
	referralsDomains: DomainType[];
	todayReferrals: UserType[];
	todayReferralsDomains: DomainType[];
	totalReferralsCount: number;
	todayReferralsCount: number;
	totalDomainsCount: number;
	todayDomainsCount: number;
};

export type StatType = {
	id: string;
	totalusers: number;
	todayUsers: number;
	totalDomains: number;
	todayDomains: number;
};

export type ColsPropType = PropsWithChildren & {
	cols: ColType[];
	sortHandler: () => void;
	sortDirection: 'desc' | 'asc' | undefined;
};
export type TableData = PropsWithChildren & {
	data: UserType[] | DomainType[];
	// DomainData: DomainType;
	// userData: UserType;
	fields?: string[];
	page: number;
	rowsPerPage: number;
	index?: number;
};

export type TablePaginationActionsProps = {
	count: number;
	page: number;
	rowsPerPage: number;
	onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
};

// Export type TableData = PropsWithChildren & UserType[] & ColType[]
// & {page?: number;
// 	rowsPerPage?: number;}

// Export type TableData = PropsWithChildren & UsersData & ColsType;
// export type TableData = PropsWithChildren & UsersData & ColType[];
