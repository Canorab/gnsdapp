import React from 'react';
import UserRow from './UserRow';

/* Renders receved and fetcched users List data inside a table 
using the <UserRow /> component.
*/

function UsersTable() {
	return (
		<div
			style={{
				display: 'flex',
				flex: 1,
				flexDirection: 'column',
				gap: 15,
				borderWidth: 1,
				borderColor: '#2929a5',
				borderStyle: 'solid',
				margin: 30,
			}}>
			<h3 style={{color: 'brown'}}>Users Table</h3>
			<UserRow />
			<UserRow />
			<UserRow />
		</div>
	);
}

export default UsersTable;
