import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

const sortRow = (fields: any[], rows: Record<string, unknown>) => {
	const rowsArray = [];
	for (let index = 0; fields < fields.length; index++) {
		rowsArray.push(rows[index]);
	}

	return rowsArray;
};

function RenderCellData({cellData: row, index, fields}) {
	console.log(sortRow(fields, row));

	const cols = [];
	for (const [key, value] of Object.entries(row)) {
		console.log(`${key}: ${value}`);
	}

	for (const key in row) {
		// Console.log(row['wallet']);

		if (Object.hasOwn(row, key)) {
			// Fields.map((fieldName) =>
			// 	cols.push(
			// 		<TableCell key={row.id} align='right'>
			// 			{row[fieldName]}
			// 		</TableCell>
			// 	)
			// );
			// for (let index = 0; index < fields.length; index++) {
			// 	const fieldName = fields[index];
			// 	console.log(`${index} - ${fieldName}`);
			// 	cols.push(
			// 		<TableCell key={row.id} align='right'>
			// 			{row[fieldName]}
			// 		</TableCell>
			// 	);
			// }
			/** Working code */
			if (fields.includes(key)) {
				cols.push(
					<TableCell key={row.id} align='right'>
						{row[key]}
					</TableCell>,
				);
			}
			// Const element = object[key];
			// cols.push(row[key]);
			// if (
			// 	key === 'id' ||
			// 	key === 'timestamp' ||
			// 	key === 'username' ||
			// 	key === 'firstName' ||
			// 	key === 'lastName' ||
			// 	key === 'domains' ||
			// 	key === 'wallet' ||
			// 	key === 'referrerUsername'
			// ) {
			// 	cols.push(
			// 		<TableCell key={row._id} align='right'>
			// 			{row[key]}
			// 		</TableCell>
			// 	);
			// }
			// 			Switch (row[key]) {
			// 			    case 'id':
			// cols.push(
			//                     <TableCell key={row._id} align='right'>
			//                         {row['id']}
			//                     </TableCell>
			//                 );
			//                 case 'date':
			//                 cols.push(
			//                     <TableCell key={row._id} align='right'>
			//                         {row['date']}
			//                     </TableCell>);
			//                 case 'id':
			//                 case 'id':
			//                 case 'id':
			//                 case 'id':
			//                 case 'id':
			//                 case 'id':
			// 			    default:
			// 			        break;
			// 			}
		}
	}

	// Console.log(cols);

	return (
		<TableRow
			key={row.id}
			sx={{
				'&:last-child td, &:last-child th': {border: 0},
				'& td': {fontSize: '1rem'},
				'& .css-xyf8ax-MuiTableCell-root': {color: '#1443C3', fontWeight: 'bold'},
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
