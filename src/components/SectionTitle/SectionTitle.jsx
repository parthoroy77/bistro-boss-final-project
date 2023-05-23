import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center md:w-3/12 my-8 mx-auto'>
            <p className='text-[#D99904] italic'>---{subHeading}---</p>
            <h3 className='uppercase my-2 text-3xl border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;