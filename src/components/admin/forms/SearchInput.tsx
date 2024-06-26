import {Person2, Search} from '@mui/icons-material';

import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import React from 'react';

function SearchInput({
	changeHandler,
	label,
}: {
	changeHandler: (value: string) => void;
	label: string;
}) {
	return (
		<Paper
			component='form'
			sx={{
				p: '2px 4px',
				display: 'flex',
				alignItems: 'center',
				width: '80%',
				justifySelf: 'center',
				alignSelf: 'center',
			}}>
			<IconButton sx={{p: '10px'}} aria-label='menu'>
				<Person2 />
			</IconButton>
			<InputBase
				sx={{ml: 1, flex: 1}}
				placeholder={label}
				inputProps={{'aria-label': `${label}`}}
				// OnChange={(e) => changeHandler(e.target.value)}
				onChange={(e) => {
					changeHandler(e.target.value);
				}}
			/>

			<Divider sx={{height: 28, m: 0.5}} orientation='vertical' />
			<IconButton type='button' sx={{p: '10px'}} aria-label='search'>
				<Search />
			</IconButton>
		</Paper>
	);
}

export default SearchInput;
