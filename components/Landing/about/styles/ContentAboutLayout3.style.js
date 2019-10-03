import {makeStyles} from "@material-ui/core";

const styles = makeStyles(theme => ({
	root: {
	},
	sectionContainer: {
		textAlign: 'center'
	},
	sectionHeading: {
		fontSize: 38,
		fontWeight: 'bold',
		lineHeight: '48px',
		color: '#3e4246',
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
		  marginBottom: 48
		}
	  },
	sectionBody: {
		fontSize: '18px',
		color: '#808fa7',
		marginTop: 16,
		marginBottom: 64
	}
}));

export default styles
