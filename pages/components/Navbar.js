import { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillYoutube } from "react-icons/ai";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import {useDarkMode} from "@/pages/contexts/DarkModeContext";
import {FaXTwitter} from "react-icons/fa6";

const Navbar = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const { isDarkMode, toggleDarkMode } = useDarkMode();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const DarkModeToggle = () => {
        toggleDarkMode();
    };

    return (
        <div className={isDarkMode ? "dark" : ""}>
            <nav className="py-10 p-4 fixed w-full top-0 left-0 z-50 nav">
                <div className="container mx-auto flex items-center justify-between">
                    {/* Collapsible button on the left */}
                    <div className="block lg:hidden md:hidden">
                        <button onClick={toggleMenu} className="text-2xl">
                            {isOpen ? <FaTimes/> : <FaBars/>}
                        </button>
                    </div>

                    {/* Logo on the left */}
                    <div className="flex items-center">
                        <a href="#home" className="text-2xl font-burtons">
                            IYKESCODE
                        </a>
                    </div>

                    {/* Menu items in the middle */}
                    <div className="hidden flex-grow lg:flex md:flex justify-start space-x-10 ml-20 font-semibold">
                        <a href="#home" className="hover:text-primaryColor hover:font-black default-transition">Home</a>
                        <a href="#services" className="hover:text-primaryColor hover:font-black default-transition">Services</a>
                        <a href="#about" className="hover:text-primaryColor hover:font-black default-transition">About</a>
                        <a href="#projects" className="hover:text-primaryColor hover:font-black default-transition">Projects</a>
                    </div>

                    {/* Icons on the right */}
                    <ul className="flex items-center space-x-10 text-2xl">
                        <li className="hover:text-primaryColor default-transition">
                            <MdOutlineLightMode onClick={() => DarkModeToggle()} className="dark:hidden" />
                            <MdOutlineDarkMode onClick={() => DarkModeToggle()} className="hidden dark:flex"/>
                        </li>
                        <li className="hover:text-primaryColor default-transition">
                            <a href="https://www.github.com/iykescode" target="_blank"><AiFillGithub/></a>
                        </li>
                    </ul>

                    {/* Collapsible menu */}
                    <div
                        className={`fixed top-0 right-0 bg-white dark:bg-colorDark text-ColorDark dark:text-colorLight h-full w-64 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}
                    >
                        <div className="flex flex-col h-full">
                            {/* Main Menu Items */}
                            <div className="flex flex-col flex-grow p-6 font-semibold space-y-4">
                                <a href="#home" className="hover:text-primaryColor hover:font-black default-transition" onClick={toggleMenu}>Home</a>
                                <a href="#services" className="hover:text-primaryColor hover:font-black default-transition" onClick={toggleMenu}>Services</a>
                                <a href="#about" className="hover:text-primaryColor hover:font-black default-transition" onClick={toggleMenu}>About</a>
                                <a href="#projects" className="hover:text-primaryColor hover:font-black default-transition" onClick={toggleMenu}>Projects</a>
                            </div>

                            {/* Icons at the bottom */}
                            <div className="flex justify-center p-2 space-x-2 text-xl text-gray-400">
                                <a href="https://www.instagram.com/iykescode/" target="_blank"
                                   className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-2 opacity-80 p-1 rounded-full default-transition"
                                   aria-label="Instagram">
                                    <AiFillInstagram/>
                                </a>
                                <a href="https://x.com/michael_chukss" target="_blank"
                                   className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-2 opacity-80 p-1 rounded-full default-transition"
                                   aria-label="X">
                                    <FaXTwitter/>
                                </a>
                                <a href="https://www.github.com/iykescode" target="_blank"
                                   className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-2 opacity-80 p-1 rounded-full default-transition"
                                   aria-label="Github">
                                    <AiFillGithub/>
                                </a>
                                <a href="https://www.linkedin.com/in/michael-chuks-764975213/" target="_blank"
                                   className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-2 opacity-80 p-1 rounded-full default-transition"
                                   aria-label="LinkedIn">
                                    <AiFillLinkedin/>
                                </a>
                                <a href="mailto:hello@iykescode.com" target="_blank"
                                   className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-2 opacity-80 p-1 rounded-full default-transition"
                                   aria-label="Mail">
                                    <AiFillMail/>
                                </a>
                                <a href="https://youtube.com/channel/UCOf2XrdDo2G4qLw6Tj8q16w?sub_confirmation=1"
                                   target="_blank"
                                   className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-2 opacity-80 p-1 rounded-full default-transition"
                                   aria-label="Instagram">
                                    <AiFillYoutube/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;