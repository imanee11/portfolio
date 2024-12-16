import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image from '../../constants/image';

const Carousel = () => {
    var settings = {
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <>
            {/* section 3 */}
            <section >


                <div className="slider-container py-[7vh]">
                    <Slider {...settings}>
                        {/* Slide 1 */}
                        <div className='w-[20vw] h-[70vh]  flex justify-center pt-6 rounded-t-2xl relative group overflow-hidden'>
                            <img src={image.pr1} alt="Project 1" className='w-[93%] h-[100%] object-cover rounded-t-2xl' />
                            {/* <div className='absolute bottom-[-100%] left-3 right-3 bg-gradient-to-r px-4 py-5 rounded-2xl from-[#8750f7] to-[#2a1454] text-white transition-all duration-1000 ease-in-out group-hover:bottom-[3%]'>
                                <p className='font-bold text-[22px]'>Restaurant Web Site</p>
                                <p className='text-[13px]'>Project with Html and Css, Sass, Bootstrap, Git</p>
                            </div> */}
                        </div>

                        {/* Slide 2 */}
                        <div className='w-[20vw] h-[70vh]  flex justify-center pt-6 rounded-t-2xl relative group overflow-hidden'>
                            <img src={image.pr2} alt="Project 2" className='w-[93%] h-[100%] object-cover rounded-t-2xl' />
                            {/* <div className='absolute bottom-[-100%] left-3 right-3 bg-gradient-to-r px-4 py-5 rounded-2xl from-[#8750f7] to-[#2a1454] text-white transition-all duration-1000 ease-in-out group-hover:bottom-[3%]'>
                                <p className='font-bold text-[22px]'>Web Site about Morocco</p>
                                <p className='text-[13px]'>Project with Html and Css</p>
                            </div> */}
                        </div>

                        {/* Slide 3 */}
                        <div className='w-[20vw] h-[70vh]  flex justify-center pt-6 rounded-t-2xl relative group overflow-hidden'>
                            <img src={image.pr3} alt="Project 3" className='w-[93%] h-[100%] object-cover rounded-t-2xl' />
                            {/* <div className='absolute bottom-[-100%] left-3 right-3 bg-gradient-to-r px-4 py-5 rounded-2xl from-[#8750f7] to-[#2a1454] text-white transition-all duration-1000 ease-in-out group-hover:bottom-[3%]'>
                                <p className='font-bold text-[22px]'>Restaurant Web Site</p>
                                <p className='text-[13px]'>Project with Html and Css, JavaScript, Bootstrap, Sass</p>
                            </div> */}
                        </div>

                        {/* Slide 4 */}
                        <div className='w-[20vw] h-[70vh]  flex justify-center pt-6 rounded-t-2xl relative group overflow-hidden'>
                            <img src={image.pr4} alt="Project 4" className='w-[93%] h-[100%] object-cover rounded-t-2xl' />
                            {/* <div className='absolute bottom-[-100%] left-3 right-3 bg-gradient-to-r px-4 py-5 rounded-2xl from-[#8750f7] to-[#2a1454] text-white transition-all duration-1000 ease-in-out group-hover:bottom-[3%]'>
                                <p className='font-bold text-[22px]'>Shopping Web Site</p>
                                <p className='text-[13px]'>Project with Html, Tailwind, ReactJs</p>
                            </div> */}
                        </div>

                        {/* Slide 5 */}
                        {/* <div className='w-[30vw] h-[80vh] bg-[#140c1c] flex justify-center pt-6 rounded-t-2xl relative group overflow-hidden'>
                            <img src={image.pr5} alt="Project 5" className='w-[93%] h-[100%] object-cover rounded-t-2xl' />
                            <div className='absolute bottom-[-100%] left-3 right-3 bg-gradient-to-r px-4 py-5 rounded-2xl from-[#8750f7] to-[#2a1454] text-white transition-all duration-1000 ease-in-out group-hover:bottom-[3%]'>
                                <p className='font-bold text-[22px]'>Tic Tac Toe Game</p>
                                <p className='text-[13px]'>Small game with Html, Css and JavaScript</p>
                            </div>
                        </div> */}

                        {/* Slide 6 */}
                        {/* <div className='w-[30vw] h-[80vh] bg-[#140c1c] flex justify-center pt-6 rounded-t-2xl relative group overflow-hidden'>
                            <img src={image.pr6} alt="Project 6" className='w-[93%] h-[100%] object-cover rounded-t-2xl' />
                            <div className='absolute bottom-[-100%] left-3 right-3 bg-gradient-to-r px-4 py-5 rounded-2xl from-[#8750f7] to-[#2a1454] text-white transition-all duration-1000 ease-in-out group-hover:bottom-[3%]'>
                                <p className='font-bold text-[22px]'>Calculator</p>
                                <p className='text-[13px]'>Small Calculator with Html, Css and JavaScript</p>
                            </div>
                        </div> */}
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Carousel;
