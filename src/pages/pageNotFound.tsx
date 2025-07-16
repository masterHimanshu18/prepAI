import React from "react";
import { motion } from "framer-motion";
import astronautImg from "../images/ast.png";

// Generate random stars for the background
const NUM_STARS = 1008;
const stars = Array.from({ length: NUM_STARS }).map((_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: 1 + Math.random() * 2,
  delay: Math.random() * 2,
}));

// Generate spiral coordinates for the astronaut's path
const SPIRAL_POINTS = 90; // More points = smoother spiral
const spiral = Array.from({ length: SPIRAL_POINTS }).map((_, i) => {
  // Fibonacci spiral: r = a*e^(b*theta)
  // We'll use an Archimedean spiral for simplicity: r = a + b*theta
  const a = 0;
  const b = 8;
  const theta = i * (Math.PI / 14); // spread out the spiral
  const r = a + b * theta;
  return {
    x: Math.cos(theta) * r,
    y: Math.sin(theta) * r,
  };
});

// Extract x and y arrays for Framer Motion keyframes
const spiralX = spiral.map((p) => p.x);
const spiralY = spiral.map((p) => p.y);

const astronautVariants = {
  animate: {
    scale: [2, 1.99, 1.98, 1.97, 1.96, 1.95, 1.94, 1.93, 1.92, 1.91, 1.90, 1.89, 1.88, 1.87, 1.86, 1.85, 1.84, 1.83, 1.82, 1.81, 1.80, 1.79, 1.78, 1.77, 1.76, 1.75, 1.74, 1.73, 1.72, 1.71, 1.70, 1.69, 1.68, 1.67, 1.66, 1.65, 1.64, 1.63, 1.62, 1.61, 1.60, 1.59, 1.58, 1.57, 1.56, 1.55, 1.54, 1.53, 1.52, 1.51, 1.50, 1.49, 1.48, 1.47, 1.46, 1.45, 1.44, 1.43, 1.42, 1.41, 1.40, 1.39, 1.38, 1.37, 1.36, 1.35, 1.34, 1.33, 1.32, 1.31, 1.30, 1.29, 1.28, 1.27, 1.26, 1.25, 1.24, 1.23, 1.22, 1.21, 1.20, 1.19, 1.18, 1.17, 1.16, 1.15, 1.14, 1.13, 1.12, 1.11, 1.10, 1.09, 1.08, 1.07, 1.06, 1.05, 1.04, 1.03, 1.02, 1.01, 1, 0.99, 0.98, 0.97, 0.96, 0.95, 0.94, 0.93, 0.92, 0.91, 0.90, 0.89, 0.88, 0.87, 0.86, 0.85, 0.84, 0.83, 0.82, 0.81, 0.80, 0.79, 0.78, 0.77, 0.76, 0.75, 0.74, 0.73, 0.72, 0.71, 0.70, 0.69, 0.68, 0.67, 0.66, 0.65, 0.64, 0.63, 0.62, 0.61, 0.60, 0.59, 0.58, 0.57, 0.56, 0.55, 0.54, 0.53, 0.52, 0.51, 0.50, 0.49, 0.48, 0.47, 0.46, 0.45, 0.44, 0.43, 0.42, 0.41, 0.40, 0.39, 0.38, 0.37, 0.36, 0.35, 0.34, 0.33, 0.32, 0.31, 0.30, 0.29, 0.28, 0.27, 0.26, 0.25, 0.24, 0.23, 0.22, 0.21, 0.20, 0.19, 0.18, 0.17, 0.16, 0.15, 0.14, 0.13, 0.12, 0.11, 0.10, 0.09, 0.08, 0.07, 0.06, 0.05, 0.04, 0.03, 0.02, 0.01, 0.00],
    opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    x: spiralX,
    y: spiralY,
    rotate: [0, -360, 0 ],
    transition: {
      duration: 18,
      repeat: Infinity,
      repeatType: "loop" as "loop",
      ease: "easeInOut"
    }
  }
};

const NotFound: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative overflow-hidden"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Twinkling stars */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {stars.map(star => (
          <motion.div
            key={star.id}
            style={{
              position: "absolute",
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              borderRadius: "50%",
              background: "white",
              opacity: 0.8
            }}
            animate={{
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 1.7 + Math.random(),
              repeat: Infinity,
              repeatType: "loop",
              delay: star.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated Astronaut */}
      <motion.div
        variants={astronautVariants}
        animate="animate"
        className="mb-8 z-10"
        style={{
          width: 320,
          height: 220,
          position: "relative"
        }}
      >
        <img
          src={astronautImg}
          alt="Lost Astronaut"
          style={{
            width: 320,
            height: 220,
            objectFit: "contain"
          }}
        />
      </motion.div>

      {/* 404 & Message */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-6xl md:text-7xl font-black text-white drop-shadow-lg z-10"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="text-xl md:text-2xl text-white mt-2 mb-8 text-center z-10"
      >
        Oops! Our candidate lost the way in space.<br/>
        This page is floating somewhere in the galaxy...
      </motion.p>
      {/* Home Button */}
      <motion.a
        href="/"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-500 transition z-10"
      >
        Go Home
      </motion.a>
    </div>
  );
};

export default NotFound;
