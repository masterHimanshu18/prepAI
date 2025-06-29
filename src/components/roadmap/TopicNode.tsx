// src/components/roadmap/TopicNode.tsx
import React from 'react';
import { Handle, Position } from 'react-flow-renderer';

const TopicNode: React.FC<any> = ({ data }) => {
  const { topic } = data;
  const { title, status, category } = topic;
  
  let bgColor = 'bg-yellow-100 border-yellow-400';
  if (status === 'completed') bgColor = 'bg-green-100 border-green-400';
  if (category === 'intermediate') bgColor = 'bg-purple-100 border-purple-400';
  if (category === 'advanced') bgColor = 'bg-red-100 border-red-400';
  if (category === 'main') bgColor = 'bg-blue-500 border-blue-600 text-white';
  if (category === 'tier') bgColor = 'bg-gray-700 border-gray-800 text-white';
  
  return (
    <div className={`relative px-3 py-2 rounded-lg border-2 ${bgColor} cursor-pointer hover:shadow-lg transition-all duration-200 min-w-[140px] text-center font-medium text-sm`}>
      {status === 'completed' && (
        <div className="absolute -top-2 -left-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          ✓
        </div>
      )}
      {title}
      {/* include handles so edges hook up correctly */}
      <Handle type="target" position={Position.Left} style={{ background: '#555' }} />
      <Handle type="source" position={Position.Right} style={{ background: '#555' }} />
    </div>
  );
};

export default TopicNode;
