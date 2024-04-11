import {type UserType, type TableData, type ColsPropType} from '@/types/propTypes';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Table, TablePagination} from '@mui/material';
// Import IconButton from '@mui/material/IconButton';

import React, {
	useState,
	type ReactNode,
	type MouseEvent,
	type ChangeEvent,
	useEffect,
	useCallback,
} from 'react';
import UserThead from '@/features/users/templates/table/UserThead';
import TableContent from './TableContent';
import TableHeader from './TableHeader';
import {TablePaginationActions} from '@/utils/TablePaginationActions';
import TableContentGeneric from './TableContentGeneric';

/*
This table component should be used to wrap the appropriate table Thead and Row components from the feature
who's data you want to display. E.G To display users using this table component, wrap
the <UserThead/> and the <UserRow/> components inside this component. 
You may alsoi include a CTA heading with Section title and s view All> btn to the extreme right.
*/

// const data = {
// 	users: [
// 		{
// 			id: 10,
// 			username: 'Aff1',
// 			firstName: 'Affiliate',
// 			lastName: 'One',
// 			email: 'affone@example.com',
// 			referrerId: '01',
// 			referrerUsername: 'Admin1',
// 			wallet: '0z022gjidsx56dr67ez',
// 			timestamp: '2022-01-01T00:00:00Z',
// 		},
// 		{
// 			id: 10,
// 			username: 'Mano1',
// 			firstName: 'Manuel',
// 			lastName: 'Perez',
// 			email: 'mperz@example.com',
// 			referrerId: '1',
// 			referrerUsername: 'aff1',
// 			wallet: '0x022gjidsx56dr67er',
// 			timestamp: '2022-01-01T00:00:00Z',
// 		},
// 	],
// };

// function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
// 	return {name, calories, fat, carbs, protein};
// }

// const rows = [
// 	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// 	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// 	createData('Eclair', 262, 16.0, 24, 6.0),
// 	createData('Cupcake', 305, 3.7, 67, 4.3),
// 	createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

function BaseTable({cols, data}: Pick<ColsPropType, 'cols'> & Pick<TableData, 'data'>) {
	/* Navigation & Pagination */
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event: MouseEvent<HTMLButtonElement> | undefined, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	/* Sorting */
	const [rowData, setRowData] = useState(data);
	const [orderDirection, setOrderDirection] = useState<'desc' | 'asc' | undefined>('asc');

	useEffect(() => {
		setRowData(data);
	}, [data]);

	// UseEffect(() => {
	// 	// SetRowData(data);
	// 	// handleSortRequest();
	// console.log(orderDirection);
	// console.log(rowData);
	// }, [orderDirection]);

	const makeDate = (dateString: string) => new Date(dateString); // TODO: send to utils

	// Console.log(rowData);
	// .sort((a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1))
	const sortArray = (arr: UserType[], orderBy: 'desc' | 'asc' | undefined) => {
		switch (orderBy) {
			case 'desc':
				return arr.sort((a, b) => (makeDate(a.timestamp) < makeDate(b.timestamp) ? -1 : 1));
			// Return arr.sort((a, b) =>
			// 	makeDate(a.timestamp) < makeDate(b.timestamp)
			// 		? 1
			// 		: makeDate(b.timestamp) < makeDate(a.timestamp)
			// 			? -1
			// 			: 0
			// );
			case 'asc':
			default:
				return arr.sort((a, b) => (makeDate(a.timestamp) > makeDate(b.timestamp) ? -1 : 1));
			// Return arr.sort((a, b) =>
			// 	makeDate(a.timestamp) > makeDate(b.timestamp)
			// 		? 1
			// 		: makeDate(b.timestamp) > makeDate(a.timestamp)
			// 			? -1
			// 			: 0
			// );
		}

		// If (orderBy === 'asc') {
		// 	return arr.sort((a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1));
		// }

		// return arr.sort((a, b) => (new Date(a.timestamp) > new Date(b.timestamp) ? -1 : 1));
	};

	// Const sortArray = (arr: UserType[], orderBy: 'desc' | 'asc' | undefined) => {
	// 	switch (orderBy) {
	// 		case 'desc':
	// 			return arr.sort((a, b) =>
	// 				a.timestamp < b.timestamp ? 1 : b.timestamp < a.timestamp ? -1 : 0
	// 			);
	// 		case 'asc':
	// 		default:
	// 			return arr.sort((a, b) =>
	// 				a.timestamp > b.timestamp ? 1 : b.timestamp > a.timestamp ? -1 : 0
	// 			);
	// 	}
	// };

	// const handleSortRequest = useCallback((data: UserType[]) => {
	// 	setRowData(sortArray(data, orderDirection));
	// 	setOrderDirection(orderDirection === 'asc' ? 'desc' : 'asc');
	// }, []);
	const handleSortRequest = () => {
		setRowData(sortArray(data, orderDirection));
		setOrderDirection(orderDirection === 'asc' ? 'desc' : 'asc');
		// Console.log(orderDirection);
	};

	return (
		// Component={Paper}
		<Paper sx={{height: '100%'}}>
			<TableContainer sx={{maxHeight: 500}}>
				<Table sx={{minWidth: 650}} aria-label='simple table' stickyHeader>
					{/* <UserThead cols={cols} /> */}
					<TableHeader cols={cols} sortHandler={handleSortRequest} sortDirection={orderDirection} />
					{/* <TableContent data={rowData} page={page} rowsPerPage={rowsPerPage} /> */}
					{/* <TableContent data={rowData} page={page} rowsPerPage={rowsPerPage} /> */}
					<TableContentGeneric data={rowData} page={page} rowsPerPage={rowsPerPage} />
					{/* <TableContent data={data} page={page} rowsPerPage={rowsPerPage} /> */}
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25, {label: 'All', value: -1}]}
				component='div'
				count={data.length}
				rowsPerPage={rowsPerPage}
				page={page}
				slotProps={{
					select: {
						inputProps: {
							'aria-label': 'rows per page',
						},
						native: true,
					},
				}}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
				ActionsComponent={TablePaginationActions}
			/>
		</Paper>
	);
}

export default BaseTable;
