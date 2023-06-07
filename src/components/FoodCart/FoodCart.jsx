import React from 'react';

const FoodCart = ({ item }) => {
    const { _id, recipe, image, category, price, name } = item
    return (
        <div className="card bg-[#F3F3F3] rounded-none">
            <figure><img src={image} className='w-full h-72 object-center' alt="Shoes" /></figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-3 mt-3 p-2 rounded-md'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <button className='uppercase btn btn-outline bg-[#E8E8E8] w-1/2 mx-auto border-0 border-b-4 border-[#BB8506] hover:bg-black hover:border-black hover:text-[#BB8506]'>Add To cart</button>
            </div>
        </div>
    );
};

export default FoodCart;