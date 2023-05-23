import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItems from '../../Shared/MenuItems/MenuItems';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json').then(res => res.json()).then(data => setMenu(data.filter(d => d.category === 'popular')))
    }, [])
    return (
        <section className='my-12'>
            <SectionTitle heading={'from our menu'} subHeading={'Popular Items'}></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItems item={item} key={item._id}></MenuItems>)
                } 
            </div>
            <div className='text-center'>
                <button className='btn mt-4 btn-outline border-0 border-b-4 text-black hover:bg-black hover:text-white hover:border-black'>View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;