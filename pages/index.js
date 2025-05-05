import Head from "next/head";

import { useDarkMode } from "@/pages/contexts/DarkModeContext";
import { useEffect, useRef } from "react";

// React icons
import { FaArrowRight } from "react-icons/fa";
import { BiLogoHtml5, BiLogoCss3, BiLogoBootstrap, BiLogoJavascript, BiLogoJquery,
          BiLogoReact, BiLogoVuejs, BiLogoTailwindCss, BiLogoJava, BiLogoSpringBoot,
            BiLogoPhp, BiLogoNodejs, BiLogoAws, BiLogoDocker, BiLogoKubernetes, BiLogoMongodb,
              BiLogoPostgresql } from "react-icons/bi";
import { RiNextjsFill, RiMailSendLine } from "react-icons/ri";
import { SiMysql, SiAdobe, SiCoreldraw, SiVisualstudiocode, SiJetbrains, SiEclipseide, SiPostman } from "react-icons/si";
import { PiFigmaLogoFill, PiLinktreeLogoBold } from "react-icons/pi";

// Imported images
import HeroImage from "../public/backgrounds/bg.png";
import Frontend from "../public/icons/frontend.png";
import Backend from "../public/icons/backend.png";
import Design from "../public/icons/design.png";
import Mikey from "../public/images/Mikey.JPG";
import Mikeey from "../public/images/Mikeey.png";
import Rocka from "../public/images/Rocka.png";
import MikeyBloggingWebApp from "../public/images/mikey-blogging-webapp-image.png";
import VleetzAccomodation from "../public/images/vleetz-accomodation.png";
import VleetzGiveaway from "../public/images/vleetz-giveaway.png";

// Imported videos
import PasturePlaceGlobal from "../videos/pasture-place-global.mov.json";
import Portfolio from "../videos/portfolio.mov.json";
import VleetzShopping from "../videos/vleetz-shopping.mov.json";
import VleetzGame from "../videos/vleetz-game.mov.json";
import VleetzGiveawayy from "../videos/vleetz-giveawayy.mov.json";

import Image from "next/image";
import BackgroundVideo from "next-video/background-video";

import Typed from "typed.js";

