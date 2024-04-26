import React from 'react'

const Hero = ({data}) => {
    return (
        <div className='py-32 bg-black text-white'>
            <div className="flex justify-center">
                <h1 className='text-8xl'>{data.text1}</h1>
            </div>
            <div className="flex justify-center">
                <p>{data.text2}</p>
            </div>
        </div>
        
    )
}

export default Hero;