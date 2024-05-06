'use client'
import React from 'react';
import Image from 'next/image'
import dataSheet from "./dataSheet";
import Link from 'next/link'

const Boxes = ({ headerText, image, mainText, url , alt}) => {
    return (
        <div className="basis-full border-2 border-white rounded-lg p-4" id="more-component">
            <div className='flex justify-center'>
                <Link href={url}>
                <Image
                src={image}
                alt="Link To Website"
                width={272}
                height={185}
                className='rounded-lg hover:border-4 hover:animate-pulse'
                />
                </Link>
            </div>
            <div className="text-center">
            <h1 className='p-4 text-xl font-bold text-[#18223C]'>{headerText}</h1>
            </div>
            <div className="flex justify-center"> 
                <p className="mx-auto p-4 text-center">{mainText}</p>
            </div>
        </div>
           
    );
};

const Links = () => {
    const [link, setLink] = React.useState(dataSheet)

    function updateLinks() {
        const shuffledDataSheet = shuffleArray([...dataSheet]);
        setLink(shuffledDataSheet);
    }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    return (
        <div className='bg-[#F89005] font-custom'>
            <div className='flex justify-center pt-8'>
                <button className="bg-white text-[#18B4BB] text-2xl font-semibold py-4 px-8 rounded-md shadow-md hover:bg-[#18223C]" onClick={updateLinks}>More Links</button>
            </div>
            <div className="flex justify-center space-x-4 p-4">
                <Boxes image={link[0].img} headerText={link[0].headerText} mainText={link[0].mainText} url={link[0].url} />
                <Boxes image={link[1].img} headerText={link[1].headerText} mainText={link[1].mainText} url={link[1].url} />
                <Boxes image={link[2].img} headerText={link[2].headerText} mainText={link[2].mainText} url={link[2].url} />
                <Boxes image={link[3].img} headerText={link[3].headerText} mainText={link[3].mainText} url={link[3].url} />
    
            </div>
        </div>
    );
}

export default Links;
