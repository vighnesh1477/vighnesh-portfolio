// src/data/projects.js
// IMPORT ALL PROJECT IMAGES
import AiDiaryImg from "../assets/projects1/ai-diary.jpg";
import ResolveRadarImg from "../assets/projects1/resolveradar.jpg";
import MernCrudImg from "../assets/projects1/mern-crud.jpg";
import LabColabImg from "../assets/projects1/lab-colab.jpg";
import RoukImg from "../assets/projects1/rouk.jpg";
import BackCoverImg from "../assets/projects1/backcover.jpg";
import ShoeRollerImg from "../assets/projects1/shoe-roller.jpg";
import MagneticImg from "../assets/projects1/magnetic.jpg";
import ShoeSellImg from "../assets/projects1/shoe-sell.jpg";


export const projects = [

    // 1) AI Diary App
    {
        title: 'AI Diary App',
        description: 'A personal diary application featuring voice-to-text conversion, date-wise auto-saving, and secure Google login with password protection.',
        techStack: ['ReactJS', 'Firebase', 'Speech-to-Text'],
        imagePlaceholder: AiDiaryImg,
        githubLink: 'https://github.com/vighnesh1477/AI-Diary',
        liveDemoLink: 'https://aidiaryapp.vercel.app/',
    },

    // 2) Resolve Radar
    {
        title: 'Resolve Radar',
        description: 'A campus-level complaint & issue management system for students with real-time tracking.',
        techStack: ['React Native', 'Firebase', 'Node.js'],
        imagePlaceholder: ResolveRadarImg,
        githubLink: '#',
        liveDemoLink: '#',
    },

    // 3) MERN CRUD Website
    {
        title: 'MERN CRUD Website for Restaurants',
        description: 'A full-stack MERN web app supporting CRUD operations with a clean and responsive dashboard.',
        techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
        imagePlaceholder: MernCrudImg,
        githubLink: '#',
        liveDemoLink: '#',
    },

    // 4) Lab-Colab Website
    {
        title: 'Lab-Colab Website',
        description: 'A full-stack platform that allows students to share files & text live in the lab. All users can view and download shared resources.',
        techStack: ['ReactJS', 'Firebase', 'Supabase'],
        imagePlaceholder: LabColabImg,
        githubLink: 'https://github.com/vighnesh1477/Lab-Colab',
        liveDemoLink: 'https://lab-colab.vercel.app/',
    },

    // 5) ROUK AI Assistant
    {
        title: 'ROUK – Personal AI Assistant',
        description: 'A Python-based virtual assistant capable of automation, speech interaction, and generating formatted documents.',
        techStack: ['Python', 'Speech Synthesis', 'Automation'],
        imagePlaceholder: RoukImg,
        githubLink: 'https://github.com/vighnesh1477/ROUK',
        liveDemoLink: 'https://www.linkedin.com/posts/vighnesh-poojary-xxxx', // placeholder
    },

    // 6) Smart Phone Back-Cover Alert System
    {
        title: 'Smart Phone Back-Cover Alert System',
        description: 'An Arduino-based safety alert system that detects proximity and activates buzzer and LED alerts.',
        techStack: ['Arduino', 'Ultrasonic Sensor', 'LEDs'],
        imagePlaceholder: BackCoverImg,
        githubLink: '#',
        liveDemoLink: '#',
    },

    // 7) Shoe Roller Mechanism
    {
        title: 'Shoe Roller Mechanism',
        description: 'A mechanical engineering prototype for compact personal mobility using a shoe-mounted roller system.',
        techStack: ['Mechanical Design', 'CADD'],
        imagePlaceholder: ShoeRollerImg,
        githubLink: '#',
        liveDemoLink: 'https://www.linkedin.com/posts/vighnesh-poojary-xxxx',
    },

    // 8) Magnetic Separation Model
    {
        title: 'Magnetic Separation Model',
        description: 'A miniature exhibition model demonstrating magnetic and non-magnetic material separation.',
        techStack: ['Mechanical Engineering', 'Physics Principles'],
        imagePlaceholder: MagneticImg,
        githubLink: '#',
        liveDemoLink: 'https://www.linkedin.com/posts/vighnesh-poojary-xxxx',
    },

    // ⭐ 9) Shoes Selling Website – MERN E-Commerce
    {
        title: 'Shoes Selling Website – MERN Stack',
        description: 'A full MERN-stack e-commerce website for selling shoes, featuring cart, product filtering, search, authentication, and admin product control.',
        techStack: ['MongoDB', 'Express', 'React', 'Node.js'],
        imagePlaceholder: ShoeSellImg,
        githubLink: '#',            // replace later
        liveDemoLink: '#',          // replace later
    },

];
