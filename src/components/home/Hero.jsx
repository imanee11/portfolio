import React from 'react';

import { FaLongArrowAltRight } from "react-icons/fa";

import Typewriter from 'typewriter-effect';
import { motion, useScroll, useTransform } from "motion/react"
import image from '../../constants/image';

const Hero = () => {
    return (
        <>
            <div id="" className="flex flex-col md:flex-row items-center">
                {/* Left Section */}
                <motion.div
                    className="w-full md:w-[50%] text-center md:text-left"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    viewport={{ once: false }}

                >
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
                    <p className="text-[16px] md:text-[18px] text-[#DDD] w-full md:w-[500px] mx-auto md:mx-0 pb-4">
                        I break down complex user experience problems to create integrity-focused solutions that connect billions of people.
                    </p>

                    <div className="flex justify-center md:justify-start">
                        <a href="#contact">
                            <motion.button
                                className="relative flex items-center px-6 py-3 bg-[#ffd2a9] rounded-full border border-[#feb273] overflow-hidden group"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="relative z-10 text-sm font-medium text-black">Hire Me</span>
                                <span className="absolute inset-0 bg-[#feb273] rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span className="relative z-10 ml-3 text-black">
                                    <FaLongArrowAltRight className="w-4 h-4" />
                                </span>
                            </motion.button>
                        </a>
                    </div>
                </motion.div>

                {/* Right Section */}

                {/*data-aos="fade-left" / style={{ rotate, scale }} */}
                <motion.div
                    className="w-full lg:block md:w-[50%] mt-8 md:mt-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    viewport={{ once: false }}
                >
                    <img src={image.code} alt="Code Illustration" className="animate-up-down w-[100%] md:w-[100%] mx-auto" />
                </motion.div>
            </div>
        </>
    );
};

export default Hero;