import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight, FaLink, FaCopy } from "react-icons/fa";
// ---- IMAGE IMPORTS ----
import EcoBinImg from "../assets/projects/eco-bin.jpg";
import EthicalAIImg from "../assets/projects/ethical-ai.jpg";
import KMeansImg from "../assets/projects/kmeans.jpg";
import CommuterImg from "../assets/projects/commuter.jpg";
import CyberImg from "../assets/projects/cyber.jpg";



// --- 1. DATA DEFINITION ---
// This dataset describes the patents and research publications.
const PROJECTS = [
  // PATENT FIRST
  {
    id: "patent-eco",
    type: "Patent",
    title: "Eco Ride Bins – Smart Waste Management System for Public Transport",
    overview:
      "Eco Ride Bins is a smart waste-management system designed for buses. It uses sensors to detect fill-level and sends real-time alerts to bus management and sanitation workers via an Android app. A working prototype was built in 3 months. Patent registration accepted.",
    domain: ["IoT", "Smart City", "Embedded Systems", "Android", "Sustainable Engineering"],
    links: {
      linkedin:
        "https://www.linkedin.com/posts/vighnesh-poojary-006b65329_ecoridebins-innovation-engineering-activity-7274421385932767232-aGRG",
    },
    image:EcoBinImg,
  },

  // RESEARCH PAPER 1
  {
    id: "paper-ethical-ai",
    type: "Research",
    title: "An Ethical AI Framework for Identifying, Auditing and Mitigating Bias in AI Models",
    overview:
      "A framework to detect, audit and mitigate bias in AI/ML models. Covers bias entry points, dataset auditing techniques, mitigation strategies, and explainability tools for responsible AI.",
    domain: ["Responsible AI", "Ethical AI", "XAI", "ML Governance"],
    conference: {
      name: "ICTCT-2025",
      venue: "Acharya Institutes, Bengaluru",
      dates: "18–19 September 2025",
      link: "https://www.acharya.ac.in/events/aigs/ictct-25",
    },
    authors: ["Aryan Antony Johnson", "Sydel Wivel Afonso", "Vighnesh Poojary"],
    links: {
      linkedin:
        "https://www.linkedin.com/posts/aryantonyjohnson_ethicalai-responsibleai-aibias-ugcPost-7377391683233161216-VzI6",
    },
    citation:
      "A. A. Johnson, S. W. Afonso, and V. P.oojary, “An Ethical AI Framework for Identifying, Auditing and Mitigating Bias in AI Models,” ICTCT-2025, Bengaluru. (IEEE Proceedings - Upcoming)",
    image: EthicalAIImg,
  },

  // RESEARCH PAPER 2
  {
    id: "paper-kmeans",
    type: "Research",
    title: "Solving Real-World Image Processing Problems Using the K-Means Clustering Algorithm",
    overview:
      "This research uses K-Means for segmentation, noise reduction, and meaningful feature extraction. Shows how lightweight ML techniques can solve practical image processing challenges.",
    domain: ["Machine Learning", "Image Processing", "Computer Vision"],
    conference: {
      name: "ICDTE-2025",
      venue: "RV Institute of Technology, Bengaluru",
      dates: "16–17 October 2025",
      link: "https://icdte2025.rvitm.edu.in/",
    },
    authors: ["Vighnesh Poojary", "Aryan Tony Johnson", "Sydel Wivel Afonso", "Dr. Terence K. Johnson"],
    links: {
      linkedin:
        "https://www.linkedin.com/posts/vighnesh-poojary-006b65329_im-extremely-happy-to-share-that-my-research-activity-7395863194537394176-Lp8u",
    },
    citation:
      "V. Poojary et al., “Solving Real-World Image Processing Problems Using K-Means,” ICDTE-2025, Bengaluru. (Scopus Indexed)",
    image: KMeansImg,
  },

  // RESEARCH PAPER 3
  {
    id: "paper-commuter",
    type: "Research",
    title: "A Practical Solution for Public-Transport Commuter Challenges Using Digital Technology",
    overview:
      "This work addresses commuter issues and proposes a digital framework to improve mobility, reliability and travel experience. Accepted for Springer Book Series.",
    domain: ["Smart Mobility", "IoT", "Human-Centered Design"],
    conference: {
      name: "ICDTE-2025",
      venue: "RV Institute of Technology, Bengaluru",
      dates: "16–17 October 2025",
      link: "https://icdte2025.rvitm.edu.in/",
    },
    authors: ["Vighnesh Poojary", "Sachin Ananthakrishna", "Dr. Terence K. Johnson"],
    links: {
      linkedin:
        "https://www.linkedin.com/posts/vighnesh-poojary-006b65329_im-thrilled-to-share-that-my-research-paper-activity-7398217915251990528-fXNX",
    },
    citation:
      "V. Poojary et al., “A Practical Digital Technology Solution for Public Commuter Challenges,” ICDTE-2025. (Springer - Accepted)",
    image: CommuterImg,
  },

  // RESEARCH PAPER 4
  {
    id: "paper-cyber",
    type: "Research",
    title: "Cybersecurity Framework for Intelligent and Sustainable Systems",
    overview:
      "Cybersecurity model for robotics, EV mobility, IoT and intelligent systems. Focuses on threat analysis and scalable protection strategies.",
    domain: ["Cybersecurity", "Intelligent Systems", "IoT Security"],
    conference: {
      name: "INSPIRE 2025 (IEEE)",
      venue: "MITE, Moodabidri, India",
      dates: "20–21 November 2025",
      link: "https://mite-inspire2025.netlify.app/",
    },
    authors: ["Vighnesh Poojary", "Dr. Terence K. Johnson"],
    links: {
      linkedin:
        "https://www.linkedin.com/posts/vighnesh-poojary-006b65329_i-am-glad-to-share-that-my-cyber-security-activity-7398755094885924866-Q8q3",
    },
    citation:
      "V. Poojary & T. K. Johnson, “Cybersecurity Framework for Intelligent Systems,” INSPIRE 2025. (IEEE Xplore - Upcoming)",
    image: CyberImg,
  },
];

