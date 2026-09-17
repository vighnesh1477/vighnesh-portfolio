// src/components/HeroSection.jsx
import React from 'react';
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaDownload,
    FaArrowRight
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import HeroImageCube from './HeroImageCube';

const socialLinks = [
    {
        Icon: FaGithub,
        href: 'https://github.com/vighnesh1477'
    },
    {
        Icon: FaLinkedinIn,
        href: 'https://www.linkedin.com/in/vighnesh-poojary'
    },
    {
        Icon: FaInstagram,
        href: 'https://www.instagram.com/t_he_artist_'
    },
];

const HeroSection = () => {
    return (
        <motion.section
            id="hero"
            className="pt-16 sm:pt-12 lg:pt-1 pb-20 min-h-screen flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT SIDE CONTENT */}
                <motion.div
                    className="order-2 lg:order-1"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p className="text-sm font-body font-medium text-gray-800 dark:text-gray-200 mb-3 uppercase tracking-wider bg-gray-200 dark:bg-gray-700 inline-block px-3 py-1 rounded-full">
                        👋 Hi there!
                    </p>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-raleway font-extrabold leading-tight mb-4 text-gray-900 dark:text-gray-50">
                        I'm <span className="text-green-600 dark:text-green-400">Vighnesh</span> Poojary.
                    </h1>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-medium text-indigo-700 dark:text-indigo-400">
                        <AnimatedText />
                    </h3>

                    <p className="text-lg text-gray-600 dark:text-gray-400 mt-5 mb-8 max-w-lg font-body">
                        Information Science Engineering student and AI/ML enthusiast from Udupi, India, exploring Computer Vision, Deep Learning, Image Processing, and research-driven technologies to build intelligent real-world solutions.
                    </p>

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                        <a
                            href="#contact"
                            className="flex items-center justify-center space-x-2 px-6 py-3 bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 rounded-lg text-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-200 transition duration-300 shadow-xl"
                        >
                            <FaArrowRight />
                            <span>Hire Me</span>
                        </a>

                        <a
                            href="/Vighnesh-Poojary-Resume.pdf"
                            download
                            className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-gray-900 text-gray-900 dark:border-gray-50 dark:text-gray-50 rounded-lg text-lg font-medium hover:bg-gray-900 hover:text-white dark:hover:bg-gray-50 dark:hover:text-gray-900 transition duration-300"
                        >
                            <FaDownload />
                            <span>Download CV</span>
                        </a>
                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="flex items-center space-x-6">
                        <span className="font-body font-medium text-gray-900 dark:text-gray-50 border-r pr-6 border-gray-300 dark:border-gray-700 hidden sm:block">
                            Follow Me
                        </span>

                        {socialLinks.map(({ Icon, href }, index) => (
                            <motion.a
                                key={index}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-900 dark:text-gray-50 hover:text-green-600 dark:hover:text-green-400 transition duration-300 text-2xl"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Icon />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT SIDE — 3D IMAGE CUBE */}
                <motion.div
                    className="order-1 lg:order-2 flex justify-center"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <HeroImageCube />
                </motion.div>

            </div>
        </motion.section>
    );
};

export default HeroSection;