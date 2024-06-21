import {type ColType} from '@/types/propTypes';

export const usersCols: ColType[] = [
	{
		header: 'SN',
		accessorKey: 'index',
		footer: 'SN',
	},
	{
		header: 'Date',
		accessorKey: 'createdDate',
		footer: 'Date',
	},
	{
		header: 'Username',
		accessorKey: 'username',
		footer: 'Username',
	},
	{
		header: 'First Name',
		accessorKey: 'firstName',
		footer: 'First Name',
	},
	{
		header: 'Last Name',
		accessorKey: 'lastName',
		footer: 'Last Name',
	},
	{
		header: 'Domains',
		accessorKey: 'domainsCount',
		footer: 'Domains',
	},
	{
		header: 'Wallet',
		accessorKey: 'wallet',
		footer: 'Wallet',
	},
	{
		header: 'Referrer',
		accessorKey: 'referrerUsername',
		footer: 'Referrer',
	},
];

export const domainCols: ColType[] = [
	{
		header: 'SN',
		accessorKey: 'index',
		footer: 'SN',
	},
	{
		header: 'Date',
		accessorKey: 'createdDate',
		footer: 'Date',
	},
	{
		header: 'Domain',
		accessorKey: 'name',
		footer: 'Domain',
	},
	{
		header: 'Username',
		accessorKey: 'username',
		footer: 'Username',
	},
	{
		header: 'First Name',
		accessorKey: 'firstName',
		footer: 'First Name',
	},
	{
		header: 'Last Name',
		accessorKey: 'lastName',
		footer: 'Last Name',
	},
];

export const affiliatesCols: ColType[] = [
	{
		header: 'SN',
		accessorKey: 'index',
		footer: 'SN',
	},
	{
		header: 'Date',
		accessorKey: 'createdDate',
		footer: 'Date',
	},
	{
		header: 'Username',
		accessorKey: 'username',
		footer: 'Username',
	},
	{
		header: 'First Name',
		accessorKey: 'firstName',
		footer: 'First Name',
	},
	{
		header: 'Last Name',
		accessorKey: 'lastName',
		footer: 'Last Name',
	},
	{
		header: 'Wallet',
		accessorKey: 'wallet',
		footer: 'Wallet',
	},
	{
		header: 'Total Referrals',
		accessorKey: 'totalReferralsCount',
		footer: 'Total Referrals',
	},
	{
		header: 'Today Referrals',
		accessorKey: 'todayReferralsCount',
		footer: 'Today Referrals',
	},
	{
		header: 'Total Domains',
		accessorKey: 'totalDomainsCount',
		footer: 'Total Domains',
	},
	{
		header: 'Today Domains',
		accessorKey: 'todayDomainsCount',
		footer: 'Today Domains',
	},
];
