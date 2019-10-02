import React from 'react';
import PropTypes from 'prop-types';
import Container from "@material-ui/core/Container";
import styles from './styles/PrimaryLayout.stlye'

const PrimaryLayout = props => {
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

PrimaryLayout.propTypes = {
	children: PropTypes.element.isRequired
};

export default PrimaryLayout;
