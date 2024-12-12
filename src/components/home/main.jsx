import React from 'react';
import image from '../../constants/image';
import { FiArrowRight } from "react-icons/fi";
import Typewriter from 'typewriter-effect';

const Main = () => {
    return (
        <>
            <div className="px-[8vw] py-[20vh] lg:py-[12vh]">

                {/* hero section */}
                <div id='home' className="flex flex-col md:flex-row  items-center">
                    {/* Left Section */}
                    <div className="w-full md:w-[50%] text-center md:text-left">
                        <p className="text-[18px] md:text-[20px] text-[#fff]">
                            <Typewriter
                                options={{
                                    strings: ['Hi, I am Imane'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50,
                                }}
                            />
                        </p>
                        <p className="text-[#fff] text-[30px] md:text-[40px] font-semibold pb-4">Full-Stack Developer</p>
                        <p className="text-[16px] md:text-[18px] text-[#DDD] w-full md:w-[500px] mx-auto md:mx-0 pb-3">
                            I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
                        </p>

                        <div className="flex justify-center md:justify-start">
                            <button className="relative flex items-center px-6 py-3 bg-[#ffd2a9] rounded-full border border-[#feb273] overflow-hidden group">
                                <span className="relative z-10 text-sm font-medium text-black">Hire Me</span>
                                <span className="absolute inset-0 bg-[#feb273] rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span className="relative z-10 ml-3 text-black">
                                    <FiArrowRight className="w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full  lg:block md:w-[50%] mt-8 md:mt-0">
                        <img src={image.code} alt="Code Illustration" className="w-[100%] md:w-[100%] mx-auto" />
                    </div>
                </div>


                {/* about me */}
                <section id='about' className='relative'>

                    {/* <div className='absolute lg:block hidden bottom-0 left-0'>
                        <img src={image.cute2} alt="" className='w-[11vw] ' />
                    </div> */}


                    <div className='flex items-center justify-center text-center gap-2'>

                        {/* right */}
                        <div className='lg:w-[50vw] lg:pt-0 pt-[5vh] group'>
                            <p className="uppercase text-[#fff] text-[25px] font-semibold pb-5 transition-colors duration-300 group-hover:text-[#ffd2a9]">
                                about me
                            </p>
                            <p className='text-[#DDD] py-2'>This is <span className='font-semibold'>Imane El Ouannane</span></p>
                            <p className='text-[#fff] py-2'>A creative and passionate web developer who loves turning ideas into responsive and user-friendly websites. With a focus on clean code and sleek design.</p>
                            <p className='text-[#DDD] py-2'>I have been working with web technologies for more than 2 years</p>
                            <p className='text-[#DDD] py-2'>Over these years, I've gained valuable experience in creating full websites and applications from scratch.</p>

                            {/*  */}
                            <section className='py-[5vh]'>
                                <div className='flex flex-col lg:flex-row justify-center gap-[5vw]'>
                                    <div className='flex items-center gap-4 border-[1px] border-[#DDD]/50 p-4 rounded-md'>
                                        <p className='font-medium text-[20px] text-[#feb273]'>06+</p>
                                        <p className='lg:w-[100px] text-[#DDD]/50'>Months of Experience</p>
                                    </div>
                                    <div className='flex items-center gap-4 border-[1px] border-[#DDD]/50 p-4 rounded-md'>
                                        <p className='font-medium text-[20px] text-[#feb273]'>06+</p>
                                        <p className='lg:w-[100px] text-[#DDD]/50'>Project Completed</p>
                                    </div>
                                    <div className='flex items-center gap-4 border-[1px] border-[#DDD]/50 p-4 rounded-md'>
                                        <p className='font-medium text-[20px] text-[#feb273]'>03+</p>
                                        <p className='lg:w-[100px] text-[#DDD]/50'>Happy Clients</p>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </section>




                {/* projects */}
                <section className='py-[5vh]'>
                    <p className="uppercase text-center text-[#fff] text-[25px] font-semibold pb-5 transition-colors duration-300 group-hover:text-[#ffd2a9]">
                        Explore My Recent projects
                    </p>
                    <div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default Main;
