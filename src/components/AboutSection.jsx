// src/components/AboutSection.jsx
import React, { useState } from 'react';
import { FaGraduationCap, FaFolderOpen, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PatentResearchModal from './PatentResearchModal';
import EducationModal from "./EducationModal";
import WorkExperienceModal from "./WorkExperienceModal";  // NEW IMPORT

// UPDATED infoCards (Languages removed)
const infoCards = [
    { key: "education", title: 'Education', description: 'School → PUC → Engineering', icon: FaGraduationCap },

    { key: "publications", title: 'Patent & Research Publications', description: '1 Patent • 4 Research Papers', icon: FaFolderOpen },

    { key: "work", title: 'Work Experience & Internships', description: 'MESCOM • MCB • Future Internships', icon: FaBriefcase },
];

const AboutSection = () => {

    const [openModal, setOpenModal] = useState(null);

    return (
        <>
        {/* ABOUT SECTION */}
        <motion.section 
            id="about" 
            className="py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* HEADING */}
                <h2 className="text-4xl font-heading font-bold text-center mb-3 text-gray-900 dark:text-gray-50">
                    About <span className="text-indigo-500">Me</span>
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-16">
                    A story of curiosity, code, and dreams.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    
                    {/* LEFT CONTENT */}
                    <div>
                        <h3 className="text-3xl font-heading font-semibold mb-6 text-gray-900 dark:text-gray-50">
                            Crafting Digital Experiences
                        </h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            I am Vighnesh Poojary, an 18-year-old Frontend Developer, App Developer, and Emerging AI & ML Enthusiast from Udupi, India. My journey began with a fascination for how intelligent systems and responsive interfaces are built. I am currently pursuing Information Science and Engineering, where I actively work on projects in AI, Machine Learning, Image Processing, Full-stack Development, Android applications, Algorithm Design, Embedded systems, and Research-driven innovation—constantly learning and applying my skills to real-world problems.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                            I love the challenge of crafting clean, modern UIs and bringing them to life with captivating animations and transitions. I'm deeply passionate about AI-driven projects and enjoy building apps that solve real-world problems through smart design and practical engineering.
                        </p>

                        <p className="text-lg font-semibold text-gray-900 dark:text-gray-50 leading-relaxed">
                            <span className="text-indigo-500">My ultimate goal?</span> 
                            To make my family proud and live peacefully in a green, sustainable environment—this vision inspires me every day and fuels my passion to learn, build, and excel in every line of code I write.
                        </p>
                    </div>

                    {/* RIGHT INFO CARDS */}
                    <div className="space-y-8">
                        {infoCards.map((card, index) => (
                            <motion.div
                                key={card.key}
                                onClick={() => setOpenModal(card.key)}
                                className="flex items-start p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.03 }}
                            >
                                <card.icon className="w-8 h-8 text-indigo-500 flex-shrink-0 mt-1" />

                                <div className="ml-4">
                                    <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-50 mb-1">
                                        {card.title}
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        {/* EDUCATION INFO BOX */}
                        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-inner">
                            <h4 className="text-xl font-heading font-bold text-gray-900 dark:text-gray-50 mb-2">
                                Current Education
                            </h4>
                            <p className="text-gray-700 dark:text-gray-300">
                                Pursuing Information Science and Engineering in Moodbidri, India, focusing on AI, ML, Image Processing, Full-stack Development, Android apps, Algorithm Design, Embedded systems, and Research-based problem solving.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </motion.section>

        {/* MODALS */}

        {/* EDUCATION MODAL */}
        {openModal === "education" && (
            <EducationModal onClose={() => setOpenModal(null)} />
        )}

        {/* PUBLICATION MODAL */}
        {openModal === "publications" && (
            <PatentResearchModal onClose={() => setOpenModal(null)} />
        )}

        {/* WORK EXPERIENCE MODAL */}
        {openModal === "work" && (
            <WorkExperienceModal onClose={() => setOpenModal(null)} />
        )}
        </>
    );
};

export default AboutSection;
