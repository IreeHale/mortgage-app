
const LandingPage = ({ onNavigate }) => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Calculate your mortgage with Mortigogo!</h1>
        <p>Find Out How Much You Can Afford</p>
        <button onClick={onNavigate}>Go to Mortgage Calculator</button>
      </header>
    </div>
  );
};

export default LandingPage;
