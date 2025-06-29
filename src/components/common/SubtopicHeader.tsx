// File: src/components/common/SubtopicHeader.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Share2, BookOpen, ListChecks } from 'lucide-react';

interface SubtopicHeaderProps {
  topicName: string;
  description?: string;
  activeTab: 'content' | 'quizzes';
  onTabChange: (tab: 'content' | 'quizzes') => void;
  onDownload?: () => void;
  onShare?: () => void;
}

const tabItems = [
  {
    key: 'content',
    label: 'Content',
    icon: <BookOpen size={18} className="mr-1" />,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    key: 'quizzes',
    label: 'Quizzes',
    icon: <ListChecks size={18} className="mr-1" />,
    color: 'from-yellow-500 to-orange-400',
  },
] as const;

const SubtopicHeader: React.FC<SubtopicHeaderProps> = ({
  topicName,
  description = 'Prepared by top instructors and exam toppers',
  activeTab,
  onTabChange,
  onDownload,
  onShare,
}) => (
  <motion.div
    className="relative w-full mx-auto bg-gradient-to-tr from-indigo-50 via-white to-yellow-50 shadow-lg rounded-2xl px-6 pt-6 pb-4 select-none"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {/* Top Row: Back and actions */}
    <div className="flex justify-between items-center mb-4">
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

    {/* Center Row: Topic title and description */}
    <div className="mb-4">
      <motion.h1
        className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {topicName}
      </motion.h1>
      <motion.p
        className="mt-2 text-base md:text-lg text-slate-700"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        {description}
      </motion.p>
    </div>

    {/* Bottom Row: Tabs */}
    <div className="flex space-x-4 pt-2 border-b border-slate-200">
      {tabItems.map(tab => {
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
                  layoutId="tab-underline"
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

export default SubtopicHeader;
