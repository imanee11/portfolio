import React from 'react';

import { PiGraduationCapThin } from "react-icons/pi";
import { PiMedalThin } from "react-icons/pi";

import { motion, useScroll, useTransform } from "motion/react"


const Resume = () => {
    return (
        <>
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

                        <div className="flex flex-col gap-5">
                            <motion.div
                                className="border-b-[1px] border-[#bdd9d8] py-3"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <p className="text-[#feb273] lg:text-[17px] text-[15px]  font-bold pb-2">Mai 2025 - Présent</p>
                                <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff] ">
                                    Developing real projects during training
                                </p>
                                <p className="text-[#ddd] lg:text-[14px] text-[12px]">Geeks Institute</p>
                            </motion.div>

                            <motion.div
                                className="border-b-[1px] border-[#bdd9d8] py-3"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <p className="text-[#feb273] lg:text-[17px] text-[15px]  font-bold pb-2">May - Nov 2024</p>
                                <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff] ">
                                    Working on projects during the training
                                </p>
                                <p className="text-[#ddd] lg:text-[14px] text-[12px]">Lions Geek</p>
                            </motion.div>
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
                                <p className="text-[#feb273] lg:text-[17px] text-[15px]  font-bold pb-2">Mai 2025 - Présent</p>
                                <p className="lg:text-[20px] text-[15px] font-semibold text-[#fff] ">
                                    Full-stack web development bootcamp
                                </p>
                                <p className="text-[#ddd] lg:text-[14px] text-[12px]">Geeks Institute</p>
                            </motion.div>
                            <motion.div
                                className="border-b-[1px] border-[#bdd9d8] py-3"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <p className="text-[#feb273] lg:text-[17px] text-[15px] font-bold pb-2">May - Nov 2024</p>
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
        </>
    );
};

export default Resume;