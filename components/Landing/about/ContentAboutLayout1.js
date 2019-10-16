import React from 'react';
import styles from "./styles/ContentAboutLayout1.style";
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
              Hacktag Space คืออะไร
          </Typography>
            <Typography className={classes.sectionBody}>
              Hacktag Space ถือกำเนิดขึ้นในฐานะพื้นที่ร่วมทำงานแห่งแรกของประเทศไทยในปี 2555 Hacktag Space เติบโตอย่างรวดเร็วจนกลายเป็นเครือข่าย coworking space ที่ขับเคลื่อนด้วยเทคโนโลยีและผู้ริเริ่มองค์กรด้วยพันธกิจเพื่อให้ธุรกิจเติบโตทั่วโลกผ่านความร่วมมือของชุมชน ปัจจุบัน Hacktag Space มี coworking space 5 แห่งทั่วประเทศไทยและอีก 3 แห่งที่วางแผนไว้ในช่วงปลายปี 2562 รวมถึงพื้นที่นานาชาติแห่งแรกของ Hacktag Space
  Hacktag Space ได้รับชื่อเสียงอย่างรวดเร็วภายในชุมชนองค์กรในฐานะองค์กรที่อำนวยความสะดวกในการคิดเชิงนวัตกรรมกระตุ้นให้ Hacktag Space พัฒนาบริการด้านการสร้างและขับเคลื่อนด้วยเทคโนโลยีสำหรับหุ้นส่วนของเรา
  ด้วยการใช้ประโยชน์จากพื้นที่และความเชี่ยวชาญของเรา Hacktag Space ดำเนินกิจกรรมด้านระบบนิเวศและการฝึกอบรมตามความต้องการอย่างต่อเนื่องตั้งแต่การแข่งขันแฮ็คแฮมตันและการแข่งขันระดับพิตต์ไปจนถึงโปรแกรมเร่งระดับนานาชาติที่จัดการเต็มรูปแบบ
          </Typography>

          </Grid>


          <Grid item md={6} sm={12}>
              <Box className={classes.centerVertical}>
                <img src={imageUrl} width={'100%'} className={classes.img} />
              </Box>
            </Grid>





        </Grid>

      </Box>

    </div>
  );
};

export default ContentLayout1;