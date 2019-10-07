import React from 'react';
import Head from "next/head";
import AppLayout from "../components/AppLayout/AppLayout";
import TopHeadingAbout from "../components/Landing/about/TopHeadingAbout";
import SecondaryLayout from "../components/Landing/SecondaryLayout";
import HightLightLayout from "../components/Landing/HightLightLayout";
import ContentLayout7 from "../components/Landing/ContentLayout7";
import CourseLayout1 from "../components/Landing/course/CourseLayout1";
import CourseLayout2 from "../components/Landing/course/CourseLayout2";

const Course = () => {
    return (
        <div>
            <AppLayout>
                <Head>
                    <title>Hacktag Space | The best co-working space in Khon Kean</title>
                </Head>
                <TopHeadingAbout
                    imageUrl=""
                    heading={'Course'}
                    body={''}
                />

                <SecondaryLayout>
                    <CourseLayout1 />
                </SecondaryLayout>

                <HightLightLayout>
				<CourseLayout2 />
			</HightLightLayout>

            </AppLayout>
        </div>
    );
}

export default Course;