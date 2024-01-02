import React, { useState, useEffect } from 'react';
import './Modal.css'; // Assuming you have CSS for modal styles
import './App.css';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ content, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className={`modal-overlay ${isVisible ? 'visible' : ''}`} onClick={handleOverlayClick}>
      <div className="modal">
        <div className="modal-content">
          <div className="close"><CloseIcon onClick={onClose} fontSize="large"/></div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

const FadeInModalButton = ({title, content}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <button className="resume-button" onClick={showModal}>{title}</button>
      {isModalVisible && <Modal content={content} onClose={hideModal} />}
    </div>
  );
};

export default FadeInModalButton;
