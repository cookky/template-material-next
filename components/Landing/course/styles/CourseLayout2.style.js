import {makeStyles} from "@material-ui/core";

const styles = makeStyles(theme => ({
	root: {
		padding: '64px 0'
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	sectionContainer: {
		textAlign: 'center'
	},
	sectionHeading: {
		color: 'white',
		fontSize: 47,
		lineHeight: '47px',
		marginBottom: 16,
  },
  sectionBody: {
		fontSize: '18px',
		color: '#fff',
		marginTop: 16,
    marginBottom: 32,
    textAlign: 'center'
	},
	button: {
		padding: '12px 32px',
		backgroundColor: '#FFFFFF',
		color: '#2962FF',
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: '#EEEEEE',
		}
	},
}));

export default styles
