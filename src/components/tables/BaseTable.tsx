import {type UserType, type TableData, type ColsPropType} from '@/types/propTypes';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';

import React, {useState, type MouseEvent, type ChangeEvent, useEffect} from 'react';
import TableHeader from './TableHeader';
import {TablePaginationActions} from '@/utils/TablePaginationActions';
import TableContentGeneric from './TableContentGeneric';
import {makeDate} from '@/utils/helpers';
import Table from '@mui/material/Table';
import TablePagination from '@mui/material/TablePagination';

/*
This table component should be used to wrap the appropriate table Thead and Row components from the feature
who's data you want to display. E.G To display users using this table component, wrap
the <UserThead/> and the <UserRow/> components inside this component. 
You may alsoi include a CTA heading with Section title and s view All> btn to the extreme right.
*/

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

	const sortArray = (arr: UserType[], orderBy: 'desc' | 'asc' | undefined) => {
		switch (orderBy) {
			case 'desc':
				return arr.sort((a, b) => (makeDate(a.timestamp) < makeDate(b.timestamp) ? -1 : 1));
			case 'asc':
			default:
				return arr.sort((a, b) => (makeDate(a.timestamp) > makeDate(b.timestamp) ? -1 : 1));
		}
	};

	const handleSortRequest = () => {
		setRowData(sortArray(data, orderDirection));
		setOrderDirection(orderDirection === 'asc' ? 'desc' : 'asc');
		// Console.log(orderDirection);
	};

	return (
		// Component={Paper}
		<Paper sx={{height: '100%'}}>
			<TableContainer sx={{maxHeight: 500}}>
				<Table sx={{minWidth: 650}} aria-label='Table' stickyHeader>
					<TableHeader cols={cols} sortHandler={handleSortRequest} sortDirection={orderDirection} />
					{/* <TableContent data={rowData} page={page} rowsPerPage={rowsPerPage} /> */}
					<TableContentGeneric data={rowData} cols={cols} page={page} rowsPerPage={rowsPerPage} />
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
