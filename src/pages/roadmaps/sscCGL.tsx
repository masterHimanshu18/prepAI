// src/pages/roadmaps/sscCGL.tsx

import React, { useState } from 'react';
import ExamHeaderCard from '../../components/common/ExamHeaderCard';
import { NotificationsList } from "../../components/NotificationsList";
import { sscCglNotifications } from "../../data/sscCglNotifications";
import { Roadmap } from "../../components/Roadmap";
import { allRoadmaps } from "../../data/allRoadmaps";
import { TestSeries } from "../../components/TestSeries";
import { sscCGLTestPatterns } from "../../data/sscCGLTestInfo";
import sscLogo from '../../assets/examsLogo/ssc_logo.png';


const SSC_CGL: React.FC = () => {
  const [activeTab, setActiveTab] = useState< 'notifications' | 'roadmap' | 'tests'>('roadmap');

 return (
  <div className="container mx-auto p-4 flex flex-col">
    <ExamHeaderCard
      examName="SSC CGL"
      logo={sscLogo}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onDownload={() => alert('Downloading PDF...')}
      onShare={() => alert('Share this roadmap...')}
    />

    <div className="mt-6 flex-1">
      {activeTab === 'notifications' ? (
          <NotificationsList
            title="SSC CGL Notifications"
            notifications = {sscCglNotifications}
          />
      ) : activeTab === 'roadmap' ? (
          <Roadmap patterns={allRoadmaps} />
      ) : (
        <div className="p-6 text-center text-gray-600">
          {/* your Test Series UI goes here */}
          <TestSeries patterns={sscCGLTestPatterns} />
        </div>
      )}
    </div>
  </div>
);
};

export default SSC_CGL;
