import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBars, FaBook, FaCalendar, FaGrinStars, FaHome, FaPhone, FaRegCalendarAlt, FaShoppingCart, FaStore, FaUserAlt, FaUsers, FaUtensilSpoon, FaUtensils, FaWallet } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    // const isAdmin = true
    const [isAdmin] = useAdmin();
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu px-8 uppercase font-bold py-8 w-80 h-full bg-[#D1A054] text-base-content">
                        {/* Sidebar content here */}
                        <h2 className='text-xl lg:mb-9 font-bold'>Bistro Boss <br /> Restaurant </h2>

                        {
                            isAdmin
                                ? <>
                                    <li>
                                        <Link><FaHome /> Admin Home</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/addItem'><FaUtensils />Add An Item</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/manageItems'><FaBars /> Manage Items</Link>
                                    </li>
                                    <li>
                                        <Link><FaBook /> Manage Bookings</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/allusers'><FaUsers/> All Users</Link>
                                    </li>
                                </>
                                : <>
                                    <li>
                                        <Link><FaHome /> User Home</Link>
                                    </li>
                                    <li>
                                        <Link><FaCalendar /> Reservation</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/payment'><FaWallet /> Payment</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/mycart'><FaShoppingCart /> My Cart </Link>
                                    </li>
                                    <li>
                                        <Link><FaGrinStars /> Add Review</Link>
                                    </li>
                                    <li>
                                        <Link><FaRegCalendarAlt /> Bookings</Link>
                                    </li>
                                </>
                        }

                        <hr className='my-4' />
                        <li>
                            <Link to='/'><FaHome />Home</Link>
                        </li>
                        <li>
                            <Link to='/menu'><FaBars />Menu</Link>
                        </li>
                        <li>
                            <Link to='/order/salad'><FaStore />Shop</Link>
                        </li>
                        <li>
                            <Link><FaPhone />Contact</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;