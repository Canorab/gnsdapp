/*
 * @Author: Joshua Eigbe jeigbe@gmail.com
 * @Github: https://github.com/jsh007
 * @Date: 2024-03-26 15:06:32
 * @LastEditors: Joshua Eigbe jeigbe@gmail.com
 * @LastEditTime: 2024-03-27 09:30:45
 * @FilePath: /gns_dapp/src/main.tsx
 * @copyrightText: Copyright (c) Joshua Eigbe. All Rights Reserved.
 * @Description: See Github repo
 */
import './styles.css';

import {ThemeProvider, createTheme} from '@mui/material';
import {blue, blueGrey, lightBlue} from '@mui/material/colors';

// Import App from "./app/App";
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
// Import { Router } from "@app/Router";
import {Router} from '../Router';
import {RouterProvider} from 'react-router-dom';
import {customTheme} from './utils/customTheme';
import {disableReactDevTools} from '@fvilers/disable-react-devtools';
import {store} from './app/store';

if (process.env.NODE_ENV === 'production') {
	disableReactDevTools();
}

// Implement theming here
// const theme = createTheme({
// 	palette: {
// 		mode: 'light',
// 		primary: {
// 			main: lightBlue[500],
// 		},
// 	},
// });
// Const theme = createTheme();

// Export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/about",
//     element: <div>About Page</div>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={Router} />
		</Provider>
	</React.StrictMode>
);
