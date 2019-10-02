import React from 'react';
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import styles from "./styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ServiceItem from "./ServiceItem";


const PricingCard = props => {
	const classes = styles();
	const {service, price, serviceList} = props
	return (
		<Card className={classes.root}>
			<CardContent className={classes.carcContent}>
				<Box className={classes.header}>
					<Typography className={classes.serviceName} component="h6">
						{service}
					</Typography>
					<Typography className={classes.price} component="h1">
						฿{price.toFixed(2)}
						<Box className={classes.priceType}>
							/ Day
						</Box>
					</Typography>
					<Button className={classes.button}>
						BOOK NOW
					</Button>
				</Box>
				<Box className={classes.body}>
					{
						serviceList.map((item, index) => (
							<ServiceItem key={index} title={item}/>
						))
					}
				</Box>
			</CardContent>
		</Card>
	);
};

PricingCard.propTypes = {
	service: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	serviceList: PropTypes.array.isRequired
};

export default PricingCard;
