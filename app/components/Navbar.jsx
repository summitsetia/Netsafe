'use client';
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {

  const handleClick = () => {
    console.log('Button clicked');
  };
  

  return (
    <div className="flex flex-col">
      <nav className="bg-[#18223C] bg-opacity-100 h-100% flex justify-between fixed w-full z-10 px-12 py-4">
        <Link href="/">
          <Image 
            src="/images/logo.png"
            alt="Logo Of Netsafe"
            width={200}
            height={200}
           />         
        </Link>
        <div className="text-white flex pt-4">
          <Link className="pr-20" onClick={handleClick} href="/main">Balance Of Gaming</Link>
          <Link className="mr-20" onClick={handleClick} href="/side">How Does it Affect You</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
