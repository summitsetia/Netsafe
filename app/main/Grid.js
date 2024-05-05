'use client'
import React from 'react';
import Image from 'next/image';

const Modal = ({ galleryImage , headerText, bodyText}) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleModal = () => {
        setIsOpen(prevValue => !prevValue);
    };

    return (
        <div>
            <div className='px-16'>
                <Image
                    height={250}
                    width={250}
                    src={galleryImage} 
                    alt="Open Modal"
                    onClick={toggleModal} 
                    className="cursor-pointer rounded-md border-4 border-[#18223C] w-96 h-48" 
                />
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <Image
                            height={250}
                            width={250}
                            src={galleryImage} 
                            alt="Open Modal"
                            className='pb-8'
                        />
                        <div className='w-96 h-72 '>
                            <h2 className="text-2xl mb-4">{headerText}</h2>
                            <p>{bodyText}</p>
                            <button onClick={toggleModal} className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

const Grid = ({ data }) => {
    const dataElements = data.map(item => {
        return <Modal key={item.id} galleryImage={item.galleryImage} headerText={item.headerText} bodyText={item.bodyText}/>;
    });

    return (
        <div>
            <div className='flex justify-center pb-12'>
                <h1 className='text-8xl font-bold'>Gallery</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-3 gap-8 space-x '>{dataElements}</div>
            </div>
        </div>
    );
};

export default Grid;
