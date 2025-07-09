// File: src/pages/tests/TestRunner.tsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// Types
interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // index
}

interface AnswerMap {
  [questionId: number]: number | null; // selected option index or null
}

// Sample demo data
const demoQuestions: Question[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  question: `Sample Question ${i + 1}`,
  options: ["Option A", "Option B", "Option C", "Option D"],
  correctAnswer: i % 4,
}));

const TestRunner: React.FC = () => {
  const navigate = useNavigate();
  const [questions] = useState<Question[]>(demoQuestions);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes

  // Start fullscreen on mount
  useEffect(() => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
    return () => {
      if (document.exitFullscreen) document.exitFullscreen();
    };
  }, []);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleOptionSelect = (qid: number, optionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [qid]: optionIndex }));
  };

  const handleSubmit = () => {
    const score = questions.reduce((acc, q) => {
      if (answers[q.id] === q.correctAnswer) acc += 2;
      return acc;
    }, 0);
    localStorage.setItem("testScore", JSON.stringify({ score, total: questions.length * 2 }));
    navigate("/tests/analysis");
  };

  const current = questions[currentIndex];
  const formatTime = (sec: number) => `${Math.floor(sec / 60)}:${('0' + (sec % 60)).slice(-2)}`;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center bg-blue-800 text-white px-6 py-4">
        <h2 className="text-lg font-semibold">SSC CGL Tier 1 Full Test</h2>
        <div className="text-xl font-bold">⏰ {formatTime(timeLeft)}</div>
      </div>

      {/* Question Panel */}
      <div className="flex-1 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium mb-2">Q{currentIndex + 1}: {current.question}</h3>
          <div className="space-y-2">
            {current.options.map((opt, idx) => (
              <motion.div
                key={idx}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleOptionSelect(current.id, idx)}
                className={`border p-3 rounded cursor-pointer transition-all ${
                  answers[current.id] === idx
                    ? 'bg-blue-100 border-blue-500'
                    : 'hover:bg-gray-100'
                }`}
              >
                {opt}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="flex justify-between mt-6">
          <button
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((i) => i - 1)}
            className="px-4 py-2 bg-gray-300 text-black rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Submit
          </button>
          <button
            disabled={currentIndex === questions.length - 1}
            onClick={() => setCurrentIndex((i) => i + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestRunner;
