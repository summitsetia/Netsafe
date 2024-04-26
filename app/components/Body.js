'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'


const Body = ({ bodyItems }) => {
    return (
        <div className="py-32 pl-48 pr-64" id="target-component">
            <div className=" flex justify-between pb-32" >
                <div>
                    <Image
                    src={bodyItems.image1}
                    alt="hello"
                    width={500}
                    height={500}
                />
                </div>
                <div>
                <h1 className="text-6xl font-bold text-black" >Lorem Ipsum</h1>
                    <p>evjwefjewqifjewiofnewjfnew</p>
                    <Link href="/main"><button>Navigate</button></Link>
                </div>
            </div>
            <div className="flex justify-between" id="another-component">
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
                    <Link href="/side"><button>Navigate</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Body;