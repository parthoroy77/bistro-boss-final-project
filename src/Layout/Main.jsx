import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';

const Main = () => {
    const location = useLocation();
    const noNavFoot = location.pathname.includes('login') || location.pathname.includes('signUp') ;
    return (
        <div>
            {noNavFoot || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavFoot || <Footer></Footer>}
        </div>
    );
};

export default Main;