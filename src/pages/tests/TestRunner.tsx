// File: src/pages/tests/TestRunner.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserCircle2 } from 'lucide-react';
import { allTests } from '../../data/tests/allTests';
import type { TestConfig, Question } from '../../data/tests/testTypes';

interface AnswerMap {
  [questionId: number]: number | null;
}

const TestRunner: React.FC = () => {
  /* ────────────────── load test by ID ────────────────── */
  const { search } = useLocation();
  const testId = new URLSearchParams(search).get('testId') ?? '';
  const test: TestConfig | undefined = allTests[testId];

  const navigate = useNavigate();
  if (!test) return <div className="p-8 text-red-600">Invalid or missing testId</div>;

  /* ────────────────── state ────────────────── */
  const [sectionIdx, setSectionIdx] = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answers, setAnswers]   = useState<AnswerMap>({});
  const [reviewed, setReviewed] = useState<Set<number>>(new Set());
  const [timeLeft, setTimeLeft] = useState(test.totalDuration);

  /* ────────────────── init answers map ────────────────── */
  useEffect(() => {
    const map: AnswerMap = {};
    test.sections.flatMap(s => s.questions).forEach(q => (map[q.id] = null));
    setAnswers(map);
  }, [test]);

  /* ────────────────── fullscreen + timer ────────────────── */
  useEffect(() => {
    document.documentElement.requestFullscreen?.();
    const timer = setInterval(() => {
      setTimeLeft(t => (t <= 1 ? (clearInterval(timer), handleSubmit(), 0) : t - 1));
    }, 1000);
    return () => {
      clearInterval(timer);
      document.exitFullscreen?.();
    };
  }, []);

  /* ────────────────── helpers ────────────────── */
  const curSection = test.sections[sectionIdx];
  const curQuestion: Question = curSection.questions[questionIdx];
  const selected = answers[curQuestion.id];

  const fmt = (sec: number) =>
    `${Math.floor(sec / 60)}:${('0' + (sec % 60)).slice(-2)}`;

  const saveOption = (opt: number) =>
    setAnswers(a => ({ ...a, [curQuestion.id]: opt }));

  const next = () =>
    setQuestionIdx(i => Math.min(i + 1, curSection.questions.length - 1));

  const clear = () =>
    setAnswers(a => ({ ...a, [curQuestion.id]: null }));

  const markReviewNext = () => {
    setReviewed(s => new Set(s).add(curQuestion.id));
    next();
  };

  function handleSubmit() {
    navigate('/tests/analysis');
  }

  /* ────────────────── render ────────────────── */
  return (
    <div className="flex h-full m-0 p-0">
      {/* ───────── Left Panel ───────── */}
      <div className="flex-1 flex flex-col">
        {/* Section Tabs */}
        <div className="flex">
          {test.sections.map((s, idx) => (
            <button
              key={s.name}
              onClick={() => {
                setSectionIdx(idx);
                setQuestionIdx(0);
              }}
              className={`flex-1 py-2 text-center font-medium ${
                idx === sectionIdx
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="flex justify-between items-center bg-gray-800 text-white px-6 py-3">
          <div className="flex items-center space-x-2">
            <UserCircle2 className="w-8 h-8" />
            <span>John Doe</span>
          </div>
          <div className="text-lg font-semibold">Time Left: {fmt(timeLeft)}</div>
        </div>

        {/* Question */}
        <div className="p-6 flex-1 overflow-y-auto">
          <h3 className="text-lg font-bold mb-2">
            Q{questionIdx + 1}: {curQuestion.question}
          </h3>
          <div className="space-y-2">
            {curQuestion.options.map((opt, i) => (
              <motion.div
                key={i}
                whileTap={{ scale: 0.98 }}
                onClick={() => saveOption(i)}
                className={`border p-3 rounded cursor-pointer ${
                  selected === i
                    ? 'bg-blue-100 border-blue-500'
                    : 'hover:bg-gray-100'
                }`}
              >
                {opt}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between px-6 pb-6">
          <button
            onClick={markReviewNext}
            className="px-4 py-2 bg-yellow-400 rounded"
          >
            Mark for Review & Next
          </button>
          <button onClick={clear} className="px-4 py-2 bg-gray-300 rounded">
            Clear Response
          </button>
          <button
            onClick={next}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save & Next
          </button>
        </div>
      </div>

      {/* ───────── Right Sidebar ───────── */}
      <div className="border-2 border-black w-64 bg-white p-4 flex flex-col justify-between">
        <h3 className="text-lg font-bold mb-2">{curSection.name}</h3>

        {/* Grid */}
        <div className="grid grid-cols-5 gap-2">
          {curSection.questions.map((q, idx) => {
            const ans   = answers[q.id];
            const mark  = reviewed.has(q.id);
            const cls   = ans != null && mark
              ? 'bg-purple-500 text-white'
              : ans != null
              ? 'bg-green-500 text-white'
              : mark
              ? 'bg-yellow-400'
              : 'bg-gray-300';
            return (
              <button
                key={q.id}
                onClick={() => setQuestionIdx(idx)}
                className={`w-10 h-10 rounded-full text-xs font-semibold ${cls}`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          className="mt-4 w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Submit Exam
        </button>
      </div>
    </div>
  );
};

export default TestRunner;
