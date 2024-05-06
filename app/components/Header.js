import Image from 'next/image';
import React from 'react';

const Header = ({ headerItems }) => {
    return (
        <div>
            <div className="flex relative py-32 font-custom" style={{ backgroundImage: `url(${headerItems.image3})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="absolute inset-0 bg-black bg-opacity-75 z-0"></div> 
                <div className="py-12 pl-48 max-w-4xl pr-64 relative ">
                    <h1 className="text-8xl font-bold text-white pb-4">Digital Wellbeing</h1>
                    <p className="text-white pb-8">
                        Gaming offers a way to allows us to immerse ourselves in a virtual world for purposes such as enjoyment, entertainment and to form social connections.
                        <br></br>
                        Digital Wellbeing refers to our overall health in the digital age, it involves finding a healthy balance between the potential benefits and harms of digital technology.
                        <br></br>
                        Gaming is an addicitive experience which can quite often lead to an unhealthy balance of digital technologies worsening ones digital wellbeing.
                        <br></br>
                        This website aims to provide information about the balance of gaming and learning how gaming effects us to improve our digital wellbeing.
                    </p>

                    <div className='flex space-x-4'>
                        <button><a href="#target-component" className='bg-white  text-[#18B4BB] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-[#18223C]'>Balance</a></button>
                        <button><a href="#another-component" className='bg-white text-[#18B4BB] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-[#18223C]'>Affect</a></button>
                        <button><a href="#more-component" className='bg-white text-[#18B4BB] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-[#18223C]'>Links</a></button>
                    </div>
                </div>
                <div className='w-96 py-28 relative z-0'>
                    <Image
                        src={headerItems.image1}
                        alt="Gaming In the Dark"
                        width={2000}
                        height={2000}
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
