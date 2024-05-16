import React, {useEffect} from 'react';
import {embedCompetition, gnsTask} from '@/utils/embedGleamWidget';

function Tasks() {
	useEffect(() => {
		embedCompetition(document.querySelector('#gleam_competition'), gnsTask);
	}, []);
	return (
		<div className='task-page'>
			<div id='gleam_competition'></div>
		</div>
	);
}

export default Tasks;
