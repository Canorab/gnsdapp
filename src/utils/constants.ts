import {type ColType} from '@/types/propTypes';

export const usersCols: ColType[] = [
	{
		header: 'SN',
		accessorkey: 'index',
		footer: 'SN',
	},
	{
		header: 'Date',
		accessorkey: 'createdDate',
		footer: 'Date',
	},
	{
		header: 'Username',
		accessorkey: 'username',
		footer: 'Username',
	},
	{
		header: 'First Name',
		accessorkey: 'firstName',
		footer: 'First Name',
	},
	{
		header: 'Last Name',
		accessorkey: 'lastName',
		footer: 'Last Name',
	},
	{
		header: 'Domains',
		accessorkey: 'domainsCount',
		footer: 'Domains',
	},
	{
		header: 'Wallet',
		accessorkey: 'wallet',
		footer: 'Wallet',
	},
	{
		header: 'Referrer',
		accessorkey: 'referrerUsername',
		footer: 'Referrer',
	},
];

export const domainCols: ColType[] = [
	{
		header: 'SN',
		accessorkey: 'index',
		footer: 'SN',
	},
	{
		header: 'Date',
		accessorkey: 'createdDate',
		footer: 'Date',
	},
	{
		header: 'Domain',
		accessorkey: 'name',
		footer: 'Domain',
	},
	{
		header: 'Username',
		accessorkey: 'username',
		footer: 'Username',
	},
	{
		header: 'First Name',
		accessorkey: 'firstName',
		footer: 'First Name',
	},
	{
		header: 'Last Name',
		accessorkey: 'lastName',
		footer: 'Last Name',
	},
];

export const affiliatesCols: ColType[] = [
	{
		header: 'SN',
		accessorkey: 'index',
		footer: 'SN',
	},
	{
		header: 'Date',
		accessorkey: 'createdDate',
		footer: 'Date',
	},
	{
		header: 'Username',
		accessorkey: 'username',
		footer: 'Username',
	},
	{
		header: 'First Name',
		accessorkey: 'firstName',
		footer: 'First Name',
	},
	{
		header: 'Last Name',
		accessorkey: 'lastName',
		footer: 'Last Name',
	},
	{
		header: 'Wallet',
		accessorkey: 'wallet',
		footer: 'Wallet',
	},
	{
		header: 'Total Referrals',
		accessorkey: 'totalReferralsCount',
		footer: 'Total Referrals',
	},
	{
		header: 'Today Referrals',
		accessorkey: 'todayReferralsCount',
		footer: 'Today Referrals',
	},
	{
		header: 'Total Domains',
		accessorkey: 'totalDomainsCount',
		footer: 'Total Domains',
	},
	{
		header: 'Today Domains',
		accessorkey: 'todayDomainsCount',
		footer: 'Today Domains',
	},
];
