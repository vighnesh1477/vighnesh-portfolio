import React, { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaLink,
  FaCopy,
} from "react-icons/fa";

// ---- IMAGE IMPORTS ----
import EcoBinImg from "../assets/projects/eco-bin.jpg";
import EthicalAIImg from "../assets/projects/ethical-ai.jpg";
import KMeansImg from "../assets/projects/kmeans.jpg";
import CommuterImg from "../assets/projects/commuter.jpg";
import CyberImg from "../assets/projects/cyber.jpg";

// ============================================================
// PROJECT / PATENT / RESEARCH DATA
// ============================================================

const PROJECTS = [
  // ============================================================
  // PATENT
  // ============================================================
  {
    id: "patent-ecoride-bin",
    type: "Patent",

    title:
      "EcoRide Bin: A Smart Waste Management for Cleaner Journey",

    overview:
      "A smart waste-management system designed for electric buses, featuring dual-compartment waste collection, sensor-driven segregation, and smart monitoring to support timely waste disposal and cleaner public transportation.",

    domain: [
      "IoT",
      "Embedded Systems",
      "Smart Mobility",
      "Waste Management",
      "Sustainable Engineering",
    ],

    patent: {
      status: "Published Patent Application",
      office: "Indian Patent Office",
      issue: "Journal Issue 34/2026",
      publicationDate: "21 August 2026",
      applicationNumber: "202541013074 A",
    },

    links: {
      linkedin:
        "https://www.linkedin.com/posts/vighnesh-poojary-006b65329_ecoridebins-innovation-engineering-activity-7274421385932767232-aGRG",
    },

    image: EcoBinImg,
  },

  // ============================================================
  // RESEARCH PAPER 1
  // ============================================================
  {
    id: "paper-url-obscuring",
    type: "Research",

    title:
      "A Novel and Innovative URL Access Path Obscuring Algorithm for Enhancing Student Data Security in ERP Systems",

    overview:
      "Proposed a URL access path obfuscation algorithm that replaces predictable student USNs with randomly generated codes, helping protect student images and improve data privacy and security in ERP systems.",

    domain: [
      "Cybersecurity",
      "Data Privacy",
      "URL Security",
      "Algorithm Design",
    ],

    conference: {
      name: "IEEE INSPIRE 2025",
      venue: "Mangalore, India",
      dates: "2025",
      link: "https://mite-inspire2025.netlify.app/",
    },

    authors: ["Vighnesh Poojary"],

    publication: {
      status: "Published",
      publisher: "IEEE",
      doi: "10.1109/INSPIRE67328.2025.11300636",
    },

    links: {
      linkedin:
        "https://www.linkedin.com/in/vighnesh-poojary-006b65329/",
    },

    citation:
      "V. Poojary, “A Novel and Innovative URL Access Path Obscuring Algorithm for Enhancing Student Data Security in ERP Systems,” IEEE INSPIRE 2025, Mangalore, India. DOI: 10.1109/INSPIRE67328.2025.11300636.",

    image: CyberImg,
  },

  // ============================================================
  // RESEARCH PAPER 2
  // ============================================================
  {
    id: "paper-dynamic-subtitle",
    type: "Research",

    title:
      "Dynamic Subtitle Color Adaptation Using K-Means Clustering",

    overview:
      "Developed a dynamic subtitle rendering approach that uses K-Means clustering to analyze lower-frame background colors and select suitable text and outline colors, improving subtitle readability across changing visual backgrounds.",

    domain: [
      "Machine Learning",
      "K-Means Clustering",
      "Image Processing",
      "Computer Vision",
    ],

    publication: {
      status: "Published",
      journal: "Indiana Journal of Multidisciplinary Research",
      volume: "6(4)",
      pages: "208–215",
      year: "2026",
      doi: "10.5281/zenodo.21602324",
    },

    authors: ["Vighnesh Poojary"],

    citation:
      "V. Poojary, “Dynamic Subtitle Color Adaptation Using K-Means Clustering,” Indiana Journal of Multidisciplinary Research, 6(4), 208–215, 2026. DOI: 10.5281/zenodo.21602324.",

    image: KMeansImg,
  },

  // ============================================================
  // RESEARCH PAPER 3
  // ============================================================
  {
    id: "paper-destination-tracking",
    type: "Research",

    title:
      "Personalized Destination Tracking and Alerting Using QR Ticketing and GPS for Public Transport",

    overview:
      "Developed a QR-based public-transport destination tracking system using GPS to provide real-time passenger alerts near their destinations and notify conductors when passengers miss their intended stops.",

    domain: [
      "Smart Mobility",
      "GPS",
      "QR Technology",
      "Public Transportation",
      "IoT",
    ],

    publication: {
      status: "Published",
      journal: "Indiana Journal of Multidisciplinary Research",
      volume: "6(4)",
      pages: "488–493",
      year: "2026",
      doi: "10.5281/zenodo.21623415",
    },

    authors: ["Vighnesh Poojary"],

    citation:
      "V. Poojary, “Personalized Destination Tracking and Alerting Using QR Ticketing and GPS for Public Transport,” Indiana Journal of Multidisciplinary Research, 6(4), 488–493, 2026. DOI: 10.5281/zenodo.21623415.",

    image: CommuterImg,
  },

  // ============================================================
  // RESEARCH PAPER 4
  // ============================================================
  {
    id: "paper-ethical-ai",
    type: "Research",

    title:
      "An Ethical AI Framework for Identifying, Auditing and Mitigating Bias in AI Models",

    overview:
      "Proposed an open-source framework for identifying and mitigating bias in AI models using fairness audits, proxy bias detection with Cramér’s V, privacy risk evaluation, and synthetic data regeneration.",

    domain: [
      "Responsible AI",
      "Ethical AI",
      "Machine Learning",
      "AI Governance",
      "Fairness",
    ],

    conference: {
      name: "IEEE ICTCT 2025",
      venue: "Acharya Institute of Technology, Bangalore, India",
      dates: "2025",
      link: "https://www.acharya.ac.in/events/aigs/ictct-25",
    },

    authors: [
      "Aryan Antony Johnson",
      "Sydel Wivel Afonso",
      "Vighnesh Poojary",
    ],

    publication: {
      status: "Published",
      publisher: "IEEE",
      doi: "10.1109/ICTCT69201.2025.00031",
    },

    links: {
      linkedin:
        "https://www.linkedin.com/posts/aryantonyjohnson_ethicalai-responsibleai-aibias-ugcPost-7377391683233161216-VzI6",
    },

    citation:
      "A. A. Johnson, S. W. Afonso, and V. Poojary, “An Ethical AI Framework for Identifying, Auditing and Mitigating Bias in AI Models,” IEEE ICTCT 2025, Bangalore, India. DOI: 10.1109/ICTCT69201.2025.00031.",

    image: EthicalAIImg,
  },
];

