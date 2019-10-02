import React from 'react';
import PropTypes from 'prop-types';
import Container from "@material-ui/core/Container";
import styles from './styles/HightLightLayout.style'

const HightLightLayout = props => {
	const {children} = props
	const classes = styles()
	return (
		<div className={classes.root}>
			<Container maxWidth="lg" className={classes.container}>
				{children}
			</Container>
		</div>
	);
};

HightLightLayout.propTypes = {
	children: PropTypes.element.isRequired
};

export default HightLightLayout;
