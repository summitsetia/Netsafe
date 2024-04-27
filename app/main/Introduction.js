import React from 'react'
import Image from 'next/image';

const Introduction = ({data}) => {
    return (
        <div className='py-32 pl-48 pr-48'>
            <div className='flex justify-between'>
                <div className="">
                    <Image
                    width={500}
                    height={500}
                    src={data.image}
                    alt="Hello"
                    />               
                </div>
                <div>
                    <h1 className='text-6xl font-bold'>Hello</h1>
                    <p>fwejfiejfiewjfijewekfjelwkfewjnfekwfjewnfjwenfjke
                    w23o32fi43g
                    </p>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <h1 className='text-6xl font-bold'>Hello</h1>
                    <p>fwejfiejfiewjfijewekfjelwkfewjnfekwfjewnfjwenfjke
                    w23o32fi43g</p>
                </div>
                <div>
                    <Image
                    width={500}
                    height={500}
                    src={data.image}
                    alt="hello"
                     />
                </div>
            </div>
        </div>
    
    )
}

export default Introduction;