import {type UserType} from '@/types/propTypes';

const cols = {
	id: 'ID',
	username: 'Username',
	firstName: 'First Name',
	lastName: 'Last Name',
	email: 'Email',
	wallet: 'Wallet',
	domains: 'Domains',
	referrerUsername: 'Referrer',
};

const users: UserType[] = [
	{
		id: 10,
		username: 'Aff1',
		firstName: 'Affiliate',
		lastName: 'One',
		email: 'affone@example.com',
		referrerId: '01',
		referrerUsername: 'Admin1',
		domains: 20,
		wallet: '0z022gjidsx56dr67ez',
		timestamp: '2022-01-01T00:00:00Z',
	},
	{
		id: 12,
		username: 'Mano1',
		firstName: 'Manuel',
		lastName: 'Perez',
		email: 'mperz@example.com',
		referrerId: '1',
		referrerUsername: 'aff1',
		domains: 15,
		wallet: '0x022gjidsx56dr67er',
		timestamp: '2022-01-01T00:00:00Z',
	},
];
