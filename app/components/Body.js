'use client';
import React from 'react';
import Image from 'next/image';

const Body = ({ bodyItems }) => {
    return (
        <div className="py-32 pl-48 pr-64">
            <div className=" flex justify-between">
                <div>
                    <Image
                    src={bodyItems.image1}
                    alt="hello"
                    width={500}
                    height={500}
                />
                </div>
                <div>
                    <h1 className="text-6xl font-bold text-black">Lorem Ipsum</h1>
                    <p>evjwefjewqifjewiofnewjfnew</p>
                </div>
            </div>
            <div>
                <div>
                    <Image
                    src={bodyItems.image1}
                    alt="hello"
                    width={500}
                    height={500}
                />
                </div>
            </div>
        </div>
    )
}

export default Body;