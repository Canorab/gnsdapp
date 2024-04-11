import {type UserType, type UserRowType, type TableData} from '@/types/propTypes';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';

function UserRow({data: user}) {
	// Console.log(user);
	return (
		// <div style={{flex: 1, background: '#a9a2a9ba'}}>
		// 	<h2>Single User Row</h2>
		// </div>
		<TableRow
			key={user.id}
			sx={{
				'&:last-child td, &:last-child th': {border: 0},
				'& td': {fontSize: '1rem'},
				'& td.domain.css-177gid-MuiTableCell-root': {color: '#1443C3', fontWeight: 'bold'},
				'& td.referrer.css-177gid-MuiTableCell-root': {color: '#1443C3', fontWeight: 'bold'},
			}}>
			<TableCell component='th' scope='row'>
				{user.id}
			</TableCell>
			<TableCell component='th' scope='row'>
				{user.timestamp}
			</TableCell>
			<TableCell align='right'>{user.username}</TableCell>
			<TableCell align='right'>{user.firstName}</TableCell>
			<TableCell align='right'>{user.lastName}</TableCell>
			<TableCell align='right' itemType='number' className='domain'>
				{user.domains}
			</TableCell>
			<TableCell align='right'>{user.wallet}</TableCell>
			<TableCell align='right' className='referrer'>
				{user.referrerUsername}
			</TableCell>
			{/* <TableCell align='right'>{user.email}</TableCell> */}
		</TableRow>
	);
}

export default UserRow;
