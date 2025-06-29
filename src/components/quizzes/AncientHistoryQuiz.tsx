// File: src/components/quizzes/AncientHistoryQuiz.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XOctagon, PartyPopper } from "lucide-react";

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
  // Sikhism
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
  // add other questions similarly...
];

export const AncientHistoryQuiz: React.FC = () => {
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [status, setStatus] = useState<Record<number, boolean>>({});

  const handleSelect = (id: number, value: string) => {
    if (status[id] !== undefined) return; // prevent re-answer
    setSelected((prev) => ({ ...prev, [id]: value }));
    const mcq = mcqs.find((q) => q.id === id);
    const correct = mcq?.correct === value;
    setStatus((prev) => ({ ...prev, [id]: correct }));
  };

  return (
    <div className="space-y-6">
      {mcqs.map((q) => {
        const sel = selected[q.id];
        const isCorrect = status[q.id];
        return (
          <div key={q.id} className="p-4 bg-white rounded-lg shadow space-y-4">
            <p className="font-semibold">{q.id}. {q.prompt}</p>
            <div className="grid grid-cols-1 gap-2">
              {q.options.map((opt) => {
                const isSelected = sel === opt.value;
                let bgClass = "bg-white";
                if (status[q.id] !== undefined) {
                  if (opt.value === q.correct) bgClass = "bg-green-100";
                  else if (isSelected && !isCorrect) bgClass = "bg-red-100";
                } else if (isSelected) bgClass = "bg-blue-50";
                return (
                  <motion.button
                    key={opt.value}
                    onClick={() => handleSelect(q.id, opt.value)}
                    disabled={status[q.id] !== undefined}
                    className={`${bgClass} border rounded text-left px-3 py-2 flex items-center justify-between hover:bg-blue-50 transition`}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{opt.label}</span>
                    {status[q.id] !== undefined && isSelected && (
                      isCorrect ? <CheckCircle2 className="text-green-600" /> : <XOctagon className="text-red-600" />
                    )}
                  </motion.button>
                );
              })}
            </div>
            {status[q.id] !== undefined && isCorrect && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center space-x-2 text-green-600"
              >
                <PartyPopper />
                <span>Correct!</span>
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
};
