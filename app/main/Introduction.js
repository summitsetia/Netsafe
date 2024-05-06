import React from 'react'
import Image from 'next/image';

const Introduction = ({data}) => {
    return (
        <div className='py-32 px-48 bg-[#18B4BB]' id="target-component">
            <div className='flex justify-between'>
                <div className="flex-shrink-0 flex-grow-0">
                    <Image
                    width={350}
                    height={350}
                    src={data.image1}
                    alt={data.alt1}
                    className='rounded-md border-2'
                    />               
                </div>
                <div className='pl-8'>
                    <h1 className='text-6xl font-bold text-[#18223C] pb-2'>{data.firstHeaderText}</h1>
                    <p className='text-base text-white'>{data.firstParagraphText}</p>
                </div>
            </div>
            <div className="flex justify-between pt-8">
                <div className='pr-8'>
                    <h1 className='text-6xl font-bold text-[#18223C] pb-2'>{data.secondHeaderText}</h1>
                    <p className='text-base text-white'>{data.secondParagraphText}</p>
                </div>
                <div className='flex-shrink-0 flex-grow-0'>
                    <Image
                    width={350}
                    height={350}
                    src={data.image2}
                    alt={data.alt2}
                    className='rounded-md border-2'
                     />
                </div>
            </div>
        </div>
    
    )
}

export default Introduction;