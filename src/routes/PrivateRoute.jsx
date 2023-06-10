import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import {DotLoader} from 'react-spinners'
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className='h-[600px] flex items-center justify-center'>
            <DotLoader color="#36d7b7" />
        </div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to='/login' replace state={{from: location}}>
            
        </Navigate>
    );
};

export default PrivateRoute;