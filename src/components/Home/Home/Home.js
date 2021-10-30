import React from 'react';
import Destination from '../Destination/Destination';
import Faq from '../Faq/Faq';
import HeroBanner from '../HeroBanner/HeroBanner';
import RecentTrips from '../RecentsTrips/RecentTrips';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <HeroBanner></HeroBanner>
            {/* <AboutUs></AboutUs> */}
            <Destination></Destination>
            <RecentTrips></RecentTrips>
            <Faq></Faq>
            <Testimonial></Testimonial>
            {/* <Footer></Footer> */}
        </>
    );
};

export default Home;