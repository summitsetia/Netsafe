import React from 'react';
import Link from 'next/link'
import Image from 'next/image';

const Navbar = ({ data }) => {
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
        <div className="text-white flex justify-center space-x-4 items-center ">
          <Link className={"font-bold px-2 py-2 border rounded-md " + (data.data1 ? 'hover:bg-[#18B4BB]' : 'bg-[#18B4BB]')} href="/main">Balance Of Gaming</Link>
          <Link className={"font-bold px-2 py-2 border rounded-md " + (data.data2 ? 'hover:bg-[#18B4BB]' : 'bg-[#18B4BB]')} href="/side">How Does Gaming Affect You</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
