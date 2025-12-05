// src/components/ServiceCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => {
    const Icon = service.icon;

    return (
        <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-t-4 border-indigo-500 hover:border-indigo-600 transition-all duration-500 text-center group cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
        >
            <div className="flex justify-center mb-4">
                <Icon className="w-10 h-10 text-indigo-500 group-hover:text-indigo-600 transition-colors duration-500" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-gray-900 dark:text-gray-50 mb-3">
                {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
                {service.description}
            </p>
        </motion.div>
    );
};

export default ServiceCard;