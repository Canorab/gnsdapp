import React, {type ReactNode} from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {makeDate, printDate, sortRows} from '@/utils/helpers';
import {type UserCellType, type ColsPropType, type TableData} from '@/types/propTypes';

// Function RenderCellData({data: row, index, fields}: Pick<TableData, 'data' | 'index' | 'fields'>) {
function RenderCellData({
	data,
	cols,
	index,
}: UserCellType & Pick<TableData, 'index'> & Pick<ColsPropType, 'cols'>) {
	// Const createdDate = makeDate(data.createdAt);
	const createdDate = printDate(data.createdAt);
	// Console.log(new Date(data.createdAt));
	const dataWithindex = {index, createdDate, ...data}; // CreatedDate,
	// console.log(dataWithindex);
	const cells: ReactNode[] = [];
	// Const rowKeys = Object.keys(data);
	const rowKeys = Object.keys(dataWithindex);
	// Console.log(rowKeys);
	const fields = cols.map((item) => item.accessorkey);

	const sortedRowKeys = sortRows(fields, rowKeys);
	// Console.log(sortedRowKeys);

	sortedRowKeys.map((key, i) => {
		cells.push(
			<TableCell
				key={i}
				// Align='right'
				align={key === 'index' || key === 'createdDate' ? 'left' : 'right'}
				className={
					key === 'domainsCount' || key === 'referrerUsername' || key === 'name'
						? 'highlightedcell'
						: ''
				}>
				{/* {data[key]} */}

				{
					// @ts-ignore
					dataWithindex[key]
				}
			</TableCell>,
		);
		return key;
	});

	return (
		<TableRow
			key={data.id}
			sx={{
				'&:last-child td, &:last-child th': {border: 0},
				'& td': {fontSize: '1rem'},
				'& td.highlightedcell.css-177gid-MuiTableCell-root': {
					// color: ' #121213',
					color: ' #ffff',
					fontWeight: 'bold',
				}, // #1da1f2
			}}>
			{cells}
		</TableRow>
	);
}

export default RenderCellData;
