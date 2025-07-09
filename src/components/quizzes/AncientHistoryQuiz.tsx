import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XOctagon, PartyPopper, Sparkles } from "lucide-react";

interface Option {
  label: string;
  value: string;
}
interface MCQ {
  id: number;
  prompt: string;
  options: Option[];
  correct: string;
}

const mcqs: MCQ[] = [
  {
    id: 1,
    prompt: "Who is the founder of Sikhism?",
    options: [
      { label: "A) Guru Ramdas", value: "Guru Ramdas" },
      { label: "B) Guru Nanak", value: "Guru Nanak" },
      { label: "C) Guru Gobind Singh", value: "Guru Gobind Singh" },
      { label: "D) Guru Arjan Dev", value: "Guru Arjan Dev" },
    ],
    correct: "Guru Nanak",
  },
  {
  id: 2,
  prompt: "Who invented the Gurmukhi script for the Punjabi language?",
  options: [
    { label: "A) Guru Nanak", value: "Guru Nanak" },
    { label: "B) Guru Angad", value: "Guru Angad" },
    { label: "C) Guru Arjan Dev", value: "Guru Arjan Dev" },
    { label: "D) Guru Ramdas", value: "Guru Ramdas" }
  ],
  correct: "Guru Angad"
  },
  {
  id: 3,
  prompt: "Which Sikh guru built the city of Amritsar?",
  options: [
  { label: "A) Guru Nanak", value: "Guru Nanak" },
  { label: "B) Guru Ramdas", value: "Guru Ramdas" },
  { label: "C) Guru Arjan Dev", value: "Guru Arjan Dev" },
  { label: "D) Guru Gobind Singh", value: "Guru Gobind Singh" }
  ],
  correct: "Guru Ramdas"
  },
  {
  id: 4,
  prompt: "Which Mughal emperor donated the land for Amritsar?",
  options: [
  { label: "A) Akbar", value: "Akbar" },
  { label: "B) Jahangir", value: "Jahangir" },
  { label: "C) Aurangzeb", value: "Aurangzeb" },
  { label: "D) Shah Jahan", value: "Shah Jahan" }
  ],
  correct: "Akbar"
  },
  {
  id: 5,
  prompt: "What is the Holy book of Sikhs?",
  options: [
  { label: "A) Guru Granth Sahib", value: "Guru Granth Sahib" },
  { label: "B) Adi Granth", value: "Adi Granth" },
  { label: "C) Dasam Granth", value: "Dasam Granth" },
  { label: "D) Both A and B", value: "Both A and B" }
  ],
  correct: "Both A and B"
  },
  {
  id: 6,
  prompt: "Which Sikh guru compiled the holy book of Sikhs, Adi Granth?",
  options: [
  { label: "A) Guru Nanak", value: "Guru Nanak" },
  { label: "B) Guru Arjan Dev", value: "Guru Arjan Dev" },
  { label: "C) Guru Gobind Singh", value: "Guru Gobind Singh" },
  { label: "D) Guru Ramdas", value: "Guru Ramdas" }
  ],
  correct: "Guru Arjan Dev"
  },
  {
  id: 7,
  prompt: "Which Sikh guru built the Golden Temple at Amritsar?",
  options: [
  { label: "A) Guru Ramdas", value: "Guru Ramdas" },
  { label: "B) Guru Arjan Dev", value: "Guru Arjan Dev" },
  { label: "C) Guru Gobind Singh", value: "Guru Gobind Singh" },
  { label: "D) Guru Har Gobind", value: "Guru Har Gobind" }
  ],
  correct: "Guru Arjan Dev"
  },
  {
  id: 8,
  prompt: "Which Sikh guru was killed by Jahangir?",
  options: [
  { label: "A) Guru Har Gobind", value: "Guru Har Gobind" },
  { label: "B) Guru Arjan Dev", value: "Guru Arjan Dev" },
  { label: "C) Guru Teg Bahadur", value: "Guru Teg Bahadur" },
  { label: "D) Guru Gobind Singh", value: "Guru Gobind Singh" }
  ],
  correct: "Guru Arjan Dev"
  },
  // ...add the rest of your MCQs here...
];

const shakeVariants = {
  initial: { x: 0 },
  shake: {
    x: [-8, 8, -6, 6, -4, 4, 0],
    transition: { duration: 0.45, times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1] }
  }
};

const bounceVariants = {
  initial: { scale: 1 },
  bounce: {
    scale: [1, 1.15, 0.95, 1.08, 1],
    transition: { duration: 0.5, times: [0, 0.2, 0.4, 0.7, 1] }
  }
};