// --- 2. HELPER COMPONENTS ---

/**
 * Custom floating message box to replace the forbidden window.alert().
 * @param {object} props - Component props.
 * @param {string} props.message - The message to display.
 * @param {function} props.onClose - Function to call to hide the message.
 */
const FloatingMessage = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(onClose, 2500); // Message disappears after 2.5s
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-green-600 text-white rounded-full shadow-lg z-[9999999] text-sm font-medium"
    >
      {message}
    </motion.div>
  );
};

/**
 * Renders a single project card in the 3D Coverflow view.
 * @param {object} props - Component props.
 * @param {object} props.project - The project data object.
 * @param {number} props.d - Normalized difference from the active index (0 is active).
 * @param {number} props.zIndex - Z-index for layering.
 * @param {object} props.style - Framer Motion style object for transform.
 * @param {number} props.opacity - Opacity value.
 * @param {function} props.onClick - Click handler to set this card as active.
 */
const ProjectCard = ({ project, d, zIndex, style, opacity, onClick }) => {
  const isSelected = d === 0;

  return (
    <motion.div
      key={project.id}
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity, transform: style.transform }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 120, damping: 16 }}
      style={{
        position: "absolute",
        zIndex,
        width: "520px",
        maxWidth: "86%",
        height: "88%",
        cursor: isSelected ? "default" : "pointer",
        // Enforce perspective for the 3D effect on the card container
        perspective: '1000px', 
      }}
      onClick={onClick}
    >
      <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg transition-shadow duration-300 hover:shadow-2xl">
        
        {/* IMAGE / HEADER AREA */}
        <div className={`w-full h-48 flex items-center justify-center ${project.type === 'Patent' ? 'bg-indigo-600' : 'bg-gray-700'}`}>
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80" 
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/520x192/374151/ffffff?text=Image+Missing" }}
            />
          ) : (
            <div className="text-gray-200 text-center p-4">
              <p className="text-lg font-semibold">{project.type}</p>
              <p className="text-sm mt-1">(Add visual asset here)</p>
            </div>
          )}
        </div>

        {/* TEXT CONTENT */}
        <div className="p-6 h-[calc(100%-12rem)] overflow-auto">
          <span className={`inline-block mb-2 text-xs font-semibold px-2 py-0.5 rounded-full ${project.type === 'Patent' ? 'bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200' : 'bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200'}`}>
            {project.type}
          </span>
          <h4 className="text-xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight">
            {project.title}
          </h4>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            {project.overview}
          </p>

          {project.links?.linkedin && (
            <a
              href={project.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-4 block text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition"
            >
              <FaLink className="inline-block mr-2 text-xs" /> View LinkedIn Post
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};


// --- 3. MAIN COMPONENT ---

export default function PatentResearchModal({ onClose }) {
  const [index, setIndex] = useState(0);
  const [copiedMessage, setCopiedMessage] = useState(null);
  const len = PROJECTS.length;

  // Handles index navigation (circular logic)
  const go = useCallback(
    (dir) => {
      setIndex((prev) => (prev + dir + len) % len);
    },
    [len]
  );

  // Keyboard navigation and closing (Escape)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") onClose && onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  // Calculates the smallest difference between the current index and project index (for circular list)
  const normalizedDiff = useCallback((i) => {
    let diff = i - index;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    return diff;
  }, [index, len]);
  
  // Custom copy function to handle older browsers/iframes and trigger custom message
  const handleCopyCitation = () => {
    const citation = PROJECTS[index].citation;
    if (!citation) return;

    // Use execCommand('copy') as it's often more reliable in sandboxed iframes
    const el = document.createElement('textarea');
    el.value = citation;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    let success = false;
    try {
      success = document.execCommand('copy');
    } catch (err) {
      console.error('Copy failed:', err);
    }
    document.body.removeChild(el);

    if (success) {
      setCopiedMessage("✅ Citation copied to clipboard!");
    } else {
      setCopiedMessage("❌ Failed to copy citation.");
    }
  };

  const activeProject = PROJECTS[index];

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 z-[999999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-7xl h-[95vh] sm:h-[88vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 16 }}
        >
          {/* Close Button */}
          <button
            onClick={() => onClose()}
            aria-label="Close Modal"
            className="absolute top-4 right-4 z-40 text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition shadow-md bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
          >
            <FaTimes className="text-lg" />
          </button>

          {/* HEADER */}
          <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-30">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-50">
              Patent & Research Publications
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Navigate with keyboard arrows (← / →) or click the side cards.
            </p>
          </div>

          {/* CONTENT AREA (ROLLER + DETAILS) */}
          <div className="flex-1 flex flex-col md:flex-row relative overflow-hidden">

            {/* LEFT — 3D ROLLER / COVERFLOW */}
            <div className="flex-1 flex items-center justify-center relative bg-gradient-to-br from-gray-50/40 to-gray-200/20 dark:from-gray-800/40 dark:to-gray-900/20 p-4 min-h-[50vh] md:min-h-full">

              {/* Coverflow Container */}
              <div 
                className="relative w-full max-w-4xl h-[72%] flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }} // Key for 3D effect
              >
                <AnimatePresence initial={false} mode="popLayout">
                  {PROJECTS.map((p, i) => {
                    const d = normalizedDiff(i);
                    // Render only the closest 5 cards (-2, -1, 0, 1, 2)
                    if (Math.abs(d) > 2) return null;

                    let style = {};
                    let opacity = 1;
                    let zIndex = 20 - Math.abs(d);

                    // Define 3D transformation styles based on difference
                    if (d === 0) {
                      // Active card (Center)
                      style = { transform: "translateX(0) rotateY(0deg) scale(1)" };
                      opacity = 1;
                    } else if (Math.abs(d) === 1) {
                      // Nearest sides
                      const tx = d === -1 ? -220 : 220;
                      const ry = d === -1 ? 18 : -18;
                      style = {
                        transform: `translateX(${tx}px) translateZ(-80px) rotateY(${ry}deg) scale(0.85)`,
                      };
                      opacity = 0.55;
                    } else { // d = -2 or 2
                      // Far sides
                      const tx = d < 0 ? -420 : 420;
                      const ry = d < 0 ? 26 : -26;
                      style = {
                        transform: `translateX(${tx}px) translateZ(-140px) rotateY(${ry}deg) scale(0.75)`,
                      };
                      opacity = 0.35;
                    }

                    return (
                      <ProjectCard
                        key={p.id}
                        project={p}
                        d={d}
                        zIndex={zIndex}
                        style={style}
                        opacity={opacity}
                        onClick={() => d !== 0 && setIndex(i)}
                      />
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 z-30">
                <button
                  onClick={() => go(-1)}
                  aria-label="Previous Project"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:scale-105 transition active:scale-95"
                >
                  <FaChevronLeft className="text-xl text-gray-700 dark:text-gray-200" />
                </button>
              </div>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30">
                <button
                  onClick={() => go(1)}
                  aria-label="Next Project"
                  className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:scale-105 transition active:scale-95"
                >
                  <FaChevronRight className="text-xl text-gray-700 dark:text-gray-200" />
                </button>
              </div>
            </div>

            {/* RIGHT — DETAILS PANEL */}
            <div className="w-full md:w-[420px] min-w-full md:min-w-[420px] border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 p-8 bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto relative z-20">

              <h4 className="text-2xl font-extrabold text-gray-900 dark:text-gray-50 mb-4">{activeProject.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Viewing <strong>{index + 1}</strong> of <strong>{len}</strong>
              </p>

              {/* Domain Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {activeProject.domain.map((d) => (
                  <span
                    key={d}
                    className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 font-medium"
                  >
                    {d}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <div className="mt-8 text-sm text-gray-700 dark:text-gray-300 leading-relaxed border-b border-gray-100 dark:border-gray-800 pb-6">
                <p className="font-bold text-gray-800 dark:text-gray-200 text-base">Project Summary</p>
                <p className="mt-2">{activeProject.overview}</p>
              </div>

              {/* Authors */}
              {activeProject.authors && (
                <div className="mt-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                  <p className="font-bold text-gray-800 dark:text-gray-200 text-base">Authors</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {activeProject.authors.join(", ")}
                  </p>
                </div>
              )}

              {/* Conference/Venue */}
              {activeProject.conference && (
                <div className="mt-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                  <p className="font-bold text-gray-800 dark:text-gray-200 text-base">Conference/Publication</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium">
                    {activeProject.conference.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activeProject.conference.venue}
                    <br />
                    {activeProject.conference.dates}
                  </p>
                  <a
                    href={activeProject.conference.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    <FaLink className="inline-block mr-1 text-xs" /> View Conference Link
                  </a>
                </div>
              )}

              {/* Citation */}
              {activeProject.citation && (
                <div className="mt-6">
                  <p className="font-bold text-gray-800 dark:text-gray-200 text-base">Citation</p>
                  <pre className="whitespace-pre-wrap text-xs mt-2 p-3 bg-gray-50 dark:bg-gray-850 rounded-lg text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                    {activeProject.citation}
                  </pre>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                {activeProject.links?.linkedin && (
                  <a
                    href={activeProject.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition text-sm font-semibold flex items-center"
                  >
                    <FaLink className="mr-2" /> View LinkedIn Post
                  </a>
                )}

                {activeProject.citation && (
                  <button
                    onClick={handleCopyCitation}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm font-semibold flex items-center"
                  >
                    <FaCopy className="mr-2" /> Copy Citation
                  </button>
                )}
              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {copiedMessage && (
          <FloatingMessage message={copiedMessage} onClose={() => setCopiedMessage(null)} />
        )}
      </AnimatePresence>
    </>
  );
}