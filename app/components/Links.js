import React from 'react';
import Image from 'next/image'

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
    const data = [
        {
            id: 1,
            url: "",
            img: "/images/vertical.jpg",
            text: "hello"
        },
        {
            id: 2,
            url: "",
            img: "/images/vertical.jpg",
            text: "hi"
        },
        {
            id: 3,
            url: "",
            img: "/images/vertical.jpg",
            text: "hey"
        },
        {
            id: 4,
            url: "",
            img: "/images/vertical.jpg",
            text: "wsg"
        },
        {
            id: 5,
            url: "",
            img: "/images/vertical.jpg",
            text: "howdy"
        },
    ];

    const boxElements = data.map(box => {
        return <Boxes key={box.id} text={box.text} image={box.img} url={box.url}/>;
    });

    return (
        <div className="flex flex-row ml-48 ">{boxElements}</div>
    );
}
 