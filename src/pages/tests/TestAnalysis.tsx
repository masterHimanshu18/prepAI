import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { barOptions } from "../../assets/chartOptions";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedScoreBar } from "../../components/common/AnimatedScoreBar";
import { Leaderboard } from "../../components/common/leaderboard";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { CheckCircle, XCircle, MinusCircle, Info } from "lucide-react";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Question {
  id: string | number;
  question: string;
  options: string[];
  answer: number;
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

// Section icon color map
const sectionIconMap = [
  { icon: Info, color: "bg-blue-100 text-blue-600" },
  { icon: CheckCircle, color: "bg-yellow-100 text-yellow-600" },
  { icon: XCircle, color: "bg-blue-100 text-blue-600" },
  { icon: MinusCircle, color: "bg-yellow-100 text-yellow-600" },
];

const TestAnalysis: React.FC = () => {
  const navigate = useNavigate();
  const [test, setTest] = useState<StoredTest | null>(null);

  useEffect(() => {
    const raw = localStorage.getItem("lastTest");
    if (raw) setTest(JSON.parse(raw));
  }, []);

  if (!test)
    return (
      <div className="p-8 text-red-600 text-center font-semibold">
        No test data found.
      </div>
    );

  // Calculate stats
  let total = 0,
    correct = 0,
    wrong = 0,
    skipped = 0;

  const sectionStats = test.sections.map((section) => {
    let secCorrect = 0,
      secWrong = 0,
      secSkipped = 0;
    section.questions.forEach((q) => {
      const userAns = test.answers[q.id];
      if (userAns == null) secSkipped++;
      else if (userAns === q.answer) secCorrect++;
      else secWrong++;
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
      marks: secCorrect * 2 - secWrong * 0.5,
      total: section.questions.length,
    };
  });

  const score = correct * 2 - wrong * 0.5;
  const maxScore = total * 2;

  // Horizontal Bar Chart Data
  const barData = {
    labels: sectionStats.map((s) => s.name),
    datasets: [
      {
        label: "Marks",
        data: sectionStats.map((s) => s.marks),
        backgroundColor: "#1E88E5",
        borderRadius: 1,
        borderSkipped: false,
        barThickness: 27,
        hoverBackgroundColor: "#03A9F4",
      },
    ],
  };


  // Table row animation
  const rowVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.12 + i * 0.04, type: "spring", stiffness: 180 },
    }),
  };

  return (
    <>
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mx-auto p-6 mb-6 md:p-10 space-y-8 bg-white/90 rounded-2xl shadow-xl border border-gray-200"
        >
          {/* Title + Score */}
          <div className="text-center space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-black drop-shadow"
            >
              {test.title}
            </motion.h1>
            <div className="p-4 rounded-xl bg-gradient-to-br from-gray-100 via-gray-300 to-white border-l-4 border-blue-400 shadow">
              <AnimatedScoreBar score={score} maxScore={maxScore} cutoffRatio={0.6} />
            </div>

          </div>
        </motion.div>
        {/* Horizontal Bar Chart */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-6 flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="bg-white max-w-2xl rounded-2xl border border-gray-200 shadow-lg p-6 w-full lg:w-1/2"
          >
            <div className="mb-4 text-center text-xl font-bold text-black-700">
              Section-wise Marks
            </div>
            <Bar data={barData} options={barOptions} />
          </motion.div>

          <div className="w-full lg:w-1/3">
            <Leaderboard
              userRank={69}
              userScore={score}
              maxScore={maxScore}
              userName="Md Himanshu Joseph"
            />
          </div>
        </div>

        {/* Summary Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="bg-white rounded-2xl m-8 border border-gray-200 shadow-md p-4 overflow-x-auto"
        >
          <div className="mb-4 text-center text-xl font-bold text-black">
            Summary Table
          </div>
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b bg-gradient-to-r from-blue-400 via-blue-200 to-white">
                <th className="py-2 px-4 text-black-900">Section</th>
                <th className="py-2 px-4 text-center text-green-700">
                  <CheckCircle className="inline mr-1" size={18} />
                  Correct
                </th>
                <th className="py-2 px-4 text-center text-red-700">
                  <XCircle className="inline mr-1" size={18} />
                  Wrong
                </th>
                <th className="py-2 px-4 text-center text-gray-500">
                  <MinusCircle className="inline mr-1" size={18} />
                  Skipped
                </th>
                <th className="py-2 px-4 text-center text-blue-600">Marks</th>
                <th className="py-2 px-4 text-center text-blue-900">Total</th>
              </tr>
            </thead>
            <AnimatePresence>
              <tbody>
                {sectionStats.map((s, i) => {
                  const iconInfo =
                    sectionIconMap[i % sectionIconMap.length] || sectionIconMap[0];
                  const Icon = iconInfo.icon;
                  return (
                    <motion.tr
                      key={s.name}
                      variants={rowVariants}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                      exit="hidden"
                      className="border-b hover:bg-blue-50/60"
                    >
                      <td className="py-2 px-4 font-semibold text-black flex items-center gap-2">
                        <span
                          className={`rounded-full p-1.5 shadow ${iconInfo.color}`}
                        >
                          <Icon size={18} />
                        </span>
                        {s.name}
                      </td>
                      <td className="py-2 px-4 text-center text-green-700 font-semibold">
                        {s.correct}
                      </td>
                      <td className="py-2 px-4 text-center text-red-700 font-semibold">
                        {s.wrong}
                      </td>
                      <td className="py-2 px-4 text-center text-gray-500">
                        {s.skipped}
                      </td>
                      <td className="py-2 px-4 text-center text-blue-600 font-bold">
                        {s.marks}
                      </td>
                      <td className="py-2 px-4 text-center">{s.total}</td>
                    </motion.tr>
                  );
                })}
                <motion.tr
                  key="total"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-bold bg-gray-100"
                >
                  <td className="py-2 px-4 text-black">Total</td>
                  <td className="py-2 px-4 text-center text-green-700">
                    {correct}
                  </td>
                  <td className="py-2 px-4 text-center text-red-700">
                    {wrong}
                  </td>
                  <td className="py-2 px-4 text-center text-gray-500">
                    {skipped}
                  </td>
                  <td className="py-2 px-4 text-center text-blue-600 font-bold">
                    {score}
                  </td>
                  <td className="py-2 px-4 text-center">{total}</td>
                </motion.tr>
              </tbody>
            </AnimatePresence>
          </table>
        </motion.div>

        {/* Review Button */}
        <div className="text-center mt-6">
          <motion.button
            whileHover={{ scale: 1.07, backgroundColor: "#2563eb" }}
            whileTap={{ scale: 0.96 }}
            onClick={() => navigate("/tests/review")}
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold shadow-lg hover:shadow-xl transition"
          >
            Review Each Question
          </motion.button>
        </div>
    </>
  );
};

export default TestAnalysis;
