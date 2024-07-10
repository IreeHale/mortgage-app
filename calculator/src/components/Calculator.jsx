import { useState } from 'react';

const Calculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [years, setYears] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMortgage = () => {
    const principalAmount = parseFloat(principal);
    const interest = parseFloat(interestRate) / 100 / 12;
    const payments = parseFloat(years) * 12;

    const x = Math.pow(1 + interest, payments);
    const monthly = (principalAmount * x * interest) / (x - 1);
    if (isFinite(monthly)) {
      setMonthlyPayment(monthly.toFixed(2));
    } else {
      setMonthlyPayment('Invalid input');
    }
  };

  return (
    <div className="calculator">
      <header className="calculator-header">
        <h1>Mortgage Calculator</h1>
        <div className="calculator-form">
          <div>
            <label>Principal ($):</label>
            <input
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(e.target.value)}
            />
          </div>
          <div>
            <label>Annual Interest Rate (%):</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
          </div>
          <div>
            <label>Term (years):</label>
            <input
              type="number"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
          </div>
          <button onClick={calculateMortgage}>Calculate</button>
        </div>
        {monthlyPayment !== null && (
          <div className="result">
            <h2>Monthly Payment: ${monthlyPayment}</h2>
          </div>
        )}
      </header>
    </div>
  );
};

export default Calculator;
