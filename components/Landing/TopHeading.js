import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Grid, Typography } from "@material-ui/core";
import styles from "./styles/TopHeading.style";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";

const TopHeading = props => {
  const { imageUrl, heading1, heading2, heading3, body } = props
  const classes = styles()
  return (
    <div className={ classes.layout }>
      <Container maxWidth={ 'lg' }>
        <Box clone className={ classes.root }>
          <Grid container>
          <Grid item lg={ 2 }></Grid>
            <Grid item lg={8}>
              <Box className={ classes.centerVertical }>
                <Box>
                  <Typography className={ classes.heading } gutterBottom>
                    { heading1 } <br/>
                    { heading2 } <br/>
                    { heading3 }
                  </Typography>
                  <Typography className={ classes.body } gutterBottom>
                    { body }
                  </Typography>
                  {/*<Button variant="contained" color="primary" className={classes.button}>JOIN NOW</Button>*/ }
                </Box>
              </Box>
            </Grid>
            <Grid item lg={ 2 }></Grid>
            {/* <Hidden smDown>
              <Grid item lg={6} md={6}>
                <Box className={classes.centerVertical}>
                  <img src={imageUrl} width={'100%'}/>
                </Box>
              </Grid>
            </Hidden> */}
          </Grid>
        </Box>
      </Container>

    </div>
  );
};

TopHeading.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  heading1: PropTypes.string.isRequired,
  heading2: PropTypes.string.isRequired,
  heading3: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};


export default TopHeading;