import React, {type ReactNode} from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {sortRows} from '@/utils/helpers';
import {type ColsPropType, type TableData} from '@/types/propTypes';

// Function RenderCellData({data: row, index, fields}: Pick<TableData, 'data' | 'index' | 'fields'>) {
function RenderCellData({data, cols}: Pick<TableData, 'data'> & Pick<ColsPropType, 'cols'>) {
	const cells: ReactNode[] = [];
	const rowKeys = Object.keys(data);
	const fields = cols.map((item) => item.accessorkey);

	const sortedRowKeys = sortRows(fields, rowKeys);
	// Console.log(cells);

	sortedRowKeys.map((key, i) => {
		cells.push(
			<TableCell
				key={i}
				// Align='right'
				align={key === 'id' || key === 'timestamp' ? 'left' : 'right'}
				className={
					key === 'domains' || key === 'referrerUsername' || key === 'value'
						? 'highlightedcell'
						: ''
				}>
				{data[key]}
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
				'& td.highlightedcell.css-177gid-MuiTableCell-root': {color: '#1da1f2', fontWeight: 'bold'},
			}}>
			{cells}
		</TableRow>
	);
}

export default RenderCellData;
