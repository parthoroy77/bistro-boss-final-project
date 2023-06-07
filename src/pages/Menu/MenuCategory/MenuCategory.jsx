import React from 'react';
import useMenu from '../../../hooks/useMenu';
import MenuItems from '../../Shared/MenuItems/MenuItems';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, coverImg}) => {
    
    return (
        <div>
            {
                title && <Cover title={title} img={coverImg}></Cover>
            }
            <div className='grid mt-16 px-24 md:grid-cols-2 gap-10'>
                {
                    items.map(item => <MenuItems item={item} key={item._id}></MenuItems>)
                }
            </div>
            <div className='text-center my-4'>
                <Link to={`/order/${title}`}>
                    <button className='btn mt-4 btn-outline border-0 border-b-4 text-black hover:bg-black hover:text-white hover:border-black'>Order Your Favorite Food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;