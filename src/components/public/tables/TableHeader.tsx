import {type TableHeaderPropsType, type ColsPropType} from '@/types/propTypes';
import React, {useState} from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

/*
This should server as the table head of any table constructed toi list users
so construct this table head to have the following cols head (th)
username, firstName, LastName, domans, referrer, wallet, emailAddress
*/

function TableHeader<K>({cols, sortHandler, sortDirection}: TableHeaderPropsType<K>) {
	return (
		<TableHead
			sx={{
				'& th': {
					fontWeight: 'bold',
					fontSize: '0.9rem',
					background: 'rgba(255, 255, 255, 0.3)',
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
