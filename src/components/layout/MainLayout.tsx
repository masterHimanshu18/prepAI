// src/components/layout/MainLayout.tsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout: React.FC = () => {
  const location = useLocation();
  const isTestRunner = location.pathname.includes('/tests/runner');

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      {!isTestRunner && (
        <header>
          <Navbar />
        </header>
      )}

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>

      {!isTestRunner && <Footer />}
    </div>
  );
};

export default MainLayout;