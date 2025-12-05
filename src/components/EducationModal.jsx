import React, { useState, useEffect, useCallback } from "react";
// Using lucide-react for supported icons
import { X, ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import PrimaryImg from "../assets/education/primary.jpg";
import HighschoolImg from "../assets/education/highschool.jpg";
import PucImg from "../assets/education/puc.jpg";
import EngineeringImg from "../assets/education/engineering.jpg";


// ====================================================================
// 1. DATA DEFINITION
// ====================================================================

const EDUCATION = [
  {
    id: "primary",
    title: "Primary Education",
    subtitle: "Sarakari Hiriya Prathamika Shale, Kenjoor",
    year: "1st - 7th Std",
    overview: "Completed 1st to 7th Standard in Kannada medium. Built strong fundamentals in Science and Mathematics. Served in a student leadership role and participated in cultural programs and sports. Developed early interest in electronics and practical exploration.",
    highlights: [
      "Kannada medium; strong foundation in science & maths",
      "Student leadership responsibilities",
      "Active in cultural and sports activities",
      "Early practical interest in electronics & motors",
    ],
    // Using a placeholder image since local imports are not supported
    placeholderImage: PrimaryImg,
  },
  {
    id: "highschool",
    title: "High School (SSLC)",
    subtitle: "Karnataka Public School, Kokkarne",
    year: "8th - 10th Std",
    overview: "Transitioned to English-medium education (8th–10th). Consistently strong in Science and Mathematics, two-time winner of the school Science Exhibition, and secured 81.27% in SSLC board exams. Gained early exposure to STEM through DIY projects.",
    highlights: [
      "English medium; strong STEM performance",
      "Science Exhibition Winner (×2)",
      "SSLC: 81.27%",
      "Early exposure to STEM & DIY models",
    ],
    placeholderImage: HighschoolImg,
  },
  {
    id: "puc",
    title: "Pre-University (PUC)",
    subtitle: "SDPT PU College, Mandarthi — PCMS",
    year: "II PUC",
    overview: "Selected Statistics stream to strengthen analytical and mathematical skills. Built foundational skills for Machine Learning and Data Science; secured Distinction in II PUC. Gained practical exposure to electrical systems during post-PU MESCOM experience.",
    highlights: [
      "PCMS; Statistics specialization supporting ML interest",
      "Strong maths foundation for ML & Data Science",
      "II PUC Distinction",
      "Practical MESCOM exposure bridging theory & practice",
    ],
    placeholderImage: PucImg,
  },
  {
    id: "engineering",
    title: "Engineering (B.E. — ISE)",
    subtitle: "Mangalore Institute of Technology & Engineering (MITE)",
    year: "Ongoing",
    overview: "Pursuing Information Science & Engineering with focus areas in Machine Learning, Image Processing, Cybersecurity and AI research. Published multiple international research papers and actively work on AI/IoT/embedded projects and prototypes.",
    highlights: [
      "Focus: ML, AI, Cybersecurity, Image Processing",
      "Multiple international research publications",
      "Active in AI-based projects, ML models, IoT prototypes",
      "Ongoing skill development: Python, Android, Firebase, Image Processing",
    ],
    placeholderImage: EngineeringImg,
  },
];

// ====================================================================
// 2. UTILITY FUNCTION
// ====================================================================

// Calculates the normalized difference for coverflow positioning
function normalizedDiff(index, currentIndex, len) {
  let diff = index - currentIndex;
  // Handle wrap-around for circular navigation
  if (diff > len / 2) diff -= len;
  if (diff < -len / 2) diff += len;
  return diff;
}


// ====================================================================
// 3. HELPER COMPONENTS
// ====================================================================

// Education Card Component for the 3D Roller
const EducationCard = ({ stage, diff, setIndex, index, len }) => {
  // Determine card style based on position relative to the center (diff = 0)
  const isCenter = diff === 0;
  let transformStyle = {};
  let opacity = 1;
  let zIndex = 10 - Math.abs(diff);

  if (isCenter) {
    transformStyle = { transform: "translateX(0) rotateY(0deg) scale(1)" };
    opacity = 1;
  } else if (Math.abs(diff) === 1) {
    const tx = diff === -1 ? -220 : 220;
    const ry = diff === -1 ? 18 : -18;
    transformStyle = {
      transform: `translateX(${tx}px) translateZ(-80px) rotateY(${ry}deg) scale(0.85)`,
    };
    opacity = 0.7;
  } else {
    // Hidden or far-side cards
    const tx = diff < 0 ? -420 : 420;
    const ry = diff < 0 ? 26 : -26;
    transformStyle = {
      transform: `translateX(${tx}px) translateZ(-140px) rotateY(${ry}deg) scale(0.75)`,
    };
    opacity = 0.4;
  }

  // Only render cards close to the center for performance
  if (Math.abs(diff) > 2) return null;

  return (
    <div
      key={stage.id}
      style={{
        position: "absolute",
        zIndex,
        width: "520px",
        maxWidth: "86%",
        height: "88%",
        cursor: isCenter ? "default" : "pointer",
        perspective: "1000px",
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', // Smooth CSS transition
        ...transformStyle,
        opacity,
      }}
      className="rounded-2xl overflow-hidden shadow-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950"
      onClick={() => !isCenter && setIndex(index)}
    >
      <div className="w-full h-48 bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
        <img
          src={stage.placeholderImage}
          alt={stage.title}
          className="w-full h-full object-cover"
          // Fallback if placeholder doesn't load
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/520x192/1E3A8A/ffffff?text=Image+Missing";
          }}
        />
      </div>

      <div className="p-6 h-[calc(100%-12rem)] overflow-auto">
        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-50">
          {stage.title}
        </h4>
        <p className="mt-2 text-sm text-indigo-600 dark:text-indigo-400 font-medium">
          {stage.year}
        </p>
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          {stage.subtitle}
        </p>
      </div>
    </div>
  );
};

