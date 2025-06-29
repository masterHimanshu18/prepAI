// src/pages/roadmaps/ExamRoadmap.tsx
import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

// Create a mapping from exam slug to a lazy-loaded component
const roadmapMapping: { [key: string]: React.LazyExoticComponent<React.FC> } = {
  'ssc-cpo': lazy(() => import('./sscCPO')),
  'ssc-cgl': lazy(() => import('./sscCGL')),
  'ssc-chsl': lazy(() => import('./sscCHSL')),
  // Add additional mappings as you create more exam pages
};

const ExamRoadmap = () => {
  const { examSlug } = useParams<{ examSlug: string }>();

  const RoadmapComponent = examSlug ? roadmapMapping[examSlug] : undefined;

  if (!RoadmapComponent) {
    return <div>Exam roadmap not found</div>;
  }

  return (
    <Suspense fallback={<div>Loading roadmap...</div>}>
      <RoadmapComponent />
    </Suspense>
  );
};

export default ExamRoadmap;
