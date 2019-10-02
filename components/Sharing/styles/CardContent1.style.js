import {makeStyles} from "@material-ui/core";

const styles = makeStyles(theme => ({
	root: {
		background: 'white',
		borderRadius: 10,
		transition: 'all .3s',
		width: '100%',
		height: '100%',
		boxShadow: '0 3px 13px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.08)',
		'&:hover': {
			boxShadow: '0 8px 24px rgba(0,0,0,.08),0 6px 12px rgba(0,0,0,.08)'
		},
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center'
		}
	},
	content: {
		padding: '32px 32px',
		'&:last-child': {
			paddingBottom: 32
		}
	},
	icon: {
		color: '#2962FF',
		width: 64,
		height: 64,
	},
	title: {
		marginTop: 12,
		fontSize: 18,
		fontWeight: 'bold'
	},
	body: {
		marginTop: 8,
		fontSize: 16,
		color: '#626469'
	}
}));

export default styles
