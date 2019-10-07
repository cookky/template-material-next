import {makeStyles} from "@material-ui/core";

const styles = makeStyles(theme => ({
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
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 48
    }
  },
  sectionBody: {
		fontSize: '18px',
		color: '#808fa7',
		marginTop: 16,
    marginBottom: 32,
    textAlign: 'center'
	},
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  centerVertical: {
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  tabContainer: {
    minWidth: 300,
    paddingBottom:50
	},
	center: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
  },

}));

export default styles