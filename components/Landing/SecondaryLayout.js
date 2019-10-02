import React from 'react';
import PropTypes from 'prop-types';
import Container from "@material-ui/core/Container";
import styles from './styles/SecondaryLayout.stlye'

const SecondaryLayout = props => {
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

SecondaryLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default SecondaryLayout;