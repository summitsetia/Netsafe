import React from 'react';
import Link from 'next/link'

const Hero = ({ data }) => {
    return (
        <div className="relative font-custom">
            <video autoPlay="autoPlay" loop muted className="absolute inset-0 w-full h-full object-cover bg-opacity-50 ">
                <source src={data.video}/>
            </video>
            <div className="relative py-32 bg-black bg-opacity-50 text-white">
                <div className="flex justify-center pb-8">
                    <h1 className="text-8xl font-bold">{data.titleText}</h1>
                </div>
                <div className="flex justify-center">
                    <p>{data.blurbText}</p>
                </div>
                <div className='flex justify-center pt-8 space-x-4'>
                    <button><Link href="#target-component" className='bg-white  text-[#18B4BB] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-[#18223C]'>Info</Link></button>
                    <button><Link href="#more-component" className='bg-white  text-[#18B4BB] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-[#18223C]'>Gallery</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
