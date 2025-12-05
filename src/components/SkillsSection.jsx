// src/components/SkillsSection.jsx
import React from 'react';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

const SkillsSection = () => {
    return (
        <motion.section 
            id="skills" 
            className="py-20 bg-gray-50 dark:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-heading font-bold text-center mb-3 text-gray-900 dark:text-gray-50">
                    My <span className="text-indigo-500">Skills</span>
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-16">
                    Technologies I've learned and worked with.
                </p>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 cursor-pointer group"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                whileHover={{ 
                                    scale: 1.05, 
                                    boxShadow: '0 10px 15px -3px rgba(79, 70, 229, 0.4)',
                                }}
                            >
                                <Icon className={`w-12 h-12 mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                                <span className="text-base font-body font-semibold text-gray-900 dark:text-gray-50 text-center">
                                    {skill.name}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </motion.section>
    );
};

export default SkillsSection;