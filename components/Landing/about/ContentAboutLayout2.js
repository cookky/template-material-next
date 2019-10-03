import React from 'react';
import PropTypes from 'prop-types';
import styles from "./styles/ContentAboutLayout2.style";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardContentAbout from "../../Sharing/CardContentAbout1";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

const ContentAboutLayout2 = props => {
	const classes = styles()

	return (
		<div className={classes.root}>
			<Box className={classes.sectionContainer}>
				<Typography className={classes.sectionHeading}>
					Our Facility
				</Typography>
				<Typography className={classes.sectionBody}>
					We have facilities for you. Here is same your home.
				</Typography>
			</Box>
			<Hidden smDown>
			<Grid container spacing={1}>
				<Grid item sm={3}>
					<CardContentAbout
						title="Cozy Working Desk"
						body="Cozy working desk with excellent facilities and safety services.
						Cozy working desk with excellent facilities and safety services."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt=""/>}/>
				</Grid>
				<Grid item sm={3} >
					<CardContentAbout
						title="Choosable Time"
						body="You can choose time to work that you comfable to do.
						Cozy working desk with excellent facilities and safety services."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt=""/>}/>
				</Grid>
				<Grid item sm={3} >
					<CardContentAbout
						title="High-Speed Internet"
						body="Internet is important to communicate to world wild.
						Cozy working desk with excellent facilities and safety services."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt=""/>}/>
				</Grid>
				<Grid item sm={3} >
					<CardContentAbout
						title="Pleasant Atmosphere"
						body="Pleasant working atmosphere without any disturbance.
						Cozy working desk with excellent facilities and safety services."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt=""/>}/>
				</Grid>
				
			</Grid>
			</Hidden>

			<Hidden smUp>
			<Grid container spacing={6}>
				<Grid item sm={4}>
					<CardContentAbout
						title="Cozy Working Desk"
						body="Cozy working desk with excellent facilities and safety services.
						Cozy working desk with excellent facilities and safety services."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt=""/>}/>
				</Grid>
				<Grid item sm={4} >
					<CardContentAbout
						title="Choosable Time"
						body="You can choose time to work that you comfable to do.
						Cozy working desk with excellent facilities and safety services."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt=""/>}/>
				</Grid>
				<Grid item sm={4} >
					<CardContentAbout
						title="High-Speed Internet"
						body="Internet is important to communicate to world wild.
						Cozy working desk with excellent facilities and safety services."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt=""/>}/>
				</Grid>
				<Grid item sm={4} >
					<CardContentAbout
						title="Pleasant Atmosphere"
						body="Pleasant working atmosphere without any disturbance.
						Cozy working desk with excellent facilities and safety services."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt=""/>}/>
				</Grid>
				
			</Grid>
			</Hidden>

		</div>
	);
};

ContentAboutLayout2.propTypes = {};

export default ContentAboutLayout2;
