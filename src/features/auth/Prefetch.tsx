import React, {useEffect} from 'react';

import {Outlet} from 'react-router-dom';
import {store} from '@/app/store';
import usersApiSlice from '../users/usersApiSlice';

function Prefetch() {
	useEffect(() => {
		// Prefetch All Users
		store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', {force: true}));
		// Store.dispatch(
		//   usersApiSlice.util.prefetch("getUsers", "usersList", { force: true })
		// );

		// return () => {
		//   console.log("unsubscribing ...");
		//   notes.unsubscribe();
		//   users.unsubscribe();
		// };
	}, []);

	return <Outlet />;
}

export default Prefetch;
