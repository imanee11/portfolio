import React from 'react';
import image from '../../constants/image';


import { FiArrowRight } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiMedalThin } from "react-icons/pi";
import { PiGraduationCapThin } from "react-icons/pi";


import Typewriter from 'typewriter-effect';
import { motion, useScroll, useTransform } from "motion/react"

import Tabs from './tabs';

const Main = () => {

    const { scrollYProgress } = useScroll();
    // Animate based on scroll for the image rotation and scaling
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

    return (
        <>
            <div className="px-[8vw] py-[20vh] lg:py-[12vh]">

                {/* hero section */}
                <div id="home" className="flex flex-col md:flex-row items-center">
                    {/* Left Section */}
                    <motion.div
                        className="w-full md:w-[50%] text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
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
                            <motion.button
                                className="relative flex items-center px-6 py-3 bg-[#ffd2a9] rounded-full border border-[#feb273] overflow-hidden group"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <span className="relative z-10 text-sm font-medium text-black">Hire Me</span>
                                <span className="absolute inset-0 bg-[#feb273] rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                <span className="relative z-10 ml-3 text-black">
                                    <FiArrowRight className="w-4 h-4" />
                                </span>
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Section */}

                    {/*                         data-aos="fade-left"
                        style={{ rotate, scale }} */}
                    <motion.div
                        className="w-full lg:block md:w-[50%] mt-8 md:mt-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}

                    >
                        <img src={image.code} alt="Code Illustration" className="w-[100%] md:w-[100%] mx-auto" />
                    </motion.div>
                </div>


                {/* about me */}
                <section id="about" className="relative">
                    <motion.div
                        className="flex items-center justify-center gap-2"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        viewport={{ once: true }}
                    >
                        {/* Right Section */}
                        <motion.div
                            className="lg:w-[50vw] lg:pt-0 pt-[5vh] group"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                        >
                            <p className="text-center uppercase text-[#fff] text-[25px] font-semibold pb-5 transition-colors duration-300 group-hover:text-[#ffd2a9]">
                                about me
                            </p>
                            <motion.p
                                className="text-[#DDD] py-2 text-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                This is <span className="font-semibold">Imane El Ouannane</span>
                            </motion.p>
                            <motion.p
                                className="text-[#fff] py-2 text-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                A creative and passionate web developer who loves turning ideas into responsive and user-friendly websites. With a focus on clean code and sleek design.
                            </motion.p>
                            <motion.p
                                className="text-[#DDD] py-2 text-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                I have been working with web technologies for more than 2 years.
                            </motion.p>
                            <motion.p
                                className="text-[#DDD] py-2 text-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                            >
                                Over these years, I've gained valuable experience in creating full websites and applications from scratch.
                            </motion.p>

                            {/* Stats Section */}
                            <section className="py-[5vh]">
                                <motion.div
                                    className="flex flex-col lg:flex-row justify-center gap-[5vw]"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, ease: 'easeInOut' }}
                                >
                                    {/* Cards */}
                                    {[
                                        { value: '06+', text: 'Months of Experience' },
                                        { value: '06+', text: 'Project Completed' },
                                        { value: '03+', text: 'Happy Clients' },
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex items-center gap-4 border-[1px] border-[#DDD]/50 hover:border-[#DDD] transition duration-300 hover:scale-110 p-4 rounded-md cursor-pointer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <p className="font-semibold text-[20px] text-[#feb273]">
                                                {item.value}
                                            </p>
                                            <p className="lg:w-[100px] text-[#DDD]/75 hover:text-[#DDD] transition duration-300">
                                                {item.text}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </section>
                        </motion.div>
                    </motion.div>
                </section>




                {/* projects */}
                <section id='works' className='lg:pt-[15vh] group'>
                    <p className="uppercase text-center text-[#fff] text-[25px] font-semibold pb-5 transition-colors duration-300 group-hover:text-[#ffd2a9]">
                        Explore My Recent projects
                    </p>
                    <div className='pt-5 flex flex-col gap-5 lg:flex-row items-center'>
                        {/* <Tabs/> */}
                        <div className='flex flex-col lg:flex-row gap-4 lg:w-[80vw]'>
                            <div className='lg:w-[33%] h-[65vh]'>
                                <img src={image.pr5} alt="" className='w-full h-[100%] object-cover rounded-lg shadow-md shadow-[#000]' />
                            </div>
                            <div className='lg:w-[33%] lg:h-[65vh]'>
                                <img src={image.pr2} alt="" className='w-full h-[100%] object-cover rounded-lg shadow-md shadow-[#000]' />
                            </div>
                            <div className='lg:w-[33%] lg:h-[65vh]'>
                                <img src={image.pr5} alt="" className='w-full h-[100%] object-cover rounded-lg shadow-md shadow-[#000]' />
                            </div>
                        </div>

                        <div className='w-full lg:w-[20vw] text-center lg:text-left mb-8 lg:mb-0'>
                            <p className='text-[#DDD] text-[14px]  pb-4'>
                                Explore captivating visuals that showcase creativity and passion. Each shot is a story, waiting to inspire and amaze.
                            </p>
                            <a href="">
                                <div className="flex justify-center md:justify-start">
                                    <button className="relative flex items-center px-6 py-3 bg-[#bdd9d8] rounded-full border border-[#bdd9d8] overflow-hidden">
                                        <span className="relative z-10 text-sm font-medium text-black">Show all </span>
                                        {/* <span className="absolute inset-0 bg-[#feb273] rounded-full -translate-x-full group2-hover:translate-x-0 transition-transform duration-300"></span> */}
                                        <span className="relative z-10 ml-3 text-black">
                                            <FaLongArrowAltRight />
                                        </span>
                                    </button>
                                </div>
                            </a>
                        </div>

                    </div>
                </section>


                {/* resume */}
                <section id="resume" className="lg:pt-[20vh] overflow-hidden">
                    <motion.div
                        className="flex flex-col lg:flex-row gap-10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{ once: true }}
                    >
                        {/* My Experience Section */}
                        <motion.div
                            className="lg:w-[50vw] w-[100%] group"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3 lg:pb-14 pb-4">
                                <p>
                                    <PiMedalThin size={35} className="text-[#bdd9d8]" />
                                </p>
                                <p className="uppercase text-[#fff] text-[25px] font-semibold transition-colors duration-300 group-hover:text-[#ffd2a9]">
                                    My Experience
                                </p>
                            </div>

                            <div className="border-b-[1px] border-[#bdd9d8] py-3">
                                <p className="text-[#feb273] text-[17px] font-bold pb-2">May 2024 - Present</p>
                                <p className="text-[20px] font-semibold text-[#fff]">
                                    Working on projects during the training
                                </p>
                                <p className="text-[#ddd] text-[14px]">Lions Geek</p>
                            </div>
                        </motion.div>

                        {/* My Education Section */}
                        <motion.div
                            className="lg:w-[50vw] w-[100%] group"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3 lg:pb-14 pb-4">
                                <p>
                                    <PiGraduationCapThin size={35} className="text-[#bdd9d8]" />
                                </p>
                                <p className="uppercase text-[#fff] text-[25px] font-semibold transition-colors duration-300 group-hover:text-[#ffd2a9]">
                                    My Education
                                </p>
                            </div>

                            <div className="flex flex-col gap-5">
                                <motion.div
                                    className="border-b-[1px] border-[#bdd9d8] py-3"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    <p className="text-[#feb273] text-[17px] font-bold pb-2">May 2024 - Present</p>
                                    <p className="text-[20px] font-semibold text-[#fff]">
                                        6 month training in web development
                                    </p>
                                    <p className="text-[#ddd] text-[14px]">Lions Geek</p>
                                </motion.div>

                                <motion.div
                                    className="border-b-[1px] border-[#bdd9d8] py-3"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    <p className="text-[#feb273] text-[17px] font-bold pb-2">2021 - 2023</p>
                                    <p className="text-[20px] font-semibold text-[#fff]">
                                        Specialized Technician Diploma on Web Development
                                    </p>
                                    <p className="text-[#ddd] text-[14px]">Lalla Aicha Mixed Center</p>
                                </motion.div>

                                <motion.div
                                    className="border-b-[1px] border-[#bdd9d8] py-3"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <p className="text-[#feb273] text-[17px] font-bold pb-2">2020 - 2021</p>
                                    <p className="text-[20px] font-semibold text-[#fff]">
                                        Baccalauréat in Physical Sciences
                                    </p>
                                    <p className="text-[#ddd] text-[14px]">Abi Chouaib Doukkali High School</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </section>

            </div>
        </>
    );
};

export default Main;
