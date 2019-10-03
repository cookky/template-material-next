import React from 'react'
import Link from 'next/link'
import Head from "next/head";
import AppLayout from "../components/AppLayout/AppLayout";
import TopHeadingAbout from "../components/Landing/about/TopHeadingAbout";
import SecondaryLayout from "../components/Landing/SecondaryLayout";
import ContentAboutLayout1 from "../components/Landing/about/ContentAboutLayout1";
import ContentAboutLayout2 from "../components/Landing/about/ContentAboutLayout2";
import ContentAboutLayout3 from "../components/Landing/about/ContentAboutLayout3";
import HightLightLayout from "../components/Landing/HightLightLayout";
import ContentLayout7 from "../components/Landing/ContentLayout7";

const About = props => {

    return (
        <div>
            <AppLayout>
                <Head>
                    <title>Hacktag Space | The best co-working space in Khon Kean</title>
                </Head>
                <TopHeadingAbout
                    imageUrl=""
                    heading={'About'}
                    body={''}
                />

                <SecondaryLayout>
                    <ContentAboutLayout1 />
                </SecondaryLayout>

                <SecondaryLayout>
                    <ContentAboutLayout2 />
                </SecondaryLayout>

                <SecondaryLayout>
                    <ContentAboutLayout3 />
                </SecondaryLayout>

                <HightLightLayout>
                    <ContentLayout7 />
                </HightLightLayout>

            </AppLayout>
        </div>
    );
};

export default About
