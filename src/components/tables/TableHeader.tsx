import {type ColsPropType} from '@/types/propTypes';
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

function TableHeader({cols, sortHandler, sortDirection}: ColsPropType) {
	return (
		<TableHead
			sx={{
				'& th': {
					fontWeight: 'bold',
					fontSize: '0.9rem',
					background: '#e6e6e6',
					color: '#272833',
				},
			}}>
			<TableRow>
				{cols.map((col) =>
					col.accessorkey === 'timestamp' ? (
						<TableCell
							key={col.accessorkey}
							onClick={() => {
								sortHandler();
							}}>
							<TableSortLabel active={true} direction={sortDirection}>
								{col.header}
							</TableSortLabel>
						</TableCell>
					) : (
						<TableCell key={col.accessorkey} align={col.accessorkey === 'id' ? undefined : 'right'}>
							{col.header}
						</TableCell>
					),
				)}
			</TableRow>
		</TableHead>
	);
}

export default TableHeader;
