import React from 'react';
import type { Topic } from '../../pages/roadmaps/sscCGL';

interface Props {
  topic: Topic;
  onClose: () => void;
  onStatusChange: (status: Topic['status']) => void;
}

const TopicModal: React.FC<Props> = ({ topic, onClose, onStatusChange }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="bg-white p-6 rounded w-full max-w-md" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-2">{topic.title}</h2>
        <p className="mb-4">{topic.summary}</p>
        <ul className="mb-4 list-disc pl-5">
          {topic.links.map(l => (
            <li key={l.url}>
              <a href={l.url} target="_blank" className="text-blue-600 hover:underline">{l.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex space-x-2 mb-4">
          <button
            className={`px-4 py-2 rounded ${topic.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'}`}
            onClick={() => onStatusChange('completed')}
          >
            Completed
          </button>
          <button
            className={`px-4 py-2 rounded ${topic.status === 'pending' ? 'bg-red-500' : 'bg-gray-200'}`}
            onClick={() => onStatusChange('pending')}
          >
            Pending
          </button>
        </div>
        <button className="mt-2 px-4 py-2 bg-slate-300 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default TopicModal;
