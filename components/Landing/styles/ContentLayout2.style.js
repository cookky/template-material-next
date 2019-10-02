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
    paddingBottom: '10px',
    paddingLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 48
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
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  box: {
    padding: '10px'
  },
  centerVertical: {
    padding: theme.spacing(2),
    textAlign: 'center'
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