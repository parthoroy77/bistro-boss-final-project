import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import {FaQuoteLeft} from 'react-icons/fa'
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews').then(res=> res.json()).then(data => setReviews(data))
    },[])
    return (
        <div className='my-16'>
            <SectionTitle heading='Testimonial' subHeading='What Our Client Say'></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='mx-24 my-16 flex flex-col px-16 items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.ratings}
                                readOnly
                            />
                            <FaQuoteLeft className='text-7xl mt-5'/>
                            <p className='py-6'>{review.details}</p>
                            <h2 className='text-2xl text-orange-400'>{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;