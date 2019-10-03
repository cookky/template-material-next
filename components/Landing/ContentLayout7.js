import React from 'react';
import PropTypes from 'prop-types';
import styles from "./styles/ContentLayout7.style";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";


const ContentLayout7 = props => {
	const classes = styles()
	return (
		<div className={classes.root}>
			<Box className={classes.center}>
				<Box className={classes.sectionContainer}>
					<Typography className={classes.sectionHeading}>
						Join our <b>community</b> for sharing your ideas <br/>and experiences to other.
					</Typography>
					<Button className={classes.button}>
						JOIN NOW
					</Button>
				</Box>
			</Box>
		</div>
	);
};

ContentLayout7.propTypes = {};

export default ContentLayout7;
