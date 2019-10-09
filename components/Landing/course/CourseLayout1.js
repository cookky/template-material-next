import React, { useState, useEffect } from 'react';
import styles from "./styles/CourseLayout1.style";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Tab, Tabs, withStyles } from "@material-ui/core";
import Link from "../../App/Link";
import { findAll } from "../../../services/course.api";
const server = require('../../../services/server.config');


const useFindAll = () => {

    const [listCourse, setListCourse] = useState([]);
    const [loading, setLoading] = useState(false)

    const fetch = async () => {
        setLoading(true);
        const data = await findAll();
        setLoading(false);
        setListCourse(data.data);
    };
    useEffect(() => {
        fetch()
    }, [0]);
    return {
        listCourse, loading
    }
};

const CardCourse = (props) => {
    const classes = styles();
    const listCourse = props.data;
    const imageUrl = '../../static/images/hacktag-space-regular-preview-1.jpg';

    return (
        <Box className={classes.sectionContainer}>

            <Typography className={classes.sectionHeading}>
                Course
				</Typography>
            <Typography className={classes.sectionBody}>
                Pictures of work atmosphere in our co-working space.
				</Typography>

            <Grid container spacing={3}>
                {listCourse.map((data, key) => (

                    <Grid item md={3} sm={12}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={`${server.api_url}/images/${data.image}`}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {data.title}
                                    </Typography>
                                    <Typography gutterBottom component="h5">
                                        {data.date}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {data.detail}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                ))}

            </Grid>
        </Box>
    )

}

const CourseLayout1 = props => {
    const classes = styles();
    const { listCourse, loading } = useFindAll();


    return (
        <div className={classes.root}>

            {!loading ? (<CardCourse data={listCourse} />) : (<h1>Loading...</h1>)}

        </div>
    );
};

export default CourseLayout1;