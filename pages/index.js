import Head from "next/head";

import { useDarkMode } from "@/pages/contexts/DarkModeContext";
import { useEffect, useRef } from "react";

// React icons
import { FaArrowRight } from "react-icons/fa";
import { BiLogoHtml5, BiLogoCss3, BiLogoBootstrap, BiLogoJavascript, BiLogoJquery,
          BiLogoReact, BiLogoTailwindCss, BiLogoJava, BiLogoSpringBoot,
            BiLogoNodejs, BiLogoAws, BiLogoDocker, BiLogoKubernetes, BiLogoMongodb,
              BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiMailSendLine } from "react-icons/ri";
import { SiMysql, SiAdobe, SiCoreldraw, SiVisualstudiocode, SiJetbrains, SiEclipseide, SiPostman } from "react-icons/si";
import { PiFigmaLogoFill, PiLinktreeLogoBold } from "react-icons/pi";

import Image from "next/image";

import Typed from "typed.js";

export default function Home() {
  const { isDarkMode } = useDarkMode();

  // Create a reference to store the DOM element
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: ["Developer", "Designer", "DevOps OG", "Database Guru"], // You can add more strings
      typeSpeed: 100, // Typing speed
      backSpeed: 100, // Backspacing speed
      loop: true,    // Whether to loop or not
    });

    // Cleanup function to destroy the instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <title>Michael Chuks - Portfolio - React / Next.js Developer | Software Engineer</title>

        <meta name="keywords" content="Iykescode, Ikechukwu Michael Chuks, Ikechukwu, Michael,
                                        Chuks, Java, Spring Boot, Development, Software, React.js, Next.js, Engineer, UI/UX, Devops"/>
        <meta name="description" content="Michael Chuks | Portfolio | React / Next.js Developer | Software Engineer"/>
        <meta name="theme-color" content="#C53FD2"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iykescode.com" />
        <meta property="og:title" content="Michael Chuks | Portfolio | React / Next.js Developer | Software Engineer" />
        <meta
            property="og:description"
            content="Michael Chuks, React.js and Next.js Developer with 6+ years of software and web development experience. Explore my projects, skills, and portfolio."
        />
        <meta
            property="og:image"
            content="https://www.iykescode.com/icons/iykescode.ico"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.iykescode.com" />
        <meta property="twitter:title" content="Michael Chuks | Portfolio | Java Developer" />
        <meta
            property="twitter:description"
            content="Michael Chuks, React.js and Next.js Developer with 6+ years of software and web development experience. Explore my projects, skills, and portfolio."
        />
        <meta
            property="twitter:image"
            content="https://www.iykescode.com/icons/iykescode.ico"
        />

        {/* Favicon */}
        <link rel="icon" href="/icons/iykescode.ico"/>
      </Head>

      <main
          className="px-20 py-10 lg:px-40 md:px-20 main default-transition"> {/* Add padding-top to account for fixed navbar */}
        <section id="home" className="min-h-screen flex items-center justify-center">
          <img src="./backgrounds/bg.png" alt="HeroImage"
                 className="absolute default-transition" />
          <div className="relative">
            <div className="flex flex-col lg:flex-row lg:items-center md:items-center lg:gap-x-36 md:gap-x-20">
              <img src="./images/Mikey.JPG" alt="Mikey Image"
                     className="w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96
                                object-cover rounded-full overflow-hidden
                                border-primaryColor dark:border-colorLight
                                border-8 border-dashed default-transition"/>
              <div className="text-left lg:text-left mt-6 md:mt-10 lg:mt-0 w-full lg:w-[500px] md:w-[500px]">
                <h1 className="text-3xl pb-3 lg:text-5xl lg:pb-5 font-black">Hola, My name is</h1>
                <h1 className="text-3xl pb-3 lg:text-5xl lg:pb-5 font-black text-primaryColor">Michael Chuks</h1>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h1 className="text-3xl pb-3 lg:text-5xl lg:pb-5 font-black">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  I'm a <span ref={typedRef}></span>
                </h1>
                <p className="mt-4 text-lg font-medium">
                  React.js and Next.js developer turning ideas into intuitive websites and practical web applications. Explore my work below, and let’s build something together.
                </p>
                <a href="#footer">
                  <button className="text-lg font-bold
                                  text-colorLight bg-primaryColor shadow-md hover:shadow-colorDark
                                  dark:hover:bg-colorDark dark:hover:border-2 dark:hover:border-colorLight
                                  flex items-center py-2 px-5 rounded-lg mt-4 gap-x-3
                                  default-transition" data-ripple-light="true">
                    Get in touch <span className="border-4 rounded"><FaArrowRight className="p-0.5"/></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="services">
          <div className="text-left lg:text-left mt-6 md:mt-10 lg:mt-0 w-full">
            <h1 className="text-3xl pb-3 lg:text-4xl lg:pb-5 font-bold">Services</h1>
            <p className="text-md font-medium">
              I’m a React.js and Next.js developer with 6+ years of combined software and web development experience. I work with teams to turn ideas into practical web applications, from modernizing existing websites to building booking platforms and interactive dashboard.
            </p>
            <p className="mt-4 text-md font-medium">
              My work brings together frontend development, thoughtful interface design, and backend integration to create experiences that are intuitive to use and straightforward to maintain.
            </p>
          </div>
          <div className="lg:flex lg:justify-evenly md:flex md:justify-evenly text-left mt-6 md:mt-6 lg:mt-10 w-full">
            <div
                className="relative p-0.5 bg-gradient-to-b dark:from-colorLight dark:to-primaryColor from-colorDark to-primaryColor rounded-lg mb-10">
              <div className="bg-colorLight dark:bg-colorDark rounded-lg p-6">
                <img src="./icons/frontend.png" alt="Frontend Image"
                       className="w-24 h-24 border-4 border-dashed border-colorDark dark:border-colorLight rounded-full opacity-50 mt-4 mb-8 default-transition"/>
                <h1 className="text-xl font-bold text-primaryColor">Frontend</h1>
                <p className="font-medium lg:w-[300px] md:w-[200px]">Crafting the interface and user interactions that
                  brings the website to life.</p>
                <div
                    className="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-3 gap-4 mt-4 md:mt-16 lg:mt-10 text-5xl md:text-4xl lg:text-5xl lg:mb-8 md:mb-16 default-transition">
                  <BiLogoHtml5 className="text-html5
                                          dark:text-colorLight dark:hover:text-html5
                                          default-transition"/>
                  <BiLogoCss3 className="text-css3
                                          dark:text-colorLight dark:hover:text-css3
                                          default-transition"/>
                  <BiLogoBootstrap className="text-bootstrap
                                          dark:text-colorLight dark:hover:text-bootstrap
                                          default-transition"/>
                  <BiLogoJavascript className="text-javascript
                                          dark:text-colorLight dark:hover:text-javascript
                                          default-transition"/>
                  <BiLogoJquery className="text-javascript
                                          dark:text-colorLight dark:hover:text-javascript
                                          default-transition"/>
                  <BiLogoReact className="text-react
                                          dark:text-colorLight dark:hover:text-react
                                          default-transition"/>
                  <BiLogoTailwindCss className="text-tailwindcss
                                          dark:text-colorLight dark:hover:text-tailwindcss
                                          default-transition"/>
                  <RiNextjsFill className="text-nextJs
                                          dark:text-colorLight dark:hover:text-nextJs
                                          default-transition"/>
                </div>
              </div>
            </div>
            <div
                className="relative p-0.5 bg-gradient-to-b dark:from-colorLight dark:to-primaryColor from-colorDark to-primaryColor rounded-lg mb-10">
              <div className="bg-colorLight dark:bg-colorDark rounded-lg p-6">
                <img src="./icons/backend.png" alt="Backend Image"
                       className="w-24 h-24 border-4 border-dashed border-colorDark dark:border-colorLight rounded-full opacity-50 mt-4 mb-8 default-transition"/>
                <h1 className="text-xl font-bold text-primaryColor">Backend</h1>
                <p className="font-medium lg:w-[300px] md:w-[200px]">Building the server-side logic, databases, and APIs
                  that powers the website’s functionality behind the scenes.</p>
                <div
                    className="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-3 gap-4 mt-4 text-5xl md:text-4xl lg:text-5xl lg:mb-8 md:mb-3 default-transition">
                  <BiLogoJava className="text-java
                                          dark:text-colorLight dark:hover:text-java
                                          default-transition"/>
                  <BiLogoSpringBoot className="text-springBoot
                                          dark:text-colorLight dark:hover:text-springBoot
                                          default-transition"/>
                  <RiNextjsFill className="text-nextJs
                                          dark:text-colorLight dark:hover:text-nextJs
                                          default-transition"/>
                  <BiLogoNodejs className="text-nodeJs
                                          dark:text-colorLight dark:hover:text-nodeJs
                                          default-transition"/>
                  <BiLogoAws className="text-aws
                                          dark:text-colorLight dark:hover:text-aws
                                          default-transition"/>
                  <BiLogoDocker className="text-docker
                                          dark:text-colorLight dark:hover:text-docker
                                          default-transition"/>
                  <BiLogoKubernetes className="text-kubernetes
                                          dark:text-colorLight dark:hover:text-kubernetes
                                          default-transition"/>
                  <SiMysql className="text-mysql
                                          dark:text-colorLight dark:hover:text-mysql
                                          default-transition"/>
                  <BiLogoMongodb className="text-mongodb
                                          dark:text-colorLight dark:hover:text-mongodb
                                          default-transition"/>
                  <BiLogoPostgresql className="text-postgresql
                                          dark:text-colorLight dark:hover:text-postgresql
                                          default-transition"/>
                </div>
              </div>
            </div>
            <div
                className="relative p-0.5 bg-gradient-to-b dark:from-colorLight dark:to-primaryColor from-colorDark to-primaryColor rounded-lg mb-10">
              <div className="bg-colorLight dark:bg-colorDark rounded-lg p-6">
                <img src="./icons/design.png" alt="Design Image"
                       className="w-24 h-24 border-4 border-dashed border-colorDark dark:border-colorLight rounded-full opacity-50 mt-4 mb-8 default-transition"/>
                <h1 className="text-xl font-bold text-primaryColor">Design & Tools</h1>
                <p className="font-medium lg:w-[300px] md:w-[200px]">Creating the visual style, layout, and user
                  experience that makes the website attractive and easy to navigate.</p>
                <div
                    className="grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4 mt-4 lg:mt-10 text-5xl md:text-4xl lg:text-5xl lg:mb-8 md:mb-16 default-transition">
                  <PiFigmaLogoFill className="text-figma
                                          dark:text-colorLight dark:hover:text-figma
                                          default-transition"/>
                  <SiAdobe className="text-adobe
                                          dark:text-colorLight dark:hover:text-adobe
                                          default-transition"/>
                  <SiCoreldraw className="text-coreldraw
                                          dark:text-colorLight dark:hover:text-coreldraw
                                          default-transition"/>
                  <SiVisualstudiocode className="text-vscode
                                          dark:text-colorLight dark:hover:text-vscode
                                          default-transition"/>
                  <SiJetbrains className="text-jetbrains
                                          dark:text-colorLight dark:hover:text-jetbrains
                                          default-transition"/>
                  <SiEclipseide className="text-eclipse
                                          dark:text-colorLight dark:hover:text-eclipse
                                          default-transition"/>
                  <SiPostman className="text-postman
                                          dark:text-colorLight dark:hover:text-postman
                                          default-transition"/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="lg:flex lg:flex-row justify-evenly items-center lg:items-center md:flex md:flex-col">
            <div
                className="relative p-0.5 bg-gradient-to-b dark:from-colorLight dark:to-primaryColor from-colorDark to-primaryColor rounded-lg mb-10">
              <div className="bg-colorLight dark:bg-colorDark rounded-lg overflow-hidden">
                <img src="./images/Mikeey.JPEG" alt="Frontend Image"
                       className="object-cover w-[390px] h-[370px] lg:w-[480px] lg:h-[480px] md:w-[420px] md:h-[420px] default-transition"/>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold">About Me</h1>
              <p className="text-md font-medium lg:w-[500px] mt-6">
                React.js and Next.js Developer with 6+ years of combined software and web development experience. Specializes in TypeScript and JavaScript applications, with experience migrating websites to React.js / Next.js. Brings Next.js, Java/Spring Boot backend expertise to frontend development, connecting interfaces, APIs, and databases to deliver booking platforms, live trip tracking, and operational dashboards.
              </p>
              <div className="mt-10 lg:flex md:flex lg:gap-5 md:gap-2 lg:mt-5 md:mt-3">
                <a href="mailto:hello@iykescode.com" target="_blank"
                   className="text-xl font-black
                    text-colorLight bg-colorDark shadow-md hover:shadow-colorDark
                    dark:border-2 dark:border-primaryColor dark:hover:bg-primaryColor
                    flex items-center py-4 px-16 lg:px-16 md:px-8 rounded-lg mt-4 gap-x-3
                    default-transition"
                   data-ripple-light="true">
                  <RiMailSendLine/> Contact
                </a>
                <a href="https://linktr.ee/iykescode" target="_blank"
                   className="text-xl font-black
                    text-colorLight bg-gradient-to-r from-primaryColor to-colorDark shadow-md hover:shadow-colorDark
                    dark:hover:to-primaryColor dark:border-2 dark:border-colorLight dark:hover:border-primaryColor
                    flex items-center py-4 px-16 lg:px-16 md:px-8 rounded-lg mt-4 gap-x-3
                    default-transition"
                   data-ripple-light="true">
                  <PiLinktreeLogoBold/> Linktree
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="text-left lg:text-left mt-24 md:mt-10 lg:mt-0 w-full">
            <h1 className="text-3xl pb-3 lg:text-4xl lg:pb-5 font-bold">Projects</h1>
            <p className="text-md font-medium">
              I’m a React.js and Next.js developer with 6+ years of combined software and web development experience. I work with teams to turn ideas into practical web applications, from modernizing existing websites to building booking platforms and interactive dashboard.
            </p>
            <p className="mt-4 text-md font-medium">
              My work brings together frontend development, thoughtful interface design, and backend integration to create experiences that are intuitive to use and straightforward to maintain.
            </p>
          </div>
          <div
              className="grid lg:grid-cols-3 grid-cols-1 lg:gap-x-7 md:grid-cols-2 md:gap-x-5 text-left mt-6 md:mt-6 lg:mt-4 w-full">
            <div
                className="bg-gradient-to-b
                          dark:from-colorLight dark:to-primaryColor from-colorDark to-primaryColor
                          relative p-0.5 rounded-lg mb-10
                          ">
              <div className="bg-colorLight dark:bg-colorDark rounded-lg">
                <div className="bg-colorDark rounded-t-lg">
                  <img className="h-[300px] w-full object-cover rounded-t-lg opacity-50" alt="Project Image" src="./images/infinitydeautotransit.png"/>
                </div>
                <div className="p-6 lg:mb-0 md:mb-0 mb-20 h-[192px]">
                  <h1 className="text-sm font-black text-primaryColor">WEB APPLICATION</h1>
                  <h1 className="text-xl font-bold">Infinity De Auto Transit</h1>
                  <p className="font-medium">
                    The Infinity De Auto Transit transportation booking and live trip-tracking platform built with Next.js, React, TypeScript, and Supabase. Features Google Maps integration, traffic-aware fare estimates, and live driver location updates.
                  </p>
                </div>
                <div className="p-6 flex justify-between items-center flex-row">
                  <a href="https://www.infinitydeautotransit.com" target="_blank"
                     className="text-lg font-black
                                  text-colorLight bg-colorDark shadow-md hover:shadow-colorDark
                                  dark:border-2 dark:border-primaryColor dark:hover:bg-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                     data-ripple-light="true">
                    Live
                  </a>
                  <a href="https://github.com/iykescode/infinitydeautotransit" target="_blank"
                     className="text-lg font-black
                                  text-colorLight bg-gradient-to-r from-primaryColor to-colorDark shadow-md hover:shadow-colorDark
                                  dark:hover:to-primaryColor dark:border-2 dark:border-colorLight dark:hover:border-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                     data-ripple-light="true">
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div
                className="bg-gradient-to-b
                          dark:from-colorLight dark:to-primaryColor from-colorDark to-primaryColor
                          relative p-0.5 rounded-lg mb-10
                          ">
              <div className="bg-colorLight dark:bg-colorDark rounded-lg">
                <div className="bg-colorDark rounded-t-lg">
                  <img src="./images/the-wild-oasis-backend.png" alt="Project Image"
                         className="h-[300px] w-full object-cover rounded-t-lg opacity-50"/>
                </div>
                <div className="p-6 lg:mb-0 md:mb-0 mb-14 h-[192px]">
                  <h1 className="text-sm font-black text-primaryColor">WEB APPLICATION</h1>
                  <h1 className="text-xl font-bold">The Wild Oasis - Backend</h1>
                  <p className="font-medium mb-0 md:mb-0 lg:mb-6">
                    A hotel management dashboard built with React, TanStack Query, and Supabase. Features staff authentication, cabin and booking management, guest check-in and checkout, and interactive analytics.
                  </p>
                </div>
                <div className="p-6 flex justify-between items-center flex-row">
                  <a href="https://the-wild-oasis-vert-psi.vercel.app/"
                     target="_blank"
                     className="text-lg font-black
                                  text-colorLight bg-colorDark shadow-md hover:shadow-colorDark
                                  dark:border-2 dark:border-primaryColor dark:hover:bg-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                     data-ripple-light="true">
                    Live
                  </a>
                  <a href="https://github.com/iykescode/the-wild-oasis"
                     target="_blank"
                     className="text-lg font-black
                                  text-colorLight bg-gradient-to-r from-primaryColor to-colorDark shadow-md hover:shadow-colorDark
                                  dark:hover:to-primaryColor dark:border-2 dark:border-colorLight dark:hover:border-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                     data-ripple-light="true">
                    Design
                  </a>
                </div>
              </div>
            </div>
            <div
                className="bg-gradient-to-b
                          dark:from-colorLight dark:to-primaryColor from-colorDark to-primaryColor
                          relative p-0.5 rounded-lg mb-10
                          ">
              <div className="bg-colorLight dark:bg-colorDark rounded-lg">
                <div className="bg-colorDark rounded-t-lg">
                  <img alt="Project Image" className="h-[300px] w-full object-cover rounded-t-lg opacity-50" src="./images/portfolio.png"/>
                </div>
                <div className="p-6 lg:mb-0 md:mb-0 mb-0 h-[192px]">
                  <h1 className="text-sm font-black text-primaryColor">FIGMA PROTOTYPE</h1>
                  <h1 className="text-xl font-bold">Portfolio V2</h1>
                  <p className="font-medium mb-0 md:mb-6 lg:mb-6">
                    Portfolio V2 features dark and light modes, showcasing enhanced design and functionality for an
                    elevated user experience.
                  </p>
                </div>
                <div className="p-6 flex justify-between items-center flex-row">
                  <a href="https://www.figma.com/proto/aS4BBAhJ58KhQ8WhWNlMTr/Portfolio-v2?page-id=0%3A1&node-id=11-123&node-type=FRAME&t=RaWI6SyBohac1Qvh-0&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=11%3A123"
                     className="text-lg font-black
                                  text-colorLight bg-colorDark shadow-md hover:shadow-colorDark
                                  dark:border-2 dark:border-primaryColor dark:hover:bg-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                     data-ripple-light="true">
                    Live
                  </a>
                  <a href="https://www.figma.com/design/aS4BBAhJ58KhQ8WhWNlMTr/Portfolio-v2?node-id=4-3&node-type=frame&t=cci2W8TZ0vfOTfo8-0"
                     target="_blank"
                     className="text-lg font-black
                                  text-colorLight bg-gradient-to-r from-primaryColor to-colorDark shadow-md hover:shadow-colorDark
                                  dark:hover:to-primaryColor dark:border-2 dark:border-colorLight dark:hover:border-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                     data-ripple-light="true">
                    Design
                  </a>
                </div>
              </div>
            </div>
            <div
                className="bg-gradient-to-b
                          dark:from-colorLight dark:to-primaryColor from-colorDark to-primaryColor
                          relative p-0.5 rounded-lg mb-10
                          ">
              <div className="bg-colorLight dark:bg-colorDark rounded-lg">
                <div className="bg-colorDark rounded-t-lg">
                  <img src="./images/mikey-blogging-webapp-image.png" alt="Project Image"
                         className="h-[300px] w-full object-cover rounded-t-lg opacity-50"/>
                </div>
                <div className="p-6 lg:mb-0 md:mb-0 mb-14 h-[192px]">
                  <h1 className="text-sm font-black text-primaryColor">WEB APPLICATION</h1>
                  <h1 className="text-xl font-bold">Blogging Web App</h1>
                  <p className="font-medium">
                    Mikey’s Blogging Web Application is a secure, feature-rich platform enabling users to create,
                    share, and manage blog posts with integrated user authentication and admin controls.
                  </p>
                </div>
                <div className="p-6 flex justify-end items-center flex-row">
                  <a href="https://github.com/iykescode/mikey-blogging-webapp"
                     target="_blank"
                     className="text-lg font-black
                                  text-colorLight bg-gradient-to-r from-primaryColor to-colorDark shadow-md hover:shadow-colorDark
                                  dark:hover:to-primaryColor dark:border-2 dark:border-colorLight dark:hover:border-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                     data-ripple-light="true">
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center default-transition">
            <a href="https://www.github.com/iykescode" target="_blank"
               className="text-lg font-black
                                  text-colorLight bg-colorDark shadow-md hover:shadow-colorDark
                                  dark:border-2 dark:border-primaryColor dark:hover:bg-primaryColor
                                  flex items-center py-3 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
               data-ripple-light="true">
              See More
            </a>
          </div>
        </section>
        <a href="#home"
                className="fixed font-black bottom-10 right-6 bg-primaryColor text-white p-2 rounded-lg shadow-lg hover:bg-colorDark hover:border-2 hover:border-colorLight default-transition">
          ↑
        </a>
      </main>
    </div>
  );
}
