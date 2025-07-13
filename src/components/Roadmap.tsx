// src/components/Roadmap.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ExamSectionInfo, TopicWeight } from "../data/sscCglRoadmapInfo";

interface PatternData {
  name: string;
  examInfo: ExamSectionInfo[];
  weightage: TopicWeight[];
}

interface RoadmapProps {
  patterns: PatternData[];
}

export const Roadmap: React.FC<RoadmapProps> = ({ patterns }) => {
  const [activePattern, setActivePattern] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState<TopicWeight | null>(
    patterns[0]?.weightage[0] || null
  );
  const [completed, setCompleted] = useState<Record<string, boolean>>({});

  const { name, examInfo, weightage } = patterns[activePattern];

  // Persist completion state in localStorage
  useEffect(() => {
    const saved = localStorage.getItem("completedChapters");
    if (saved) setCompleted(JSON.parse(saved));
  }, []);
  useEffect(() => {
    localStorage.setItem("completedChapters", JSON.stringify(completed));
  }, [completed]);

  const toggleComplete = (chapter: string) => {
    setCompleted((prev) => ({ ...prev, [chapter]: !prev[chapter] }));
  };

  return (
    <div className="space-y-8  select-none w-3/4 mx-auto ">
      {/* Pattern Tabs */}
      <div className="flex space-x-4">
        {patterns.map((p, idx) => (
          <button
            key={p.name}
            onClick={() => {
              setActivePattern(idx);
              setSelectedTopic(patterns[idx].weightage[0] || null);
            }}
            className={
              `px-4 py-2 rounded-lg font-medium transition ` +
              (idx === activePattern
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300")
            }
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Exam Info Card */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h3 className="text-xl font-semibold mb-4">{name} Exam Pattern</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {examInfo.map(({ section, questions, maxMarks, duration }) => (
            <motion.div
              key={section}
              whileHover={{ scale: 1.03 }}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-blue-50 hover:bg-blue-100"
            >
              <p className="font-medium">{section}</p>
              <p>{questions}</p>
              <p className="text-sm text-red-600">{maxMarks}</p>
              <p className="text-sm text-gray-600">{duration}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Topic Weightage Cards */}
      <div>
        <h3 className="text-xl font-semibold mb-4">
          {name} Topic-Wise Weightage
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weightage.map((topic) => (
            <motion.div
              key={topic.subject}
              onClick={() => setSelectedTopic(topic)}
              whileHover={{ scale: 1.03 }}
              className={
                `bg-white p-4 rounded-lg shadow cursor-pointer transition ` +
                (selectedTopic?.subject === topic.subject
                  ? "border-2 border-blue-500 border-r"
                  : "border border-transparent hover:shadow-lg")
              }
            >
              <p className="font-medium mb-2">{topic.subject}</p>
              <div className="h-2 bg-gradient-to-r from-green-200 to-red-200 rounded-full overflow-hidden" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtopics List */}
      {selectedTopic && (
        <motion.div layout className="space-y-4">
          <h3 className="text-xl font-semibold">{selectedTopic.subject} Subtopics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {selectedTopic.subTopics.map(({ chapter, range }) => {
              const done = completed[chapter];
              return (
                <AnimatePresence key={chapter}>
                  <motion.div
                    layout
                    onClick={() => window.open(`/topic/${encodeURIComponent(chapter)}`, '_blank')}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    whileHover={{ scale: 1.02 }}
                    className={`group relative flex justify-between items-center p-4 rounded-lg border transition-colors cursor-pointer ${
                      done ? "bg-green-50 border-green-300" : "bg-white hover:bg-gray-50"
                    }`}
                  >
                      {/* Tooltip */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      Click to read content & take quizzes
                    </div>
                    
                    <div>
                      <p className={`font-medium ${done ? "line-through text-gray-500" : ""}`}>{chapter}</p>
                      <p className="text-sm text-gray-400">{range} each exam</p>
                    </div>
                    <motion.button
                      initial={false}
                      animate={{ rotate: done ? 45 : 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleComplete(chapter);
                      }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                        done ? "bg-green-400 text-white" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {done ? "✓" : "+"}
                    </motion.button>
                  </motion.div>
                </AnimatePresence>
              );
            })}
          </div>
        </motion.div>
      )}
    </div>
  );
};
