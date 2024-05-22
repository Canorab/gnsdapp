/* eslint-disable @typescript-eslint/naming-convention */
import {type Theme, ThemeProvider, createTheme, useTheme} from '@mui/material/styles';
import {blue, blueGrey, lightBlue, grey} from '@mui/material/colors';
import {outlinedInputClasses} from '@mui/material/OutlinedInput';

export const customTheme = (outerTheme: Theme) =>
	createTheme({
		palette: {
			mode: outerTheme.palette.mode,
		},
		components: {
			MuiCheckbox: {
				styleOverrides: {
					root: {
						'&.MuiFormHelperText-root,.Mui-error': {
							color: '#ffa7a7 !important',
						},
					},
				},
			},
			MuiTextField: {
				styleOverrides: {
					root: {
						'--TextField-brandBorderColor': '#E0E3E7',
						'--TextField-brandBorderHoverColor': '#B2BAC2',
						'--TextField-brandBorderFocusedColor': '#6F7E8C',
						'& label.Mui-focused': {
							color: grey[500],
						},
						'&.MuiFormHelperText-root,.Mui-error': {
							color: '#ffa7a7 !important',
						},
					},
				},
			},
			MuiOutlinedInput: {
				styleOverrides: {
					notchedOutline: {
						borderColor: grey[100],
					},
					root: {
						[`&:hover .${outlinedInputClasses.notchedOutline}`]: {
							borderColor: grey[300],
						},
						[`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
							borderColor: grey[200],
						},
						// '& label.Mui-focused': {
						// 	color: grey[100],
						// },
					},
				},
			},
			MuiFilledInput: {
				styleOverrides: {
					root: {
						'&::before, &::after': {
							borderBottom: `2px solid ${grey[500]}`,
						},
						'&:hover:not(.Mui-disabled, .Mui-error):before': {
							borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
							// BorderBottom: '2px solid brown',
						},
						'&.Mui-focused:after': {
							borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
							// BorderBottom: '2px solid green',
						},
						'&.MuiFilledInput-root': {
							background: '#fff',
						},
					},
				},
			},
			// MuiInput: {
			// 	styleOverrides: {
			// 		root: {
			// 			'&::before': {
			// 				borderBottom: '2px solid var(--TextField-brandBorderColor)',
			// 			},
			// 			'&:hover:not(.Mui-disabled, .Mui-error):before': {
			// 				borderBottom: '2px solid var(--TextField-brandBorderHoverColor)',
			// 			},
			// 			'&.Mui-focused:after': {
			// 				borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)',
			// 			},
			// 		},
			// 	},
			// },
		},
	});
