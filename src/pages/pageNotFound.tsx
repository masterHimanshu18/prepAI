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
    scale: [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0],
    opacity: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    x: spiralX,
    y: spiralY,
    rotate: [0, -360, -3600],
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
        className="text-xl md:text-2xl text-blue-200 mt-2 mb-8 text-center z-10"
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
