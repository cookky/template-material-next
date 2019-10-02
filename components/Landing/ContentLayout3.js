import React from 'react';
import styles from "./styles/ContentLayout3.style";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";


const ContentLayout3 = props => {
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

          {/* <Box className={classes.button}>
            <Button variant="outlined" color="primary" className={classes.button}>
              Read
      		</Button>
          </Box> */}
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

        <Grid container spacing={1} className={classes.grid}>

          <Grid item md={6} sm={12}>
            

            <Hidden smDown>
              <Box className={classes.centerVertical}>
                <img src={imageUrl} width={'100%'} className={classes.img} />
              </Box>
            </Hidden>
          </Grid>

          <Grid item md={6} sm={12}>
            <Typography component="h1" className={classes.sectionHeading}>
              Co-working Space
          </Typography>
            <Typography className={classes.sectionBody}>
              Work from home is an ideal way to a startup business which changes a
              white-collar to a self-employed or a freelancer.
              What challenge is, you have to invest in everything with your own money, then manage them to get the profit.
          </Typography>

          <Hidden smUp>
              <Box className={classes.centerVertical}>
                <img src={imageUrl} width={'100%'} className={classes.img} />
              </Box>
            </Hidden>

            {/* <Box className={classes.button}>
              <Button variant="outlined" color="primary">
                Read
      		</Button>
            </Box> */}
          </Grid>

        </Grid>

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

          {/* <Box className={classes.button}>
            <Button variant="outlined" color="primary" className={classes.button}>
              Read
      		</Button>
          </Box> */}
          </Grid>

          <Grid item md={6} sm={12}>
            <Hidden smUp>
              <Box className={classes.centerVertical}>
                <img src={imageUrl} width={'100%'} className={classes.img} />
              </Box>
            </Hidden>

            <Hidden smDown>
              <Box className={classes.centerVertical}>
                <img src={imageUrl} width={'100%'} className={classes.img} />
              </Box>
            </Hidden>
          </Grid>

        </Grid>
      </Box>
    </div>
  );
};

export default ContentLayout3;