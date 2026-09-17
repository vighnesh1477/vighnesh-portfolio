
import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Briefcase } from "lucide-react";

// ====================================================================
// 1. DATA DEFINITION
// ====================================================================

const EXPERIENCE = [
  {
    id: "mescom",
    title: "MESCOM — Practical Field Experience",
    subtitle: "Mangalore Electricity Supply Company Limited",
    year: "6 Months — Kenjoor Sub-Station, Udupi",
    overview:
      "Gained hands-on exposure to electrical distribution systems, safety operations, transformer units, wiring, cabling, and maintenance workflows. Observed how electrical power is distributed across Udupi and surrounding regions, strengthening practical engineering knowledge and real-world problem-solving skills.",
    highlights: [
      "Worked at Kenjoor Sub-Station, Udupi District",
      "Gained practical exposure to transformers, feeders, and safety systems",
      "Observed electrical distribution and maintenance workflows",
      "Developed practical engineering knowledge and workplace discipline",
    ],
    image:
      "https://placehold.co/520x192/0F172A/ffffff?text=MESCOM+Experience",
  },

  {
    id: "open-to-internship",
    title: "Open to Internship Opportunities",
    subtitle: "AI/ML • Computer Vision • Software Development • Research",
    year: "Currently Open",
    overview:
      "I am actively looking for internship opportunities where I can contribute to real-world projects while continuing to grow as an engineer and researcher. I am particularly interested in Artificial Intelligence, Machine Learning, Computer Vision, Image Processing, Software Development, Cybersecurity, and Research-driven roles.",
    highlights: [
      "Interested in AI/ML and Computer Vision opportunities",
      "Open to Software Development and Full-Stack roles",
      "Interested in Image Processing and Deep Learning projects",
      "Open to Research and R&D-oriented internships",
      "Eager to contribute, learn, and work on real-world problems",
    ],
    image:
      "https://placehold.co/520x192/4F46E5/ffffff?text=Open+to+Internship",
  },
];

// ====================================================================
// 2. UTILITY FUNCTION
// ====================================================================

function normalizedDiff(index, currentIndex, len) {
  let diff = index - currentIndex;

  if (diff > len / 2) diff -= len;
  if (diff < -len / 2) diff += len;

  return diff;
}

// ====================================================================
// 3. HELPER COMPONENT — 3D COVERFLOW CARD
// ====================================================================

const ExperienceCard = ({ item, diff, setIndex, index }) => {
  const isCenter = diff === 0;

  let transformStyle = {};
  let opacity = 1;
  let zIndex = 10 - Math.abs(diff);

  if (isCenter) {
    transformStyle = {
      transform: "translateX(0) rotateY(0deg) scale(1)",
    };
  } else if (Math.abs(diff) === 1) {
    const tx = diff === -1 ? -220 : 220;
    const ry = diff === -1 ? 18 : -18;

    transformStyle = {
      transform: `translateX(${tx}px) translateZ(-80px) rotateY(${ry}deg) scale(0.85)`,
    };

    opacity = 0.7;
  } else {
    const tx = diff < 0 ? -420 : 420;
    const ry = diff < 0 ? 26 : -26;

    transformStyle = {
      transform: `translateX(${tx}px) translateZ(-140px) rotateY(${ry}deg) scale(0.73)`,
    };

    opacity = 0.4;
  }

  // Only render cards close to the center
  if (Math.abs(diff) > 2) return null;

  return (
    <div
      key={item.id}
      style={{
        position: "absolute",
        zIndex,
        width: "520px",
        maxWidth: "86%",
        height: "88%",
        ...transformStyle,
        opacity,
        perspective: "1000px",
        cursor: isCenter ? "default" : "pointer",
        transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onClick={() => !isCenter && setIndex(index)}
      className="rounded-2xl overflow-hidden shadow-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950"
    >
      {/* IMAGE */}
      <div className="w-full h-48 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/520x192/F59E0B/ffffff?text=Image+Missing";
          }}
        />
      </div>

      {/* CARD CONTENT */}
      <div className="p-6 h-[calc(100%-12rem)] overflow-auto">
        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-50">
          {item.title}
        </h4>

        <p className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 font-medium">
          {item.year}
        </p>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          {item.subtitle}
        </p>
      </div>
    </div>
  );
};

// ====================================================================
// 4. MAIN COMPONENT — WorkExperienceModal
// ====================================================================

export default function WorkExperienceModal({ onClose }) {
  const [index, setIndex] = useState(0);
  const len = EXPERIENCE.length;

  // Navigation
  const navigate = useCallback(
    (dir) => {
      setIndex((prev) => (prev + dir + len) % len);
    },
    [len]
  );

  // Keyboard controls
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "Escape") onClose && onClose();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [navigate, onClose]);

  const active = EXPERIENCE[index];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 z-[999999]">

      <div className="relative w-full max-w-7xl h-[95vh] sm:h-[88vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-4 right-4 p-3 bg-white/60 dark:bg-gray-900/60 hover:bg-red-500 hover:text-white rounded-full shadow-lg transition z-40"
        >
          <X className="w-6 h-6" />
        </button>

        {/* HEADER */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-900/70 z-30">

          <h3 className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 flex items-center gap-3">
            <Briefcase className="w-7 h-7" />
            Experience & Opportunities
          </h3>

          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Explore my practical experience and current internship interests.
          </p>

        </div>

        {/* CONTENT AREA */}
        <div className="flex-1 flex flex-col md:flex-row relative overflow-hidden">

          {/* LEFT — ROLLER VIEW */}
          <div className="flex-1 flex items-center justify-center relative p-4 bg-gradient-to-br from-indigo-50/40 to-indigo-200/20 dark:from-gray-800/40 dark:to-gray-900/20 min-h-[50vh] md:min-h-full">

            <div
              className="relative w-full max-w-4xl h-[68%] flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              {EXPERIENCE.map((item, i) => (
                <ExperienceCard
                  key={item.id}
                  item={item}
                  diff={normalizedDiff(i, index, len)}
                  setIndex={setIndex}
                  index={i}
                />
              ))}
            </div>

            {/* PREVIOUS */}
            <button
              onClick={() => navigate(-1)}
              aria-label="Previous Experience"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-indigo-500 hover:text-white shadow-xl transition z-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* NEXT */}
            <button
              onClick={() => navigate(1)}
              aria-label="Next Experience"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-indigo-500 hover:text-white shadow-xl transition z-30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* RIGHT — DETAILS PANEL */}
          <div className="w-full md:w-[420px] min-w-full md:min-w-[420px] border-t md:border-t-0 md:border-l p-8 overflow-y-auto bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 shadow-inner z-20">

            {/* TITLE */}
            <h4 className="text-2xl font-extrabold text-gray-900 dark:text-gray-50">
              {active.title}
            </h4>

            {/* SUBTITLE */}
            <p className="text-base text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
              {active.subtitle}
            </p>

            {/* COUNTER */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Viewing <strong>{index + 1}</strong> of <strong>{len}</strong>
            </p>

            {/* OVERVIEW */}
            <h5 className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-6 border-b pb-2">
              Overview
            </h5>

            <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {active.overview}
            </p>

            {/* HIGHLIGHTS */}
            <h5 className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-6 border-b pb-2">
              Key Highlights
            </h5>

            <ul className="mt-3 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {active.highlights.map((h, i) => (
                <li
                  key={i}
                  className="pl-1 leading-relaxed"
                >
                  {h}
                </li>
              ))}
            </ul>

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="w-full mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              Done Exploring
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}