import {type TableHeaderPropsType} from '@/types/propTypes';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

function TableHeader<K>({cols, sortHandler, sortDirection}: TableHeaderPropsType<K>) {
	return (
		<TableHead
			sx={{
				'& th': {
					fontWeight: 'bold',
					fontSize: '0.9rem',

					color: '#272833',
				},
			}}>
			<TableRow>
				{cols.map((col) =>
					col.accessorKey === 'createdDate' ? (
						<TableCell
							key={col.accessorKey}
							onClick={() => {
								sortHandler();
							}}>
							<TableSortLabel active={true} direction={sortDirection}>
								{col.header}
							</TableSortLabel>
						</TableCell>
					) : (
						<TableCell
							key={col.accessorKey}
							align={col.accessorKey === 'index' ? undefined : 'right'}>
							{col.header}
						</TableCell>
					),
				)}
			</TableRow>
		</TableHead>
	);
}

export default TableHeader;
