import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
import { FaTrashAlt, FaUser, FaUserShield, FaUsers } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get(`/users`)
        return res.data;
    })
    const handleMakeAdmin = user => {
        fetch(`https://bistro-boss-final-project-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount) {
                refetch();
                toast.success(`${user.name} is Admin Now!`)
            }
        })
    }
    return (
        <div className='flex items-center justify-center h-full'>
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <div>
                <div>
                    <h3 className='text-2xl uppercase font-semibold'>Total Users: {users.length}</h3>
                </div>
                <div>
                    <div className="overflow-x-auto my-5">
                        <table className="table w-[400px] lg:w-[800px] table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, index) => <tr
                                        key={user._id}
                                    >
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {user.role === 'admin' ? 'ADMIN'
                                                : <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn bg-[#D1A054] border-0 hover:bg-[#D1A054] hover:bg-opacity-75">
                                                    <FaUserShield className='text-2xl text-white' />
                                                </button>
                                            }
                                        </td>
                                        <td>
                                            <button className="btn bg-red-700 hover:bg-red-600">
                                                <FaTrashAlt className='text-2xl text-white' />
                                            </button>
                                        </td>
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

export default AllUsers;