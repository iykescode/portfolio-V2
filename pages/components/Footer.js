import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillYoutube } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <section id="footer">
            <div className="py-10 p-4 w-full top-0 left-0 z-50 footer">
                <div
                    className="container mx-auto flex items-center lg:justify-between md:justify-between justify-center">
                    <div className="flex flex-col items-center justify-start">
                        <a href="#home" className="text-2xl font-burtons opacity-80">
                            IYKESCODE
                        </a>
                        <p className="flex md:flex lg:hidden opacity-50 font-semibold md:mb-0 lg:mb-0 mb-5">© iykescode
                            2024. All Rights
                            Reserved</p>
                        <ul className="flex md:hidden lg:hidden items-center space-x-5 text-2xl">
                            <a href="https://www.instagram.com/iykescode/" target="_blank"
                               className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-4 opacity-80 p-1 rounded-full default-transition"
                               aria-label="Instagram">
                                <AiFillInstagram/>
                            </a>
                            <a href="https://x.com/michael_chukss" target="_blank"
                               className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-4 opacity-80 p-1 rounded-full default-transition"
                               aria-label="X">
                                <FaXTwitter/>
                            </a>
                            <a href="https://www.github.com/iykescode" target="_blank"
                               className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-4 opacity-80 p-1 rounded-full default-transition"
                               aria-label="Github">
                                <AiFillGithub/>
                            </a>
                            <a href="https://www.linkedin.com/in/michael-chuks-764975213/" target="_blank"
                               className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-4 opacity-80 p-1 rounded-full default-transition"
                               aria-label="LinkedIn">
                                <AiFillLinkedin/>
                            </a>
                            <a href="mailto:hello@iykescode.com" target="_blank"
                               className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-4 opacity-80 p-1 rounded-full default-transition"
                               aria-label="Mail">
                                <AiFillMail/>
                            </a>
                            <a href="https://youtube.com/channel/UCOf2XrdDo2G4qLw6Tj8q16w?sub_confirmation=1"
                               target="_blank"
                               className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-4 opacity-80 p-1 rounded-full default-transition"
                               aria-label="Instagram">
                                <AiFillYoutube/>
                            </a>
                        </ul>
                    </div>

                    {/* Menu items in the middle */}
                    <div
                        className="hidden flex-grow lg:flex md:hidden justify-center space-x-10 ml-20 font-semibold opacity-50">
                        <p>© iykescode 2024. All Rights Reserved</p>
                    </div>

                    {/* Icons on the right */}
                    <ul className="hidden lg:flex md:flex items-center space-x-5 text-2xl">
                        <a href="https://www.instagram.com/iykescode/" target="_blank"
                           className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-4 opacity-80 p-1 rounded-full default-transition"
                           aria-label="Instagram">
                            <AiFillInstagram/>
                        </a>
                        <a href="https://x.com/michael_chukss" target="_blank"
                           className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-4 opacity-80 p-1 rounded-full default-transition"
                           aria-label="X">
                            <FaXTwitter/>
                        </a>
                        <a href="https://www.github.com/iykescode" target="_blank"
                           className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-4 opacity-80 p-1 rounded-full default-transition"
                           aria-label="Github">
                            <AiFillGithub/>
                        </a>
                        <a href="https://www.linkedin.com/in/michael-chuks-764975213/" target="_blank"
                           className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-4 opacity-80 p-1 rounded-full default-transition"
                           aria-label="LinkedIn">
                            <AiFillLinkedin/>
                        </a>
                        <a href="mailto:hello@iykescode.com" target="_blank"
                           className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-4 opacity-80 p-1 rounded-full default-transition"
                           aria-label="Mail">
                            <AiFillMail/>
                        </a>
                        <a href="https://youtube.com/channel/UCOf2XrdDo2G4qLw6Tj8q16w?sub_confirmation=1"
                           target="_blank"
                           className="hover:text-colorLight hover:border-primaryColor hover:bg-primaryColor border-gray-400 border-4 opacity-80 p-1 rounded-full default-transition"
                           aria-label="Instagram">
                            <AiFillYoutube/>
                        </a>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Footer;