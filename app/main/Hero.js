import React from 'react';

const Hero = ({ data }) => {
    return (
        <div className="relative">
            <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover bg-opacity-50">
                <source src={data.video}/>
            </video>
            <div className="relative py-32 bg-black bg-opacity-50 text-white">
                <div className="flex justify-center pb-8">
                    <h1 className="text-8xl">{data.titleText}</h1>
                </div>
                <div className="flex justify-center">
                    <p>{data.blurbText}</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
