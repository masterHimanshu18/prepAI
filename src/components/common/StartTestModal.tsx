// File: src/components/common/StartTestModal.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface StartTestModalProps {
  title: string;
  instructions: string[];
  onConfirm: () => void;
  onCancel: () => void;
}

const StartTestModal: React.FC<StartTestModalProps> = ({ title, instructions, onConfirm, onCancel }) => {
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState(false);

  const handleReady = () => {
    if (!agreed) {
      setError(true);
    } else {
      onConfirm();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg p-8 max-w-lg w-full text-center space-y-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <ul className="text-left text-gray-700 list-disc space-y-2 pl-5">
          {instructions.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className="flex items-center space-x-2 justify-center">
          <input
            id="agreeModal"
            type="checkbox"
            checked={agreed}
            onChange={() => { setAgreed(!agreed); setError(false); }}
            className="h-5 w-5 text-blue-600"
          />
          <label htmlFor="agreeModal" className="text-gray-700">
            I understand the instructions
          </label>
        </div>
        {error && <span className="text-red-600 text-sm">Please tick 'I understand'</span>}
        <div className="flex justify-around mt-4">
          <button
            onClick={handleReady}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            I am ready
          </button>
          <button
            onClick={onCancel}
            className="px-5 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default StartTestModal;
