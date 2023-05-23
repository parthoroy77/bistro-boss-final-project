import React from 'react';

const MenuItems = ({ item }) => {
    const {_id , recipe, image , category , price, name} = item
    return (
        <div className='flex items-center space-x-4'>
            <img src={image} alt="" style={{borderRadius: '0 200px 200px 200px'}} className='w-[120px] h-[100px] '/>
            <div>
                <h3 className='uppercase text-[#151515] text-[20px]'>{name}</h3>
                <p className='text-[#737373]'>{recipe}</p>
            </div>
            <p className='text-[#BB8506] font-semibold'>${price}</p>
            
        </div>
    );
};

export default MenuItems;