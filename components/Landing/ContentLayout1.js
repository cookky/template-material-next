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
        <Grid container spacing={2} className={classes.grid}>

          <Grid item md={6} sm={12}>
            <Typography component="h1" className={classes.sectionHeading}>
            คุณกำลังมองหาพื้นที่ทำงานสำหรับทีมของคุณอยู่หรือเปล่า?
          </Typography>
            <Typography className={classes.sectionBody}>
            ฮับบาจัดเตรียมสำนักงานส่วนตัวในหลากหลายขนาดที่คุณจะสามารถเข้าใช้งานได้ตลอด 24 ชั่วโมง พร้อมทั้งเข้าถึงอีเว้นท์และคอมมูนิตี้ของฮับบาได้เช่นกัน เรามีสำนักงานส่วนตัวพร้อมต้อนรับคุณทั้งสี่สาขาของเรา
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