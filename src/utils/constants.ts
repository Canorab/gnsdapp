import {type ColType} from '@/types/propTypes';

export const usersCols: ColType[] = [
	{
		header: 'ID',
		accessorkey: 'id',
		footer: 'ID',
	},
	{
		header: 'Date',
		accessorkey: 'timestamp',
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
		accessorkey: 'domains',
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
		header: 'ID',
		accessorkey: 'id',
		footer: 'ID',
	},
	{
		header: 'Date',
		accessorkey: 'timestamp',
		footer: 'Date',
	},
	{
		header: 'Domain',
		accessorkey: 'value',
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
