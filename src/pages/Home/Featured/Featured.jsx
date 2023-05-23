import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-item px-32 pt-10 pb-28 text-white my-20 bg-fixed'>
            <SectionTitle subHeading={'Check It Out'} heading={'Featured Item'} ></SectionTitle>      
            <div className='gap-12 pt-4 md:flex justify-center items-center'>
                <div>
                    <img src={featured} className=''  alt="" />
                </div>
                <div className=''>
                    <p>May 23 2023</p>
                    <p className='uppercase'>Where can I get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dolorem totam minus, temporibus accusantium eius maiores libero magni quibusdam fugit possimus quia distinctio natus hic doloribus nemo. Tempora accusamus quidem, quae dolores maxime exercitationem tenetur vero voluptatibus, accusantium illo corporis quia nisi fugit rerum, nobis itaque aliquid quaerat! Atque, minima!</p>
                    <button className='btn mt-4 btn-outline border-0 border-b-4 text-white hover:bg-white hover:text-black hover:border-white'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;