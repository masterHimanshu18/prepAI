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

const mcqs: MCQ[] = 
[
  {
    id: 1,
    prompt: "Which site is considered the 'Harappan Port Town'?",
    options: [
      { label: "A) Mohenjodaro", value: "Mohenjodaro" },
      { label: "B) Lothal", value: "Lothal" },
      { label: "C) Kalibangan", value: "Kalibangan" },
      { label: "D) Banawali", value: "Banawali" },
    ],
    correct: "Lothal",
  },
  {
    id: 2,
    prompt: "Who composed the Rigveda?",
    options: [
      { label: "A) Early Aryans", value: "Early Aryans" },
      { label: "B) Mauryas", value: "Mauryas" },
      { label: "C) Kushanas", value: "Kushanas" },
      { label: "D) Satavahanas", value: "Satavahanas" },
    ],
    correct: "Early Aryans",
  },
  {
    id: 3,
    prompt: "Who was the founder of the Mauryan Empire?",
    options: [
      { label: "A) Bindusara", value: "Bindusara" },
      { label: "B) Ashoka", value: "Ashoka" },
      { label: "C) Chandragupta Maurya", value: "Chandragupta Maurya" },
      { label: "D) Brihadratha", value: "Brihadratha" },
    ],
    correct: "Chandragupta Maurya",
  },
  {
    id: 4,
    prompt: "Which Greek ambassador visited the court of Chandragupta Maurya?",
    options: [
      { label: "A) Megasthenes", value: "Megasthenes" },
      { label: "B) Pliny", value: "Pliny" },
      { label: "C) Ptolemy", value: "Ptolemy" },
      { label: "D) Seleucus", value: "Seleucus" },
    ],
    correct: "Megasthenes",
  },
  {
    id: 5,
    prompt: "Which Mauryan ruler embraced Buddhism after the Kalinga War?",
    options: [
      { label: "A) Chandragupta Maurya", value: "Chandragupta Maurya" },
      { label: "B) Bindusara", value: "Bindusara" },
      { label: "C) Ashoka", value: "Ashoka" },
      { label: "D) Brihadratha", value: "Brihadratha" },
    ],
    correct: "Ashoka",
  },
  {
    id: 6,
    prompt: "Who was the author of Arthashastra?",
    options: [
      { label: "A) Bimbisara", value: "Bimbisara" },
      { label: "B) Kautilya", value: "Kautilya" },
      { label: "C) Vishnugupta", value: "Vishnugupta" },
      { label: "D) Both B and C", value: "Both B and C" },
    ],
    correct: "Both B and C",
  },
  {
    id: 7,
    prompt: "Buddha delivered his first sermon at which place?",
    options: [
      { label: "A) Lumbini", value: "Lumbini" },
      { label: "B) Sarnath", value: "Sarnath" },
      { label: "C) Kusinagar", value: "Kusinagar" },
      { label: "D) Bodh Gaya", value: "Bodh Gaya" },
    ],
    correct: "Sarnath",
  },
  {
    id: 8,
    prompt: "Who was the 23rd Tirthankara of Jainism?",
    options: [
      { label: "A) Mahavira", value: "Mahavira" },
      { label: "B) Rishabhanatha", value: "Rishabhanatha" },
      { label: "C) Parshvanatha", value: "Parshvanatha" },
      { label: "D) Neminatha", value: "Neminatha" },
    ],
    correct: "Parshvanatha",
  },
  {
    id: 9,
    prompt: "The 'Great Bath' is found at which Indus Valley site?",
    options: [
      { label: "A) Harappa", value: "Harappa" },
      { label: "B) Dholavira", value: "Dholavira" },
      { label: "C) Lothal", value: "Lothal" },
      { label: "D) Mohenjodaro", value: "Mohenjodaro" },
    ],
    correct: "Mohenjodaro",
  },
  {
    id: 10,
    prompt: "Which Gupta ruler adopted the title 'Vikramaditya'?",
    options: [
      { label: "A) Samudragupta", value: "Samudragupta" },
      { label: "B) Chandragupta II", value: "Chandragupta II" },
      { label: "C) Skandagupta", value: "Skandagupta" },
      { label: "D) Chandragupta I", value: "Chandragupta I" },
    ],
    correct: "Chandragupta II",
  },
  {
    id: 11,
    prompt: "Who is known as the 'Napoleon of India'?",
    options: [
      { label: "A) Skandagupta", value: "Skandagupta" },
      { label: "B) Ashoka", value: "Ashoka" },
      { label: "C) Samudragupta", value: "Samudragupta" },
      { label: "D) Harsha", value: "Harsha" },
    ],
    correct: "Samudragupta",
  },
  {
    id: 12,
    prompt: "Which dynasty issued the well-known Allahabad Pillar Inscription?",
    options: [
      { label: "A) Mauryan", value: "Mauryan" },
      { label: "B) Kushan", value: "Kushan" },
      { label: "C) Gupta", value: "Gupta" },
      { label: "D) Satavahana", value: "Satavahana" },
    ],
    correct: "Gupta",
  },
  {
    id: 13,
    prompt: "Who was the author of 'Meghaduta'?",
    options: [
      { label: "A) Vishakhadatta", value: "Vishakhadatta" },
      { label: "B) Kalidasa", value: "Kalidasa" },
      { label: "C) Bana", value: "Bana" },
      { label: "D) Bhairavi", value: "Bhairavi" },
    ],
    correct: "Kalidasa",
  },
  {
    id: 14,
    prompt: "Which Vedic text contains the Gayatri Mantra?",
    options: [
      { label: "A) Samaveda", value: "Samaveda" },
      { label: "B) Atharvaveda", value: "Atharvaveda" },
      { label: "C) Yajurveda", value: "Yajurveda" },
      { label: "D) Rigveda", value: "Rigveda" },
    ],
    correct: "Rigveda",
  },
  {
    id: 15,
    prompt: "Chola ruler Rajaraja I built which famous temple?",
    options: [
      { label: "A) Brihadeshwara Temple", value: "Brihadeshwara Temple" },
      { label: "B) Kailasanatha Temple", value: "Kailasanatha Temple" },
      { label: "C) Meenakshi Temple", value: "Meenakshi Temple" },
      { label: "D) Sun Temple", value: "Sun Temple" },
    ],
    correct: "Brihadeshwara Temple",
  },
  {
    id: 16,
    prompt: "Who was the main female deity worshipped in Indus Valley civilization?",
    options: [
      { label: "A) Mother Goddess", value: "Mother Goddess" },
      { label: "B) Lakshmi", value: "Lakshmi" },
      { label: "C) Parvati", value: "Parvati" },
      { label: "D) Saraswati", value: "Saraswati" },
    ],
    correct: "Mother Goddess",
  },
  {
    id: 17,
    prompt: "The term 'Brahmavadinis' in Vedic literature refers to",
    options: [
      { label: "A) Women scholars", value: "Women scholars" },
      { label: "B) Temple dancers", value: "Temple dancers" },
      { label: "C) Female rulers", value: "Female rulers" },
      { label: "D) Healers", value: "Healers" },
    ],
    correct: "Women scholars",
  },
  {
    id: 18,
    prompt: "Where were the earliest evidence of iron in India found?",
    options: [
      { label: "A) Atranjikhera", value: "Atranjikhera" },
      { label: "B) Taxila", value: "Taxila" },
      { label: "C) Pataliputra", value: "Pataliputra" },
      { label: "D) Harappa", value: "Harappa" },
    ],
    correct: "Atranjikhera",
  },
  {
    id: 19,
    prompt: "Bimbisara was the ruler of which Mahajanapada?",
    options: [
      { label: "A) Magadha", value: "Magadha" },
      { label: "B) Avanti", value: "Avanti" },
      { label: "C) Kosala", value: "Kosala" },
      { label: "D) Vatsa", value: "Vatsa" },
    ],
    correct: "Magadha",
  },
  {
    id: 20,
    prompt: "Harshavardhana belonged to which dynasty?",
    options: [
      { label: "A) Maurya", value: "Maurya" },
      { label: "B) Pushyabhuti", value: "Pushyabhuti" },
      { label: "C) Gupta", value: "Gupta" },
      { label: "D) Satavahana", value: "Satavahana" },
    ],
    correct: "Pushyabhuti",
  },
  {
    id: 21,
    prompt: "Where is the Nataraja (dancing Shiva) bronze idol from?",
    options: [
      { label: "A) Mauryan period", value: "Mauryan period" },
      { label: "B) Gupta period", value: "Gupta period" },
      { label: "C) Medieval period", value: "Medieval period" },
      { label: "D) Chola period", value: "Chola period" },
    ],
    correct: "Chola period",
  },
  {
    id: 22,
    prompt: "Which Indus Valley Civilization site is located in present-day Haryana?",
    options: [
      { label: "A) Dholavira", value: "Dholavira" },
      { label: "B) Kalibangan", value: "Kalibangan" },
      { label: "C) Banawali", value: "Banawali" },
      { label: "D) Lothal", value: "Lothal" },
    ],
    correct: "Banawali",
  },
  {
    id: 23,
    prompt: "The Vedangas are best described as",
    options: [
      { label: "A) Supplementary Vedic texts", value: "Supplementary Vedic texts" },
      { label: "B) Books on medicine", value: "Books on medicine" },
      { label: "C) Law treatises", value: "Law treatises" },
      { label: "D) Heroic poetry", value: "Heroic poetry" },
    ],
    correct: "Supplementary Vedic texts",
  },
  {
    id: 24,
    prompt: "Who was called the 'Second Ashoka'?",
    options: [
      { label: "A) Harsha", value: "Harsha" },
      { label: "B) Kanishka", value: "Kanishka" },
      { label: "C) Samudragupta", value: "Samudragupta" },
      { label: "D) Vikramaditya", value: "Vikramaditya" },
    ],
    correct: "Kanishka",
  },
  {
    id: 25,
    prompt: "Which ancient text is a treatise on dramaturgy (theatre)?",
    options: [
      { label: "A) Natyashastra", value: "Natyashastra" },
      { label: "B) Arthashastra", value: "Arthashastra" },
      { label: "C) Manusmriti", value: "Manusmriti" },
      { label: "D) Rajatarangini", value: "Rajatarangini" },
    ],
    correct: "Natyashastra",
  },
  {
    id: 26,
    prompt: "The Sanchi Stupa was built by which Mauryan emperor?",
    options: [
      { label: "A) Chandragupta Maurya", value: "Chandragupta Maurya" },
      { label: "B) Bindusara", value: "Bindusara" },
      { label: "C) Ashoka", value: "Ashoka" },
      { label: "D) Brihadratha", value: "Brihadratha" },
    ],
    correct: "Ashoka",
  },
  {
    id: 27,
    prompt: "Who was the Greek ruler defeated by Chandragupta Maurya?",
    options: [
      { label: "A) Alexander", value: "Alexander" },
      { label: "B) Seleucus Nicator", value: "Seleucus Nicator" },
      { label: "C) Antiochus", value: "Antiochus" },
      { label: "D) Darius", value: "Darius" },
    ],
    correct: "Seleucus Nicator",
  },
  {
    id: 28,
    prompt: "What was the capital of the Satavahana dynasty?",
    options: [
      { label: "A) Pataliputra", value: "Pataliputra" },
      { label: "B) Amaravati", value: "Amaravati" },
      { label: "C) Pratishthana (Paithan)", value: "Pratishthana (Paithan)" },
      { label: "D) Kanchipuram", value: "Kanchipuram" },
    ],
    correct: "Pratishthana (Paithan)",
  },
  {
    id: 29,
    prompt: "Aryabhatta was associated with which period?",
    options: [
      { label: "A) Mauryan", value: "Mauryan" },
      { label: "B) Gupta", value: "Gupta" },
      { label: "C) Kushan", value: "Kushan" },
      { label: "D) Harsha", value: "Harsha" },
    ],
    correct: "Gupta",
  },
  {
    id: 30,
    prompt: "Who was the first Satavahana ruler?",
    options: [
      { label: "A) Gautamiputra Satakarni", value: "Gautamiputra Satakarni" },
      { label: "B) Simuka", value: "Simuka" },
      { label: "C) Yajna Sri Satakarni", value: "Yajna Sri Satakarni" },
      { label: "D) Nahapana", value: "Nahapana" },
    ],
    correct: "Simuka",
  }
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

export const MedievalHistoryQuiz: React.FC = () => {
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
    <div className="space-y-10 max-w-2xl mx-auto py-2">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center h-12 mb-8 bg-gradient-to-r from-blue-500 via-pink-400 to-yellow-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Test your Knowledge!
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
