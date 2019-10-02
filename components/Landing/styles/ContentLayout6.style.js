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
	button: {
		padding: '12px 32px',
		backgroundColor: '#FFFFFF',
		color: '#2962FF',
		fontWeight: 'bold',
		'&:hover': {
			backgroundColor: '#EEEEEE',
		}
	},
	layout: {
		// background: 'url(./static/images/hacktag-space-regular-preview-1.jpg)',
		backgroundImage: 'linear-gradient(180deg, rgba(255, 147, 32, 0.12), rgba(2, 1, 1, 0.48) 0%), url(./static/images/hacktag-space-regular-preview-1.jpg), radial-gradient(circle farthest-side at 50% 50%, #39abff, #4c39f3)',
		backgroundSize: 'auto, cover, auto !important',
		[theme.breakpoints.down('sm')]: {
		  backgroundSize: '100%',
		},
		backgroundPosition: 'center',
		// backgroundRepeat: 'no-repeat'
	  },
	  imgSlide1:{
		minHeight:'400px',
		backgroundImage: 'url(./static/images/hacktag-space-regular-preview-1.jpg)',
		backgroundSize: ' cover !important',
		backgroundPosition: '50% 50%',
	  },
	  imgSlide2:{
		minHeight:'400px',
		backgroundImage: 'url(./static/images/hacktag-space-regular-preview-2.jpg)',
		backgroundSize: 'cover !important',
		backgroundPosition: '50% 50%',

	  },
	  imgSlide3:{
		minHeight:'400px',
		backgroundImage: 'url(./static/images/coworking-spaces-in-melbourne.jpg)',
		backgroundSize: 'cover !important',
		backgroundPosition: '50% 50%',
	  }
}));

export default styles
