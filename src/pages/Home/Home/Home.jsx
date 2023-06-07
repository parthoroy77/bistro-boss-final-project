import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import CallUs from '../CallUs/CallUs';
import Recommend from '../Recommend/Recommend';
import AboutUs from '../AboutUs/AboutUs';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <AboutUs></AboutUs>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recommend></Recommend>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;