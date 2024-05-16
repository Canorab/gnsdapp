/* eslint-disable react/react-in-jsx-scope */
/*
 * @Author: Joshua Eigbe jeigbe@gmail.com
 * @Github: https://github.com/jsh007
 * @Date: 2024-03-26 15:06:32
 * @LastEditors: Joshua Eigbe jeigbe@gmail.com
 * @LastEditTime: 2024-03-26 23:28:11
 * @FilePath: /gns_dapp/src/app/App.tsx
 * @copyrightText: Copyright (c) Joshua Eigbe. All Rights Reserved.
 * @Description: See Github repo
 */
import './App.css';

import reactLogo from './assets/react.svg';
import {useState} from 'react';
import viteLogo from '/vite.svg';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>DashBoard - Home Page</h1>
			<p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
		</>
	);
}

export default App;
