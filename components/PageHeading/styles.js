import {makeStyles} from "@material-ui/core";

const styles = makeStyles(theme => ({
	root: {
		padding: 64,
		textAlign: 'center'
	},
	title: {
		fontSize: 12,
		fontWeight: 'bold',
		color: '#73849A'
	},
	heading: {
		lineHeight: '52px',
		fontSize: 52,
		fontWeight: 'bold',
		marginBottom: 16,
		marginTop: 8
	},
	body: {
		fontSize: 22,
		color: '#5B708B'
	}
}));

export default styles
