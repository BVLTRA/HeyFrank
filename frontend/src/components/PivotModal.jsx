import React, { useState, useEffect } from 'react';

export default function PivotModal({ purpleUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // An 800ms delay lets them register they are on the campaign site before the interruption hits
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('seen_purple_modal')) {
        setIsOpen(true);
        // Lock background scrolling while the modal is active
        document.body.style.overflow = 'hidden'; 
      }
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem('seen_purple_modal', 'true');
    // Restore the background scroll
    document.body.style.overflow = 'unset'; 
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="modal-box">
        <div className="modal-header">
          <button className="modal-close-btn" onClick={closeModal} aria-label="Close">
            [ CLOSE ]
          </button>
        </div>
        
        <h2 id="modal-title" className="modal-title">Some things are bigger than an election.</h2>
        
        <p className="modal-text">
          I'm still running, but right now, pitching a student council manifesto feels completely disconnected from reality. 
        </p>
        <p className="modal-text">
          In the wake of what happened on September 14th, I've put my ideas hold to launch a platform addressing the crisis we are actually facing. I'd rather you look at that today.
        </p>
        
        <a 
          href={purpleUrl} 
          className="modal-redirect-btn"
          target="_blank" 
          rel="noreferrer"
        >
          VISIT PURPLE AWARENESS
        </a>
      </div>
    </div>
  );
}