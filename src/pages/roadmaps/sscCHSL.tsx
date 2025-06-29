// src/pages/roadmaps/sscCHSL.tsx
import { useState } from 'react';
import ExamHeaderCard from '../../components/common/ExamHeaderCard';
import sscLogo from '../../assets/examsLogo/ssc_logo.png';

const SSC_CHSL = () => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'tests'>('roadmap');

  const handleTabChange = (tab: 'roadmap' | 'tests') => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4">
        
      <ExamHeaderCard
              examName="SSC CHSL"
              logo={sscLogo}
              activeTab={activeTab}
              onTabChange={handleTabChange}
              onDownload={() => alert('Downloading PDF...')}
              onShare={() => alert('Share this roadmap...')}      />

      {/* Conditional rendering of content below the header based on the active tab */}
      <div className="mt-6">
        {activeTab === 'roadmap' ? (
          <div>Roadmap Content for SSC CHSL</div>
        ) : (
          <div>Test Series Content for SSC CHSL</div>
        )}
      </div>
    </div>
  );
};

export default SSC_CHSL;
