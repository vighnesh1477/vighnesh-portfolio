// src/data/skills.js
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaCuttlefish, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase } from 'react-icons/si';

export const skills = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
    { name: 'React', icon: FaReact, color: 'text-sky-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500' },

    // 🌟 NEW SKILL ADDED
    { name: 'Firebase Auth', icon: SiFirebase, color: 'text-amber-500' },

    { name: 'Java', icon: FaJava, color: 'text-red-600' },
    { name: 'C Language', icon: FaCuttlefish, color: 'text-blue-600' },
    { name: 'Python (Basic)', icon: FaPython, color: 'text-yellow-400' },
    { name: 'Git/GitHub', icon: FaGitAlt, color: 'text-red-700' },
];
