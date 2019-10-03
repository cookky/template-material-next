import React from 'react';
import PropTypes from 'prop-types';
import styles from "./styles/ContentContactLayout1.style";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardContentContact1 from "../../Sharing/CardContentContact1";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";

const ContentContactLayout1 = props => {
	const classes = styles()

	return (
		<div className={classes.root}>

			<Grid container spacing={1}>
				<Grid item sm={12}>
					<CardContentContact1
						title="Cozy Working Desk"
						body="Cozy working desk with excellent facilities and safety services.
						Cozy working desk with excellent facilities and safety services."
						icon={<img src="./static/images/icons/hacktag-icon-1.svg" alt=""/>}/>
				</Grid>
				
			</Grid>

		</div>
	);
};

ContentContactLayout1.propTypes = {};

export default ContentContactLayout1;
