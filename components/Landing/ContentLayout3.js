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
              คุณกำลังมองหาห้องประชุมอยู่หรือเปล่า?
          </Typography>
            <Typography className={classes.sectionBody}>
              ห้องประชุมของฮับบาเงียบสงบ กว้างขวาง และให้บริการอย่างดีเยี่ยม เหมาะสำหรับการประชุม การฝึกอบรม งานอีเว้นท์ หรือเวิร์กชอปต่างๆ
  เรามีพื้นที่ที่หลากหลาย เหมาะสำหรับการจัดกิจกรรมในหลายรูปแบบของคุณ
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
            คุณกำลังมองหาพื้นที่ทำงานสำหรับทีมของคุณอยู่หรือเปล่า?
          </Typography>
            <Typography className={classes.sectionBody}>
            เราจัดเตรียมสำนักงานส่วนตัวในหลากหลายขนาดที่คุณจะสามารถเข้าใช้งานได้ตลอด 24 ชั่วโมง พร้อมทั้งเข้าถึงอีเว้นท์และคอมมูนิตี้ของฮับบาได้เช่นกัน
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
            งานพบปะสังสรรค์
          </Typography>
            <Typography className={classes.sectionBody}>
            เราจัดเตรียมพื้นที่เพื่อให้สมาชิกได้มีโอกาสพบปะพูดคุยกันเกี่ยวกับความสนใจและความถนัดของตน
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