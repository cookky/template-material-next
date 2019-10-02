import React from 'react';
import PropTypes from 'prop-types';
import styles from "./styles/ContentLayout5.style";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import PricingCard from "../PricingCard/PricingCard";

const regularServices = [
	'One Seat Of Regular Room',
	'Private Smart Locker',
	'Free Unlimited Wifi Speed'
];

const privateRoomServices = [
	'One of private room',
	'Private Smart Locker',
	'Free Unlimited Wifi Speed',
	'Bath room to take a shower',
];

const meetingRoomServices = [
	'One of meeting room',
	'Three of Private Smart Locker',
	'Free Unlimited Wifi Speed'
];

const ContentLayout5 = props => {
	const classes = styles()

	return (
		<div className={classes.root}>
			<Box className={classes.sectionContainer}>
				<Typography className={classes.sectionHeading}>
					Pricing
				</Typography>
				<Typography className={classes.sectionBody}>
					Choose a service that fits you.
				</Typography>
				<Grid container spacing={10} justify="center" alignItems="center">
					<Grid item md={4} sm={12}>
						<PricingCard
							service="REGULAR ROOM"
							price={249.00}
							serviceList={regularServices}
						/>
					</Grid>
					<Grid item md={4} sm={12}>
						<PricingCard
							service="PRIVATE ROOM"
							price={499.00}
							serviceList={privateRoomServices}
						/>
					</Grid>
					<Grid item md={4} sm={12}>
						<PricingCard
							service="MEETING ROOM"
							price={699.00}
							serviceList={meetingRoomServices}
						/>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
};

ContentLayout5.propTypes = {};

export default ContentLayout5;
