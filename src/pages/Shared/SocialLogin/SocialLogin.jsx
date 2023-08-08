import React, { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';
    const handleGoogleLogin = () => {
        googleLogin().then(result => {
            const loggedUser = result.user;
            const savedUser = { name: loggedUser.displayName, email: loggedUser.email };
            fetch(`https://bistro-boss-final-project-server.vercel.app/users`, {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(savedUser)
            }).then(res => res.json()).then(data => {
                navigate(from, { replace: true })
            })
        }).catch(err => { })
    }
    return (
        <div>
            <div className='flex justify-center gap-6'>
                <button className='btn-outline btn rounded-full'>
                    <FaFacebook className='text-xl'></FaFacebook>
                </button>
                <button onClick={handleGoogleLogin} className='btn-outline btn rounded-full'>
                    <FaGoogle className='text-xl'></FaGoogle>
                </button>
                <button className='btn-outline btn rounded-full'>
                    <FaGithub className='text-xl'></FaGithub>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;