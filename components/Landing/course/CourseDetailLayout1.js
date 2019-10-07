import React from 'react';
import styles from "./styles/CourseDetailLayout1.style";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';



const CourseDetailLayout1 = props => {
    const classes = styles();
    const imageUrl = '../../static/images/hacktag-space-regular-preview-1.jpg';

    return (
        <div className={classes.root}>
            <Box className={classes.sectionContainer}>

                <Typography className={classes.sectionHeading}>
                AdoptOpenJDK
				</Typography>
                <Typography className={classes.sectionBody}>
                    Java is used by developers all over the world. In order to be truly open-source, the platform needs to feel native to each user and be accessible in each user’s preferred language. As an open-source community, the content is ever evolving. “It’s nearly impossible to keep translations updated. I don’t know what our site will say tomorrow and as a result, translations need to be consistently updating in the background. We can’t waste our time making sure pages are up to date,” says Joe Brady. (Co-founder & Frontend Engineer)
				</Typography>


                <Grid container spacing={3}>
                <Grid item md={6} sm={12}>
                        <Box className={classes.centerVertical}>
                            <img src={imageUrl} width={'100%'} className={classes.img} />
                        </Box>
                    </Grid>

                    <Grid item md={6} sm={12}>
                        <Box className={classes.centerVertical}>
                            <img src={imageUrl} width={'100%'} className={classes.img} />
                        </Box>
                    </Grid>

                </Grid>


                <Typography className={classes.sectionHeading}>
                AdoptOpenJDK
				</Typography>
                <Typography className={classes.sectionBody}>
                    Java is used by developers all over the world. In order to be truly open-source, the platform needs to feel native to each user and be accessible in each user’s preferred language. As an open-source community, the content is ever evolving. “It’s nearly impossible to keep translations updated. I don’t know what our site will say tomorrow and as a result, translations need to be consistently updating in the background. We can’t waste our time making sure pages are up to date,” says Joe Brady. (Co-founder & Frontend Engineer)
				</Typography>


            </Box>
        </div>
    );
};

export default CourseDetailLayout1;