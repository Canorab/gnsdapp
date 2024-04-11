import UserRow from '@/features/users/templates/table/UserRow';
import {type TableData, type UserRowType, type UsersData} from '@/types/propTypes';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';

function TableContent({data, page, rowsPerPage}: TableData) {
	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

	return (
		<TableBody>
			{data.length === 0 && (
				<TableRow>
					<TableCell component='td' scope='row' colSpan={8}>
						No record found
					</TableCell>
				</TableRow>
			)}
			{(rowsPerPage > 0
				? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
				: data
			).map((row, index) => (
				// <UserRow key={row.id} data={row} />
				<TableRow
					key={row.id}
					sx={{
						'&:last-child td, &:last-child th': {border: 0},
						'& td': {fontSize: '1rem'},
						'& .css-xyf8ax-MuiTableCell-root': {color: '#1443C3', fontWeight: 'bold'},
					}}>
					<TableCell component='th' scope='row'>
						{row.id}
					</TableCell>
					<TableCell component='th' scope='row'>
						{row.timestamp}
					</TableCell>
					<TableCell scope='row' align='right'>
						{row.username}
					</TableCell>
					<TableCell align='right'>{row.firstName}</TableCell>
					<TableCell align='right'>{row.lastName}</TableCell>
					<TableCell
						align='right'
						sx={{
							td: {background: 'black'},
						}}>
						{row.domains}
					</TableCell>
					<TableCell align='right'>{row.wallet}</TableCell>
					<TableCell align='right'>{row.referrerUsername}</TableCell>
					{/* <TableCell align='right'>{row.timestamp}</TableCell> */}
					{/* <TableCell align='right'>{row.timestamp}</TableCell> */}
				</TableRow>
			))}
			{emptyRows > 0 && (
				<TableRow style={{height: 53 * emptyRows}}>
					<TableCell colSpan={6} />
				</TableRow>
			)}
		</TableBody>

	// <TableBody>
	// 	{users.map((user) => (
	// 		<UserRow key={user.id} user={user} />
	// 	))}
	// </TableBody>
	);
}

export default TableContent;
