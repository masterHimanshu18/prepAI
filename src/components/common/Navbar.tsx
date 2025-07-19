import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { ChevronDown } from 'lucide-react';
import myLogo from "../../assets/images/logo.png";
import { examCategories } from '../../data/examData';

// Keep your existing types and data structures for exam categories

interface ListItemProps {
  children: React.ReactNode;
  NavLink: string;
  hasDropdown?: boolean;
}

// Modified ListItem to handle dropdowns
const ListItem = ({ children, NavLink, hasDropdown }: ListItemProps) => {
  const [isHovered, setIsHovered] = useState(false);

  if (hasDropdown) {
    return (
      <li
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center cursor-pointer py-2 text-base font-medium text-body-color hover:text-blue-800 lg:ml-12 lg:inline-flex">
          {children}
          <ChevronDown className="ml-1 h-4 w-4" />
        </div>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-full z-50 w-[600px] bg-white rounded-lg shadow-lg"
              style={{ marginTop: '1px' }}
            >
              <div className="p-4">
                <ExamMegaMenu />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </li>
    );
  }

  return (
    <li>
      <Link
        to={NavLink}
        className="flex py-2 text-base font-medium text-body-color hover:text-blue-800 lg:ml-12 lg:inline-flex"
      >
        {children}
      </Link>
    </li>
  );
};

// Simplified version of ExamMegaMenu for navbar
const ExamMegaMenu = () => {
  const [activeCategory, setActiveCategory] = useState<number>(examCategories[0].id);
  
  return (
    <div className="flex gap-6">
      {/* Left sidebar with categories */}
      <div className="w-48 flex flex-col space-y-1 border-r pr-4">
        {examCategories.map(category => (
          <div
            key={category.id}
            onMouseEnter={() => setActiveCategory(category.id)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg cursor-pointer
                       ${activeCategory === category.id ? 'bg-blue-200 text-blue-800' : 'hover:bg-gray-50'}`}
          >
            <span className="text-xl"><img src={category.icon} alt={`${category.name} logo`} style={{ width: '40px', height: '40px' }} /></span>
            <span className="font-medium text-sm text-gray-800">{category.name}</span>
          </div>
        ))}
      </div>

      {/* Right panel with sub-exams grid */}
      <div className="flex-1">
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          className="grid grid-cols-2 gap-2"
        >
          {examCategories
            .find(cat => cat.id === activeCategory)
            ?.subExams.map((exam, _index) => (
              <Link
                key={exam.id}
                to={`/roadmaps/${exam.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-blue-200"
              >
                <span className="text-xl"><img src={exam.logo} alt={`${exam.name} logo`} style={{ width: '30px', height: '30px' }} /></span>
                <span className="font-medium text-sm text-gray-800">{exam.name}</span>
              </Link>
            ))}
        </motion.div>
      </div>
    </div>
  );
};


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full relative flex flex-wrap items-center justify-between px-0 border-b border-gray-200 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.9)]" style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
      {/* Rest of your existing navbar code remains the same */}
        <div className="w-20 max-w-full px-4">
          <Link to="/" className="block w-full py-2">
            <motion.div
              whileHover={{ scale: 0.9, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={myLogo} alt="logo" />
            </motion.div>
          </Link>
        </div>
          <div>
            <button
              onClick={() => setOpen(!open)}
              className={`absolute left-80 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden ${
                open && "navbarTogglerActive"
              }`}
            >
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-black"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-black"></span>
              <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-black"></span>
            </button>
            <nav
              className={`absolute left-4 top-full w-full max-w-[150px] z-50 rounded-lg bg-white px-6 py-5 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.9)] lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:bg-transparent ${
                !open && "hidden"
              }`}
              >
              <ul className="block lg:flex text-black">
                <ListItem NavLink="/">Home</ListItem>
                <ListItem NavLink="/roadmaps" hasDropdown={true}>Exams</ListItem>
                <ListItem NavLink="/tests">Test Series</ListItem>
                <ListItem NavLink="/abou">About</ListItem>
              </ul>
            </nav>
          </div>
          <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
            <Link
              to="/signin"
              className="px-5 py-2 text-base font-medium text-dark hover:text-blue-800"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="rounded-md bg-blue-700 px-5 py-2 text-base font-medium text-white hover:bg-blue-600"
            >
              Sign Up
            </Link>
          </div>
    </div>
  );
};

export default Navbar;