// ====================================================================
// 4. MAIN APPLICATION (EducationModal)
// ====================================================================

const App = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const len = EDUCATION.length;

  // Handles navigation (1 for next, -1 for previous)
  const navigate = useCallback(
    (direction) => setCurrentIndex((prev) => (prev + direction + len) % len),
    [len]
  );

  // Keyboard navigation effect
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "Escape") onClose && onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, onClose]);

  const activeStage = EDUCATION[currentIndex];

  // Using simple CSS for the modal overlay and transition
  const modalClass = "fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 z-[999999]";
  const contentClass = "relative w-full max-w-7xl h-[95vh] sm:h-[88vh] bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300";

  return (
    <div className={modalClass}>
      <div className={contentClass}>
        
        {/* Close Button */}
        <button
          onClick={() => onClose && onClose()}
          aria-label="Close Modal"
          className="absolute top-4 right-4 z-40 text-gray-700 dark:text-gray-200 p-3 rounded-full hover:bg-red-500 hover:text-white transition shadow-lg bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm"
        >
          <X className="text-xl" />
        </button>

        {/* Header */}
        <div className="px-6 sm:px-10 pt-8 pb-6 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 z-30">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-indigo-700 dark:text-indigo-400 flex items-center gap-3">
            <GraduationCap className="w-7 h-7" />
            Education Timeline
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Use keyboard arrows (← and →) or click navigation buttons to explore.
          </p>
        </div>

        <div className="flex-1 flex flex-col md:flex-row relative overflow-hidden">
          
          {/* LEFT - 3D Roller/Coverflow View */}
          <div className="flex-1 flex items-center justify-center relative bg-gradient-to-br from-indigo-50/40 to-indigo-200/20 dark:from-gray-800/40 dark:to-gray-900/20 p-4 min-h-[50vh] md:min-h-full overflow-hidden">
            <div
              className="relative w-full max-w-4xl h-[62%] flex items-center justify-center transition-all duration-300"
              style={{ transformStyle: "preserve-3d" }}
            >
              {EDUCATION.map((stg, i) => (
                <EducationCard
                  key={stg.id}
                  stage={stg}
                  diff={normalizedDiff(i, currentIndex, len)}
                  setIndex={setCurrentIndex}
                  index={i}
                  len={len}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={() => navigate(-1)}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:scale-105 transition hover:bg-indigo-500 hover:text-white"
                aria-label="Previous Stage"
              >
                <ChevronLeft className="text-xl text-gray-700 dark:text-gray-200" />
              </button>
            </div>
            <div className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={() => navigate(1)}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-xl hover:scale-105 transition hover:bg-indigo-500 hover:text-white"
                aria-label="Next Stage"
              >
                <ChevronRight className="text-xl text-gray-700 dark:text-gray-200" />
              </button>
            </div>
          </div>

          {/* RIGHT - Details Panel */}
          <div className="w-full md:w-[420px] min-w-full md:min-w-[420px] border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-800 p-8 bg-white dark:bg-gray-900 shadow-inner overflow-y-auto relative z-20">
            <h4 className="text-2xl font-extrabold text-gray-900 dark:text-gray-50 mb-1">
              {activeStage.title}
            </h4>
            <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
              {activeStage.subtitle}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Viewing Stage <strong>{currentIndex + 1}</strong> of <strong>{len}</strong>
            </p>

            <h5 className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-6 border-b pb-2">Overview</h5>
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {activeStage.overview}
            </p>

            <h5 className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-6 border-b pb-2">Key Achievements</h5>
            <ul className="mt-3 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {activeStage.highlights.map((h, i) => (
                <li key={i} className="pl-1 leading-relaxed">{h}</li>
              ))}
            </ul>

            <div className="mt-8">
              <button
                onClick={() => onClose && onClose()}
                className="w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-md"
              >
                Done Exploring
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;