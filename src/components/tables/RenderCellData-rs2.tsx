import React, {type ReactNode} from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {sortRows} from '@/utils/helpers';

function RenderCellData({cellData: row, index, fields}) {
	const cols: ReactNode[] = [];
	const rowKeys = Object.keys(row);
	const sortedRowKeys = sortRows(fields, rowKeys);
	// Console.log(sortedRowKeys);

	sortedRowKeys.map(
		(key) =>
			cols.push(
				<TableCell
					key={row.id}
					align='right'
					className={key === 'domains' || key === 'referrerUsername' ? 'highlightedcell' : ''}>
					{row[key]}
				</TableCell>,
			),

		// 	<TableCell key={row.id} align='right'>
		// 	{row[key]}
		// </TableCell>
	);

	// For (const key in row) {
	// 	// Console.log(row['wallet']);

	// 	if (Object.hasOwn(row, key)) {
	// 		/** Working code */
	// 		if (fields.includes(key)) {
	// cols.push(
	// 	<TableCell key={row.id} align='right'>
	// 		{row[key]}
	// 	</TableCell>
	// );
	// 			// If (key === 'domains') {
	// 			// 	<TableCell key={row.id} align='right' style={{color: '#1443C3', fontWeight: 'bold'}}>
	// 			// 		{row[key]}
	// 			// 	</TableCell>;
	// 			// }
	// 		}
	// 	}
	// }

	// Console.log(cols);

	return (
		<TableRow
			key={row.id}
			sx={{
				'&:last-child td, &:last-child th': {border: 0},
				'& td': {fontSize: '1rem'},
				// '& .css-xyf8ax-MuiTableCell-root': {color: '#1443C3', fontWeight: 'bold'},
				'& td.domain.css-177gid-MuiTableCell-root': {color: '#1443C3', fontWeight: 'bold'},
				'& td.referrer.css-177gid-MuiTableCell-root': {color: '#1443C3', fontWeight: 'bold'},
				'& td.highlightedcell.css-177gid-MuiTableCell-root': {color: '#1443C3', fontWeight: 'bold'},
			}}>
			{cols}
		</TableRow>
		// <TableRow
		// 	key={row.id}
		// 	sx={{
		// 		'&:last-child td, &:last-child th': {border: 0},
		// 		'& td': {fontSize: '1rem'},
		// 		'& .css-xyf8ax-MuiTableCell-root': {color: '#1443C3', fontWeight: 'bold'},
		// 	}}>
		// 	<TableCell component='th' scope='row'>
		// 		{index + 1}
		// 	</TableCell>
		// 	<TableCell component='th' scope='row'>
		// 		{row.timestamp}
		// 	</TableCell>
		// 	<TableCell scope='row' align='right'>
		// 		{row.username}
		// 	</TableCell>
		// 	<TableCell align='right'>{row.firstName}</TableCell>
		// 	<TableCell align='right'>{row.lastName}</TableCell>
		// 	<TableCell
		// 		align='right'
		// 		sx={{
		// 			td: {background: 'black'},
		// 		}}>
		// 		{row.domains}
		// 	</TableCell>
		// 	<TableCell align='right'>{row.wallet}</TableCell>
		// 	<TableCell align='right'>{row.referrerUsername}</TableCell>
		// 	{/* <TableCell align='right'>{row.timestamp}</TableCell> */}
		// 	{/* <TableCell align='right'>{row.timestamp}</TableCell> */}
		// </TableRow>
	);
}

export default RenderCellData;
