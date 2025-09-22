import React from 'react';

import { motion, useScroll, useTransform } from "motion/react"


const About = () => {
    return (
        <>
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
                                    { value: '08+', text: 'Months of Experience' },
                                    { value: '07+', text: 'Project Completed' },
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
        </>
    );
};

export default About;