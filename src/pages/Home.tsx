// src/pages/Home.tsx
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { examCategories, SubExam, ExamCategory } from '../data/examData';
import { Link } from 'react-router-dom';

// Category Menu Item Component
const CategoryMenuItem = ({ 
  category, 
  isActive, 
  onHover 
}: { 
  category: ExamCategory; 
  isActive: boolean; 
  onHover: () => void; 
}) => {
  return (
    <motion.div
      onMouseEnter={onHover}
      whileHover={{ x: 4 }}
      className={`flex items-center space-x-3 px-4 py-3 rounded-lg cursor-pointer
                 ${isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'}`}
    >
      <span className="text-2xl"><img src={category.icon} alt={`${category.name} logo`} style={{ width: '40px', height: '40px' }} /></span>
      <span className="font-medium">{category.name}</span>
      <ChevronRight className={`ml-auto h-5 w-5 ${isActive ? 'text-blue-600' : 'text-gray-400'}`} />
    </motion.div>
  );
};

// Sub-exam Card Component
const SubExamCard = ({ exam, index }: { exam: SubExam; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 8px 16px -2px rgb(0 0 0 / 0.1)"
      }}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all
                 flex items-center space-x-3 cursor-pointer"
    >
      <span className="text-2xl"><img src={exam.logo} alt={`${exam.name} logo`} style={{ width: '30px', height: '30px' }} /></span>
      <span className="font-medium text-gray-800">{exam.name}</span>
      <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
    </motion.div>
  );
};

// Mega Menu Component
const ExamMegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState<number>(examCategories[0].id);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex gap-6">
        {/* Left sidebar with categories */}
        <div className="w-64 flex flex-col space-y-2 border-r pr-4">
          {examCategories.map(category => (
            <CategoryMenuItem
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onHover={() => setActiveCategory(category.id)}
            />
          ))}
        </div>

        {/* Right panel with sub-exams grid */}
        <div className="flex-1">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            {examCategories
              .find(cat => cat.id === activeCategory)
              ?.subExams.map((exam, index) => (
              <Link
                to={`/roadmaps/${exam.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <SubExamCard key={exam.id} exam={exam} index={index} />
              </Link>
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const examSectionRef = useRef<HTMLDivElement>(null);

  const scrollToExams = () => {
    examSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Hero section start */}
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Clear Your Goals with a 
              <span className="text-blue-600"> Focused Roadmap</span>
            </motion.h1>

            <motion.p 
              className="text-2xl md:text-3xl text-slate-900 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              whileHover={{ color: "#2563EB" }}
            >
              <span className="text-white bg-slate-900 px-2 py-2 rounded-md">prepAI</span>
              &nbsp;Less Distraction, More Achievement
            </motion.p>

            {/* Button with Wave Effect */}
            <motion.div
              className="relative mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-lg opacity-100"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.75, 0.5, 0.75],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.button
                className="relative px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg 
                           transform transition-all duration-300 ease-in-out hover:bg-blue-700"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToExams}
              >
                <motion.span
                  className="inline-block"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  GET STARTED
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* Hero section End */}

      {/* Exam Categories Section */}
      <div 
        ref={examSectionRef}
        className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Choose Your Exam Category
          </motion.h2>
          
          <ExamMegaMenu />
        </motion.div>
      </div>
    </>
  );
};

export default Home;