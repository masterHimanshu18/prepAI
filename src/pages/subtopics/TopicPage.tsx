// File: src/pages/subtopics/TopicPage.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SubtopicHeader from '../../components/common/SubtopicHeader';
import { AncientHistoryContent } from '../../components/content/AncientHistoryContent';
import { AncientHistoryQuiz } from '../../components/quizzes/AncientHistoryQuiz';
import { MedievalHistoryContent } from '../../components/content/MedievalHistoryContent';
import { MedievalHistoryQuiz } from '../../components/quizzes/MedievalHistoryQuiz';
import { ModernHistoryQuiz } from '../../components/quizzes/ModernHistoryQuiz';
import { ModernHistoryContent } from '../../components/content/ModernHistoryContent';
import { PolityContent } from '../../components/content/PolityContent';

const TopicPage: React.FC = () => {
  const { chapter } = useParams<{ chapter: string }>();
  const decodedChapter = chapter ? decodeURIComponent(chapter) : 'Topic';
  const [activeTab, setActiveTab] = useState<'content' | 'quizzes'>('content');

  return (
    <div className="container mx-auto p-4 flex flex-col space-y-6">
      {/* Header for this subtopic */}
      <SubtopicHeader
        topicName={decodedChapter}
        description="Prepared by top instructors and exam toppers"
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onDownload={() => alert(`Downloading resources for ${decodedChapter}...`)}
        onShare={() => alert(`Sharing ${decodedChapter}...`)}
      />

      {/* Main Content Area */}
      <div className="bg-white rounded-lg shadow p-6">
        {activeTab === 'content' ? (
          <div className="text-gray-700">
            {decodedChapter === 'Ancient History' ? (
              <AncientHistoryContent />
            ) : decodedChapter === 'Medieval History' ? (
              <MedievalHistoryContent />
            ) : decodedChapter === 'Modern Indian History' ? (
              <ModernHistoryContent />
            ) : decodedChapter === 'Polity' ? (
              <PolityContent />
            ) : (
              <div>
                Content will be here for <strong>{decodedChapter}</strong>.
              </div>
            )}
          </div>
        ) : (
          <div className="text-gray-700">
            {decodedChapter === 'Ancient History' ? (
              <AncientHistoryQuiz />
            ) : decodedChapter === 'Medieval History' ? (
              <MedievalHistoryQuiz />
            ) : decodedChapter === 'Modern Indian History' ? (
              <ModernHistoryQuiz />
            ) : decodedChapter === 'Polity' ? (
              <PolityQuiz />
            ) : (
              <div>
                Quizzes will be here for <strong>{decodedChapter}</strong>.
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopicPage;
