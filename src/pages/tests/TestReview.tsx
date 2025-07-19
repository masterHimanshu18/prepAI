// File: src/pages/tests/TestReview.tsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Section } from '../../data/tests/testTypes';

interface StoredTest {
  title: string;
  sections: Section[];
  answers: Record<string, number | null>;
}

const TestReview: React.FC = () => {
  const navigate = useNavigate();
  const [test, setTest] = useState<StoredTest | null>(null);
  const [sectionIdx, setSectionIdx] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);

  // Load test data
  useEffect(() => {
    const raw = localStorage.getItem('lastTest');
    if (raw) setTest(JSON.parse(raw));
  }, []);

  if (!test) {
    return <div className="p-8 text-red-600">No test to review.</div>;
  }

  const { title, sections, answers } = test;
  const curSection = sections[sectionIdx];
  const q = curSection.questions[questionIdx];
  const userAns = answers[q.id];

  return (
    <div className="flex h-full m-0 p-0 bg-gray-50">
      {/* ───────── Left Panel ───────── */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-center p-2 bg-white shadow">
          <h2 className="text-xl font-semibold">{title} — Review</h2>
        </div>

        {/* Section Tabs */}
        <div className="flex bg-white border-b">
          {sections.map((sec, i) => (
            <button
              key={sec.name}
              onClick={() => {
                setSectionIdx(i);
                setQuestionIdx(0);
              }}
              className={`flex-1 py-2 text-center font-medium ${
                i === sectionIdx
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {sec.name}
            </button>
          ))}
        </div>

        {/* Question Panel */}
        <div className="p-6 flex-1 overflow-y-auto bg-white">
          <h3 className="text-lg font-bold mb-4">
            Q{questionIdx + 1}: {q.question}
          </h3>
          <div className="space-y-3">
            {q.options.map((opt, idx) => {
              const isCorrect = idx === q.answer;
              const isUser    = idx === userAns;
              // decide color
              let bg = 'bg-white hover:bg-gray-50';
              if (isCorrect) bg = 'bg-green-100 border-green-400';
              else if (isUser) bg = 'bg-red-100 border-red-400';

              return (
                <motion.div
                  key={idx}
                  className={`border p-3 rounded cursor-pointer transition ${bg}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="inline-block w-6">
                    {isCorrect ? '✔️' : isUser ? '❌' : ''}
                  </span>
                  {opt}
                </motion.div>
              );
            })}
          </div>
            {/* Prev / Next */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setQuestionIdx(i => Math.max(i - 1, 0))}
              disabled={questionIdx === 0}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-500 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={() =>
                setQuestionIdx(i => Math.min(i + 1, curSection.questions.length - 1))
              }
              disabled={questionIdx === curSection.questions.length - 1}
              className="px-4 py-2 bg-blue-300 hover:bg-blue-500 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
          {/* Explanation */}
          <motion.div
            className="mt-6 p-4 bg-gray-50 border-l-4 border-blue-400 rounded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h4 className="font-semibold mb-2">Explanation</h4>
            <p className="text-gray-700">{q.explanation}</p>
          </motion.div>

          
        </div>
      </div>

      {/* ───────── Right Sidebar ───────── */}
      <aside className="w-64 bg-white border-l flex flex-col">
        <div className="p-4 text-sm space-y-1">
          <p><span className="inline-block w-3 h-3 mr-2 rounded-full bg-green-500"></span>Correct</p>
          <p><span className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></span>Wrong</p>
          <p><span className="inline-block w-3 h-3 mr-2 rounded-full bg-gray-300"></span>Skipped</p>
        </div>
        
        <button
            onClick={() => navigate('/tests/analysis')}
            className="p-2 rounded bg-red-600 text-white hover:bg-red-700"
        >
           <b>Back to Analysis</b>
        </button>
        <div className="border-t flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-5 gap-2">
            {curSection.questions.map((qq, i) => {
              const ua = answers[qq.id];
              let cls = 'bg-gray-200';
              if (ua === qq.answer) cls = 'bg-green-500 text-white';
              else if (ua !== null) cls = 'bg-red-500 text-white';

              return (
                <button
                  key={qq.id}
                  onClick={() => setQuestionIdx(i)}
                  className={`w-10 h-10 rounded-full text-xs font-semibold ${cls}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          
        </div>
        
      </aside>
    </div>
  );
};

export default TestReview;
