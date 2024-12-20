import React from 'react';
import image from '../../constants/image'; // Adjust path based on your project structure
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    // Define descriptions for each image
    const imageDetails = [
        { src: image.pr5, title: "Task anagement app", description: "Laravel 11, Tailwind CSS, and Breez" },
        { src: image.pr2, title: "Website about Morocco", description: "Html, CSS" },
        { src: image.pr3, title: "Restaurant website", description: "Html, SASS, Bootstrap and JavaScript" },
        { src: image.pr4, title: "Fash.", description: "React JS, Tailwind CSS" },
        { src: image.pr1, title: "Restaurant website", description: "Html, CSS, SASS and Bootstrap" },
        { src: image.pr6, title: "Camerawoman portfolio", description: "React JS, Tailwind CSS" }
    ];

    return (
        <div className='border-b-[1px] border-b-[#ddd]/25'>
            <div className='py-12 px-[5vw]'>
                {/* Go Back */}
                <div onClick={() => navigate("/")} className='pb-5 cursor-pointer'>
                    <p className='flex items-center gap-2 text-[14px] text-[#fff]'>
                        <span className='text-[#feb273]'><FaLongArrowAltLeft /></span>
                        Go back
                    </p>
                </div>

                {/* Image Sections */}
                <div className='flex flex-col gap-10'>
                    {/* First Row */}
                    <div className='lg:h-[70vh] flex flex-col lg:flex-row justify-center gap-5'>
                        {imageDetails.slice(0, 3).map((img, index) => (
                            <div key={index} className="lg:w-[25vw] lg:h-[100%] h-[65vh] relative group overflow-hidden rounded-lg">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-[100%] h-[100%] object-cover rounded-lg transition duration-300 ease-in-out group-hover:blur-md"
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                                    <h3 className="text-[20px] font-semibold mb-2">{img.title}</h3>
                                    <p className="text-[12px]">{img.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row */}
                    <div className='lg:h-[70vh] flex flex-col lg:flex-row justify-center gap-5'>
                        {imageDetails.slice(3).map((img, index) => (
                            <div key={index} className="lg:w-[25vw] lg:h-[100%] h-[65vh] relative group overflow-hidden rounded-lg">
                                <img
                                    src={img.src}
                                    alt={img.title}
                                    className="w-[100%] h-[100%] object-cover rounded-lg transition duration-300 ease-in-out group-hover:blur-md"
                                />
                                <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition duration-300">
                                    <h3 className="text-[20px] font-semibold mb-2">{img.title}</h3>
                                    <p className="text-[12px]">{img.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
