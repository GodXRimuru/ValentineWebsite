import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WelcomePage } from './pages/WelcomePage';
import { GamePage } from './pages/GamePage';
import { PasswordPage } from './pages/PasswordPage';
import { ReasonsPage } from './pages/ReasonsPage';
import { LetterPage } from './pages/LetterPage';
import './App.css';

type Page = 'welcome' | 'game' | 'password' | 'reasons' | 'letter';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('welcome');

  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return <WelcomePage onNext={() => setCurrentPage('game')} />;
      case 'game':
        return <GamePage onNext={() => setCurrentPage('password')} />;
      case 'password':
        return <PasswordPage onNext={() => setCurrentPage('reasons')} />;
      case 'reasons':
        return <ReasonsPage onNext={() => setCurrentPage('letter')} />;
      case 'letter':
        return <LetterPage />;
      default:
        return <WelcomePage onNext={() => setCurrentPage('game')} />;
    }
  };

  return (
    <div className="app-container">
      {/* Animated background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Page content with AnimatePresence */}
      <AnimatePresence mode="wait">
        <div key={currentPage}>{renderPage()}</div>
      </AnimatePresence>
    </div>
  );
}

export default App;
