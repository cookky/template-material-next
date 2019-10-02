import React from 'react';
import {PageHeading} from "../components/PageHeading";
import AppLayout from "../components/AppLayout/AppLayout";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PricingCard from "../components/PricingCard/PricingCard";
import Head from "next/head";

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

const Pricing = () => {
	return (
		<AppLayout>
			<Head>
				<title>Hacktag Space | Pricing</title>
			</Head>
			<PageHeading
				title="HACKTAG SPACE SERVICE PRICING"
				heading="Choose a service that fits you"
				body="We have many service that you can choose a service that fits you."
			/>
			<Container maxWidth="lg">
				<Grid container spacing="6" justify="center">
					<Grid item="4">
						<PricingCard
							service="REGULAR ROOM"
							price={249.00}
							serviceList={regularServices}
						/>
					</Grid>
					<Grid item="4">
						<PricingCard
							service="PRIVATE ROOM"
							price={499.00}
							serviceList={privateRoomServices}
						/>
					</Grid>
					<Grid item="4">
						<PricingCard
							service="MEETING ROOM"
							price={699.00}
							serviceList={meetingRoomServices}
						/>
					</Grid>
				</Grid>
			</Container>
		</AppLayout>
	);
};

export default Pricing;
