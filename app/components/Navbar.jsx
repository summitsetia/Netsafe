import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {


  return (
    <div className="flex flex-col font-custom">
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
          <Link className="pr-20 font-bold"  href="/main">Balance Of Gaming</Link>
          <Link className="mr-20 font-bold"  href="/side">How Does Gaming Affect You</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
