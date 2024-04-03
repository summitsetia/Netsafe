'use client';
import React from 'react';

const Navbar = ({ navbarItems }) => {

  const handleClick = () => {
    console.log('Button clicked');
  };
  

  return (
    <div className="flex flex-col">
      <nav className="bg-[#18223C] bg-opacity-100 h-100% flex justify-between">
        <img className="w-26 h-16" src={navbarItems.image} alt="Logo Of Netsafe" />
        <div className="text-white flex ">
          <button className="pr-20" onClick={handleClick}>{navbarItems.text1}</button>
          <button className="mr-20" onClick={handleClick}>{navbarItems.text2}</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
