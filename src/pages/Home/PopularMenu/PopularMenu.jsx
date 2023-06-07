import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <section className='my-12'>
            <SectionTitle heading={'from our menu'} subHeading={'Popular Items'}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItems item={item} key={item._id}></MenuItems>)
                } 
            </div>
            <div className='text-center'>
                <button className='btn mt-4 btn-outline border-0 border-b-4 text-black hover:bg-black hover:text-white hover:border-black'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;