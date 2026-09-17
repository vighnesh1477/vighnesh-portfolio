// src/data/skills.js

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaJava,
    FaCuttlefish,
    FaPython,
    FaGitAlt,
    FaGithub,
} from 'react-icons/fa';

import {
    SiPytorch,
    SiTensorflow,
    SiOpencv,
    SiPandas,
    SiMysql,

} from 'react-icons/si';

export const skills = [
    // AI / ML / Computer Vision
    {
        name: 'Machine Learning',
        icon: SiTensorflow,
        color: 'text-orange-500',
    },
    {
        name: 'Deep Learning',
        icon: SiPytorch,
        color: 'text-red-500',
    },
    {
        name: 'Computer Vision',
        icon: SiOpencv,
        color: 'text-green-500',
    },
    {
        name: 'Image Processing',
        icon: SiOpencv,
        color: 'text-blue-500',
    },
    {
        name: 'Pandas',
        icon: SiPandas,
        color: 'text-indigo-600',
    },

    // Programming
    {
        name: 'Python',
        icon: FaPython,
        color: 'text-yellow-400',
    },
    {
        name: 'C Language',
        icon: FaCuttlefish,
        color: 'text-blue-600',
    },
    {
        name: 'Java',
        icon: FaJava,
        color: 'text-red-600',
    },
    {
        name: 'JavaScript',
        icon: FaJs,
        color: 'text-yellow-500',
    },

    // Web Development
    {
        name: 'React',
        icon: FaReact,
        color: 'text-sky-400',
    },
    {
        name: 'HTML5',
        icon: FaHtml5,
        color: 'text-orange-500',
    },
    {
        name: 'CSS3',
        icon: FaCss3Alt,
        color: 'text-blue-500',
    },

    // Database / Backend
    {
        name: 'MySQL',
        icon: SiMysql,
        color: 'text-blue-500',
    },
    // Version Control
    {
        name: 'Git',
        icon: FaGitAlt,
        color: 'text-red-600',
    },
    {
        name: 'GitHub',
        icon: FaGithub,
        color: 'text-gray-700 dark:text-gray-300',
    },
];