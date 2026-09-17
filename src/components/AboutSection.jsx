// src/components/AboutSection.jsx

import React, { useState } from 'react';

import {
    FaGraduationCap,
    FaFolderOpen,
    FaBriefcase,
    FaArrowRight
} from 'react-icons/fa';

import { motion } from 'framer-motion';

import PatentResearchModal from './PatentResearchModal';
import EducationModal from './EducationModal';
import WorkExperienceModal from './WorkExperienceModal';


// ============================================================
// INFO CARDS
// ============================================================

const infoCards = [
    {
        key: 'education',
        title: 'Education',
        description: 'School → PUC → Engineering',
        icon: FaGraduationCap
    },

    {
        key: 'publications',
        title: 'Patent & Research Publications',
        description: '1 Patent • 4 Research Papers',
        icon: FaFolderOpen
    },

    {
        key: 'work',
        title: 'Work Experience & Internships',
        description: 'MESCOM • MCB • Future Internships',
        icon: FaBriefcase
    }
];


// ============================================================
// ABOUT SECTION
// ============================================================

const AboutSection = () => {

    const [openModal, setOpenModal] = useState(null);
    const [hoveredCard, setHoveredCard] = useState(null);


    return (
        <>

            {/* ==================================================
                ABOUT SECTION
            ================================================== */}

            <motion.section
                id="about"
                className="py-16 sm:py-20"

                initial={{
                    opacity: 0,
                    y: 50
                }}

                whileInView={{
                    opacity: 1,
                    y: 0
                }}

                viewport={{
                    once: true,
                    amount: 0.1
                }}

                transition={{
                    duration: 0.8
                }}
            >

                <div className="
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                ">


                    {/* ==================================================
                        HEADING
                    ================================================== */}

                    <h2 className="
                        text-3xl
                        sm:text-4xl
                        font-heading
                        font-bold
                        text-center
                        mb-3
                        text-gray-900
                        dark:text-gray-50
                    ">
                        About <span className="text-indigo-500">Me</span>
                    </h2>


                    <p className="
                        text-base
                        sm:text-lg
                        text-gray-500
                        dark:text-gray-400
                        text-center
                        mb-12
                        sm:mb-16
                    ">
                        A story of curiosity, code, and dreams.
                    </p>



                    {/* ==================================================
                        MAIN GRID
                    ================================================== */}

                    <div className="
                        grid
                        grid-cols-1
                        lg:grid-cols-2
                        gap-10
                        lg:gap-12
                        items-start
                    ">


                        {/* ==================================================
                            LEFT CONTENT
                        ================================================== */}

                        <div>

                            <h3 className="
                                text-2xl
                                sm:text-3xl
                                font-heading
                                font-semibold
                                mb-6
                                text-gray-900
                                dark:text-gray-50
                            ">
                                Researching Ideas, Building Intelligent Systems
                            </h3>


                            <p className="
                                text-gray-600
                                dark:text-gray-400
                                mb-6
                                leading-relaxed
                            ">
                                I am Vighnesh Poojary, an AI/ML enthusiast, Computer Vision developer, researcher, and software developer from Udupi, India. I am currently pursuing Information Science and Engineering, where I actively work on Artificial Intelligence, Deep Learning, Image Processing, Computer Vision, Full-stack Development, Android applications, Algorithm Design, Embedded systems, and research-driven innovation—continuously learning and applying technology to solve real-world problems.
                            </p>


                            <p className="
                                text-gray-600
                                dark:text-gray-400
                                mb-6
                                leading-relaxed
                            ">
                                I enjoy turning research ideas into practical systems and exploring how intelligent technologies can interact with the real world. My work includes projects such as OVIS, a vision-based overtaking assistance system, along with AI, image processing, embedded, and software projects. I am particularly interested in building reliable, efficient, and meaningful solutions through experimentation, engineering, and continuous research.
                            </p>


                            <p className="
                                text-base
                                sm:text-lg
                                font-semibold
                                text-gray-900
                                dark:text-gray-50
                                leading-relaxed
                            ">

                                <span className="text-indigo-500">
                                    My ultimate goal?&nbsp;&nbsp;
                                </span>

                                To make my family proud while creating technology that can genuinely improve people's lives and contribute to a better, smarter, and more sustainable future—this vision motivates me to keep learning, researching, building, and turning ideas into meaningful real-world solutions.

                            </p>

                        </div>



                        {/* ==================================================
                            RIGHT INFO CARDS
                        ================================================== */}

                        <div className="space-y-6 sm:space-y-8">


                            {infoCards.map((card, index) => {

                                const isHovered = hoveredCard === card.key;

                                return (

                                    <motion.div

                                        key={card.key}

                                        onClick={() => setOpenModal(card.key)}

                                        onMouseEnter={() =>
                                            setHoveredCard(card.key)
                                        }

                                        onMouseLeave={() =>
                                            setHoveredCard(null)
                                        }

                                        className="
                                            relative
                                            flex
                                            items-start
                                            p-5
                                            sm:p-6
                                            bg-white
                                            dark:bg-gray-800
                                            rounded-xl
                                            border-l-4
                                            border-indigo-500
                                            cursor-pointer
                                            overflow-hidden
                                            select-none
                                            shadow-lg
                                        "

                                        initial={{
                                            opacity: 0,
                                            x: 50
                                        }}

                                        whileInView={{
                                            opacity: 1,
                                            x: 0
                                        }}

                                        viewport={{
                                            once: true,
                                            amount: 0.3
                                        }}

                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1
                                        }}

                                        whileHover={{
                                            scale: 1.025,
                                            y: -5
                                        }}

                                        whileTap={{
                                            scale: 0.97
                                        }}

                                        animate={{
                                            boxShadow: isHovered
                                                ? '0 20px 45px rgba(99, 102, 241, 0.25)'
                                                : '0 10px 15px rgba(0, 0, 0, 0.10)'
                                        }}
                                    >


                                        {/* ==================================================
                                            ANIMATED SHINE
                                        ================================================== */}

                                        <motion.div
                                            className="
                                                absolute
                                                top-0
                                                bottom-0
                                                w-20
                                                bg-gradient-to-r
                                                from-transparent
                                                via-indigo-400/10
                                                to-transparent
                                                pointer-events-none
                                            "

                                            animate={{
                                                x: [
                                                    '-100px',
                                                    '700px'
                                                ]
                                            }}

                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                repeatDelay: 3,
                                                ease: 'easeInOut'
                                            }}
                                        />



                                        {/* ==================================================
                                            ICON
                                        ================================================== */}

                                        <motion.div

                                            animate={{
                                                scale: isHovered ? 1.15 : 1,
                                                rotate: isHovered ? -5 : 0
                                            }}

                                            transition={{
                                                type: 'spring',
                                                stiffness: 300,
                                                damping: 15
                                            }}

                                            className="
                                                relative
                                                flex-shrink-0
                                                mt-1
                                            "
                                        >

                                            <card.icon
                                                className="
                                                    w-7
                                                    h-7
                                                    sm:w-8
                                                    sm:h-8
                                                    text-indigo-500
                                                "
                                            />

                                        </motion.div>



                                        {/* ==================================================
                                            CARD CONTENT
                                        ================================================== */}

                                        <div className="
                                            relative
                                            ml-4
                                            sm:ml-5
                                            flex-1
                                            pr-2
                                        ">


                                            {/* TITLE */}

                                            <h4 className="
                                                text-lg
                                                sm:text-xl
                                                font-heading
                                                font-bold
                                                text-gray-900
                                                dark:text-gray-50
                                                mb-1
                                                transition-colors
                                                duration-300
                                            ">

                                                {card.title}

                                            </h4>



                                            {/* DESCRIPTION */}

                                            <p className="
                                                text-sm
                                                sm:text-base
                                                text-gray-600
                                                dark:text-gray-400
                                            ">

                                                {card.description}

                                            </p>



                                            {/* ==================================================
                                                CLICK INDICATOR
                                            ================================================== */}

                                            <div className="
                                                mt-3
                                                flex
                                                items-center
                                                gap-2
                                                text-xs
                                                sm:text-sm
                                                font-semibold
                                                text-indigo-500
                                            ">

                                                <span>
                                                    Click to explore
                                                </span>


                                                {/* Animated arrow */}

                                                <motion.div

                                                    animate={{
                                                        x: [0, 5, 0]
                                                    }}

                                                    transition={{
                                                        duration: 1.2,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut'
                                                    }}
                                                >

                                                    <FaArrowRight />

                                                </motion.div>

                                            </div>

                                        </div>



                                        {/* ==================================================
                                            DESKTOP RIGHT ARROW
                                        ================================================== */}

                                        <motion.div

                                            animate={{
                                                x: isHovered ? 0 : 5,
                                                opacity: isHovered ? 1 : 0.35
                                            }}

                                            transition={{
                                                duration: 0.3
                                            }}

                                            className="
                                                absolute
                                                right-4
                                                sm:right-5
                                                top-1/2
                                                -translate-y-1/2
                                                text-indigo-500
                                            "
                                        >

                                            <FaArrowRight />

                                        </motion.div>


                                    </motion.div>

                                );

                            })}



                            {/* ==================================================
                                CURRENT EDUCATION
                            ================================================== */}

                            <div className="
                                mt-8
                                p-5
                                sm:p-6
                                bg-gray-100
                                dark:bg-gray-800
                                rounded-xl
                                shadow-inner
                            ">

                                <h4 className="
                                    text-lg
                                    sm:text-xl
                                    font-heading
                                    font-bold
                                    text-gray-900
                                    dark:text-gray-50
                                    mb-2
                                ">
                                    Current Education
                                </h4>


                                <p className="
                                    text-sm
                                    sm:text-base
                                    text-gray-700
                                    dark:text-gray-300
                                ">
                                    Pursuing Information Science and Engineering in Moodbidri, India, focusing on AI, ML, Image Processing, Full-stack Development, Android apps, Algorithm Design, Embedded systems, and Research-based problem solving.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </motion.section>



            {/* ==========================================================
                MODALS
            ========================================================== */}


            {/* EDUCATION */}

            {openModal === 'education' && (

                <EducationModal
                    onClose={() => setOpenModal(null)}
                />

            )}



            {/* PUBLICATIONS */}

            {openModal === 'publications' && (

                <PatentResearchModal
                    onClose={() => setOpenModal(null)}
                />

            )}



            {/* WORK EXPERIENCE */}

            {openModal === 'work' && (

                <WorkExperienceModal
                    onClose={() => setOpenModal(null)}
                />

            )}

        </>
    );
};


export default AboutSection;