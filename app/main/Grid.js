'use client'
import React from 'react';
import Image from 'next/image';

const Modal = ({ image }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleModal = () => {
        setIsOpen(prevValue => !prevValue);
    };

    return (
        <div>
            <div>
                <Image
                    height={250}
                    width={250}
                    src={image} 
                    alt="Open Modal"
                    onClick={toggleModal} 
                    className="cursor-pointer" 
                />
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <h2 className="text-2xl mb-4">Modal Content</h2>
                        <p>This is a basic modal with Tailwind CSS.</p>
                        <button onClick={toggleModal} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

const Grid = ({ data }) => {
    const dataElements = data.map(element => {
        return <Modal key={element.id} image={element.image} />;
    });

    return (
        <div>
            <div className='flex justify-center pb-12'>
                <h1 className='text-8xl'>Gallery</h1>
            </div>
            <div className='grid grid-cols-4 pl-32 pr-32'>{dataElements}</div>
        </div>
    );
};

export default Grid;
