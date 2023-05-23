import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import CallUs from '../CallUs/CallUs';
import Recommend from '../Recommend/Recommend';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
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