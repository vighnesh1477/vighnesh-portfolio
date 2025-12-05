// src/components/ServicesSection.jsx
import React from 'react';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';
import { motion } from 'framer-motion';

const ServicesSection = () => {
    return (
        <motion.section 
            id="services" 
            className="py-20 bg-gray-50 dark:bg-gray-800"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-heading font-bold text-center mb-3 text-gray-900 dark:text-gray-50">
                    Services I <span className="text-indigo-500">Offer</span>
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-16">
                    How I can help bring your ideas to life.
                </p>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ServicesSection;