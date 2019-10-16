import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';
import Link from "./Link";
import Hidden from "@material-ui/core/Hidden";
import { fade } from '@material-ui/core/styles/colorManipulator';
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from '@material-ui/icons/Close';
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 64
  },
  appbar: {
    boxShadow: '0 2px 6px 0 rgba(0,0,0,.04), 0 6px 12px rgba(0,0,0,.02);',
    background: 'rgba(255,255,255,.98)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    /*[theme.breakpoints.up('sm')]: {
      display: 'block',
    },*/
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.10),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
        borderRadius: '3px',
        backgroundColor: fade(theme.palette.common.black, 0.10),
      },
    },
  },
  topNavListsContainer: {
    flexGrow: 6,
    // display: 'none',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
    /*[theme.breakpoints.up('md')]: {
      display: 'block',
    },*/
    '& li': {
      float: 'left',
      '& a': {
        transition: theme.transitions.create('background'),
        textAlign: 'center',
        textDecoration: 'none',
        marginTop: -2,
        padding: '23px 16px',
        borderBottom: '2px solid transparent',
        color: '#202124',
        '&:hover': {
          background: '#EEEEEE',
        }
      }
    }
  },
  topNavItemActive: {
    borderBottom: '2px solid #2962FF !important',
  },
  brand: {
    color: '#202124',
    textDecoration: 'none'
  },
  joinButton: {
    marginTop: 16,
    borderRadius: 10,
    padding: '12px 32px'
  },
  logoBrand: {
    position: 'relative',
    transition: 'opacity 0.3s',
    opacity: 1,
    top: 5,
    '&:hover': {
      transition: 'opacity 0.3s',
      opacity: 0.7
    }
  },
  button: {
    marginLeft: 16
  },
  toolBar: {
    paddingLeft: 0,
    paddingRight: 0
  },
  hide: {
    display: 'none',
  },
  list: {
    padding: 16,
    width: 250,
  },
  listItem: {
    fontSize: 14,
    borderRadius: 10
  },
  menuClose: {
    margin: '16px 16px'
  },
  drawerButton: {
    marginBottom: 8,
    padding: '10px 0'
  },
  drawerItemActive: {
    backgroundColor: '#F7F7F7',
    color: '#2962FF'
  },
  aStyle: {
    textDecoration: 'none'
  }
}));

const NavBar = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >

      <IconButton
        className={classes.menuClose}
        color="inherit"
        aria-label="Close drawer"
        edge="start"
      >
        <CloseIcon />
      </IconButton>
      <Divider />
      <div className={classes.list}>
        <List>
          <Link href="/" activeClassName={classes.drawerItemActive}>
            <ListItem button className={classes.listItem}>
              {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
              <ListItemText primary="Service" />
            </ListItem>
          </Link>
          <Link href="/community" activeClassName={classes.drawerItemActive}>
            <ListItem button className={classes.listItem}>
              {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
              <ListItemText primary="Community" />
            </ListItem>
          </Link>
          <Link href="/course" activeClassName={classes.drawerItemActive}>
            <ListItem button className={classes.listItem}>
              {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
              <ListItemText primary="Course" />
            </ListItem>
          </Link>
          <Link href="/pricing" activeClassName={classes.drawerItemActive}>
            <ListItem button className={classes.listItem}>
              {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
              <ListItemText primary="Pricing" />
            </ListItem>
          </Link>
          <Link href="/contact" activeClassName={classes.drawerItemActive}>
            <ListItem button className={classes.listItem}>
              {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
              <ListItemText primary="Contact" />
            </ListItem>
          </Link>

          <Link href="/about" activeClassName={classes.drawerItemActive}>
            <ListItem button className={classes.listItem}>
              {/*<ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>*/}
              <ListItemText primary="About" />
            </ListItem>
          </Link>
        </List>
      </div>
      <Divider />
      <div className={classes.list}>
        <Grid container>
          <Grid item sm={6} xs={12}>
          <a  href="http://167.172.66.16:3000" target="_blank" class={classes.aStyle}>
            <Button color="primary" className={classes.drawerButton} fullWidth={true}>
              Log In
            </Button>
            </a>
          </Grid>
          <Grid item sm={6} xs={12}>
            {/* <Button variant="contained" color="primary" className={ classes.drawerButton } fullWidth={ true }>
              Sign Up
            </Button> */}

            <Button variant="contained" color="primary" className={classes.drawerButton} fullWidth={true} href="tel:0821045733">
              โทร
              </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar} color={"default"}>
        <Container maxWidth="lg">
          <Toolbar className={classes.toolBar}>
            <Typography className={classes.title} variant="h6" noWrap>
              <Link href="/">
                <a className={classes.brand}>
                  <img className={classes.logoBrand} src="./static/images/hacktag-logo.svg" alt="Hacktag Space" />
                </a>
              </Link>
            </Typography>
            <Hidden smDown>
              <ul className={classes.topNavListsContainer}>
                <li>
                  <Link href="/" activeClassName={classes.topNavItemActive}>
                    <a>Service</a>
                  </Link>
                </li>
                <li>
                  <Link href="/community" activeClassName={classes.topNavItemActive}>
                    <a>Community</a>
                  </Link>
                </li>
                <li>
                  <Link href="/course" activeClassName={classes.topNavItemActive}>
                    <a>Course</a>
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" activeClassName={classes.topNavItemActive}>
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" activeClassName={classes.topNavItemActive}>
                    <a>Contant</a>
                  </Link>
                </li>
                <li>
                  <Link href="/about" activeClassName={classes.topNavItemActive}>
                    <a>About</a>
                  </Link>
                </li>
              </ul>

              {/* <IconButton color="inherit">
                <Badge badgeContent={ 4 } color="secondary">
                  <NotificationsNoneIcon/>
                </Badge>
              </IconButton> */}

              <a href="http://167.172.66.16:3000" target="_blank"  class={classes.aStyle}>
                <Button color="primary" className={classes.button}>
                  Log In
              </Button>
              </a>
              
              <Button variant="contained" color="primary" className={classes.button}>
                โทร
              </Button>

            </Hidden>
            <Hidden mdUp>
              <IconButton
                onClick={toggleDrawer('right', true)}
                color="inherit"
                aria-label="Open drawer"
                edge="start"
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Toolbar>
        </Container>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
          {sideList('right')}
        </Drawer>
      </AppBar>
    </div>
  );
};

export default NavBar;