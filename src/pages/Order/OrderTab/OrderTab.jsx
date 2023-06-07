import React from 'react';
import FoodCart from '../../../components/FoodCart/FoodCart';

const OrderTab = ({items}) => {
    return (
        <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
            {
                items.map(item => <FoodCart item={item} key={item._id}></FoodCart>)
            }
        </div>
    );
};

export default OrderTab;