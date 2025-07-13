// File: src/pages/tests/TestRunner.tsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserCircle2, X } from 'lucide-react';
import { allTests } from '../../data/tests/allTests';
import type { TestConfig, Question } from '../../data/tests/testTypes';

interface AnswerMap {
  [questionId: string]: number | null;      // answer chosen or null
}

  /* ————— SummaryTable helper ————— */
  interface SummaryProps {
    sections: TestConfig['sections'];
    answers: AnswerMap;
    reviewed: Set<string | number>;
    visited: Set<string | number>;
  }
  const SummaryTable: React.FC<SummaryProps> = ({ sections, answers, reviewed }) => {
    const rows = sections.map(sec => {
      let answered = 0, revAns = 0, revNoAns = 0, notAns = 0;
      sec.questions.forEach(q => {
        const ans = answers[q.id];
        const rev = reviewed.has(q.id);
        if (ans !== null && rev) revAns++;
        else if (ans !== null)   answered++;
        else if (rev)            revNoAns++;
        else                     notAns++;
      });
      return { section: sec.name, total: sec.questions.length, answered, notAns, revAns, revNoAns };
    });

    const total = rows.reduce((t, r) => ({
      total:   t.total    + r.total,
      answered:t.answered + r.answered,
      notAns:  t.notAns   + r.notAns,
      revAns:  t.revAns   + r.revAns,
      revNoAns:t.revNoAns + r.revNoAns
    }), { total: 0, answered: 0, notAns: 0, revAns: 0, revNoAns: 0 });

    return (
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Section</th>
              <th className="p-2 border">Total</th>
              <th className="p-2 border">Answered</th>
              <th className="p-2 border">Not Ans</th>
              <th className="p-2 border">Ans + Rev</th>
              <th className="p-2 border">UnAns + Rev</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.section}>
                <td className="p-2 border">{r.section}</td>
                <td className="p-2 border text-center">{r.total}</td>
                <td className="p-2 border text-center">{r.answered}</td>
                <td className="p-2 border text-center">{r.notAns}</td>
                <td className="p-2 border text-center">{r.revAns}</td>
                <td className="p-2 border text-center">{r.revNoAns}</td>
              </tr>
            ))}
            <tr className="font-semibold bg-gray-100">
              <td className="p-2 border">Total</td>
              <td className="p-2 border text-center">{total.total}</td>
              <td className="p-2 border text-center">{total.answered}</td>
              <td className="p-2 border text-center">{total.notAns}</td>
              <td className="p-2 border text-center">{total.revAns}</td>
              <td className="p-2 border text-center">{total.revNoAns}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

