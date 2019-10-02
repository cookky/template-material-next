import React from 'react'
import Link from 'next/link'
import Head from "next/head";
import AppLayout from "../components/AppLayout/AppLayout";
import TopHeading from "../components/Landing/TopHeading";
import SecondaryLayout from "../components/Landing/SecondaryLayout";
import ContentLayout1 from "../components/Landing/ContentLayout1";
import ContentLayout2 from "../components/Landing/ContentLayout2";
import ContentLayout3 from "../components/Landing/ContentLayout3";
import ContentLayout4 from "../components/Landing/ContentLayout4";
import ContentLayout5 from "../components/Landing/ContentLayout5";
import ContentLayout6 from "../components/Landing/ContentLayout6";
import PrimaryLayout from "../components/Landing/PrimaryLayout";
import HightLightLayout from "../components/Landing/HightLightLayout";

const IndexPage = props => {

  return (
    <div>
      <AppLayout>
        <Head>
          <title>Hacktag Space | The best co-working space in Khon Kean</title>
        </Head>
        <TopHeading
          imageUrl="./static/images/landing/hacktag-landing-1-x.svg"
          heading1={'Co-working Space'}
          heading2={''}
          heading3={''}
          body={'The place you can make something you want to be ' +
            'thigh efficiency and share your experience to other ' +
            'and adapt by yourself learning and share to community.'}
        />
        <SecondaryLayout>
          <ContentLayout1 />
        </SecondaryLayout>

        <SecondaryLayout>
          <ContentLayout2 />
        </SecondaryLayout>

        <SecondaryLayout>
          <ContentLayout3 />
        </SecondaryLayout>

        <SecondaryLayout>
          <ContentLayout4 />
        </SecondaryLayout>
        
          <ContentLayout6 />

      </AppLayout>
    </div>
  );
};

export default IndexPage
