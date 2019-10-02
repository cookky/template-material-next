import {makeStyles} from "@material-ui/core";

const styles = makeStyles(theme => ({
	root: {
		width: '100%',
		boxShadow: 'rgba(0, 0, 0, 0.12) 0px 10px 30px;'
	},
	carcContent: {
		padding: 0,
	},
	header: {
		textAlign: 'center',
		padding: '48px 32px',
		backgroundColor: '#2962FF'
	},
	serviceName: {
		fontSize: 12,
		color: '#EEEEEE'
	},
	price: {
		marginBottom: 8,
		fontSize: 32,
		color: '#FFFFFF',
		fontWeight: 'bold'
	},
	priceType: {
		fontSize: 14,
		fontWeight: 'normal',
		display: 'inline'
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
	serviceItemContent: {
		padding: '16px 16px',
		display: 'flex',
		alignItems: 'center'
	},
	checkIcon: {
		color: '#5B708B',
		marginRight: '8px',
		width: 20,
		height: 20
	},
	serviceItemName: {
		color: '#5B708B',
		fontSize: 14
	}
}));

export default styles
