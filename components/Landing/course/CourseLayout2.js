import React from 'react';
import PropTypes from 'prop-types';
import styles from "./styles/CourseLayout2.style";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";


const CourseLayout2 = props => {
	const classes = styles()
	return (
		<div className={classes.root}>
			<Box className={classes.center}>
				<Box className={classes.sectionContainer}>
					<Typography className={classes.sectionHeading}>
						Try Localize FREE for 14 days.
					</Typography>
					<Typography className={classes.sectionBody}>
						Sign up for an account, then integrate Localize into all of your digital products.
						No credit card required.
					</Typography>
					<Button className={classes.button}>
						JOIN NOW
					</Button>
					<Typography className={classes.sectionBody}>
						Have Questions? Contact Us! <br/>
						082 104 5733
					</Typography>
				</Box>
			</Box>
		</div>
	);
};

CourseLayout2.propTypes = {};

export default CourseLayout2;
