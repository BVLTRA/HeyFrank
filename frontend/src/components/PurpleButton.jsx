import React, { useState, useEffect } from 'react';

export default function PurpleButton({ targetDate, voteUrl = "#" }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isLive: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isLive: false,
      });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const pad = (num) => String(num).padStart(2, '0');

  return (
    <div className="vote-action-container">
      {timeLeft.isLive ? (
        <a href={voteUrl} className="vote-btn active" target="_blank" rel="noreferrer" style={{ backgroundColor: '#800080', color: '#fff' }}>
          View "Purple"
        </a>
      ) : (
        <button className="vote-btn disabled" disabled>
          VOTING OPENS SOON
        </button>
      )}

      <div className="countdown-display">
        
      </div>
    </div>
  );
}