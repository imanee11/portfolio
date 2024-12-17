import React, { useState } from 'react';
import image from '../../constants/image';
import { FaLinkedinIn } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="px-[8vw] py-4 flex items-center justify-between fixed right-0 top-0 left-0 z-50 bg-[#0c0e0e] shadow-sm shadow-black">
                {/* Logo */}
                <div>
                    <img src={image.logo} alt="Logo" className="lg:w-[4vw] w-[15vw]" />
                </div>

                {/* Hamburger Menu for small screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-[#fff] text-2xl">
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>

                {/* Links */}
                <div
                    className={`absolute md:static top-[60px] right-0 w-full md:w-auto md:flex items-center gap-3 text-[#fff] text-[15px] bg-[#0c0e0e] md:bg-transparent md:translate-x-0 transition-transform duration-300 ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    {/* <a href="#home" className="block md:inline-block py-2 px-4">Home</a> */}
                    <a href="#about" className="block md:inline-block py-2 px-4">About</a>
                    <a href="#works" className="block md:inline-block py-2 px-4">Work</a>
                    <a href="#resume" className="block md:inline-block py-2 px-4">Resume</a>
                    <a href="#skills" className="block md:inline-block py-2 px-4">Skills</a>
                    <a href="#contact" className="block md:inline-block py-2 px-4">Contact</a>
                </div>

                {/* Social Icon */}
                {/* <div className="hidden md:block">
                    <div className="bg-[#bdd9d8] p-1 rounded-sm cursor-pointer">
                        <FaLinkedinIn className="text-[#0c0e0e]" />
                    </div>
                </div> */}
            </nav>
        </>
    );
};

export default Navbar;
