// src/components/ProjectCard.jsx

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExpandAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    const [showImage, setShowImage] = useState(false);

    // Close image popup with Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setShowImage(false);
            }
        };

        if (showImage) {
            window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showImage]);

    return (
        <>
            {/* ================= PROJECT CARD ================= */}
            <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden hover:shadow-indigo-500/40 transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
            >

                {/* ================= PROJECT IMAGE ================= */}
                <div
                    className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden relative cursor-pointer group"
                    onClick={() => setShowImage(true)}
                >
                    <img
                        src={project.imagePlaceholder}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                                "https://placehold.co/600x400?text=Image+Not+Found";
                        }}
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-center justify-center">

                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center text-white">

                            <FaExpandAlt className="text-2xl mb-2" />

                            <span className="text-sm font-medium">
                                View Full Image
                            </span>

                        </div>
                    </div>
                </div>

                {/* ================= PROJECT CONTENT ================= */}
                <div className="p-6">

                    <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-gray-50 mb-2">
                        {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                        {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                            <span
                                key={tech}
                                className="text-xs font-body font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-1 rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                </div>
            </motion.div>

            {/* ================= FULL IMAGE POPUP ================= */}
            <AnimatePresence>
                {showImage && (
                    <motion.div
                        className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowImage(false)}
                    >

                        {/* Close Button */}
                        <button
                            type="button"
                            onClick={() => setShowImage(false)}
                            aria-label="Close image"
                            className="absolute top-5 right-5 z-50 w-11 h-11 flex items-center justify-center rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white shadow-xl hover:scale-110 transition-transform"
                        >
                            <FaTimes className="text-xl" />
                        </button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 180,
                                damping: 20,
                            }}
                            className="relative max-w-[95vw] max-h-[92vh] cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <img
                                src={project.imagePlaceholder}
                                alt={project.title}
                                className="max-w-[95vw] max-h-[88vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
                            />

                            {/* Image Title */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl px-5 py-5 pt-12">
                                <p className="text-white text-sm sm:text-base font-medium">
                                    {project.title}
                                </p>
                            </div>

                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ProjectCard;