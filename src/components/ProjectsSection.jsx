// src/components/ProjectsSection.jsx
import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
    return (
        <motion.section 
            id="projects" 
            className="py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-heading font-bold text-center mb-3 text-gray-900 dark:text-gray-50">
                    Featured <span className="text-indigo-500">Projects</span>
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-16">
                    A showcase of my major development and engineering work.
                </p>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ProjectsSection;