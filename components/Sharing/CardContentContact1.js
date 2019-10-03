import React from 'react';
import PropTypes from 'prop-types';
import styles from "./styles/CardContentContact1.style";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const CardContentAbout2 = props => {
	const {title, body, icon} = props
	const classes = styles()

	return (
		<Card className={classes.root}>
			<CardContent className={classes.content}>
				<Box clone className={classes.icon}>
					{icon}
				</Box>
				<Typography component="h3" className={classes.title}>
					{title}
				</Typography>
				<Typography className={classes.body}>
					{body}
				</Typography>
			</CardContent>
		</Card>
	);
};

CardContentAbout2.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired
};

export default CardContentAbout2;
