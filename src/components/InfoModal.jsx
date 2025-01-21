import React from 'react';

const InfoModal = ({ isVisible, onClose, content, onMouseEnter, onMouseLeave }) => {
  return (
    <div className={`modal ${isVisible ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div 
        className="modal-content box" 
        style={{ margin: '2rem' }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="content">
          {content}
        </div>
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={onClose}></button>
    </div>
  );
};

export default InfoModal;