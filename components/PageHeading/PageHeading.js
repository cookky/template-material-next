import React from 'react';
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import {Container} from "@material-ui/core";

const PageHeading = props => {
	const {title, heading, body} = props
	const classes = styles();

	return (
		<Container maxWidth={'lg'} className={classes.root}>
			<Box>
				<Typography className={classes.title} component="h6">
					{title}
				</Typography>
			</Box>
			<Box>
				<Typography className={classes.heading} component="h1">
					{heading}
				</Typography>
			</Box>
			<Box>
				<Typography className={classes.body} component="h5">
					{body}
				</Typography>
			</Box>
		</Container>
	);
};

PageHeading.propTypes = {
	title: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
};

export default PageHeading;
