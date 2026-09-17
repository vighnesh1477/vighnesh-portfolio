// src/components/AnimatedText.jsx 
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const AnimatedText = () => {
    // Note: If you have issues with loop/typewriter, check the installed version or try a simple state/useEffect implementation.
const [text] = useTypewriter({
    words: [
        'AI & Deep Learning Researcher',
        'Computer Vision Enthusiast',
        'Image Processing Developer',
        'AI/ML Developer',
        'Research & Innovation Enthusiast',
        'Product Development Enthusiast',
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
});

    return (
        // Uses the custom font-playfair class and theme-aware colors
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-medium text-indigo-700 dark:text-indigo-400">
            {text}
            <Cursor cursorStyle='|' cursorColor='#4F46E5' />
        </h3>
    );
};

export default AnimatedText;