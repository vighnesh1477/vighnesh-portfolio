// src/components/ProjectCard.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden hover:shadow-indigo-500/40 transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
        >
            {/* Image Placeholder */}
{/* Project Image */}
<div className="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
    <img 
        src={project.imagePlaceholder} 
        alt={project.title}
        className="w-full h-full object-cover"
        onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400?text=Image+Not+Found";
        }}
    />
</div>

            
            <div className="p-6">
                <h3 className="text-2xl font-heading font-semibold text-gray-900 dark:text-gray-50 mb-2">
                    {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                        <span 
                            key={tech} 
                            className="text-xs font-body font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-1 rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-start space-x-4">
                    <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-gray-50 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition duration-300 text-sm font-medium"
                    >
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                    {project.liveDemoLink && (
                        <a
                            href={project.liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300 text-sm font-medium"
                        >
                            <FaExternalLinkAlt />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;