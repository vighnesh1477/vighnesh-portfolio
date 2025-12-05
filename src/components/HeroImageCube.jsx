// REAL 3D ROTATING CUBE
import React from "react";
import { motion } from "framer-motion";

import img1 from "../assets/profile1.jpg";
import img2 from "../assets/profile2.jpg";
import img3 from "../assets/profile3.jpg";
import img4 from "../assets/profile4.jpg";

const HeroImageCube = () => {
  return (
    <motion.div
      className="relative z-0 w-80 h-80 perspective"
      whileHover={{ rotateY: 10, rotateX: -5 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <div className="cube">
        <div className="face front">
          <img src={img1} alt="" />
        </div>
        <div className="face right">
          <img src={img2} alt="" />
        </div>
        <div className="face back">
          <img src={img3} alt="" />
        </div>
        <div className="face left">
          <img src={img4} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImageCube;
