import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Share2, Map, ClipboardCheck, Lightbulb } from 'lucide-react';

interface ExamHeaderCardProps {
  examName: string;
  logo: string;
  activeTab: 'notifications' | 'roadmap' | 'tests';
  onTabChange: (tab: 'notifications' | 'roadmap' | 'tests') => void;
  onDownload?: () => void;
  onShare?: () => void;
}

const tabConfig = [
  {
    key: 'notifications',
    label: 'Notifications',
    icon: <Lightbulb size={18} className="mr-1" />,
    color: 'from-yellow-400 to-yellow-500',
  },
  {
    key: 'roadmap',
    label: 'Roadmap',
    icon: <Map size={18} className="mr-1" />,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    key: 'tests',
    label: 'Tests',
    icon: <ClipboardCheck size={18} className="mr-1" />,
    color: 'from-green-400 to-emerald-500',
  },
] as const;

const quickNotes = [
  {
    label: "Exam Level",
    value: "National",
    color: "bg-blue-100 text-blue-800",
  },
  {
    label: "Attempts Allowed",
    value: "Unlimited",
    color: "bg-green-100 text-green-800",
  },
  {
    label: "Next Session",
    value: "April 2025",
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    label: "Pattern",
    value: "MCQ + Descriptive",
    color: "bg-purple-100 text-purple-800",
  },
];

const ExamHeaderCard: React.FC<ExamHeaderCardProps> = ({
  examName,
  logo,
  activeTab,
  onTabChange,
  onDownload,
  onShare,
}) => {
  return (
    <motion.div
      className="relative w-full mx-auto bg-gradient-to-tr from-indigo-50 via-white to-yellow-50 shadow-xl rounded-2xl px-6 pt-7 pb-7 select-none"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top Row: Back link and actions */}
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/roadmaps"
          className="flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r from-slate-200 to-slate-300 text-gray-800 font-medium shadow hover:from-slate-300 hover:to-slate-400 transition"
        >
          <span className="mr-2 text-lg">&larr;</span> All Exams
        </Link>
        <div className="flex space-x-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.07, backgroundColor: "#fde047" }}
            onClick={onDownload}
            className="flex items-center px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-gray-900 font-medium shadow transition"
          >
            <Download size={18} className="mr-1" />
            Download
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.07, backgroundColor: "#fde047" }}
            onClick={onShare}
            className="flex items-center px-3 py-1.5 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-gray-900 font-medium shadow transition"
          >
            <Share2 size={18} className="mr-1" />
            Share
          </motion.button>
        </div>
      </div>

      {/* Center Row: Exam logo and title */}
      <div className="flex flex-col md:flex-row md:items-center mb-3 space-y-4 md:space-y-0 md:space-x-7">
        <motion.div
          className="flex-shrink-0 rounded-xl bg-gradient-to-br from-indigo-100 to-yellow-100 shadow-inner p-2"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <img
            src={logo}
            alt={`${examName} logo`}
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
            style={{ filter: "drop-shadow(0 2px 8px rgba(80,80,80,0.10))" }}
          />
        </motion.div>
        <div>
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight mb-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {examName}
          </motion.h1>
          <motion.p
            className="text-base md:text-xl text-slate-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
          >
            <span className="font-semibold text-indigo-700">Step-by-step guide</span> to clearing the <span className="font-semibold text-indigo-700">{examName}</span> exam in <span className="font-semibold text-yellow-600">2025</span>
          </motion.p>
        </div>
      </div>

      {/* Quick Notes Section */}
      <div className="mb-4 mt-2">
        <div className="flex flex-wrap gap-3">
          {quickNotes.map((note, idx) => (
            <span
              key={idx}
              className={`inline-flex items-center px-3 py-1.5 rounded-full font-semibold text-xs md:text-sm shadow-sm ${note.color} border border-opacity-40`}
              style={{ borderColor: 'rgba(0,0,0,0.08)' }}
            >
              <span className="uppercase tracking-wider mr-2">{note.label}:</span>
              <span className="font-bold">{note.value}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Creative Notes Section */}
      {/* <div className="mt-7 grid md:grid-cols-3 gap-5">
        <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 via-blue-100 to-white border-l-4 border-blue-400 shadow">
          <div className="flex items-center mb-2">
            <Lightbulb className="text-blue-500 mr-2" size={20} />
            <span className="font-bold text-blue-700">Tip:</span>
          </div>
          <span className="text-blue-800 font-medium">
            Read official notifications carefully. Dates, eligibility, and syllabus often change year to year!
          </span>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-green-50 via-green-100 to-white border-l-4 border-green-400 shadow">
          <div className="flex items-center mb-2">
            <ClipboardCheck className="text-green-500 mr-2" size={20} />
            <span className="font-bold text-green-700">Strategy:</span>
          </div>
          <span className="text-green-800 font-medium">
            Practice with previous year papers and analyze your weak areas for targeted improvement.
          </span>
        </div>
        <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-50 via-yellow-100 to-white border-l-4 border-yellow-400 shadow">
          <div className="flex items-center mb-2">
            <Map className="text-yellow-500 mr-2" size={20} />
            <span className="font-bold text-yellow-700">Roadmap:</span>
          </div>
          <span className="text-yellow-800 font-medium">
            Break your preparation into monthly milestones. Consistency beats cramming!
          </span>
        </div>
      </div> */}
      
      {/* Bottom Row: Tabs */}
      <div className="flex space-x-6 pt-4 border-b border-slate-200">
        {tabConfig.map(tab => {
          const isActive = activeTab === tab.key;
          return (
            <motion.button
              key={tab.key}
              type="button"
              onClick={() => onTabChange(tab.key)}
              className={`relative flex items-center px-4 py-2 focus:outline-none font-semibold transition
                ${isActive
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-indigo-700"
                }`}
              whileHover={{ scale: 1.06 }}
            >
              {tab.icon}
              <span>{tab.label}</span>
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    layoutId="exam-tab-underline"
                    className={`absolute left-0 right-0 -bottom-0.5 h-1 rounded-full bg-gradient-to-r ${tab.color}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.25 }}
                  />
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ExamHeaderCard;
