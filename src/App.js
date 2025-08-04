import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="hero-section">
        <div className="logo">
          <img src="/logo.png" alt="Umara Group" className="logo-img" />
          <h1>UMARA<br />GROUP</h1>
        </div>
        <div className="hero-content">
          <h2>Transforming Culinary Experiences</h2>
          <p>From Events to Everyday Dining</p>
        </div>
        <nav className="main-nav">
          <button className="nav-btn">HOME</button>
          <button className="nav-btn">ABOUT US</button>
          <button className="nav-btn">CONTACT</button>
          <button className="nav-btn">NEWS EVENT</button>
          <button className="nav-btn">OUR PRODUCTION</button>
        </nav>
      </header>

      {/* Branding Overview Section */}
      <section className="branding-section">
        <h2>BRANDING OVERVIEW</h2>
        <div className="brands-grid">
          <div className="brand-card">
            <div className="brand-logo">
              <div className="logo-placeholder restaurant-logo">R</div>
            </div>
            <h3>RESTAURANT<br />& BAR</h3>
            <p>Come for The Food,<br />Stay for The Atmosphere</p>
            <button className="learn-more-btn">LEARN MORE</button>
          </div>
          
          <div className="brand-card">
            <div className="brand-logo">
              <div className="logo-placeholder ucr-logo">UCR</div>
            </div>
            <h3>PREMIUM<br />CATERING</h3>
            <p>The Best Banquet Service<br />for Your Unforgettable<br />Moments</p>
            <button className="learn-more-btn">LEARN MORE</button>
          </div>
          
          <div className="brand-card">
            <div className="brand-logo">
              <div className="logo-placeholder uk-logo">UK</div>
            </div>
            <h3>INDUSTRY<br />CATERING</h3>
            <p>Authentic Taste<br />for Your Hectic Life</p>
            <button className="learn-more-btn">LEARN MORE</button>
          </div>
          
          <div className="brand-card">
            <div className="brand-logo">
              <div className="logo-placeholder lbi-logo">LBI</div>
            </div>
            <h3>FOOD TECH<br />& PACKAGING</h3>
            <p>An Advanced food-tech<br />Industry in Indonesia</p>
            <button className="learn-more-btn">LEARN MORE</button>
          </div>
          
          <div className="brand-card">
            <div className="brand-logo">
              <div className="logo-placeholder ln-logo">LN</div>
            </div>
            <h3>FOOD TECH<br />& PACKAGING</h3>
            <p>Authentic Taste<br />for Your Hectic Life</p>
            <button className="learn-more-btn">LEARN MORE</button>
          </div>
        </div>
      </section>

      {/* Highlight Section */}
      <section className="highlight-section">
        <h2>HIGHLIGHT</h2>
        <div className="highlight-stats">
          <div className="stat">
            <h3>+10,000</h3>
            <p>Event</p>
          </div>
          <div className="stat">
            <h3>15 Years</h3>
            <p>Experiences</p>
          </div>
          <div className="stat">
            <h3>HACCP</h3>
            <p>Halal Certified</p>
          </div>
          <div className="stat">
            <h3>1</h3>
            <p>Central Kitchen</p>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="clients-section">
        <h2>OUR CLIENT</h2>
        <div className="clients-grid">
          <div className="client-logo">BANK INDONESIA</div>
          <div className="client-logo">PERTAMINA</div>
          <div className="client-logo">Garuda Indonesia</div>
          <div className="client-logo">gojek</div>
          <div className="client-logo">antam</div>
          <div className="client-logo">BUKOPIN</div>
          <div className="client-logo">mandiri</div>
          <div className="client-logo">KOMDIGI</div>
          <div className="client-logo">Telkomsel</div>
          <div className="client-logo">DEPKEU</div>
          <div className="client-logo">WORLD BANK</div>
          <div className="client-logo">Unilever</div>
        </div>
      </section>
    </div>
  );
}

export default App;
