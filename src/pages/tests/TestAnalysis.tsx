import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pie, Bar } from 'react-chartjs-2';

interface Question {
  id: string;
  question: string;
  options: string[];
  answer: number; // correct option index
  solution?: string;
  explanation?: string;
}

interface Section {
  name: string;
  questions: Question[];
}

interface StoredTest {
  title: string;
  sections: Section[];
  answers: Record<string, number | null>;
}

const TestAnalysis: React.FC = () => {
  const navigate = useNavigate();
  const [test, setTest] = useState<StoredTest | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("lastTest");
    if (raw) {
      setTest(JSON.parse(raw));
    }
  }, []);

  if (!test) return <div className="p-8 text-red-600">No test data found.</div>;

  // Overall stats
  let total = 0, correct = 0, wrong = 0, skipped = 0;
  const sectionStats = test.sections.map((section) => {
    let secCorrect = 0, secWrong = 0, secSkipped = 0;

    section.questions.forEach((q) => {
      const userAns = test.answers[q.id];
      if (userAns == null) {
        secSkipped++;
      } else if (userAns === q.answer) {
        secCorrect++;
      } else {
        secWrong++;
      }
    });

    total += section.questions.length;
    correct += secCorrect;
    wrong += secWrong;
    skipped += secSkipped;

    return {
      name: section.name,
      correct: secCorrect,
      wrong: secWrong,
      skipped: secSkipped,
    };
  });

  const score = correct * 2 - wrong * 0.5;
  const maxScore = total * 2;

  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8">
      {/* Title + Score */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-blue-700">{test.title}</h1>
        <p className="text-lg">Score: <strong>{score}</strong> / {maxScore}</p>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Pie */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2 text-center">Overall Performance</h3>
          <Pie
            data={{
              labels: ['Correct', 'Wrong', 'Skipped'],
              datasets: [{
                data: [correct, wrong, skipped],
                backgroundColor: ['#4ade80', '#f87171', '#cbd5e1'],
              }]
            }}
          />
        </div>

        {/* Bar */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2 text-center">Section-wise Performance</h3>
          <Bar
            data={{
              labels: sectionStats.map(s => s.name),
              datasets: [
                {
                  label: 'Correct',
                  data: sectionStats.map(s => s.correct),
                  backgroundColor: '#4ade80',
                },
                {
                  label: 'Wrong',
                  data: sectionStats.map(s => s.wrong),
                  backgroundColor: '#f87171',
                },
                {
                  label: 'Skipped',
                  data: sectionStats.map(s => s.skipped),
                  backgroundColor: '#cbd5e1',
                }
              ]
            }}
            options={{ responsive: true, plugins: { legend: { position: 'top' } } }}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded p-4">
        <h3 className="font-semibold mb-4 text-center">Summary Table</h3>
        <table className="w-full text-sm text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 px-4">Section</th>
              <th className="py-2 px-4">Total</th>
              <th className="py-2 px-4 text-green-600">Correct</th>
              <th className="py-2 px-4 text-red-600">Wrong</th>
              <th className="py-2 px-4 text-gray-600">Skipped</th>
            </tr>
          </thead>
          <tbody>
            {sectionStats.map((s) => (
              <tr key={s.name} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{s.name}</td>
                <td className="py-2 px-4">{s.correct + s.wrong + s.skipped}</td>
                <td className="py-2 px-4">{s.correct}</td>
                <td className="py-2 px-4">{s.wrong}</td>
                <td className="py-2 px-4">{s.skipped}</td>
              </tr>
            ))}
            <tr className="font-bold bg-gray-100">
              <td className="py-2 px-4">Total</td>
              <td className="py-2 px-4">{total}</td>
              <td className="py-2 px-4">{correct}</td>
              <td className="py-2 px-4">{wrong}</td>
              <td className="py-2 px-4">{skipped}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <button
          onClick={() => navigate('/tests/review')}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Review Each Question
        </button>
      </div>
    </div>
  );
};

export default TestAnalysis;
