import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBG from '../../../assets/menu/menu-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
const Menu = () => {
    const [menu] = useMenu();
    console.log(menu);
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const drinks = menu.filter(item => item.category === 'drinks')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>            
            {/* Main cover */}
            <Cover title='our menu' img={menuBG}></Cover>
            {/* Offered menu items */}
            <div className='my-16'>
                <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
            </div>
            {/* dessert menu items */}
            <div className='my-16'>
                <MenuCategory title='desserts' items={desserts} coverImg={dessertImg}></MenuCategory>
            </div>
            {/* Pizza menu items */}
            <div className='my-16'>
                <MenuCategory title='pizza' items={pizza} coverImg={pizzaImg}></MenuCategory>
            </div>
            {/* soup menu items */}
            <div className='my-16'>
                <MenuCategory title='soup' items={soup} coverImg={soupImg}></MenuCategory>
            </div>
            {/* salad menu items */}
            <div className='my-16'>
                <MenuCategory title='salad' items={salad} coverImg={saladImg}></MenuCategory>
            </div>
        </div>
    );
};

export default Menu;