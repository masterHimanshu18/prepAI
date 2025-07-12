// File: src/components/TestSeries.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import StartTestModal from './common/StartTestModal';
import { useNavigate } from 'react-router-dom';
import type { PatternData, Category, Test } from '../data/sscCGLTestInfo';

interface TestSeriesProps {
  patterns: PatternData[];
}

export const TestSeries: React.FC<TestSeriesProps> = ({ patterns }) => {
  const navigate = useNavigate();
  const [activePattern, setActivePattern] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);

  const { name, categories } = patterns[activePattern];
  const category: Category = categories[activeCategory];

  const openModal = (test: Test) => {
    setSelectedTest(test);
    setShowModal(true);
  };

  const startTest = (testId: string) => {
    const url = `/tests/runner?testId=${encodeURIComponent(testId)}`;
    window.open(
      url,
      '_blank',
      `
        toolbar=0,
        location=0,
        status=0,
        menubar=0,
        scrollbars=0,
        resizable=0,
        top=0,
        left=0,
        width=${window.screen.availWidth},
        height=${window.screen.availHeight}
      `.replace(/\s+/g, '')
    );
  };

  const instructionsFor = (test: Test): string[] => [
    `This is a ${name} ${category.label} of ${test.duration}.`,
    `${test.questions} questions for ${test.marks} marks.`,
    test.isLocked ? 'This test is locked until unlocked.' : 'No negative marking in this demo.',
    'Ensure a distraction-free environment.',
    'Test auto-submits when time ends.',
  ];

  return (
    <div className="space-y-8 select-none w-3/4 mx-auto">
      {/* Pattern Tabs */}
      <div className="flex space-x-4">
        {patterns.map((p, idx) => (
          <button
            key={p.name}
            onClick={() => { setActivePattern(idx); setActiveCategory(0); }}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              idx === activePattern ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >{p.name}</button>
        ))}
      </div>

      {/* Category Tabs */}
      <div className="flex space-x-4">
        {categories.map((c, idx) => (
          <button
            key={c.key}
            onClick={() => setActiveCategory(idx)}
            className={`px-3 py-2 rounded-lg font-medium transition ${
              idx === activeCategory ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >{c.label} {c.count && `(${c.count})`}</button>
        ))}
      </div>

      {/* Test Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.tests.map((test) => (
          <motion.div
            key={test.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow flex flex-col justify-between"
          >
            <div>
              <h4 className="text-lg font-semibold mb-2">{test.title}</h4>
              <p className="text-sm text-gray-500 mb-4">{test.attempts.toLocaleString()} Users</p>
              <div className="flex items-center space-x-4 mb-2">
                <span className="flex items-center space-x-1"><i className="icon-question"/> <span>{test.questions} Questions</span></span>
                <span className="flex items-center space-x-1"><i className="icon-mark"/> <span>{test.marks} Marks</span></span>
                <span className="flex items-center space-x-1"><i className="icon-timer"/> <span>{test.duration}</span></span>
              </div>
            </div>
            <button
              onClick={() => openModal(test)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {test.isLocked ? 'Unlock Now' : 'Start Now'}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Start Test Modal */}
      {showModal && selectedTest && (
        <StartTestModal
          title={`${selectedTest.title} Instructions`}
          instructions={instructionsFor(selectedTest)}
          onConfirm={() => { setShowModal(false); startTest(selectedTest.id); }}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default TestSeries;
