import React from 'react';
import styles from "./styles/CourseDetailLayout1.style";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
const server = require('../../../services/server.config');

const ContentDetail = (props) => {
    const classes = styles();
    const { listCourse } = props.data
    return (
        <div>
                <Box className={classes.sectionContainer}>


                    <Grid container spacing={3}>
                        <Grid item md={6} sm={12}>
                            <Box>
                                <Typography className={classes.sectionHeading}>
                                    {listCourse.title}
                                </Typography>
                                <Typography className={classes.sectionBody}>
                                    {listCourse.date}
                                </Typography>
                                <Typography className={classes.sectionBody}>
                                    {listCourse.detail}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={6} sm={12}>
                            <Box className={classes.centerVertical}>
                                <img src={`${server.api_url}/images/${listCourse.image}`} width={'100%'} className={classes.img} />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

        </div>
    )
}

const CourseDetailLayout1 = props => {
    const { listCourse } = props.data;
    const classes = styles();
    return (
        <div className={classes.root}>
            {listCourse ? (
            <ContentDetail data={{ listCourse }} />
            ) : null }
        </div>
    );
};

export default CourseDetailLayout1;