import {type ReactNode} from 'react';

import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {printDate, sortRows} from '@/utils/helpers';
import {TableCellPropsType} from '@/types/propTypes';

function RenderCellData<K, T>({data, cols, index}: TableCellPropsType<K, T>) {
	const createdDate = printDate(data.createdAt);

	const dataWithindex = {index, createdDate, ...data};

	const cells: ReactNode[] = [];

	const rowKeys = Object.keys(dataWithindex);

	const fields = cols.map((item) => item.accessorKey);

	const sortedRowKeys = sortRows(fields, rowKeys);

	sortedRowKeys.map((key, i) => {
		cells.push(
			<TableCell
				key={i}
				align={key === 'index' || key === 'createdDate' ? 'left' : 'right'}
				className={
					key === 'domainsCount' || key === 'referrerUsername' || key === 'name'
						? 'highlightedcell'
						: ''
				}>
				{dataWithindex[key as keyof typeof dataWithindex] as string}
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
					color: ' #ffff',
					fontWeight: 'bold',
				},
			}}>
			{cells}
		</TableRow>
	);
}

export default RenderCellData;
