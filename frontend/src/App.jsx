import React from 'react';
import './App.css';
import TrackItem from './components/TrackItem';
import heroImage from './assets/hero3.png'; 
import CountdownButton from './components/CountdownButton';

export default function App() {
  return (
    <div className="campaign-container">
      
      <header className="site-header">
        <h1>
          CAMP-AIGN <br />
          <span className="accent-text">2027</span>
        </h1>
      </header>

      <div className="intro-block">
        <p>
          Hi, I'm Tshedza, casually known as <span className="frank-highlight">"Frank"</span>. 
          I don't usually spend all day lingering around campus, but if I look familiar, 
          you've probably spotted me helping out at an <span className="frank-highlight">OW Cares</span> activation—or you just recognize 
          me by my constantly changing hair color. It's green right now, in case the 
          nickname didn't give it away.
        </p>
      </div>

      <div className="hero-section">
        <div className="hero-border"></div>
        <img 
          src={heroImage} 
          alt="Tshedza Mosehane" 
          className="hero-image"
        />
      </div>

      <div className="tracklist">
        <TrackItem 
          trackNumber="01"
          title="Outside Academia"
          subtitle="(Events, Culture)"
          details="Coursework covers the degree, but the hours between classes are what really make this place memorable. I want to help put on events, organize activations, and make everyday campus life worth sticking around for."
        />
        <TrackItem 
          trackNumber="02"
          title="Seen & Included"
          details="We're a small campus, which means nobody should feel invisible. Making people feel welcomed, looking out for one another, and creating a sense of community."
        />
        <TrackItem 
          trackNumber="03"
          title="Protecting the Good"
          details="We lowk don't need to rebuild everything. I'm focused on maintaining what’s already great about this campus, and hopefully adding to it."
        />
        <TrackItem 
          trackNumber="04"
          title="and Finally"
          details="67... lolls, sorry, I swaer I'm actually funny... I couldn't resist 😭. But seriously, I'm all about bringing good things to the campus community."
        />
      </div>

      <footer className="site-footer">
        <CountdownButton 
          targetDate="2026-09-21T00:00:00" 
          voteUrl="https://your-voting-link.com" 
        />

        <div className="candidate-meta">
          <h3 className="candidate-name">
            Tshedza <span className="frank-highlight">"Frank"</span><br />Mosehane
          </h3>
          <span className="student-id">SN: 251056</span>
        </div>
      </footer>
      
    </div>
  );
}