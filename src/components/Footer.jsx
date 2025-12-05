// src/components/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const socialLinks = [
        { Icon: FaGithub, href: 'https://github.com/vighnesh1477' },
        { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/vighnesh-poojary' },
        { Icon: FaInstagram, href: 'https://www.instagram.com/t_he_artist_' },
    ];

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="bg-gray-900 text-gray-50 mt-20 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-6">
                    <h2 className="text-3xl font-heading font-bold mb-2 text-indigo-500">Vighnesh Poojary</h2>
                    <p className="text-sm text-gray-400">Beginner Frontend & App Developer</p>
                </div>

                {/* Navigation Links */}
                <div className="flex justify-center flex-wrap gap-4 mb-6">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 font-body text-sm">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="flex justify-center space-x-6 mb-8">
                    {socialLinks.map(({ Icon, href }, index) => (
                        <a
                            key={index}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-xl"
                            aria-label={Icon.name}
                        >
                            <Icon />
                        </a>
                    ))}
                </div>

                <div className="border-t border-gray-700 pt-6">
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} Vighnesh Poojary. All Rights Reserved.
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                        Built with React & Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;