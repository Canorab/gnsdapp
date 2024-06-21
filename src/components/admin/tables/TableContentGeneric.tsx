import {type TableContentPropsType} from '@/types/propTypes';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import RenderCellData from './RenderCellData';

function TableContent<K, T>({cols, data, page, rowsPerPage}: TableContentPropsType<K, T>) {
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
				<RenderCellData key={row.id} data={row} cols={cols} index={index + 1} />
			))}
			{emptyRows > 0 && (
				<TableRow style={{height: 53 * emptyRows}}>
					<TableCell colSpan={6} />
				</TableRow>
			)}
		</TableBody>
	);
}

export default TableContent;
