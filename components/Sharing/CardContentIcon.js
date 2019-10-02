import React from 'react';
import PropTypes from 'prop-types';
import styles from "./styles/CardContentIcon.style";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const CardContentIcon = props => {
	const {label, icon} = props
	const classes = styles()

	return (
		<Card className={classes.root}>
			<CardContent className={classes.content}>
				<Avatar className={classes.avatar}>
					<Box clone className={classes.icon}>
						{icon}
					</Box>
				</Avatar>
				<Typography component="h3" align="center" className={classes.label}>
					{label}
				</Typography>
			</CardContent>
		</Card>
	);
};

CardContentIcon.propTypes = {
	label: PropTypes.string.isRequired,
	icon: PropTypes.element.isRequired
};

export default CardContentIcon;