const TestRunner: React.FC = () => {
  /* ─── Load Test by ID ─── */
  const { search } = useLocation();
  const testId     = new URLSearchParams(search).get('testId') ?? '';
  const test: TestConfig | undefined = allTests[testId];
  const navigate   = useNavigate();
  if (!test) return <div className="p-8 text-red-600">Invalid or missing testId</div>;

  /* ─── State ─── */
  const [sectionIdx, setSectionIdx]   = useState(0);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answers, setAnswers]         = useState<AnswerMap>({});
  const [reviewed, setReviewed]       = useState<Set<string | number>>(new Set());
  const [visited,  setVisited]        = useState<Set<string | number>>(new Set());
  const [timeLeft, setTimeLeft]       = useState(test.totalDuration);
  const [showPrompt, setShowPrompt]   = useState(false);   // “Are you sure?”
  const [showSummary, setShowSummary] = useState(false);   // table modal
  const [timeUp, setTimeUp]           = useState(false);   // timer‑expired flag

  /* ─── Initialize answer map ─── */
  useEffect(() => {
    const map: AnswerMap = {};
    test.sections.flatMap(s => s.questions).forEach(q => (map[q.id] = null));
    setAnswers(map);
  }, [test]);

  /* ─── fullscreen + timer ─── */
  useEffect(() => {
    document.documentElement.requestFullscreen?.();

    const t = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(t);
          setTimeUp(true);       // flag
          setShowSummary(true);  // show summary auto
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(t);
      document.exitFullscreen?.();
    };
  }, []);


  /* ─── Helpers ─── */
  const curSection   = test.sections[sectionIdx];
  const curQuestion: Question = curSection.questions[questionIdx];
  const selected     = answers[curQuestion.id];

  /* track visited */
  useEffect(() => {
    setVisited(v => new Set(v).add(curQuestion.id));
  }, [curQuestion.id]);

  const fmt = (sec: number) => `${Math.floor(sec / 60)}:${('0' + (sec % 60)).slice(-2)}`;

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

  function handleFinalSubmit() {
    // Store result before navigating
    if (!test) return; // ✅ Prevents error if test is undefined

    localStorage.setItem('lastTest', JSON.stringify({
      title: test?.title,
      sections: test?.sections,
      answers, // map of id => selectedIndex
    }));

    navigate("/tests/analysis");
  }

  /* ─── Legend counts for current section ─── */
  let cntAnswered = 0,
      cntRevAns   = 0,
      cntRevNoAns = 0,
      cntVisited  = 0,
      cntNotVis   = 0;

  curSection.questions.forEach(q => {
    const ans = answers[q.id];
    const rev = reviewed.has(q.id);
    const vis = visited.has(q.id);

    if (ans !== null && rev)        cntRevAns++;
    else if (ans !== null)          cntAnswered++;
    else if (rev)                   cntRevNoAns++;
    else if (vis)                   cntVisited++;
    else                            cntNotVis++;
  });

  /* ─── Render ─── */
  return (
    <div className="flex h-full m-0 p-0">
      {/* ───────── Left Panel ───────── */}
      <div className="flex-1 flex flex-col">
        {/* Section Tabs */}
        <div className="flex">
          {test.sections.map((s, idx) => (
            <button
              key={s.name}
              onClick={() => { setSectionIdx(idx); setQuestionIdx(0); }}
              className={`flex-1 py-2 text-center font-medium ${
                idx === sectionIdx ? 'bg-blue-600 text-white'
                                   : 'bg-gray-200 hover:bg-gray-300'}`}
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
          <div className={`text-lg font-semibold ${timeLeft <= 5 ? 'text-red-400' : ''}`}>
            Time Left: {fmt(timeLeft)}
          </div>
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
          <button onClick={markReviewNext} className="px-4 py-2 bg-yellow-400 rounded">
            Mark for Review & Next
          </button>
          <button onClick={clear} className="px-4 py-2 bg-gray-300 rounded">
            Clear Response
          </button>
          <button onClick={next} className="px-4 py-2 bg-blue-600 text-white rounded">
            Save & Next
          </button>
        </div>
      </div>

      {/* ───────── Right Sidebar ───────── */}
      <div className="w-64 bg-white flex flex-col">
        {/* Legend */}
        <div className="p-4 border-2 space-y-2 text-sm">
          <p className="flex items-center"><span className="w-3 h-3 mr-2 rounded-full bg-green-500"></span>Answered ({cntAnswered})</p>
          <p className="flex items-center"><span className="w-3 h-3 mr-2 rounded-full bg-red-500"></span>Not Answered ({cntVisited})</p>
          <p className="flex items-center"><span className="w-3 h-3 mr-2 rounded-full bg-purple-500"></span>Answered + Review ({cntRevAns})</p>
          <p className="flex items-center"><span className="w-3 h-3 mr-2 rounded-full bg-yellow-400"></span>Unanswered + Review ({cntRevNoAns})</p>
          <p className="flex items-center"><span className="w-3 h-3 mr-2 rounded-full bg-gray-300"></span>Not Visited ({cntNotVis})</p>
        </div>
        <div className="bg-gray-800 text-white p-2">
            <h3 className="text-lg font-bold">{curSection.name}</h3>
        </div>
        {/* Scrollable Grid */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-5 gap-2">
            {curSection.questions.map((q, idx) => {
              const ans = answers[q.id];
              const rev = reviewed.has(q.id);
              const vis = visited.has(q.id);
              const isCurrent = q.id === curQuestion.id;

              let cls = 'bg-gray-300';
              if (ans !== null && rev) cls = 'bg-purple-500 text-white';
              else if (ans !== null)   cls = 'bg-green-500 text-white';
              else if (rev)            cls = 'bg-yellow-400';
              else if (vis || isCurrent) cls = 'bg-red-500 text-white';

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
        </div>

        {/* Submit */}
        <div className="p-4">
        <button
          onClick={() => setShowPrompt(true)}   // ⬅️ open prompt first
          className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Submit Exam
        </button>

        </div>
      </div>
      {/* Confirmation Prompt */}
      {showPrompt && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center w-full">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-6 text-center space-y-6 max-w-sm w-full"
          >
            <h2 className="text-xl font-semibold">Submit Test?</h2>
            <p>Are you sure you want to submit the exam?</p>
            <div className="flex justify-around">
              <button
                onClick={() => setShowPrompt(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                No
              </button>
              <button
                onClick={() => { setShowPrompt(false); setShowSummary(true); }}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Yes
              </button>
            </div>
          </motion.div>
        </div>
      )}
      {/* Summary Modal */}
      {showSummary && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center w-full">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-white rounded-lg p-6 max-w-xl w-full"
          >
            {!timeUp && (
              <button
                onClick={() => setShowSummary(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                <X size={18} />
              </button>
            )}

            <h2 className="text-2xl font-bold text-center mb-4">Section Summary</h2>

            <SummaryTable
              sections={test.sections}
              answers={answers}
              reviewed={reviewed}
              visited={visited}
            />

            <div className="flex justify-end gap-4 pt-6">
              {!timeUp && (
                <button
                  onClick={() => setShowSummary(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Return to Test
                </button>
              )}
            <button
              onClick={handleFinalSubmit}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Submit
            </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
    
  );
};

export default TestRunner;
