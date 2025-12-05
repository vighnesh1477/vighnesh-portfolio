// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href.substring(1));
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-[999999] bg-white dark:bg-gray-900 shadow-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 90 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl font-bold font-heading text-indigo-600">
          Vighnesh<span className="text-gray-900 dark:text-gray-50">.Dev</span>
        </h1>

        {/* DESKTOP MENU */}
        <div className="flex space-x-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`
                px-4 py-2 rounded-full font-medium transition-all 
                ${activeSection === link.href.substring(1)
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700"}
              `}
            >
              {link.name}
            </a>
          ))}
        </div>

    {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-3xl text-gray-800 dark:text-gray-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-lg px-6 pb-4 space-y-3 border-t border-gray-300 dark:border-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-lg py-2 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
