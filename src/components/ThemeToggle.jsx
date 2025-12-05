// src/components/ThemeToggle.jsx 
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            onClick={toggleTheme}
            // Use high-contrast colors for the button itself
            className="p-3 rounded-full text-gray-900 dark:text-gray-50 bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300 shadow-xl fixed bottom-5 right-5 z-50 lg:top-5 lg:right-5"
            aria-label="Toggle Dark Mode"
            whileTap={{ scale: 0.9 }}
        >
            {theme === 'light' ? (
                // Show Moon (for dark mode) when current theme is light
                <FaMoon className="w-5 h-5" />
            ) : (
                // Show Sun (for light mode) when current theme is dark
                <FaSun className="w-5 h-5 text-yellow-400" />
            )}
        </motion.button>
    );
};

export default ThemeToggle;