// ============================================================
// HELPER COMPONENTS
// ============================================================

/**
 * Custom floating message box to replace window.alert().
 */
const FloatingMessage = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(onClose, 2500);
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
 */
const ProjectCard = ({
  project,
  d,
  zIndex,
  style,
  opacity,
  onClick,
}) => {
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
        perspective: "1000px",
      }}
      onClick={onClick}
    >
      <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-lg transition-shadow duration-300 hover:shadow-2xl">

        {/* IMAGE / HEADER AREA */}
        <div
          className={`w-full h-48 flex items-center justify-center ${
            project.type === "Patent"
              ? "bg-indigo-600"
              : "bg-gray-700"
          }`}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/520x192/374151/ffffff?text=Image+Missing";
              }}
            />
          ) : (
            <div className="text-gray-200 text-center p-4">
              <p className="text-lg font-semibold">
                {project.type}
              </p>
              <p className="text-sm mt-1">
                (Add visual asset here)
              </p>
            </div>
          )}
        </div>

        {/* TEXT CONTENT */}
        <div className="p-6 h-[calc(100%-12rem)] overflow-auto">

          <span
            className={`inline-block mb-2 text-xs font-semibold px-2 py-0.5 rounded-full ${
              project.type === "Patent"
                ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                : "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200"
            }`}
          >
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
              <FaLink className="inline-block mr-2 text-xs" />
              View LinkedIn Post
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function PatentResearchModal({ onClose }) {
  const [index, setIndex] = useState(0);
  const [copiedMessage, setCopiedMessage] = useState(null);

  const len = PROJECTS.length;

  // ==========================================================
  // INDEX NAVIGATION
  // ==========================================================

  const go = useCallback(
    (dir) => {
      setIndex((prev) => (prev + dir + len) % len);
    },
    [len]
  );

  // ==========================================================
  // KEYBOARD NAVIGATION
  // ==========================================================

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") onClose && onClose();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [go, onClose]);

  // ==========================================================
  // NORMALIZED DIFFERENCE
  // ==========================================================

  const normalizedDiff = useCallback(
    (i) => {
      let diff = i - index;

      if (diff > len / 2) diff -= len;
      if (diff < -len / 2) diff += len;

      return diff;
    },
    [index, len]
  );

  // ==========================================================
  // COPY CITATION
  // ==========================================================

  const handleCopyCitation = () => {
    const citation = PROJECTS[index].citation;

    if (!citation) return;

    const el = document.createElement("textarea");

    el.value = citation;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";

    document.body.appendChild(el);

    el.select();

    let success = false;

    try {
      success = document.execCommand("copy");
    } catch (err) {
      console.error("Copy failed:", err);
    }

    document.body.removeChild(el);

    if (success) {
      setCopiedMessage("✅ Citation copied to clipboard!");
    } else {
      setCopiedMessage("❌ Failed to copy citation.");
    }
  };

  const activeProject = PROJECTS[index];

  // ==========================================================
  // RENDER
  // ==========================================================

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
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 16,
          }}
        >

          {/* ==================================================
              CLOSE BUTTON
          ================================================== */}

          <button
            onClick={() => onClose()}
            aria-label="Close Modal"
            className="absolute top-4 right-4 z-40 text-gray-700 dark:text-gray-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition shadow-md bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
          >
            <FaTimes className="text-lg" />
          </button>

          {/* ==================================================
              HEADER
          ================================================== */}

          <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-30">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-gray-50">
              Patent & Research Publications
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Navigate with keyboard arrows (← / →) or click the side cards.
            </p>
          </div>

          {/* ==================================================
              CONTENT AREA
          ================================================== */}

          <div className="flex-1 flex flex-col md:flex-row relative overflow-hidden">

            {/* ==================================================
                LEFT — 3D ROLLER / COVERFLOW
            ================================================== */}

            <div className="flex-1 flex items-center justify-center relative bg-gradient-to-br from-gray-50/40 to-gray-200/20 dark:from-gray-800/40 dark:to-gray-900/20 p-4 min-h-[50vh] md:min-h-full">

              {/* Coverflow Container */}

              <div
                className="relative w-full max-w-4xl h-[72%] flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
              >
                <AnimatePresence initial={false} mode="popLayout">

                  {PROJECTS.map((p, i) => {
                    const d = normalizedDiff(i);

                    // Render only closest 5 cards
                    if (Math.abs(d) > 2) return null;

                    let style = {};
                    let opacity = 1;
                    let zIndex = 20 - Math.abs(d);

                    // Active card
                    if (d === 0) {
                      style = {
                        transform:
                          "translateX(0) rotateY(0deg) scale(1)",
                      };

                      opacity = 1;
                    }

                    // Nearest sides
                    else if (Math.abs(d) === 1) {
                      const tx = d === -1 ? -220 : 220;
                      const ry = d === -1 ? 18 : -18;

                      style = {
                        transform: `translateX(${tx}px) translateZ(-80px) rotateY(${ry}deg) scale(0.85)`,
                      };

                      opacity = 0.55;
                    }

                    // Far sides
                    else {
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
                        onClick={() =>
                          d !== 0 && setIndex(i)
                        }
                      />
                    );
                  })}

                </AnimatePresence>
              </div>

              {/* ==================================================
                  NAVIGATION ARROWS
              ================================================== */}

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

            {/* ==================================================
                RIGHT — DETAILS PANEL
            ================================================== */}

            <div className="w-full md:w-[420px] min-w-full md:min-w-[420px] border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 p-8 bg-white dark:bg-gray-900 shadow-2xl overflow-y-auto relative z-20">

              {/* TITLE */}

              <h4 className="text-2xl font-extrabold text-gray-900 dark:text-gray-50 mb-4">
                {activeProject.title}
              </h4>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                Viewing <strong>{index + 1}</strong> of{" "}
                <strong>{len}</strong>
              </p>

              {/* ==================================================
                  DOMAIN TAGS
              ================================================== */}

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

              {/* ==================================================
                  OVERVIEW
              ================================================== */}

              <div className="mt-8 text-sm text-gray-700 dark:text-gray-300 leading-relaxed border-b border-gray-100 dark:border-gray-800 pb-6">
                <p className="font-bold text-gray-800 dark:text-gray-200 text-base">
                  Project Summary
                </p>

                <p className="mt-2">
                  {activeProject.overview}
                </p>
              </div>

              {/* ==================================================
                  AUTHORS
              ================================================== */}

              {activeProject.authors && (
                <div className="mt-6 border-b border-gray-100 dark:border-gray-800 pb-6">
                  <p className="font-bold text-gray-800 dark:text-gray-200 text-base">
                    Authors
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {activeProject.authors.join(", ")}
                  </p>
                </div>
              )}

              {/* ==================================================
                  PATENT INFORMATION
              ================================================== */}

              {activeProject.patent && (
                <div className="mt-6 border-b border-gray-100 dark:border-gray-800 pb-6">

                  <p className="font-bold text-gray-800 dark:text-gray-200 text-base">
                    Patent Information
                  </p>

                  <div className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-400">

                    <p>
                      <strong>Status:</strong>{" "}
                      {activeProject.patent.status}
                    </p>

                    <p>
                      <strong>Office:</strong>{" "}
                      {activeProject.patent.office}
                    </p>

                    <p>
                      <strong>Journal:</strong>{" "}
                      {activeProject.patent.issue}
                    </p>

                    <p>
                      <strong>Publication Date:</strong>{" "}
                      {activeProject.patent.publicationDate}
                    </p>

                    <p>
                      <strong>Application No.:</strong>{" "}
                      {activeProject.patent.applicationNumber}
                    </p>

                  </div>
                </div>
              )}

              {/* ==================================================
                  PUBLICATION INFORMATION
              ================================================== */}

              {activeProject.publication && (
                <div className="mt-6 border-b border-gray-100 dark:border-gray-800 pb-6">

                  <p className="font-bold text-gray-800 dark:text-gray-200 text-base">
                    Publication Information
                  </p>

                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 space-y-1">

                    <p>
                      <strong>Status:</strong>{" "}
                      {activeProject.publication.status}
                    </p>

                    {activeProject.publication.publisher && (
                      <p>
                        <strong>Publisher:</strong>{" "}
                        {activeProject.publication.publisher}
                      </p>
                    )}

                    {activeProject.publication.journal && (
                      <p>
                        <strong>Journal:</strong>{" "}
                        {activeProject.publication.journal}
                      </p>
                    )}

                    {activeProject.publication.volume && (
                      <p>
                        <strong>Volume:</strong>{" "}
                        {activeProject.publication.volume}
                      </p>
                    )}

                    {activeProject.publication.pages && (
                      <p>
                        <strong>Pages:</strong>{" "}
                        {activeProject.publication.pages}
                      </p>
                    )}

                    {activeProject.publication.year && (
                      <p>
                        <strong>Year:</strong>{" "}
                        {activeProject.publication.year}
                      </p>
                    )}

                    {activeProject.publication.doi && (
                      <p className="break-all">
                        <strong>DOI:</strong>{" "}
                        {activeProject.publication.doi}
                      </p>
                    )}

                  </div>
                </div>
              )}

              {/* ==================================================
                  CONFERENCE / VENUE
              ================================================== */}

              {activeProject.conference && (
                <div className="mt-6 border-b border-gray-100 dark:border-gray-800 pb-6">

                  <p className="font-bold text-gray-800 dark:text-gray-200 text-base">
                    Conference/Publication
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-medium">
                    {activeProject.conference.name}
                  </p>

                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {activeProject.conference.venue}
                    <br />
                    {activeProject.conference.dates}
                  </p>

                  {activeProject.conference.link && (
                    <a
                      href={activeProject.conference.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      <FaLink className="inline-block mr-1 text-xs" />
                      View Conference Link
                    </a>
                  )}

                </div>
              )}

              {/* ==================================================
                  CITATION
              ================================================== */}

              {activeProject.citation && (
                <div className="mt-6">

                  <p className="font-bold text-gray-800 dark:text-gray-200 text-base">
                    Citation
                  </p>

                  <pre className="whitespace-pre-wrap break-words text-xs mt-2 p-3 bg-gray-50 dark:bg-gray-850 rounded-lg text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                    {activeProject.citation}
                  </pre>

                </div>
              )}

              {/* ==================================================
                  ACTION BUTTONS
              ================================================== */}

              <div className="mt-8 flex flex-wrap gap-3">

                {activeProject.links?.linkedin && (
                  <a
                    href={activeProject.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition text-sm font-semibold flex items-center"
                  >
                    <FaLink className="mr-2" />
                    View LinkedIn Post
                  </a>
                )}

                {activeProject.citation && (
                  <button
                    onClick={handleCopyCitation}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg shadow-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition text-sm font-semibold flex items-center"
                  >
                    <FaCopy className="mr-2" />
                    Copy Citation
                  </button>
                )}

              </div>

            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ========================================================
          FLOATING COPY MESSAGE
      ======================================================== */}

      <AnimatePresence>
        {copiedMessage && (
          <FloatingMessage
            message={copiedMessage}
            onClose={() => setCopiedMessage(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}