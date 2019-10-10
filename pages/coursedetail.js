import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Head from "next/head";
import AppLayout from "../components/AppLayout/AppLayout";
import TopHeading from "../components/Landing/TopHeading";
import SecondaryLayout from "../components/Landing/SecondaryLayout";
import HightLightLayout from "../components/Landing/HightLightLayout";
import CourseDetailLayout1 from "../components/Landing/course/CourseDetailLayout1";
import CourseLayout2 from "../components/Landing/course/CourseLayout2";
import { findById } from "../services/course.api";

const useFindById = (id) => {

    const [listCourse, setListCourse] = useState(null);
    const [loading, setLoading] = useState(false)

    const fetch = async () => {
        setLoading(true);
        const data = await findById(id);
        setLoading(false);
        setListCourse(data);
    };
    useEffect(() => {
        fetch()
    }, [id]);
    return {
        listCourse, loading
    }
};

const CourseDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const { listCourse, loading } = useFindById(id);
    return (
        <div>
            <AppLayout>
                <Head>
                    <title>Hacktag Space | The best co-working space in Khon Kean</title>
                </Head>

                {!loading ? listCourse ? (
                    <TopHeading
                        imageUrl=""
                        heading={listCourse.title}
                        body={listCourse.date}
                    />
                ) : null : (<h3>Loading...</h3>)}

                {!loading ? listCourse ? (
                    <SecondaryLayout>
                        <CourseDetailLayout1 data={{listCourse}} />
                    </SecondaryLayout>
                ) : null : (<h3>Loading...</h3>)}

                <HightLightLayout>
                    <CourseLayout2 />
                </HightLightLayout>

            </AppLayout>
        </div>
    );
}

export default CourseDetail;