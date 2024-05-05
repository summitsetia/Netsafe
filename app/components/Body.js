'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'


const Body = ({ bodyItems }) => {
    return (
        <div className="py-32 px-48 bg-[#18B4BB] font-custom" id="target-component ">
            <div className=" flex justify-between pb-32 " >
                <div className='flex-shrink-0 flex-grow-0 pr-12'>
                    <Image
                    src={bodyItems.image1}
                    alt="hello"
                    width={600}
                    height={600}
                />
                </div>
                <div>
                <h1 className="text-6xl font-bold text-[#18223C font-bold" >Balance Of Gaming</h1>
                    <p className='text-white text-base'>
                        Balance of gaming refers to the balance between gaming and real life activities.
                        <br></br>
                        Gaming provides many benefits, such  as improved cognitive skills, social interaction & stress relief.
                        <br></br>
                        However, a lack of balance can lead to potential risks such as gaming addiction which leads to more issues.
                        <br></br>
                        Click on this page to learn in depth more about the balance of gaming with statistics and tips.

                    </p>
                    <div className='pt-4'> 
                        <Link href="/main"><button className='bg-white text-[#18B4BB] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-[#18223C]'>Navigate</button></Link>
                    </div>
                </div >
            </div>
            <div id="another-component" className='h-px bg-white w-full py-1' ></div>
            <div className="flex justify-between mt-32"  >
                <div className='flex-shrink-0 flex-grow-0 pr-12'>
                    <Image
                    src={bodyItems.image1}
                    alt="hello"
                    width={600}
                    height={600}
                />
                </div>
                <div >
                    <h1 className="text-6xl font-bold text-[#18223C] ">How Does It Affect You</h1>
                    <p className='text-white text-base'>
                        Gaming addiction is excessive & conpulsive gaming which inteferes with daily life activities.
                        <br></br>
                        Signs include withdrawl symptoms, lying about habits, continuing gaming despite negative consequences & many more.
                        <br></br>
                        This leads to issues such as sleep disturbances, poor nutrition, vision problems & many more.
                        <br></br>
                        Click on this page to leant about the consequences in depth and tips to deal with it.
                    </p>
                    <div className='pt-4'>
                        <Link href="/side"><button className='bg-white text-[#18B4BB] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-[#18223C]'>Navigate</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;