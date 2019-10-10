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
    [theme.breakpoints.down('sm')]: {
      marginBottom: 48,
      textAlign: 'center',
    }
  },
  sectionBody: {
    fontSize: '18px',
    color: '#808fa7',
    marginTop: 22,
    marginBottom: 8
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
  img: {
    borderRadius:'10px',
    // boxShadow: '1px 1px 8px'
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  }
}));

export default styles