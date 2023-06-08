import React, { useContext, useEffect, useRef, useState } from 'react';
import './Login.css'
import authImg from '../../assets/others/authentication2.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {FaFacebook, FaGoogle, FaGithub} from 'react-icons/fa'
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-hot-toast';
const Login = () => {
    const [disable, setDisable] = useState(true)
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password).then(result => {
            const loggedUser = result.user;
            toast.success('Login Successfully')
            navigate(from, {replace: true})
        }).catch(err => {
            toast.error(err.message)
        })
    }
    const handleValidateCaptcha = e => {
        const value = e.target.value;
        if (value.length === 6) {
            if (validateCaptcha(value) === true) {
                setDisable(false)
            }
            else {
                setDisable(true)
            }
        }
    }
    return (
        <div className='login-container'>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-12">
                    <div className="">
                        <img src={authImg} alt="" />
                    </div>
                    <div className="flex-shrink-0 w-full max-w-sm ">
                        <h3 className='text-center text-3xl font-bold'>Login</h3>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onChange={handleValidateCaptcha} type="text" name='captcha' placeholder="Type The Text Above" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disable} value='Login' type='submit' className="btn bg-[#D1A054] border-0 hover:bg-[#D1A054] hover:bg-opacity-70" />
                            </div>
                        </form>
                        <div className='text-center space-y-3 my-7'>
                            <Link to='/signUp'>
                                <p className='label-text-alt text-[#D1A054] text-[14px] font-bold link link-hover'>New here? Create a New Account</p>
                            </Link>
                            <p className='text-[14px]'>Or sign in with</p>
                            <div className='flex justify-center gap-6'>
                                <button className='btn-outline btn rounded-full'>
                                    <FaFacebook className='text-xl'></FaFacebook>
                                </button>
                                <button className='btn-outline btn rounded-full'>
                                    <FaGoogle className='text-xl'></FaGoogle>
                                </button>
                                <button className='btn-outline btn rounded-full'>
                                    <FaGithub className='text-xl'></FaGithub>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;