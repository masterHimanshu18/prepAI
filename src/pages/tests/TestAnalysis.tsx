// File: src/pages/tests/TestAnalysis.tsx

import React from 'react';

const TestAnalysis: React.FC = () => {
  const result = JSON.parse(localStorage.getItem("testAnalysis") || '{}');
  const { score = 0, total = 200, attempted = 0, correct = 0, timeUsed = 0 } = result;
  const timeStr = `${Math.floor(timeUsed / 60)}m ${timeUsed % 60}s`;

  return (
    <div className="min-h-screen bg-white py-12 px-6 flex flex-col items-center text-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold text-green-600">Test Completed!</h1>
        <div className="bg-gray-50 rounded-lg p-6 shadow space-y-4">
          <p className="text-xl">✅ Score: <span className="font-semibold text-blue-700">{score} / {total}</span></p>
          <p className="text-lg">📘 Questions Attempted: <strong>{attempted}</strong></p>
          <p className="text-lg">🎯 Correct Answers: <strong>{correct}</strong></p>
          <p className="text-lg">⏱️ Time Taken: <strong>{timeStr}</strong></p>
        </div>
        <button
          onClick={() => window.location.href = "/roadmaps/ssc-cgl"}
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Roadmap
        </button>
      </div>
    </div>
  );
};

export default TestAnalysis;
