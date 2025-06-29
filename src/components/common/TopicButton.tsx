// src/components/common/TopicButton.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface TopicButtonProps {
  topicName: string;
  onClick: () => void;
}

const TopicButton: React.FC<TopicButtonProps> = ({ topicName, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="w-full p-4 bg-blue-100 rounded-lg shadow text-left text-lg font-medium hover:bg-blue-200"
    >
      {topicName}
    </motion.button>
  );
};

export default TopicButton;
