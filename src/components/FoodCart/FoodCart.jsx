import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCart = ({ item }) => {
    const { user } = useContext(AuthContext);
    const { _id, recipe, image, category, price, name } = item;
    const [cart, refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    const handleAddToCart = menuItem => {
        if (user && user.email) {
            const cartItem = { foodId: _id, name, image, price, email: user.email }
            fetch(`https://bistro-boss-final-project-server.vercel.app/carts`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(cartItem)
            }).then(res => res.json()).then(data => {
                if (data.insertedId) {
                    refetch()
                    toast.success('Successfully Added In Cart');
                }
            })
        }
        else {
            toast.error('Please Login First');
            navigate('/login', { state: { from: location } })
        }
    }
    return (
        <div className="card bg-[#F3F3F3] rounded-none">
            <figure><img src={image} className='w-full h-72 object-center' alt="Shoes" /></figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-3 mt-3 p-2 rounded-md'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                <button onClick={() => handleAddToCart(item)} className='uppercase btn btn-outline bg-[#E8E8E8] w-1/2 mx-auto border-0 border-b-4 border-[#BB8506] hover:bg-black hover:border-black hover:text-[#BB8506]'>Add To cart</button>
            </div>
        </div>
    );
};

export default FoodCart;