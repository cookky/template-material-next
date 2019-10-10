import React from 'react';
import PropTypes from 'prop-types';
import styles from "./styles/ContentAboutLayout3.style";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardContentAbout2 from "../../Sharing/CardContentAbout2";
import Box from "@material-ui/core/Box";

const ContentAboutLayout3 = props => {
	const classes = styles()

	return (
		<div className={classes.root}>
			<Box className={classes.sectionContainer}>
				<Typography className={classes.sectionHeading}>
					พบกับทีมของเรา
				</Typography>
				<Typography className={classes.sectionBody}>
				เราได้รับทีมผู้นำที่มีประสบการณ์ในอุตสาหกรรมที่หลากหลาย
				</Typography>
			</Box>
			<Grid container spacing={3}>
				<Grid item md={4} sm={4} xs={12}>
					<CardContentAbout2
						title="Cozy Working Desk"
						body="Cozy working desk with excellent facilities and safety services."
						icon={<img src="./static/images/hacktag-space-regular-preview-1.jpg" alt="" />} />
				</Grid>
				<Grid item md={4} sm={4} xs={12}>
					<CardContentAbout2
						title="Choosable Time"
						body="You can choose time to work that you comfable to do."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt="" />} />
				</Grid>
				<Grid item md={4} sm={4} xs={12}>
					<CardContentAbout2
						title="High-Speed Internet"
						body="Internet is important to communicate to world wild."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt="" />} />
				</Grid>
				<Grid item md={4} sm={4} xs={12}>
					<CardContentAbout2
						title="Pleasant Atmosphere"
						body="Pleasant working atmosphere without any disturbance."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt="" />} />
				</Grid>
				<Grid item md={4} sm={4} xs={12}>
					<CardContentAbout2
						title="An advisor"
						body="An advisor, for exchanging idea and experience."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt="" />} />
				</Grid>
				<Grid item md={4} sm={4} xs={12}>
					<CardContentAbout2
						title="Comfortable"
						body="Comfortable office services from professional staff."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt="" />} />
				</Grid>
			</Grid>
		</div>
	);
};

ContentAboutLayout3.propTypes = {};

export default ContentAboutLayout3;
