import React from 'react';
import { FaBootstrap, FaReact, FaSass } from 'react-icons/fa';
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from 'react-icons/io';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaGithub } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

import { motion, useScroll, useTransform } from "motion/react"

const Skills = () => {
    return (
        <>
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

                <div className="flex flex-wrap lg:px-[4vw] lg:flex-wrap lg:gap-5 justify-center">
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
            </section>
        </>
    );
};

export default Skills;