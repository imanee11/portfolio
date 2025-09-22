import React from 'react';
import image from '../../constants/image'; // Adjust path based on your project structure
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Carousel from './carousel/Carousel';
import CarouselPr2 from './carousel/CarouselPr2';
import CarouselPr6 from './carousel/CarouselPr6';
import CarouselPr3 from './carousel/CarouselPr3';
import CarouselPr4 from './carousel/CarouselPr4';
import CarouselPr5 from './carousel/CarouselPr5';
import MagicBento from './MagicBento';


const Main = () => {
    const navigate = useNavigate();

    // Define descriptions for each image
    const imageDetails = [
        { src: image.pr5, title: "Task anagement app", description: "Laravel 11, Tailwind CSS, and Breeze" },
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
                {/* <div className='flex flex-col gap-10'> */}
                    {/* <div className="flex flex-wrap gap-[3vw] items-center justify-center"> */}

                        {/* task */}
                        {/* <div style={{ position: 'relative' }}>
                            <Carousel
                                baseWidth={300}
                                autoplay={false}
                                autoplayDelay={4000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                            />
                        </div> */}

                        {/* fashe */}
                        {/* <div style={{ position: 'relative' }}>
                            <CarouselPr6
                                baseWidth={300}
                                autoplay={false}
                                autoplayDelay={4000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                            />
                        </div> */}

                        {/* imane portfolio */}
                        {/* <div style={{ position: 'relative' }}>
                            <CarouselPr2
                                baseWidth={300}
                                autoplay={false}
                                autoplayDelay={4000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                            />
                        </div> */}
                    {/* </div> */}

                    {/* <div className='flex gap-[3vw] flex-wrap justify-center items-center'> */}
                        {/* morocco */}
                        {/* <div style={{ position: 'relative' }}>
                            <CarouselPr3
                                baseWidth={300}
                                autoplay={false}
                                autoplayDelay={4000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                            />
                        </div> */}

                        {/* restaurant */}
                        {/* <div style={{ position: 'relative' }}>
                            <CarouselPr4
                                baseWidth={300}
                                autoplay={false}
                                autoplayDelay={4000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                            />
                        </div> */}

                        {/* yummy */}
                        {/* <div style={{ position: 'relative' }}>
                            <CarouselPr5
                                baseWidth={300}
                                autoplay={false}
                                autoplayDelay={4000}
                                pauseOnHover={true}
                                loop={true}
                                round={false}
                            />
                        </div> */}
                    {/* </div> */}


                    <MagicBento
                        textAutoHide={true}
                        enableStars={true}
                        enableSpotlight={true}
                        enableBorderGlow={true}
                        enableTilt={true}
                        enableMagnetism={true}
                        clickEffect={true}
                        spotlightRadius={300}
                        particleCount={12}
                        glowColor="132, 0, 255"
                    />

                </div>
            </div>
        // </div>
    );
};

export default Main;
