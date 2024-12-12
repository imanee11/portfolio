import React from 'react';
import image from '../../constants/image';
import { FiArrowRight } from "react-icons/fi";
import Typewriter from 'typewriter-effect';

const Main = () => {
    return (
        <>
            <div className="px-[8vw] py-[20vh] lg:py-[12vh]">
                <div className="flex flex-col md:flex-row  items-center">
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
                    <div className="w-full hidden lg:block md:w-[50%] mt-8 md:mt-0">
                        <img src={image.code} alt="Code Illustration" className="w-[80%] md:w-[100%] mx-auto" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
