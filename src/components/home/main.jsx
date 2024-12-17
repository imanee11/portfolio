import React from 'react';
import image from '../../constants/image';


import { FiArrowRight } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import { PiMedalThin } from "react-icons/pi";
import { PiGraduationCapThin } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";



import Typewriter from 'typewriter-effect';
import { motion, useScroll, useTransform } from "motion/react"

import Tabs from './tabs';
import { useNavigate } from 'react-router-dom';

const Main = () => {

    const navigate = useNavigate();

    const { scrollYProgress } = useScroll();
    // Animate based on scroll for the image rotation and scaling
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const infoVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: -100, opacity: 0 },
    };

    return (
        <>
            <div className='border-b-[1px] border-b-[#ddd]/25'>
                <div className="px-[8vw] py-[15vh] lg:py-[12vh]">

                    {/* hero section */}
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
                                    className="text-[#DDD] py-2 text-center lg:text-[16px] text-[14px] "
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                >
                                    This is <span className="font-semibold">Imane El Ouannane</span>
                                </motion.p>
                                <motion.p
                                    className="text-[#fff] py-2 text-center lg:text-[16px] text-[14px]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                >
                                    A creative and passionate web developer who loves turning ideas into responsive and user-friendly websites. With a focus on clean code and sleek design.
                                </motion.p>
                                <motion.p
                                    className="text-[#DDD] py-2 text-center lg:text-[16px] text-[14px]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    I have been working with web technologies for more than 2 years.
                                </motion.p>
                                <motion.p
                                    className="text-[#DDD] py-2 text-center lg:text-[16px] text-[14px]"
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
                                                <p className="lg:w-[100px] text-[#DDD]/75 hover:text-[#DDD] transition duration-300 lg:text-[16px] text-[14px]">
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
                                <div className='lg:w-[33%] lg:h-[65vh]'>
                                    <img src={image.pr5} alt="" className='w-full h-[100%] object-cover rounded-lg shadow-md shadow-[#000]' />
                                </div>
                                <div className='lg:w-[33%] lg:h-[65vh]'>
                                    <img src={image.pr2} alt="" className='w-full h-[100%] object-cover rounded-lg shadow-md shadow-[#000]' />
                                </div>
                                <div className='lg:w-[33%] lg:h-[65vh]'>
                                    <img src={image.pr5} alt="" className='w-full h-[100%] object-cover rounded-lg shadow-md shadow-[#000]' />
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


                    {/* resume */}
                    <section id="resume" className="lg:pt-[20vh] pt-10 overflow-hidden">
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
                                    <p className="text-[#feb273] lg:text-[17px] text-[15px]  font-bold pb-2">May 2024 - Present</p>
                                    <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff] ">
                                        Working on projects during the training
                                    </p>
                                    <p className="text-[#ddd] lg:text-[14px] text-[12px]">Lions Geek</p>
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
                                        <p className="text-[#feb273] lg:text-[17px] text-[15px] font-bold pb-2">May 2024 - Present</p>
                                        <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff]">
                                            6 month training in web development
                                        </p>
                                        <p className="text-[#ddd] lg:text-[14px] text-[12px]">Lions Geek</p>
                                    </motion.div>

                                    <motion.div
                                        className="border-b-[1px] border-[#bdd9d8] py-3"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        <p className="text-[#feb273] lg:text-[17px] text-[15px] font-bold pb-2">2021 - 2023</p>
                                        <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff]">
                                            Specialized Technician Diploma on Web Development
                                        </p>
                                        <p className="text-[#ddd] lg:text-[14px] text-[12px]">Lalla Aicha Mixed Center</p>
                                    </motion.div>

                                    <motion.div
                                        className="border-b-[1px] border-[#bdd9d8] py-3"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        <p className="text-[#feb273] lg:text-[17px] text-[15px] font-bold pb-2">2020 - 2021</p>
                                        <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff]">
                                            Baccalauréat in Physical Sciences
                                        </p>
                                        <p className="text-[#ddd] lg:text-[14px] text-[12px]">Abi Chouaib Doukkali High School</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </section>


                    {/* skills */}
                    <section id="skills" className="lg:pt-[20vh] pt-14">
                        <motion.p
                            className="uppercase text-center text-[#fff] text-[25px] font-semibold lg:pb-5 pb-2 transition-colors duration-300 hover:text-[#ffd2a9]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                        >
                            My Skills
                        </motion.p>
                        <motion.p
                            className="text-[#DDD] text-[14px] text-center lg:w-[50vw] m-auto"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                        >
                            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
                        </motion.p>

                        <div className="flex flex-col lg:flex-row lg:gap-5 justify-center">
                            <div className='flex items-center justify-center gap-5'>
                                {/* HTML */}
                                <motion.div
                                    className="flex flex-col justify-center items-center lg:pt-[10vh] pt-[2vh]"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }} // Allows animation when scrolling through the section
                                >
                                    <div className="bg-[#140c1c] bg-transparent border-transparent border-[1px] lg:p-10 p-6 rounded-2xl hover:border-[#ffd2a9] hover:bg-[#ffd2a9]/10 transition duration-300 cursor-pointer group">
                                        <div className="transform group-hover:scale-110 transition-transform duration-500">
                                            <IoLogoHtml5 className="lg:text-[70px] text-[50px] text-[#DDD]/70 group-hover:text-[#F16529] transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <p className="text-[#feb273] lg:text-[16px] text-[13px] pt-3 font-medium">HTML</p>
                                </motion.div>

                                {/* CSS */}
                                <motion.div
                                    className="flex flex-col justify-center items-center lg:pt-[10vh] pt-[2vh]"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }} // Allows animation when scrolling through the section
                                >
                                    <div className="bg-[#140c1c] bg-transparent border-transparent border-[1px] lg:p-10 p-6 rounded-2xl hover:border-[#ffd2a9] hover:bg-[#ffd2a9]/10 transition duration-300 cursor-pointer group">
                                        <div className="transform group-hover:scale-110 transition-transform duration-500">
                                            <IoLogoCss3 className="lg:text-[70px] text-[50px] text-[#DDD]/70 group-hover:text-[#244bdc] transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <p className="text-[#feb273] lg:text-[16px] text-[13px] pt-3 font-medium">CSS</p>
                                </motion.div>

                                {/* SASS */}
                                <motion.div
                                    className="flex flex-col justify-center items-center lg:pt-[10vh] pt-[2vh]"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }} // Allows animation when scrolling through the section
                                >
                                    <div className="bg-[#140c1c] bg-transparent border-transparent border-[1px] lg:p-10 p-6 rounded-2xl hover:border-[#ffd2a9] hover:bg-[#ffd2a9]/10 transition duration-300 cursor-pointer group">
                                        <div className="transform group-hover:scale-110 transition-transform duration-500">
                                            <FaSass className="lg:text-[70px] text-[50px] text-[#DDD]/70 group-hover:text-[#CD6799] transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <p className="text-[#feb273] lg:text-[16px] text-[13px] pt-3 font-medium">SASS</p>
                                </motion.div>
                            </div>


                            <div className='flex items-center justify-center gap-5'>
                                {/* Bootstrap */}
                                <motion.div
                                    className="flex flex-col justify-center items-center lg:pt-[10vh] pt-[2vh]"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }} // Allows animation when scrolling through the section
                                >
                                    <div className="bg-[#140c1c] bg-transparent border-transparent border-[1px] lg:p-10 p-6 rounded-2xl hover:border-[#ffd2a9] hover:bg-[#ffd2a9]/10 transition duration-300 cursor-pointer group">
                                        <div className="transform group-hover:scale-110 transition-transform duration-500">
                                            <FaBootstrap className="lg:text-[70px] text-[50px] text-[#DDD]/70 group-hover:text-[#8310f3] transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <p className="text-[#feb273] lg:text-[16px] text-[13px] pt-3 font-medium">Bootstrap</p>
                                </motion.div>

                                {/* React */}
                                <motion.div
                                    className="flex flex-col justify-center items-center lg:pt-[10vh] pt-[2vh]"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }} // Allows animation when scrolling through the section
                                >
                                    <div className="bg-[#140c1c] bg-transparent border-transparent border-[1px] lg:p-10 p-6 rounded-2xl hover:border-[#ffd2a9] hover:bg-[#ffd2a9]/10 transition duration-300 cursor-pointer group">
                                        <div className="transform group-hover:scale-110 transition-transform duration-500">
                                            <FaReact className="lg:text-[70px] text-[50px] text-[#DDD]/70 group-hover:text-[#61dbfb] transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <p className="text-[#feb273] lg:text-[16px] text-[13px] pt-3 font-medium">React Js</p>
                                </motion.div>
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:gap-5 justify-center">
                            <div className='flex items-center justify-center gap-5'>
                                {/* Tailwind */}
                                <motion.div
                                    className="flex flex-col justify-center items-center lg:pt-[10vh] pt-[2vh]"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }} // Allows animation when scrolling through the section
                                >
                                    <div className="bg-[#140c1c] bg-transparent border-transparent border-[1px] lg:p-10 p-6 rounded-2xl hover:border-[#ffd2a9] hover:bg-[#ffd2a9]/10 transition duration-300 cursor-pointer group">
                                        <div className="transform group-hover:scale-110 transition-transform duration-500">
                                            <RiTailwindCssFill className="lg:text-[70px] text-[50px] text-[#DDD]/70 group-hover:text-[#02afc9] transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <p className="text-[#feb273] lg:text-[16px] text-[13px] pt-3 font-medium">Tailwind</p>
                                </motion.div>

                                {/* Laravel */}
                                <motion.div
                                    className="flex flex-col justify-center items-center lg:pt-[10vh] pt-[2vh]"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }} // Allows animation when scrolling through the section
                                >
                                    <div className="bg-[#140c1c] bg-transparent border-transparent border-[1px] lg:p-10 p-6 rounded-2xl hover:border-[#ffd2a9] hover:bg-[#ffd2a9]/10 transition duration-300 cursor-pointer group">
                                        <div className="transform group-hover:scale-110 transition-transform duration-500">
                                            <FaLaravel className="lg:text-[70px] text-[50px] text-[#DDD]/70 group-hover:text-[#F05340] transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <p className="text-[#feb273] lg:text-[16px] text-[13px] pt-3 font-medium">Laravel</p>
                                </motion.div>

                            </div>

                            <div className='flex items-center justify-center gap-5'>
                                {/* Javascript */}
                                <motion.div
                                    className="flex flex-col justify-center items-center lg:pt-[10vh] pt-[2vh]"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }} // Allows animation when scrolling through the section
                                >
                                    <div className="bg-[#140c1c] bg-transparent border-transparent border-[1px] lg:p-10 p-6 rounded-2xl hover:border-[#ffd2a9] hover:bg-[#ffd2a9]/10 transition duration-300 cursor-pointer group">
                                        <div className="transform group-hover:scale-110 transition-transform duration-500">
                                            <IoLogoJavascript className="lg:text-[70px] text-[50px] text-[#DDD]/70 group-hover:text-[#f0db4f] transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <p className="text-[#feb273] lg:text-[16px] text-[13px] pt-3 font-medium">JavaScript</p>
                                </motion.div>

                                {/* GitHub */}
                                <motion.div
                                    className="flex flex-col justify-center items-center lg:pt-[10vh] pt-[2vh]"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    viewport={{ once: false }} // Allows animation when scrolling through the section
                                >
                                    <div className="bg-[#140c1c] bg-transparent border-transparent border-[1px] lg:p-10 p-6 rounded-2xl hover:border-[#ffd2a9] hover:bg-[#ffd2a9]/10 transition duration-300 cursor-pointer group">
                                        <div className="transform group-hover:scale-110 transition-transform duration-500">
                                            <FaGithub className=" lg:text-[70px] text-[50px] text-[#DDD]/70 group-hover:text-[#111] transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <p className="text-[#feb273] lg:text-[16px] text-[13px] pt-3 font-medium">GitHub</p>
                                </motion.div>
                            </div>
                        </div>
                    </section>



                    {/* contact */}
                    <motion.section
                        id='contact'
                        className='lg:pt-[20vh] pt-14 overflow-hidden  '
                        variants={sectionVariants}
                        initial='hidden'
                        whileInView='visible'
                        transition={{ duration: 0.5 }}
                    >
                        <div className='flex flex-col lg:flex-row lg:items-center gap-10 group'>
                            <motion.div
                                className=' lg:w-[60vw]'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <motion.p
                                    className='uppercase text-[#fff] text-[25px] font-semibold  pb-2 transition-colors duration-300 group-hover:text-[#ffd2a9]'
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >Let’s work together!
                                </motion.p>
                                <motion.p
                                    className='lg:w-[90%] text-[#DDD] text-[14px]'
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >I design and code beautifully simple things and I love what I do. Just simple like that!
                                </motion.p>
                                <div className='w-[100%] flex gap-5 pt-8'>
                                    <input type="text" placeholder='First name' className='w-[50%] bg-transparent rounded-md p-3 border-[#DDD]/25 border-[1px] text-[14px] text-[#DDD] ' />
                                    <input type="text" placeholder='Last name' className='w-[50%] bg-transparent rounded-md p-3 border-[#DDD]/25 border-[1px] text-[14px] text-[#DDD] ' />
                                </div>
                                <div className='w-[100%] flex gap-5 pt-3'>
                                    <input type="text" placeholder='Email address' className='w-[50%] bg-transparent rounded-md p-3 border-[#DDD]/25 border-[1px] text-[14px] text-[#DDD]' />
                                    <input type="text" placeholder='Phone number' className='w-[50%] bg-transparent rounded-md p-3 border-[#DDD]/25 border-[1px] text-[14px] text-[#DDD]' />
                                </div>
                                <div className='w-[100%] pt-3'>
                                    <textarea rows={8} placeholder='Message' className='w-[100%] bg-transparent rounded-md p-3 border-[#DDD]/25 border-[1px] text-[14px] text-[#DDD]'></textarea>
                                </div>
                                <div className='pt-3'>
                                    <div className="flex  md:justify-start">
                                        <motion.button
                                            className="relative flex items-center px-6 py-3 bg-[#ffd2a9] rounded-full border border-[#feb273] overflow-hidden group"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="relative z-10 text-sm font-medium text-black">Send Massage</span>
                                            <span className="absolute inset-0 bg-[#feb273] rounded-full -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                                            <span className="relative z-10 ml-3 text-black">
                                                <IoIosSend className="w-4 h-4" />
                                            </span>
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                className='lg:w-[40vw] flex flex-col gap-5'
                                variants={infoVariants}
                                initial='hidden'
                                whileInView='visible'
                                exit='exit'
                                transition={{ duration: 2 }}
                            >
                                {/* <div className='flex gap-3 items-center'>
                                    <button className='border-[#ffd2a9] border-[1px] text-[#ffd2a9] rounded-full px-[10px] py-[10px] hover:bg-[#ffd2a9] hover:text-[#000] transition duration-300'>
                                        <IoPhonePortraitOutline />
                                    </button>
                                    <div>
                                        <p className='text-[#DDD]'>Phone</p>
                                        <p className='font-semibold text-[#fff] text-[14px]'>06 33 14 94 29</p>
                                    </div>
                                </div> */}

                                <div className='flex gap-3 items-center'>
                                    <button className='border-[#ffd2a9] border-[1px] text-[#ffd2a9] rounded-full px-[10px] py-[10px] hover:bg-[#ffd2a9] hover:text-[#000] transition duration-300'>
                                        <MdOutlineAlternateEmail />
                                    </button>
                                    <div>
                                        <p className='text-[#DDD]'>Email</p>
                                        <p className='font-semibold text-[#fff] text-[14px]'>imaneelouannane@gmail.com</p>
                                    </div>
                                </div>

                                <div className='flex gap-3 items-center'>
                                    <button className='border-[#ffd2a9] border-[1px] text-[#ffd2a9] rounded-full px-[10px] py-[10px] hover:bg-[#ffd2a9] hover:text-[#000] transition duration-300'>
                                        <MdOutlineLocationOn />
                                    </button>
                                    <div>
                                        <p className='text-[#DDD]'>Address</p>
                                        <p className='font-semibold text-[#fff] text-[14px]'>Sidi Othmane, Casablanca</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>



                    {/*  fixed links  */}
                    <section className='fixed lg:bottom-5 lg:right-5 bottom-8 right-5'>
                        <div className='flex flex-col gap-3'>
                            <FaLinkedinIn className='text-[#bdd9d8] cursor-pointer lg:text-[16px] text-[22px]' />
                            <FaGithub className='text-[#bdd9d8] cursor-pointer lg:text-[16px] text-[22px]' />

                        </div>
                    </section>
                </div>

            </div>
        </>
    );
};

export default Main;
