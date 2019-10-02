import React from 'react';
import PropTypes from 'prop-types';
import Box from "@material-ui/core/Box";
import CheckIcon from '@material-ui/icons/Check';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import styles from "./styles";

const ServiceItem = props => {
	const classes = styles();
	const {title} = props
	return (
		<Box>
			<Box className={classes.serviceItemContent}>
				<CheckIcon className={classes.checkIcon}/>
				<Typography className={classes.serviceItemName} component="h4">{title}</Typography>
			</Box>
			<Divider/>
		</Box>
	);
};

ServiceItem.propTypes = {
	title: PropTypes.string.isRequired
};

export default ServiceItem;
