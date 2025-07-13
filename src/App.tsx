// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import TopicPage from './pages/subtopics/TopicPage';
import ExamRoadmap from './pages/roadmaps/ExamRoadmap';
import TestRunner from './pages/tests/TestRunner';
import TestAnalysis from './pages/tests/TestAnalysis';
import NotFound from './pages/pageNotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Add your routes here */}
          {/* Subtopic content/quizzes route */}  
          <Route path="topic/:chapter" element={<TopicPage />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<div>About Page</div>} />
          {/* Dynamic exam roadmap route */}
          <Route path="roadmaps/:examSlug" element={<ExamRoadmap />} />
          {/* Test runner page */}
          <Route path="/tests/runner" element={<TestRunner />} />
          {/* Test analysis page */}
          <Route path="/tests/analysis" element={<TestAnalysis />} />
          {/* Add more routes as needed */}
        </Route>
        {/* Fallback for unknown routes - OUTSIDE MainLayout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
