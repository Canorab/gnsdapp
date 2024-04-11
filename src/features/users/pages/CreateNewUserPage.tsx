import NewUserForm from '../forms/NewUserForm';
import React from 'react';

/* 
This page imports the NewUserForm form component to enable the adding of new users to the database.
*/

function CreateNewUserPage() {
	return (
		<div>
			<h1>CreateNewUserPage</h1>
			<NewUserForm />
		</div>
	);
}

export default CreateNewUserPage;
