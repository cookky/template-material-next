import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
	shape: {
		borderRadius: 10
	},
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'SukhumvitTadmai',
			'"Product Sans"',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	palette: {
		background: {
			default: "white"
		},
		primary: {
			light: '#757ce8',
			main: '#2962ff',
			dark: '#5D88FF',
			contrastText: '#fff'
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#FFF'
		},
		text: {
			primary: '#202124',
			secondary: '#4d4d4d'
		}
	}
});

export default theme;
