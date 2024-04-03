import Image from 'next/image';
import React from 'react';

const Header = ({ headerItems }) => {
    return (
        <div className="flex relative" style={{ backgroundImage: `url(${headerItems.image3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="absolute inset-0 bg-black bg-opacity-75"></div> 
            <div className="py-12 pl-48 max-w-4xl pr-64 relative z-10">
                <h1 className="text-8xl font-bold text-white pb-4">Lorem Ipsum</h1>
                <p className="text-white pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="bg-white text-pink-500 font-semibold py-2 px-6 rounded-md shadow-md hover:bg-pink-100 transition duration-300">Hello</button>
            </div>
            <div className='w-96 py-28 relative z-10'>
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
