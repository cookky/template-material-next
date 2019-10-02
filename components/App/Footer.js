import React from 'react';
import {Container, Box, makeStyles, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 64,
    paddingBottom: 32,
    // marginTop: 64,
    display: 'block',
    background: '#f8f9fa'
  },
  heading: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: 8
  },
  menu: {
    '& a': {
      fontSize: '14px',
      textDecoration: 'none',
      color: '#5f6368',
      transition: 'color 0.3s',
      '&:hover': {
        transition: 'color 0.3s',
        color: '#2962FF'
      }
    }
  },
  divider: {
    margin: '32px 0'
  },
  copyright: {
    '& a': {
      fontSize: '12px',
      textDecoration: 'none',
      color: '#73849A'
    }
  }
}));

const Footer = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Container maxWidth={'lg'}>
        <Grid container spacing={6}>
          <Hidden smDown>
            <Grid item md={2} xs={12} className={classes.logoContainer}>
              <Typography className={classes.heading} gutterBottom>
                <img src="./static/images/hacktag-logo.svg"/>
              </Typography>
            </Grid>
          </Hidden>
          <Grid item md={2} xs={4}>
            <Typography className={classes.heading} gutterBottom>
              Service
            </Typography>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Meeting Room</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Private Room</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Regular Room</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Pricing</a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2} xs={4}>
            <Typography className={classes.heading} gutterBottom>
              Community
            </Typography>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Programmer</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Designer</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Economy</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Student</a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2} xs={4}>
            <Typography className={classes.heading} gutterBottom>
              Course
            </Typography>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">React</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">React Native</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Flutter</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Laravel</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Vue</a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2} xs={4}>
            <Typography className={classes.heading} gutterBottom>
              Company
            </Typography>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">About</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Team</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Jobs</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Press</a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2} xs={4}>
            <Typography className={classes.heading} gutterBottom>
              Contact
            </Typography>
            <Grid container>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Contact Sales</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Get help</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Contact us</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Facebook</a>
                </Typography>
              </Grid>
              <Grid item md={12} xs={12}>
                <Typography gutterBottom className={classes.menu}>
                  <a href="">Line</a>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider className={classes.divider}/>
        <Grid container spacing={6}>
          <Grid item md={12}>
            <Typography gutterBottom className={classes.copyright}>
              <a href="">©2019 HackTag Space</a>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
