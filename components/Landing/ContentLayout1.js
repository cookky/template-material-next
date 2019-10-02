import React from 'react';
import styles from "./styles/ContentLayout1.style";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";


const ContentLayout1 = props => {
  const classes = styles();
  const imageUrl = '../../static/images/hacktag-space-regular-preview-1.jpg';
  return (
    <div className={classes.root}>

      <Box className={classes.sectionContainer}>
        <Grid container spacing={1} className={classes.grid}>

          <Grid item md={6} sm={12}>
            <Typography component="h1" className={classes.sectionHeading}>
              Co-working Space
          </Typography>
            <Typography className={classes.sectionBody}>
              Work from home is an ideal way to a startup business which changes a
              white-collar to a self-employed or a freelancer.
              What challenge is, you have to invest in everything with your own money, then manage them to get the profit.
          </Typography>
            <Typography className={classes.sectionBody}>
              <b>Co-working space</b> is the answer to what you've been searching for.
              This type of office will effectively help you prepare for your jobs, which suitable to you, for starting your own business without any additional investment.
              You only have to pay for what you need in your daily jobs!
          </Typography>
          </Grid>

          <Hidden smUp>
            <Grid item md={6} sm={12}>
              <Box className={classes.centerVertical}>
                <img src={imageUrl} width={'100%'} className={classes.img} />
              </Box>
            </Grid>
          </Hidden>

          <Hidden smDown>
            <Grid item md={6} sm={12}>
              <Box className={classes.centerVertical}>
                <img src={imageUrl} width={'100%'} className={classes.img} />
              </Box>
            </Grid>
          </Hidden>


        </Grid>

      </Box>

    </div>
  );
};

export default ContentLayout1;