import {makeStyles} from "@material-ui/core";

const styles = makeStyles(theme => ({
  layout: {
    // background: 'url(./static/images/hacktag-space-regular-preview-1.jpg)',
    backgroundImage: 'linear-gradient(180deg, rgba(255, 147, 32, 0.12), rgba(2, 1, 1, 0.36) 0%), url(./static/images/hacktag-space-regular-preview-1.jpg), radial-gradient(circle farthest-side at 50% 50%, #39abff, #4c39f3)',
    backgroundSize: 'cover !important',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '100%',
    },
    backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat'
  },
  root: {
    padding: '80px 0',
    [theme.breakpoints.down('sm')]: {
      padding: '32px 0',
      textAlign: 'center'
    }
  },
  textHighlight: {
    padding: '100px 0',
    textAlign: 'center'
  },
  centerVertical: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    textAlign: 'center',
    fontSize: '40px',
    fontWeight: 'bold',
    lineHeight: '48px',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      textAlign:'center'
    },
    // textShadow: '4px 3px 2px #000000'
  },
  body: {
    textAlign:'center',
    fontSize: '22px',
    color: '#fff',
    // textShadow: '2px 2px 4px #000000'
  },
  button: {
    marginTop: 16,
    borderRadius: 10,
    padding: '12px 32px'
  }
}));

export default styles