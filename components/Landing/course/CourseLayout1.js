import React from 'react';
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

const MyTabs = withStyles({
    root: {
        backgroundColor: 'white',
        boxShadow: '0 3px 13px rgba(0,0,0,.08), 0 2px 4px rgba(0,0,0,.08)',
        borderRadius: 30,
    },
    indicator: {
        display: "none"
    }
})(Tabs)

const MyTab = withStyles({
    root: {
        borderRadius: "30px",
        textAlign: "center",
    },
    selected: {
        fontWeight: 'bold',
        color: "white !important",
        backgroundColor: "#2962FF"
    },
    textColorPrimary: {
        color: '#202124'
    }
})(Tab)

const TabContent = props => {
    return props.hidden ? props.children : null
}

const CourseLayout1 = props => {
    const classes = styles();
    const [value, setValue] = React.useState(0);
    const imageUrl = '../../static/images/hacktag-space-regular-preview-1.jpg';

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <Box className={classes.sectionContainer}>

                <Typography className={classes.sectionHeading}>
                    Course
				</Typography>
                <Typography className={classes.sectionBody}>
                    Pictures of work atmosphere in our co-working space.
				</Typography>
                <Box className={classes.center}>
                    <Box className={classes.tabContainer}>
                        <MyTabs textColor="primary" variant="scrollable" value={value} onChange={handleChange}>
                            <MyTab label="All" />
                            <MyTab label="Programming" />
                            <MyTab label="Java" />
                        </MyTabs>
                    </Box>
                </Box>
                <TabContent hidden={value === 0}>

                    <Grid container spacing={3}>

                        <Grid item md={3} sm={12}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
                                 </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                </Button>
                                    <Link href="/coursedetail">
                                        <Button size="small" color="primary">
                                            Learn More
                                </Button>
                                    </Link>

                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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

                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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


                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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

                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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

                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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

                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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


                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
                                </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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
                    </Grid>
                </TabContent>


                <TabContent hidden={value === 1}>

                    <Grid container spacing={3}>

                        <Grid item md={3} sm={12}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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

                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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

                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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

                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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
                    </Grid>
                </TabContent>

                <TabContent hidden={value === 2}>

                    <Grid container spacing={3}>

                        <Grid item md={3} sm={12}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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

                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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

                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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
                        <Grid item md={3} sm={12}>
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image={imageUrl}
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lizard
            </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                            across all continents except Antarctica
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
                    </Grid>
                </TabContent>
            </Box>
        </div>
    );
};

export default CourseLayout1;