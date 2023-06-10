import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { toast } from 'react-hot-toast';
const CheckOutForm = ({ price, cart }) => {
    const { user } = useAuth();
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure()
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        //get card
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        // set card payment
        const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card })
        if (error) {
            setCardError(error.message)
        } else {
            setCardError('')
        }
        setProcessing(true)
        // confirm payment 
        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName || 'Anonymous',
                        email: user.email || 'Unknown'
                    }
                }
            }
        )

        // handle confirm error
        if (confirmError) {
            console.log(confirmError);
        }
        setProcessing(false)
        console.log(paymentIntent);
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // save payment information to the server
            const payment = {
                email: user.email,
                transactionId: paymentIntent.id,
                price,
                data: new Date(),
                quantity: cart.length,
                status: 'Pending',
                cartItemsId: cart.map(item => item._id),
                menuItems: cart.map(item => item.foodId),
                itemsNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.insertedResult.insertedId) {
                        toast.success(
                            'Payment Success full'
                        )
                    }
                })
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit} className='w-[70%] mx-auto my-24 space-y-14'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='text-center my-8'>
                    <button type="submit" className='btn btn-primary w-[60%] mx-auto'
                        disabled={!stripe || !clientSecret || processing}>
                        Pay
                    </button>
                </div>
            </form>
            {cardError && <p className='text-xl text-red-700 font-semibold text-center'>{cardError}</p>}
            {transactionId && <p className='text-xl text-green-700 font-semibold text-center'>Your Payment Success full Id: {transactionId}</p>}
        </div>
    );
};

export default CheckOutForm;