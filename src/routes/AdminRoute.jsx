import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { DotLoader } from 'react-spinners'
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()
    if (loading || isAdminLoading) {
        return <div className='h-[600px] flex items-center justify-center'>
            <DotLoader color="#36d7b7" />
        </div>
    }
    if (user && isAdmin) {
        return children
    }
    return (
        <Navigate to='/login' replace state={{ from: location }}>

        </Navigate>
    );
};

export default AdminRoute;