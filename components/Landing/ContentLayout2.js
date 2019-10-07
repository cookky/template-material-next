import React from 'react';
import styles from "./styles/ContentLayout2.style";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Box from "@material-ui/core/Box";
import Paper from '@material-ui/core/Paper';
import RoomIcon from '@material-ui/icons/Room';
import WatchLaterIcon from '@material-ui/icons/WatchLater';


const ContentLayout2 = () => {
  const classes = styles();
  const imageUrl = '../../static/images/2562-10-04 11_10_32.png';
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>

        <Hidden smDown>

          <Grid item md={6} sm={12}>
            <Box className={classes.centerVertical}>
              <img src={imageUrl} width={'100%'} />
            </Box>
          </Grid>
        </Hidden>

        <Hidden smUp>
        <Typography component="h1" className={classes.sectionHeading}>
            พบกับเราได้ที่
          </Typography>
          <Grid item md={6} sm={12}>
            <Box className={classes.centerVertical}>
              <img src={imageUrl} width={'100%'} />
            </Box>
          </Grid>
        </Hidden>

        <Grid item md={6} sm={12}>
        <Hidden smDown>
          <Typography component="h1" className={classes.sectionHeading}>
            พบกับเราได้ที่
          </Typography>
          </Hidden>
          <Box className={classes.box}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h3">
                <Grid container spacing={2}>
                  <Grid item md={1} sm={12}>
                    <RoomIcon color="primary" />
                  </Grid>
                  <Grid item md={11} sm={12}>
                    ที่อยู่
                  </Grid>
                </Grid>
              </Typography>

              <Typography component="p">
                <Grid container spacing={2}>
                  <Grid item md={1} sm={12}></Grid>
                  <Grid item md={11} sm={12}>
                  154 ถนน เหล่านาดี ตำบล ในเมือง อำเภอ เมือง จังหวัด ขอนแก่น 40000 <br/>โทร 082 104 5733
                  </Grid>
                </Grid>
              </Typography>
            </Paper>
          </Box>

          <Box className={classes.box}>
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h3">
                <Grid container spacing={2}>
                  <Grid item md={1} sm={12}>
                    <WatchLaterIcon color="primary" />
                  </Grid>
                  <Grid item md={11} sm={12}>
                    วันเวลาทำการ
                  </Grid>
                </Grid>
              </Typography>

              <Typography component="p">
                <Grid container spacing={2}>
                  <Grid item md={1} sm={12}></Grid>
                  <Grid item md={11} sm={12}>
                    วันจันทร์ถึงวันศุกร์ 9.00 น. ถึง 18.00 น
                  </Grid>
                </Grid>
              </Typography>
            </Paper>
          </Box>

        </Grid>

      </Grid>

    </div>
  );
};

export default ContentLayout2;