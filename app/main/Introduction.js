import React from 'react'
import Image from 'next/image';

const Introduction = ({data}) => {
    return (
        <div className='py-32 px-48 bg-[#18B4BB]'>
            <div className='flex justify-between'>
                <div className="flex-shrink-0 flex-grow-0">
                    <Image
                    width={500}
                    height={500}
                    src={data.image}
                    alt="Hello"
                    />               
                </div>
                <div>
                    <h1 className='text-6xl font-bold text-[#18223C]'>{data.firstHeaderText}</h1>
                    <p className='text-base text-white'>{data.firstParagraphText}</p>
                </div>
            </div>
            <div className="flex justify-between">
                <div>
                    <h1 className='text-6xl font-bold text-[#18223C]'>{data.secondHeaderText}</h1>
                    <p className='text-base text-white'>{data.secondParagraphText}</p>
                </div>
                <div className='flex-shrink-0 flex-grow-0'>
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