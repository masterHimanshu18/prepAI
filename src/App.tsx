// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import TopicPage from './pages/subtopics/TopicPage';
import ExamRoadmap from './pages/roadmaps/ExamRoadmap';
import TestRunner from './pages/tests/TestRunner';

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
          {/* Fallback for unknown routes */}
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
