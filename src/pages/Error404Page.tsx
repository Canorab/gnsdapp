import {Link} from 'react-router-dom';
import React from 'react';

const Error404Page = () => (
	<div>
		<h3>Error 404 - Page Not Found</h3>
		<p>The page you are trying to access does not exist.</p>
		<p className='errmsg'>
			<Link style={{fontWeight: 'bold', textAlign: 'right'}} to='/'>
				You can login here
			</Link>
		</p>
	</div>
);

export default Error404Page;
