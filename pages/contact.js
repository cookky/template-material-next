import React from 'react';
import AppLayout from "../components/AppLayout/AppLayout";
import Head from "next/head";
import SecondaryLayout from "../components/Landing/SecondaryLayout";
import ContentLayout2 from "../components/Landing/ContentLayout2";
import ContentContactLayout1 from "../components/Landing/contact/ContentContactLayout1";
import HightLightLayout from "../components/Landing/HightLightLayout";
import ContentLayout7 from "../components/Landing/ContentLayout7";


const Contact = () => {
	return (
		<AppLayout>
			<Head>
				<title>Hacktag Space | Pricing</title>
			</Head>

			<SecondaryLayout>
				<ContentLayout2 />
			</SecondaryLayout>

			<HightLightLayout>
				<ContentLayout7 />
			</HightLightLayout>

		</AppLayout>
	);
};

export default Contact;
