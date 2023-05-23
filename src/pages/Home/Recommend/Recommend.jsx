import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import img1 from '../../../assets/home/slide1.jpg'
const Recommend = () => {
    return (
        <div>
            <SectionTitle heading='Chef recommends' subHeading='Should Try'></SectionTitle>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
                <div className="card bg-[#F3F3F3] rounded-none">
                    <figure><img src={img1} className='w-full h-72 object-center' alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caser Salads</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='uppercase btn btn-outline bg-[#E8E8E8] w-1/2 mx-auto border-0 border-b-4 border-[#BB8506] hover:bg-black hover:border-black'>Add To cart</button>
                    </div>
                </div>
                <div className="card bg-[#F3F3F3] rounded-none">
                    <figure><img src={img1} className='w-full h-72 object-center' alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caser Salads</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='uppercase btn btn-outline bg-[#E8E8E8] w-1/2 mx-auto border-0 border-b-4 border-[#BB8506] hover:bg-black hover:border-black'>Add To cart</button>
                    </div>
                </div>
                <div className="card bg-[#F3F3F3] rounded-none">
                    <figure><img src={img1} className='w-full h-72 object-center' alt="Shoes" /></figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Caser Salads</h2>
                        <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <button className='uppercase btn btn-outline bg-[#E8E8E8] w-1/2 mx-auto border-0 border-b-4 border-[#BB8506] hover:bg-black hover:border-black'>Add To cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommend;