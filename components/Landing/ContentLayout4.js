import React from 'react';
import PropTypes from 'prop-types';
import styles from "./styles/ContentLayout4.style";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Grid from "@material-ui/core/Grid";
import CardContentIcon from "../Sharing/CardContentIcon";

const ContentLayout4 = props => {
	const classes = styles()

	return (
		<div className={classes.root}>
			<Box className={classes.sectionContainer}>
				<Typography className={classes.sectionHeading}>
					Safe Service
				</Typography>
				<Typography className={classes.sectionBody}>
					Safe services of our co-working for you.
				</Typography>
				<Box>
					<Grid container spacing={6}>
						<Grid item md={3} sm={6} xs={12}>
							<CardContentIcon label="CCTV" icon={<ThumbUpIcon/>}/>
						</Grid>
						<Grid item md={3} sm={6} xs={12}>
							<CardContentIcon label="Locker" icon={<ThumbUpIcon/>}/>
						</Grid>
						<Grid item md={3} sm={6} xs={12}>
							<CardContentIcon label="Safe Network" icon={<ThumbUpIcon/>}/>
						</Grid>
						<Grid item md={3} sm={6} xs={12}>
							<CardContentIcon label="Safe Place" icon={<ThumbUpIcon/>}/>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</div>
	);
};

ContentLayout4.propTypes = {};

export default ContentLayout4;
