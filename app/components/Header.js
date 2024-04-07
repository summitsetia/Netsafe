import Image from 'next/image';
import React from 'react';

const Header = ({ headerItems }) => {
    return (
        <div className="flex relative pt-32" style={{ backgroundImage: `url(${headerItems.image3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="absolute inset-0 bg-black bg-opacity-75 z-0"></div> 
            <div className="py-12 pl-48 max-w-4xl pr-64 relative ">
                <h1 className="text-8xl font-bold text-white pb-4">Lorem Ipsum</h1>
                <p className="text-white pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div className='space-x-4'>
                    <button><a href="#target-component" className="bg-white text-pink-500 font-semibold py-2 px-6 rounded-md shadow-md hover:bg-pink-100">Hello</a></button>
                    <button><a href="#another-component" className="bg-white text-pink-500 font-semibold py-2 px-6 rounded-md shadow-md hover:bg-pink-100">Hello</a></button>
                </div>
            </div>
            <div className='w-96 py-28 relative z-0'>
                <Image
                    src={headerItems.image1}
                    alt="hello"
                    width={2000}
                    height={2000}
                />
            </div>
        </div>
        
    );
};

export default Header;
