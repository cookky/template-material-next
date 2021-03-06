import { makeStyles } from "@material-ui/core";

const styles = makeStyles(theme => ({
	root: {},
	sectionContainer: {
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		}
	},
	sectionHeading: {
		fontSize: 38,
		fontWeight: 'bold',
		lineHeight: '48px',
		color: '#3e4246',
		paddingBottom: '10px',
		paddingLeft: '20px',
		[theme.breakpoints.down('sm')]: {
			marginBottom: 48
		}
	},
	sectionBody: {
		fontSize: '18px',
		color: '#808fa7',
		marginTop: 16,
		marginBottom: 32
	},
	tabContainer: {
		minWidth: 300
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	cardImage: {
		boxShadow: '0 3px 13px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.08)',
		'&:hover': {
			boxShadow: '0 8px 24px rgba(0,0,0,.08),0 6px 12px rgba(0,0,0,.08)'
		},
	},
	imageContainer: {
		marginTop: 16
	},
	cardImageContent: {
		padding: 0,
		margin: 0,
		height: 300,
		'&:last-child': {
			padding: 0,
			margin: 0
		}
	},
	image: {
		width: '100%',
		height: '100%',
		objectFit: 'cover'
	},
	centerVertical: {
		padding: theme.spacing(2),
		textAlign: 'center'
	},
	img: {
		borderRadius: '10px',
		// boxShadow: '1px 1px 8px'
	},
	row: {
		padding: '10px'
	},
	grid: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		height: '100%'
	},
	button: {
		textAlign: 'center'
	}
}));

export default styles
