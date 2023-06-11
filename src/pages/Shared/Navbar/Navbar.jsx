import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import {FaShoppingCart} from 'react-icons/fa'
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
    const [isAdmin] = useAdmin()
    const { user, logOut } = useContext(AuthContext);
    const [cart, refetch] = useCart();
    const handleLogOut = () => {
        logOut().then(result => {
            toast.success('Sign Out Successfully')
        }).catch(err => {})
    }
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        <li>
            <Link to='/dashboard/mycart'>
                <button className=''>
                    <FaShoppingCart className='text-xl text-green-400'/>
                    <div className="badge text-white absolute bottom-0 badge-error badge-sm">
                        +{cart?.length || 0}
                    </div>
                </button>
            </Link>
        </li>
        <li><Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>Dashboard</Link></li>
        {
            user ? <>
                <li><button onClick={handleLogOut} className='btn btn-ghost'>Log Out</button></li>
            </>
                : <>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Bistro Boss</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;