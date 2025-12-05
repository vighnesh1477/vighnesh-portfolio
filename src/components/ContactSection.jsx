// src/components/ContactSection.jsx
import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const contactInfo = [
        { Icon: FaEnvelope, detail: 'Vighneshpoojary49@gmail.com', href: 'mailto:Vighneshpoojary49@gmail.com' },
        { Icon: FaPhone, detail: '+91 7619161634', href: 'tel:+917619161634' },
        { Icon: FaMapMarkerAlt, detail: 'Udupi, India', href: 'http://maps.google.com/?q=Udupi,India' },
    ];

    const socialLinks = [
        { Icon: FaGithub, href: 'https://github.com/vighnesh1477' },
        { Icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/vighnesh-poojary' },
        { Icon: FaInstagram, href: 'https://www.instagram.com/t_he_artist_' },
    ];

    return (
        <motion.section 
            id="contact" 
            className="py-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-heading font-bold text-center mb-3 text-gray-900 dark:text-gray-50">
                    Get in <span className="text-indigo-500">Touch</span>
                </h2>
                <p className="text-lg text-gray-500 dark:text-gray-400 text-center mb-16">
                    I'm open to new projects, opportunities, and discussions.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* Contact Info (Left) */}
                    <motion.div 
                        className="lg:col-span-1 space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            Feel free to reach out directly using the information below or fill out the simple contact form. I look forward to hearing about your project!
                        </p>
                        
                        <div className="space-y-6">
                            {contactInfo.map((item, index) => {
                                const Icon = item.Icon;
                                return (
                                    <a 
                                        key={index} 
                                        href={item.href} 
                                        className="flex items-center space-x-4 text-gray-900 dark:text-gray-50 hover:text-indigo-500 transition duration-300 group"
                                    >
                                        <Icon className="w-6 h-6 text-indigo-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="font-body text-lg">{item.detail}</span>
                                    </a>
                                );
                            })}
                        </div>
                        
                        {/* Social Icons */}
                        <div className="pt-4 flex space-x-6">
                            {socialLinks.map(({ Icon, href }, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-900 dark:text-gray-50 bg-gray-200 dark:bg-gray-700 p-3 rounded-full hover:bg-indigo-500 hover:text-white transition duration-300 text-xl shadow-md"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    aria-label={Icon.name}
                                >
                                    <Icon />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form (Right) */}
                    <motion.div 
                        className="lg:col-span-2 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* FORM USING FORMSPREE */}
                        <form 
                            action="https://formspree.io/f/mqarlynj" 
                            method="POST"
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-indigo-500 text-white rounded-lg text-lg font-medium hover:bg-indigo-600 transition duration-300 shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </motion.section>
    );
};

export default ContactSection;
