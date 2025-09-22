import React from 'react';

import { FaLongArrowAltRight } from "react-icons/fa";

import image from '../../constants/image';

import { motion, useScroll, useTransform } from "motion/react"

import { useNavigate } from 'react-router-dom';

const Projects = () => {

    const navigate = useNavigate();
    
    return (
        <>
            <section id='works' className='lg:pt-[15vh] group overflow-hidden'>
                <motion.p className="uppercase text-center text-[#fff] text-[25px] font-semibold pb-5 transition-colors duration-300 group-hover:text-[#ffd2a9]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}

                >
                    Explore My Recent projects
                </motion.p>
                <motion.div
                    className='pt-5 flex flex-col gap-5 lg:flex-row items-center'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}

                >
                    {/* <Tabs/> */}
                    <div className='flex flex-col lg:flex-row gap-4 lg:w-[80vw]'>
                        <div className='lg:w-[33%] lg:h-[65vh] h-[50vh]'>
                            <img src={image.pr5} alt="" className='w-full h-[100%]  rounded-lg shadow-md shadow-[#000] object-cover' />
                        </div>
                        <div className='lg:w-[33%] lg:h-[65vh] h-[50vh]'>
                            <img src={image.yummy} alt="" className='w-full h-[100%]  rounded-lg shadow-md shadow-[#000] object-cover' />
                        </div>
                        <div className='lg:w-[33%] lg:h-[65vh] h-[50vh]'>
                            <img src={image.pr6} alt="" className='w-full h-[100%]  rounded-lg shadow-md shadow-[#000] object-cover' />
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className='w-full lg:w-[20vw] text-center lg:text-left mb-8 lg:mb-0'>
                        <p className='text-[#DDD] text-[14px]  pb-4'>
                            Explore captivating visuals that showcase creativity and passion. Each shot is a story, waiting to inspire and amaze.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button onClick={() => navigate("/projects")} className="relative flex items-center px-6 py-3 bg-[#bdd9d8] rounded-full border border-[#bdd9d8] overflow-hidden">
                                <span className="relative z-10 text-sm font-medium text-black">Show all </span>
                                {/* <span className="absolute inset-0 bg-[#feb273] rounded-full -translate-x-full group2-hover:translate-x-0 transition-transform duration-300"></span> */}
                                <span className="relative z-10 ml-3 text-black">
                                    <FaLongArrowAltRight />
                                </span>
                            </button>
                        </div>
                    </motion.div>

                </motion.div>
            </section>
        </>
    );
};

export default Projects;