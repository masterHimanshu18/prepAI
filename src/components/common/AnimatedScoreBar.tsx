import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Lightbulb } from "lucide-react";

export const AnimatedScoreBar: React.FC<{
  score: number;
  maxScore: number;
  cutoffRatio?: number; // e.g., 0.6 for 60%
}> = ({ score, maxScore, cutoffRatio = 0.6 }) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const controls = useAnimation();

  // Values for rendering
  const cutoffScore = Math.round(maxScore * cutoffRatio);

  // Animate number
  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    function animate(ts: number) {
      if (!start) start = ts;
      const elapsed = ts - start;
      const duration = 1400; // ms
      const progress = Math.min(1, elapsed / duration);
      setAnimatedScore(Math.round(score * progress));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    }
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [score]);

  // Animate bar
  useEffect(() => {
    controls.start({ scaleX: score / maxScore });
  }, [score, maxScore, controls]);

  // Colors
  const barProgress = score / maxScore;
  const markerColor = barProgress >= cutoffRatio ? "#00c950" : "#facc15";

  // Mark the cutoff visually on the scale
  const cutoffPercent = Math.round((cutoffScore / maxScore) * 100);

return (
  <div className="relative w-full px-2 h-24">
    {/* Floating Score Bubble that moves with score */}
    <motion.div
      className="absolute -top-[10px] z-[999] w-max"
      style={{
        left: `calc(${Math.min((animatedScore / maxScore) * 100, 100)}%)`,
        transform: "translateX(-50%)",
      }}
      transition={{ type: "spring", stiffness: 108, damping: 9 }}
      animate={{
        left: `calc(${Math.min((animatedScore / maxScore) * 100, 100)}%)`,
        transform: "translateX(-50%)",
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Tooltip Box */}
        <div className="flex items-center bg-white border border-gray-300 shadow-md px-4 py-2 rounded-lg text-sm font-semibold text-blue-800">
          <Lightbulb className="text-yellow-400 mr-2" size={18} />
          Score:{" "}
          <span className="ml-1 text-blue-800 font-black text-base tabular-nums">
            {animatedScore}
          </span>{" "}
          / {maxScore}
        </div>
      </div>
    </motion.div>

    <div className="relative w-full h-20 flex flex-col justify-end">
      {/* Animated bar bg */}
      
      {/* 🌟 Colored bar area */}
      <motion.div
        className="absolute left-0 bottom-5 h-8 shadow-lg bg-gradient-to-r from-red-500 via-yellow-400 to-green-500"
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >

      </motion.div>

      {/* 🌟 Bar End Indicator (Black line) */}
      <motion.div
        className="absolute bottom-5 w-0.5 h-7 bg-black z-10"
        style={{
          left: `calc(${Math.min((animatedScore / maxScore) * 100, 100)}%)`,
          transform: "translateX(-50%)", // center align the black bar
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1.8 }}
      />

      {/* Cutoff marker */}
      <div
        className="pointer-events-none absolute bottom-5 h-[32px] w-0 border-l-2 border-solid border-black"
        style={{
          left: `calc(${cutoffPercent}% - 27px)`,
        }}
      >
        <span className="absolute z-[999] top-7 left-1/2 -translate-x-1/2 text-sm font-semibold text-emerald-700 bg-white/90 rounded px-2 py-0.5 shadow border border-green-200">
          Cutoff {cutoffScore}
        </span>
      </div>

      {/* 🌟 Updated scale: every 10 marks */}
      <div className="relative z-10 flex justify-between items-center w-full text-xs font-medium mt-2 mb-1 select-none">
        {Array.from({ length: Math.floor(maxScore / 10) + 1 }, (_, i) => {
          const pt = i * 10;
          return (
            <span
              key={pt}
              className="text-gray-600"
              style={
                pt === cutoffScore
                  ? { fontWeight: "bold", color: markerColor }
                  : {}
              }
            >
              {pt}
            </span>
          );
        })}
      </div>
    </div>
  </div>
);


};
