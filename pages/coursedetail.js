import React from 'react';
import Head from "next/head";
import AppLayout from "../components/AppLayout/AppLayout";
import TopHeading from "../components/Landing/TopHeading";
import SecondaryLayout from "../components/Landing/SecondaryLayout";
import HightLightLayout from "../components/Landing/HightLightLayout";
import ContentLayout7 from "../components/Landing/ContentLayout7";
import CourseDetailLayout1 from "../components/Landing/course/CourseDetailLayout1";
import CourseLayout2 from "../components/Landing/course/CourseLayout2";

const CourseDetail = () => {
    return (
        <div>
            <AppLayout>
                <Head>
                    <title>Hacktag Space | The best co-working space in Khon Kean</title>
                </Head>
                <TopHeading
                    imageUrl=""
                    heading={'AdoptOpenJDK'}
                    body={'a Localize case study'}
                />

                <SecondaryLayout>
                    <CourseDetailLayout1 />
                </SecondaryLayout>

                <HightLightLayout>
				<CourseLayout2 />
			</HightLightLayout>

            </AppLayout>
        </div>
    );
}

export default CourseDetail;