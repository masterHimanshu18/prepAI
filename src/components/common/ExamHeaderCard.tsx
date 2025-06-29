// src/components/common/ExamHeaderCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Share2, Map, ClipboardCheck } from 'lucide-react';
import { Lightbulb } from 'lucide-react';

interface ExamHeaderCardProps {
  examName: string;
  logo : string;
  activeTab: 'notifications' | 'roadmap' | 'tests';
  onTabChange: (tab:'notifications' | 'roadmap' | 'tests') => void;
  onDownload?: () => void;
  onShare?: () => void;
}

const ExamHeaderCard: React.FC<ExamHeaderCardProps> = ({
  examName,
  logo,
  activeTab,
  onTabChange,
  onDownload,
  onShare,
}) => {
  return (
    <div className="bg-white w-full shadow rounded-lg px-6 pt-6 mx-auto select-none">
      {/* Top Row: Back link and action buttons */}
      <div className="flex justify-between items-center mb-6">
        <Link to="/roadmaps" className="text-gray-900 rounded py-1 px-2 bg-slate-300 hover:bg-gray-400">
          &larr; All Exams
        </Link>
        <div className="flex space-x-3">
          <button
            onClick={onDownload}
            className="flex items-center space-x-1 text-gray-900 rounded py-1 px-2  bg-yellow-400 hover:bg-yellow-500"
          >
            <Download size={16} />
            <span className="text-sm">Download</span>
          </button>
          <button
            onClick={onShare}
            className="flex items-center space-x-1 text-gray-900 rounded py-1 px-2 bg-yellow-400 hover:bg-yellow-500"
          >
            <Share2 size={16} />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>

      {/* Center Row: Exam title and subheading */}
      <div className="mb-4">
        <div className='mb-4 flex space-x-6'>
            <span><img src={logo} alt={`${examName} logo`} style={{ width: '70px', height: '70px' }} /></span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">{examName}</h1>
        </div>
        <p className="text-left text-xl md:text-2xl text-slate-600 mx-auto">
          Step by step guide to clearing the {examName} exam in 2025
        </p>
      </div>

      {/* Bottom Row: Tabs for Roadmap and Tests */}
      <div className="flex space-x-8 pt-6 border-b">
        <motion.button
          onClick={() => onTabChange('notifications')}
          whileHover={{ scale: 1.05 }}
          className={`flex items-center space-x-1 pb-2 ${
            activeTab === 'notifications'
              ? 'border-b-2 border-gray-900 text-gray-900'
              : 'text-gray-900'
          }`}
        >
          <Lightbulb size={16} />
          <span className="text-sm">Notifications</span>
        </motion.button>
        <motion.button
          onClick={() => onTabChange('roadmap')}
          whileHover={{ scale: 1.05 }}
          className={`flex items-center space-x-1 pb-2 ${
            activeTab === 'roadmap'
              ? 'border-b-2 border-gray-900 text-gray-900'
              : 'text-gray-900'
          }`}
        >
          <Map size={16} />
          <span className="text-sm">Roadmap</span>
        </motion.button>
        <motion.button
          onClick={() => onTabChange('tests')}
          whileHover={{ scale: 1.05 }}
          className={`flex items-center space-x-1 pb-2 ${
            activeTab === 'tests'
              ? 'border-b-2 border-gray-900 text-gray-900'
              : 'text-gray-900'
          }`}
        >
          <ClipboardCheck size={16} />
          <span className="text-sm">Tests</span>
        </motion.button>
      </div>
    </div>
  );
};

export default ExamHeaderCard;
