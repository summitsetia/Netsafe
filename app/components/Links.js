'use client'
import React from 'react';
import Image from 'next/image'
import dataSheet from "./dataSheet";
import Link from 'next/link'

const Boxes = ({ headerText, image, mainText, url }) => {
    return (
        <div className="pr-28" id="more-component">
        <div>
        <Link href={url}>
            <Image
            src={image}
            alt="Column Image"
            width={4000}
            height={6000}
             />
        </Link>
        </div>
        <div className="text-center">
            <h1 className='p-4'>{headerText}</h1>
        </div>
        <div className="flex items-center justify-center"> 
            <p className="mx-auto p-4">{mainText}</p>
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
        <div>
            <div>
                <button className="text-8xl" onClick={updateLinks}>Random</button>
            </div>
            <div className="flex flex-row ml-48 ">
                <Boxes image={link[0].img} headerText={link[0].headerText} mainText={link[0].mainText} url={link[0].url} />
                <Boxes image={link[1].img} headerText={link[1].headerText} mainText={link[1].mainText} url={link[1].url} />
                <Boxes image={link[2].img} headerText={link[2].headerText} mainText={link[2].mainText} url={link[2].url} />
                <Boxes image={link[3].img} headerText={link[3].headerText} mainText={link[3].mainText} url={link[3].url} />
    
            </div>
        </div>
    );
}

export default Links;
