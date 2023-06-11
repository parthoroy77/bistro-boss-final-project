import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useCart from '../../../hooks/useCart';
import { Helmet } from 'react-helmet-async';
import { FaTrash, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [cart, refetch] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0).toFixed(2);
    const handleDeleteCartItem = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE',
                    headers: { 'content-type': 'application/json' },
                }).then(res => res.json()).then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                        refetch()
                    }
                })
            }
        })
    }
    return (
        <div className='w-full'>
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <div>
                <SectionTitle subHeading={'My Cart'} heading={'Wanna Add More?'}></SectionTitle>
            </div>
            <div className='flex flex-col gap-5 items-center'>
                <div className='flex uppercase items-center font-semibold my-3 text-xl  gap-6'>
                    <h3>Total Orders: {cart.length}</h3>
                    <h3>Total Price : {total}</h3>
                    <Link to='/dashboard/payment'>
                        <button disabled={total === 0 ? true : false} className='btn bg-[#D1A054] hover:bg-[#D1A054] border-0 hover:bg-opacity-80 '>PAY</button>
                    </Link>
                </div>
                <div>
                    <div className="overflow-x-auto ">
                        <table className="table w-[400px] lg:w-[800px]">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((row, index) => <tr
                                        key={row._id}
                                        className=''
                                    >
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask w-14 h-15">
                                                        <img src={row.image} className='rounded' alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {row.name}
                                        </td>
                                        <td className='text-right'>{row.price}</td>
                                        <th>
                                            <button onClick={() => handleDeleteCartItem(row._id)} className="btn bg-red-700 hover:bg-red-600">
                                                <FaTrashAlt className='text-2xl text-white' />
                                            </button>
                                        </th>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;