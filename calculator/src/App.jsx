import { useState } from 'react';
import LandingPage from './components/landing';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  const [showCalculator, setShowCalculator] = useState(false);

  const handleNavigate = () => {
    setShowCalculator(true);
  };

  return (
    <div className="App">
      {showCalculator ? (
        <Calculator />
      ) : (
        <LandingPage onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;
