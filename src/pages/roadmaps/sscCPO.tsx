// src/pages/roadmaps/sscCPO.tsx
import { useState } from 'react';
import ExamHeaderCard from '../../components/common/ExamHeaderCard';
import sscLogo from '../../assets/examsLogo/ssc_logo.png';

const SSC_CPO = () => {
  const [activeTab, setActiveTab] = useState<'notifications' | 'roadmap' | 'tests'>('roadmap');

  const handleTabChange = (tab: 'notifications' | 'roadmap' | 'tests') => {
    setActiveTab(tab);
  };
  

  return (
    <div className="container mx-auto p-4">
      <ExamHeaderCard
              examName="SSC CPO"
              logo={sscLogo}
              activeTab={activeTab}
              onTabChange={handleTabChange}
              onDownload={() => alert('Downloading PDF...')}
              onShare={() => alert('Share this roadmap...')}      />

      {/* Conditional rendering of content below the header based on the active tab */}
      <div className="mt-6">
        {activeTab === 'roadmap' ? (
          <div>Roadmap Content for SSC CPO</div>
        ) : activeTab === 'tests' ? (
          <div>Test Series Content for SSC CPO</div>
        ) : (
          <div>Notifications Content for SSC CPO</div>
        )}
      </div>
    </div>
  );
};

export default SSC_CPO;
