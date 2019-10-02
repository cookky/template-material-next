import {makeStyles} from "@material-ui/core";

const styles = makeStyles(theme => ({
	root: {
		background: 'white',
		borderRadius: 10,
		transition: 'all .3s',
		width: '100%',
		boxShadow: '0 3px 13px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.08)',
		'&:hover': {
			boxShadow: '0 8px 24px rgba(0,0,0,.08),0 6px 12px rgba(0,0,0,.08)'
		}
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 42,
	},
	avatar: {
		width: 64,
		height: 64,
		borderRadius: 64,
		backgroundColor: '#D8E2FF'
	},
	icon: {
		color: '#2962FF',
		width: 28,
		height: 28
	},
	label: {
		marginTop: 12,
		fontSize: 16,
		fontWeight: 'bold'
	}
}));

export default styles
