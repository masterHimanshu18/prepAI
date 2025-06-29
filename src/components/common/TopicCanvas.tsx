// src/components/common/TopicCanvas.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface TopicCanvasProps {
  isOpen: boolean;
  onClose: () => void;
  topicName: string;
  topicDetails: string;
}

const TopicCanvas: React.FC<TopicCanvasProps> = ({
  isOpen,
  onClose,
  topicName,
  topicDetails,
}) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: isOpen ? 0 : '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-6 z-50"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{topicName}</h2>
        <button onClick={onClose}>
          <X size={24} />
        </button>
      </div>
      <p>{topicDetails}</p>
    </motion.div>
  );
};

export default TopicCanvas;
