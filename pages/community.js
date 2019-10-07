import React from 'react';
import Head from "next/head";
import AppLayout from "../components/AppLayout/AppLayout";
import TopHeadingAbout from "../components/Landing/about/TopHeadingAbout";
import SecondaryLayout from "../components/Landing/SecondaryLayout";
import CommunityLayout1 from "../components/Landing/community/CommunityLayout1";

const Community = () => {
    return (
        <div>
            <AppLayout>
                <Head>
                    <title>Hacktag Space | The best co-working space in Khon Kean</title>
                </Head>
                <TopHeadingAbout
                    imageUrl=""
                    heading={'Community'}
                    body={''}
                />

                <SecondaryLayout>
                    <CommunityLayout1 />
                </SecondaryLayout>
            </AppLayout>
        </div>
    );
}

export default Community;