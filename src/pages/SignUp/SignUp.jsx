import React, { useContext } from 'react';
import authImg from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa'
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { createUser, profileUpdate, logOut, googleLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = data => {
        createUser(data.email, data.password).then(result => {
            const createdUser = result.user;
            profileUpdate(data.name, data.photo).then(result => {
                const savedUser = { name: data.name, email: data.email }
                fetch(`https://bistro-boss-final-project-server.vercel.app/users`, {
                    method: 'POST',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(savedUser)
                }).then(res => res.json()).then(data => {
                    if (data.insertedId) {
                        reset()
                        navigate('/')
                        // logOut().then(result => { navigate('/login') }).catch(err => { })
                        toast.success('User Create Successfully')
                    }
                })
            }).catch(err => { })
        }).catch(err => toast.error(err.message))
    };
    return (
        <div className='login-container'>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-12">
                    <div className="">
                        <img src={authImg} alt="" />
                    </div>
                    <div className="flex-shrink-0 w-full max-w-sm ">
                        <h3 className='text-center text-3xl font-bold'>Sign Up</h3>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <small>Name is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Photo Url</span>
                                </label>
                                <input type="text" {...register("photo", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.name && <small>Photo URL is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name='email' {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                                {errors.email && <small>Email is required</small>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/
                                })} placeholder="Password" className="input input-bordered" />
                                {errors.password && <small>Password is required</small>}
                                {errors.password?.type === 'minLength' && <small>Password Must Be 6 Character</small>}
                                {errors.password?.type === 'pattern' && <small>Password are not in correct formate</small>}
                            </div>
                            <div className="form-control mt-6">
                                <input value='Sign Up' type='submit' className="btn bg-[#D1A054] border-0 hover:bg-[#D1A054] hover:bg-opacity-70" />
                            </div>
                        </form>
                        <div className='text-center space-y-3 my-7'>
                            <Link to='/login'>
                                <p className='label-text-alt text-[#D1A054] text-[14px] font-bold link link-hover'>Already registered? Go to log in</p>
                            </Link>
                            <p className='text-[14px]'>Or sign in with</p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;