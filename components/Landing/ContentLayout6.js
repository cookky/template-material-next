import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./styles/ContentLayout6.style";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
}

const ContentLayout6 = props => {
    const classes = styles();
    const imageUrl = '../../static/images/hacktag-space-regular-preview-1.jpg';
    return (
        <div>
            <Carousel
                additionalTransfrom={0}
                arrows
                autoPlay={true}
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderDotsOutside={false}
                responsive={responsive}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
                removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >

                <div className={classes.imgSlide1}></div>
                <div className={classes.imgSlide2}></div>
                <div className={classes.imgSlide3}></div>


            </Carousel>
        </div>
    );
};

ContentLayout6.propTypes = {};

export default ContentLayout6;