export default function Home() {
  const { isDarkMode } = useDarkMode();

  // Create a reference to store the DOM element
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, {
      strings: ["Developer", "Designer", "DevOps OG"], // You can add more strings
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

        <title>Michael Chuks - Portfolio - Java Developer</title>

        <meta name="keywords" content="Iykescode, Ikechukwu Michael Chuks, Ikechukwu, Michael,
                                        Chuks, Java, Spring Boot, Development, Software, Engineer, UI/UX, Devops"/>
        <meta name="description" content="Michael Chuks | Portfolio | Java Developer"/>
        <meta name="theme-color" content="#C53FD2"/>

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.iykescode.com" />
        <meta property="og:title" content="Michael Chuks | Portfolio | Java Developer" />
        <meta
            property="og:description"
            content="Java developer with 3+ years' experience. Proficient in Java, SQL, HTML, CSS. Strong problem-solving skills, seeking new challenges."
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
            content="Java developer with 3+ years' experience. Proficient in Java, SQL, HTML, CSS. Strong problem-solving skills, seeking new challenges."
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
          <Image src={HeroImage} alt="HeroImage"
                 className="absolute default-transition"/>
          <div className="relative">
            <div className="flex flex-col lg:flex-row lg:items-center md:items-center lg:gap-x-36 md:gap-x-20">
              <Image src={Mikey} alt="Mikey Image"
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
                  Freelancer providing services for programming and design content needs.
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  Join me down below and let's get cracking!
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
              Since the beginning of my journey as a freelance designer, developer and devOps expert,
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I've done remote work for <span className="text-primaryColor">agencies </span>
              consulted for <span className="text-primaryColor">startups</span> and collaborated with
              talented people to create digital products for both business and consumer use.
            </p>
            <p className="mt-4 text-md font-medium">
              I offer from a wide range of services, including brand design, programming and teaching.
            </p>
          </div>
          <div className="lg:flex lg:justify-evenly md:flex md:justify-evenly text-left mt-6 md:mt-6 lg:mt-10 w-full">
            <div
                className="relative p-0.5 bg-gradient-to-b dark:from-colorLight dark:to-primaryColor from-colorDark to-primaryColor rounded-lg mb-10">
              <div className="bg-colorLight dark:bg-colorDark rounded-lg p-6">
                <Image src={Frontend} alt="Frontend Image"
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
                  <BiLogoVuejs className="text-vueJs
                                          dark:text-colorLight dark:hover:text-vueJs
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
                <Image src={Backend} alt="Backend Image"
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
                  <BiLogoPhp className="text-php
                                          dark:text-colorLight dark:hover:text-php
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
                <Image src={Design} alt="Design Image"
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
                <Image src={Mikeey} alt="Frontend Image"
                       className="object-cover w-[390px] h-[370px] lg:w-[480px] lg:h-[480px] md:w-[420px] md:h-[420px] default-transition"/>
              </div>
            </div>
            <div>
              <h1 className="text-4xl font-bold">About Me</h1>
              <p className="text-md font-medium lg:w-[500px] mt-6">
                Experienced and goal-oriented Java developer with over 3 years of expertise in <span
                  className="text-primaryColor">software </span>
                and <span className="text-primaryColor">web </span> application design,
                development, and maintenance. Proficient in Java technologies, frameworks, and multiple programming
                languages,
                alongside a strong foundation in UI/UX design. Skilled in crafting intuitive and user-centric
                interfaces,
                blending functionality with aesthetics. Passionate about the entire <span
                  className="text-primaryColor">software </span> development life cycle,
                from requirements analysis to system maintenance, while always striving for creative and technical
                excellence.
                An avid music enthusiast and sports lover, bringing a unique perspective to teamwork, problem-solving,
                and collaboration.
                Committed to continuous learning and eager to apply skills and experience to contribute to dynamic
                teams,
                solving complex <span className="text-primaryColor">software </span> development challenges.
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
              Since the beginning of my journey as a freelance designer, developer and devOps expert,
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              I've done remote work for <span className="text-primaryColor">agencies </span>
              consulted for <span className="text-primaryColor">startups</span> and collaborated with
              talented people to create digital products for both business and consumer use.
            </p>
            <p className="mt-4 text-md font-medium">
              I offer from a wide range of services, including brand design, programming and teaching.
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
                  <BackgroundVideo className="h-[300px] object-cover rounded-t-lg opacity-50" src={PasturePlaceGlobal}/>
                </div>
                <div className="p-6 lg:mb-0 md:mb-0 mb-20 h-[192px]">
                  <h1 className="text-sm font-black text-primaryColor">WEB APPLICATION</h1>
                  <h1 className="text-xl font-bold">Pasture Place Global</h1>
                  <p className="font-medium">
                    The Pasture Place NGO app empowers communities through entrepreneurship, offering training,
                    microfinance, and supporting research to improve healthcare and agriculture globally.
                  </p>
                </div>
                <div className="p-6 flex justify-between items-center flex-row">
                  <a href="https://www.pastureplaceglobal.org" target="_blank"
                     className="text-lg font-black
                                  text-colorLight bg-colorDark shadow-md hover:shadow-colorDark
                                  dark:border-2 dark:border-primaryColor dark:hover:bg-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                     data-ripple-light="true">
                    Live
                  </a>
                  <a href="https://github.com/iykescode/pasture-place-global" target="_blank"
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
                  <Image src={Rocka} alt="Project Image"
                         className="h-[300px] object-cover rounded-t-lg opacity-50"/>
                </div>
                <div className="p-6 lg:mb-0 md:mb-0 mb-14 h-[192px]">
                  <h1 className="text-sm font-black text-primaryColor">FIGMA PROTOTYPE</h1>
                  <h1 className="text-xl font-bold">Rocka - Music App</h1>
                  <p className="font-medium mb-0 md:mb-0 lg:mb-6">
                    Rocka Music App is a vibrant redesign of a music streaming platform, leveraging Figma, wireframes,
                    and prototyping for a seamless, immersive user experience.
                  </p>
                </div>
                <div className="p-6 flex justify-between items-center flex-row">
                  <a href="https://www.figma.com/proto/aS4BBAhJ58KhQ8WhWNlMTr/Portfolio-v2?page-id=0%3A1&node-id=11-123&node-type=FRAME&t=RaWI6SyBohac1Qvh-0&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=11%3A123"
                     target="_blank"
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
                  <BackgroundVideo className="h-[300px] object-cover rounded-t-lg opacity-50" src={Portfolio}/>
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
                  <Image src={MikeyBloggingWebApp} alt="Project Image"
                         className="h-[300px] object-cover rounded-t-lg opacity-50"/>
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
            <div
                className="bg-gradient-to-b
                          dark:from-colorLight dark:to-primaryColor from-colorDark to-primaryColor
                          relative p-0.5 rounded-lg mb-10
                          ">
              <div className="bg-colorLight dark:bg-colorDark rounded-lg">
                <div className="bg-colorDark rounded-t-lg">
                  <BackgroundVideo className="h-[300px] object-cover rounded-t-lg opacity-50" src={VleetzShopping}/>
                </div>
                <div className="p-6 lg:mb-0 md:mb-0 mb-12 h-[192px]">
                  <h1 className="text-sm font-black text-primaryColor">FIGMA PROTOTYPE</h1>
                  <h1 className="text-xl font-bold">Vleetz Shopping</h1>
                  <p className="font-medium">
                    The Figma project features a responsive design for a shopping web app, optimized for various
                    devices,
                    ensuring a visually stunning, user-friendly interface and seamless navigation.
                  </p>
                </div>
                <div className="p-6 flex justify-between items-center flex-row">
                  <button
                      className="text-lg font-black
                                  text-colorLight bg-colorDark shadow-md hover:shadow-colorDark
                                  dark:border-2 dark:border-primaryColor dark:hover:bg-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                      data-ripple-light="true">
                    Live
                  </button>
                  <button
                      className="text-lg font-black
                                  text-colorLight bg-gradient-to-r from-primaryColor to-colorDark shadow-md hover:shadow-colorDark
                                  dark:hover:to-primaryColor dark:border-2 dark:border-colorLight dark:hover:border-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                      data-ripple-light="true">
                    Design
                  </button>
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
                  <BackgroundVideo className="h-[300px] object-cover rounded-t-lg opacity-50" src={VleetzGame}/>
                </div>
                <div className="p-6 lg:mb-0 md:mb-0 mb-12 h-[192px]">
                  <h1 className="text-sm font-black text-primaryColor">FIGMA PROTOTYPE</h1>
                  <h1 className="text-xl font-bold">Vleetz Quiz Game</h1>
                  <p className="font-medium">
                    The Figma project is a responsive quiz mobile app designed for various devices, offering an
                    interactive
                    experience with intuitive navigation and visually appealing layouts for users.
                  </p>
                </div>
                <div className="p-6 flex justify-between items-center flex-row">
                  <a href="https://www.figma.com/proto/ELRb6ev9h2sJ3QC0K7oNSp/QuestionMark-Technologies---Mobile?page-id=0%3A1&node-id=31-299&node-type=canvas&t=pCdh4nGa69lvva9b-0&scaling=scale-down&content-scaling=fixed"
                     target="_blank"
                     className="text-lg font-black
                                  text-colorLight bg-colorDark shadow-md hover:shadow-colorDark
                                  dark:border-2 dark:border-primaryColor dark:hover:bg-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                     data-ripple-light="true">
                    Live
                  </a>
                  <a href="https://www.figma.com/design/ELRb6ev9h2sJ3QC0K7oNSp/QuestionMark-Technologies---Mobile?node-id=0-1&node-type=canvas&t=5SsKttWiE137DXwB-0"
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
                  <Image src={VleetzAccomodation} alt="Project Image"
                         className="h-[300px] object-cover rounded-t-lg opacity-50"/>
                </div>
                <div className="p-6 lg:mb-0 md:mb-0 mb-20 h-[192px]">
                  <h1 className="text-sm font-black text-primaryColor">FIGMA PROTOTYPE</h1>
                  <h1 className="text-xl font-bold">Vleetz Accommodation</h1>
                  <p className="font-medium">
                    The Figma project is a mobile app design for an accommodation service, offering a responsive layout,
                    intuitive navigation, and modern aesthetics for seamless booking across devices.
                  </p>
                </div>
                <div className="p-6 flex justify-between items-center flex-row">
                  <a href="https://www.figma.com/proto/4kbWSZoWrhJl5rDHXIaKJD/Accomodation?page-id=0%3A1&node-id=33-74&node-type=canvas&t=6kngksciOhDzmPrj-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=33%3A74"
                     target="_blank"
                     className="text-lg font-black
                                  text-colorLight bg-colorDark shadow-md hover:shadow-colorDark
                                  dark:border-2 dark:border-primaryColor dark:hover:bg-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                     data-ripple-light="true">
                    Live
                  </a>
                  <a href="https://www.figma.com/design/4kbWSZoWrhJl5rDHXIaKJD/Accomodation?node-id=0-1&node-type=canvas&t=6kngksciOhDzmPrj-0"
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
                  <BackgroundVideo className="h-[300px] object-cover rounded-t-lg opacity-50" src={VleetzGiveawayy}/>
                </div>
                <div className="p-6 lg:mb-0 md:mb-0 mb-16 h-[192px]">
                  <h1 className="text-sm font-black text-primaryColor">FIGMA PROTOTYPE</h1>
                  <h1 className="text-xl font-bold">Vleetz Giveaway V2</h1>
                  <p className="font-medium">
                    The Figma project is a responsive design for a giveaway web app, featuring a visually stunning,
                    user-friendly interface with adaptive layouts for seamless engagement across devices.
                  </p>
                </div>
                <div className="p-6 flex justify-between items-center flex-row">
                  <a href="https://www.figma.com/proto/jwCySDkdBXD2mDRDb9eyXr/Giveaway?page-id=0%3A1&node-id=201-3&node-type=canvas&t=E9iDQ6EYA3eRmIMd-0&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=201%3A3"
                     target="_blank"
                     className="text-lg font-black
                                  text-colorLight bg-colorDark shadow-md hover:shadow-colorDark
                                  dark:border-2 dark:border-primaryColor dark:hover:bg-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                     data-ripple-light="true">
                    Live
                  </a>
                  <a href="https://www.figma.com/design/jwCySDkdBXD2mDRDb9eyXr/Giveaway?node-id=0-1&node-type=canvas&t=E9iDQ6EYA3eRmIMd-0"
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
                  <Image src={VleetzGiveaway} alt="Project Image"
                         className="h-[300px] object-cover rounded-t-lg opacity-50"/>
                </div>
                <div className="p-6 lg:mb-0 md:mb-0 mb-20 h-[192px]">
                  <h1 className="text-sm font-black text-primaryColor">FIGMA PROTOTYPE</h1>
                  <h1 className="text-xl font-bold">Vleetz Giveaway V1</h1>
                  <p className="font-medium">
                    The Figma project is a responsive design for a giveaway mobile app, offering a visually appealing,
                    user-friendly interface with adaptive layouts for seamless navigation and engagement across devices.
                  </p>
                </div>
                <div className="p-6 flex justify-between items-center flex-row">
                  <a href="https://www.figma.com/proto/r7AoaiczbpuYMxmFqn7QLp/Vleetz?page-id=0%3A1&node-id=2-47&node-type=frame&t=6d5fRKNvj2dPqiMd-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A47"
                     target="_blank"
                     className="text-lg font-black
                                  text-colorLight bg-colorDark shadow-md hover:shadow-colorDark
                                  dark:border-2 dark:border-primaryColor dark:hover:bg-primaryColor
                                  flex items-center py-1 px-6 lg:px-10 md:px-8 rounded-xl mt-4 gap-x-3
                                  default-transition"
                     data-ripple-light="true">
                    Live
                  </a>
                  <a href="https://www.figma.com/design/r7AoaiczbpuYMxmFqn7QLp/Vleetz?node-id=0-1&node-type=canvas&t=6d5fRKNvj2dPqiMd-0"
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
