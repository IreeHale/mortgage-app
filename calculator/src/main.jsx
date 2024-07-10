import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import LandingPage from './App';

const MortgageCalculator = () => {
    const [principal, setPrincipal] = React.useState('');
    const [rate, setRate] = React.useState('');
    const [years, setYears] = React.useState('');
    const [monthlyPayment, setMonthlyPayment] = React.useState(null);

    const calculateMortgage = (event) => {
        event.preventDefault();

        const P = parseFloat(principal);
        const r = parseFloat(rate) / 100 / 12;
        const n = parseInt(years) * 12;

        if (!isNaN(P) && !isNaN(r) && !isNaN(n) && n > 0) {
            const M = (P * r) / (1 - Math.pow(1 + r, -n));
            setMonthlyPayment(M.toFixed(2));
        } else {
            setMonthlyPayment(null);
        }
    };

    return (
        <div className="app">
            <h2>Mortgage Calculator</h2>
            <form onSubmit={calculateMortgage}>
                <div>
                    <label htmlFor="principal">Loan Amount:</label>
                    <input
                        type="number"
                        id="principal"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="rate">Interest Rate (%):</label>
                    <input
                        type="number"
                        id="rate"
                        step="0.01"
                        value={rate}
                        onChange={(e) => setRate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="years">Loan Term (years):</label>
                    <input
                        type="number"
                        id="years"
                        value={years}
                        onChange={(e) => setYears(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Calculate</button>
            </form>
            {monthlyPayment !== null && (
                <div className="result">
                    <h3>Monthly Payment: ${monthlyPayment}</h3>
                </div>
            )}
        </div>
    );
};

ReactDOM.render(
    <>
        <LandingPage />
        <MortgageCalculator />
    </>,
    document.getElementById('root')
);

