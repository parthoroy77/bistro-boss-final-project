import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { toast } from 'react-hot-toast';

const img_hosting_token = import.meta.env.VITE_IMG_API_KEY;
const AddItem = () => {
    const { register, reset,handleSubmit, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();
    const hostingURL = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        console.log(formData);
        fetch(hostingURL, {
            method: 'POST',
            body: formData
        }).then(res => res.json()).then(imgRes => {
            if (imgRes.success) {
                const imgURL = imgRes.data.display_url;
                const { name, price, category, recipe } = data;
                const newMenuItem = { name, price: parseFloat(price), category, recipe, image: imgURL };
                axiosSecure.post('/menu', newMenuItem).then(data => {
                    toast.success('Item Added Successfully')
                    reset()
                })
            }
        })
    };
    return (
        <div className='w-full'>
            <Helmet><title>Bistro Boss | Add Item</title></Helmet>
            <div className='my-14'>
                <SectionTitle heading={'add an item'} subHeading={"What's New"}></SectionTitle>
                <form onSubmit={handleSubmit(onSubmit)} className='w-[95%] px-12 py-7 space-y-4 rounded-sm mx-auto bg-[#E8E8E8]'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe name?*</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Type here" className="input input-bordered w-full" />
                    </div>
                    <div className='flex gap-3'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select defaultValue={'Pick One'} {...register('category',{required: true})} className="select select-bordered">
                                <option disabled >Pick One</option>
                                <option>salad</option>
                                <option>pizza</option>
                                <option>soup</option>
                                <option>dessert</option>
                                <option>drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Price?*</span>
                            </label>
                            <input type="text" {...register("price", { required: true, maxLength: 80 })} placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Details</span>
                        </label>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-[140px]" placeholder="Description"></textarea>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Item Image*</span>
                        </label>
                        <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <input type="submit" value="Add Item" className="btn my-4 bg-[#D1A054] border-0 hover:bg-[#D1A054] hover:bg-opacity-75" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;