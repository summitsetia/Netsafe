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
            <div className='px-4'>
                <Image
                    height={250}
                    width={250}
                    src={galleryImage} 
                    alt="Open Modal"
                    onClick={toggleModal} 
                    className="cursor-pointer rounded-md  w-56 h-44 border-4 hover:animate-pulse transition-all hover:border-[#18223C]" 
                />
            </div>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-20">
                    <div className="bg-[#18B4BB] p-8 rounded shadow-lg pb-8">
                        <Image
                            height={200}
                            width={200}
                            src={galleryImage} 
                            alt="Modal Image"
                            className='border-4'
                        />
                        <div className='w-96 h-72 pt-4'>
                            <h2 className="text-2xl mb-4 font-bold">{headerText}</h2>
                            <p className='pb-4'>{bodyText}</p>
                            <button onClick={toggleModal} className="bg-white  text-[#18B4BB] font-semibold py-2 px-6 rounded-md shadow-md hover:bg-[#18223C]">
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
        <div id="more-component" className='py-16  bg-[#F58023]'>
            <div className='flex justify-center pb-12'>
                <h1 className='text-8xl font-bold'>Gallery</h1>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-3 gap-4'>{dataElements}</div>
            </div>
        </div>
    );
};

export default Grid;