const Confetti = () => (
  <svg width="60" height="30" viewBox="0 0 60 30" fill="none">
    <circle cx="10" cy="10" r="3" fill="#facc15" />
    <circle cx="25" cy="6" r="2" fill="#38bdf8" />
    <circle cx="40" cy="14" r="2.5" fill="#4ade80" />
    <circle cx="55" cy="10" r="3" fill="#f472b6" />
    <circle cx="35" cy="24" r="2" fill="#f59e42" />
    <circle cx="20" cy="24" r="2.5" fill="#a78bfa" />
  </svg>
);

export const AncientHistoryQuiz: React.FC = () => {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [status, setStatus] = useState<Record<number, boolean>>({});
  const [attempted, setAttempted] = useState<Record<number, boolean>>({});

  const handleSelect = (id: number, value: string) => {
    if (status[id] !== undefined) return; // prevent re-answer
    setSelected((prev) => ({ ...prev, [id]: value }));
    const mcq = mcqs.find((q) => q.id === id);
    const correct = mcq?.correct === value;
    setStatus((prev) => ({ ...prev, [id]: correct }));
    setAttempted((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto py-4">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sikhism MCQ Challenge
      </motion.h2>
      {mcqs.map((q: MCQ) => {
        const sel = selected[q.id];
        const isCorrect = status[q.id];
        const hasAttempted = attempted[q.id];
        return (
          <motion.div
            key={q.id}
            className={`p-5 rounded-xl shadow-lg border-2 transition-all space-y-5 relative
              ${status[q.id] === undefined
                ? "bg-gradient-to-br from-white to-blue-50 border-blue-100"
                : isCorrect
                  ? "bg-gradient-to-br from-green-50 to-white border-green-300"
                  : "bg-gradient-to-br from-red-50 to-white border-red-300"
              }`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: q.id * 0.03 }}
          >
            <div className="flex items-center space-x-3">
              <Sparkles className="text-yellow-400" />
              <p className="font-bold text-lg text-gray-800">{q.id}. {q.prompt}</p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {q.options.map((opt: Option) => {
                const isSelected = sel === opt.value;
                const isAnswer = status[q.id] !== undefined;
                let bgClass =
                  "bg-white border border-gray-200";
                let borderClass = "";
                let textClass = "text-gray-800";
                if (isAnswer) {
                  if (opt.value === q.correct) {
                    bgClass = "bg-green-100 border-green-400";
                    textClass = "text-green-800 font-bold";
                  } else if (isSelected && !isCorrect) {
                    bgClass = "bg-red-100 border-red-400";
                    textClass = "text-red-700 font-semibold";
                  }
                } else if (isSelected) {
                  bgClass = "bg-blue-50 border-blue-400";
                  textClass = "text-blue-700 font-semibold";
                }

                return (
                  <motion.button
                    key={opt.value}
                    onClick={() => handleSelect(q.id, opt.value)}
                    disabled={isAnswer}
                    className={`${bgClass} ${borderClass} ${textClass} px-4 py-3 rounded-lg flex items-center justify-between w-full transition-all duration-200 shadow-sm focus:outline-none ${isAnswer ? "cursor-default" : "hover:scale-[1.03] active:scale-95"} ${isSelected && !isCorrect && isAnswer ? "ring-2 ring-red-300" : ""}`}
                    whileTap={isAnswer ? undefined : { scale: 0.97 }}
                    animate={isAnswer && isSelected && !isCorrect ? "shake" : isAnswer && isSelected && isCorrect ? "bounce" : "initial"}
                    variants={isAnswer && isSelected && !isCorrect ? shakeVariants : bounceVariants}
                  >
                    <span className="flex-1 text-left">{opt.label}</span>
                    <AnimatePresence>
                      {isAnswer && isSelected && (
                        isCorrect ? (
                          <motion.span
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: 30 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <CheckCircle2 className="text-green-600 ml-2" size={28} />
                          </motion.span>
                        ) : (
                          <motion.span
                            initial={{ scale: 0, rotate: 30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0, rotate: -30 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          >
                            <XOctagon className="text-red-500 ml-2" size={28} />
                          </motion.span>
                        )
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {hasAttempted && isCorrect && (
                <motion.div
                  key="correct"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  className="flex items-center space-x-2 text-green-700 mt-2 font-bold text-lg"
                >
                  <Confetti />
                  <PartyPopper className="text-yellow-400" />
                  <span>Brilliant! That's correct!</span>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {hasAttempted && !isCorrect && (
                <motion.div
                  key="wrong"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center space-x-2 text-red-600 mt-2 font-semibold"
                >
                  <XOctagon className="text-red-400" />
                  <span>Oops! That's not right. Try the next one!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
