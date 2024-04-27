'use client'
import React from 'react';
import Image from 'next/image'
import dataSheet from "./dataSheet";

const Boxes = ({ text, image }) => {
    return (
        <div className="pr-28" id="more-component">
        <div>
            <Image
            src={image}
            alt="Column Image"
            width={4000}
            height={6000}
             />
        </div>
        <div className="text-center">
            <p className='p-4'>{text}</p>
        </div>
        <div className="flex items-center justify-center"> 
            <button className="mx-auto p-4">hello</button> 
        </div>
    </div>
           
    );
};

export default function Links() {
    const [link, setLink] = React.useState(dataSheet)

    function updateLinks () {

    }

    const boxElements = link.map(box => {
        return <Boxes key={box.id} text={box.text} image={box.img} url={box.url}/>;
    });

    return (
        <div>
            <div>
                <button className="text-8xl" onClick={updateLinks}>Random</button>
            </div>
            <div className="flex flex-row ml-48 ">{boxElements}</div>
        </div>
    );
}
 