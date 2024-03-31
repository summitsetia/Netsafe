import Image from 'next/image';
import React from 'react';

const Header = ({items1}) => {
    return (
        <div className="flex bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="py-12 pl-16">
                <h1 className="text-4xl font-bold text-white pb-4">Lorem Ipsum</h1>
                <p className="text-white pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="bg-white text-pink-500 font-semibold py-2 px-6 rounded-md shadow-md hover:bg-pink-100 transition duration-300">Hello</button>
            </div>
            <div>
                <Image
                src={items1.image1}
                alt="hello"
                width={2000}
                height={2000}
                />
            </div>
        </div>
    );
};

export default Header;
