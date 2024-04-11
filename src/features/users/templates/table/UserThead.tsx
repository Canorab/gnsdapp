import {type ColsType} from '@/types/propTypes';
import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
/*
This should server as the table head of any table constructed toi list users
so construct this table head to have the following cols head (th)
username, firstName, LastName, domans, referrer, wallet, emailAddress
*/

function UserThead({cols}: ColsType) {
	return (
		<TableHead
			sx={{
				'& th': {
					fontWeight: 'bold',
					fontSize: '0.9rem',
					background: '#e6e6e6',
					color: '#272833',
				},
			}}>
			<TableRow>
				<TableCell> {cols.id} </TableCell>
				<TableCell align='right'>{cols.username}</TableCell>
				<TableCell align='right'>{cols.firstName}</TableCell>
				<TableCell align='right'>{cols.lastName}</TableCell>
				<TableCell align='right'>{cols.domains}</TableCell>
				<TableCell align='right'>{cols.wallet}</TableCell>
				<TableCell align='right'>{cols.referrerUsername}</TableCell>
				{/* <TableCell align='right'>Date&nbsp;(g)</TableCell> */}
			</TableRow>
		</TableHead>
	);
}

export default UserThead;
