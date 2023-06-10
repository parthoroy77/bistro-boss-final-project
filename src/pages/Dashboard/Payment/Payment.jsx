import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';

const stripePromise = loadStripe(import.meta.env.VITE_SECRET_KEY_PAYMENT)
const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
            <Helmet><title>Bistro Boss | Payment</title></Helmet>
            <div className='w-[85%] mx-auto'>
                <SectionTitle subHeading={'Please Proceed The Payment'} heading={'Payment'}></SectionTitle>
                <Elements stripe={stripePromise}>
                    <CheckOutForm price={price} cart={cart}></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;