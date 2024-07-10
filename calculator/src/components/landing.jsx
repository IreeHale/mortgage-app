
const LandingPage = ({ onNavigate }) => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to the Mortgage Calculator</h1>
        <p>Calculate your mortgage easily and quickly</p>
        <button onClick={onNavigate}>Go to Mortgage Calculator</button>
      </header>
    </div>
  );
};

export default LandingPage;
